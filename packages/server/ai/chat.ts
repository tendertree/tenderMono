import path from "path";

const { spawn } = require("child_process");
interface Imessages {
    role: 'system' | 'assistant' | 'user';
    content: string;
}
const getAnswer = ({ messages }: { messages: Imessages[] }) => {
    const messageString = messages.map((m) => {
        if (m.role === "system") {
            return `<s>[INST] <<SYS>>\n${m.content}\n<</SYS>>\n\n`;
        }
        if (m.role === "assistant") {
            return `${m.content}</s><s>[INST] `;
        }

        return `${m.content} [/INST] `;
    });

    return spawn(
        `./main`,
        [
            "-t",
            "8",
            "-ngl",
            "1",
            "-m",
            "llama-2-13b-chat.ggmlv3.q4_0.bin",
            "--color",
            "-c",
            "2048",
            "--temp",
            "0.7",
            "--repeat_penalty",
            "1.1",
            "-n",
            "-1",
            "-p",
            messageString,
        ],
        {
            cwd: path.join(process.cwd(), "llama"),
        }
    );
};

const getAnswerStream = ({ messages }: { messages: Imessages[] }) => {
    const encoder = new TextEncoder();
    return new ReadableStream({
        start(controller) {
            const llama = getAnswer({ messages });

            let start = false;
            llama.stdout.on("data", (data: string) => {
                if (data.includes("[/INST]")) {
                    start = true;
                    return;
                }
                if (!start) return;

                const chunk = encoder.encode(String(data));
                controller.enqueue(chunk);
            });

            llama.stderr.on("data", (data: string) => {
                console.log(`stderr: ${data}`);
            });

            llama.on("close", () => {
                controller.close();
            });
        },
    });
};

export async function POST(request) {
    const { messages } = await request.json();

    if (!messages) {
        return new Response("No message in the request", { status: 400 });
    }

    return new Response(getAnswerStream({ messages }));
}
