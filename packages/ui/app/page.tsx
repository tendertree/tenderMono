import Profile from "@repo/ui/features/user/profile";
import { Badge } from "@repo/ui/shadcn/badge";

export default function Page() {
    return (
        <div>
            <h1>Hello, Next.js!
                Did you see the real?
            </h1>
            <Badge>This</Badge>
            <Profile></Profile>
        </div>
    )
}
