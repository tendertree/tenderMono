import Signin from "@src/components/Signin";
import MemosPage from "@src/memo/MemoPage";
import Image from "next/image";

export default function Home() {
    const supabaseUrl = process.env.SUPABASE_URL || "";
    const supabaseKey = process.env.SUPABASE_ROLE_KEY || "";

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex flex-col">
                <MemosPage />
                <Signin />
            </div>
        </main>
    );
}
