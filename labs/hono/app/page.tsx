import SignIn from "@src/components/SignIn";
import MemosPage from "@src/memo/MemoPage";
import getUserSession from "@src/server/getUserSession";
import Image from "next/image";
import { redirect } from "next/navigation";
interface User {
    id: string;
    email: string;
}

export default async function Home() {
    let user: User | null = null;
    const { data: { session } } = await getUserSession();

    if (session?.user) {
        // 타입 단언(type assertion)을 사용하여 session.user가 User 타입임을 알립니다
        user = session.user as User;
    } else {
        console.log("session or user info is none");
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex flex-col">
                {!user && <SignIn />}
                {user && (
                    <div>
                        <p>Welcome, {user.email}</p>
                        {/* user 객체의 다른 속성들을 사용할 수 있습니다 */}
                    </div>
                )}
                <MemosPage />
            </div>
        </main>
    );
}
