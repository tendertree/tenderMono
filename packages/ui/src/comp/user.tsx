import { Avatar, AvatarFallback, AvatarImage } from "@ui/shadcn/avatar";

export function User() {
    return (
        <div className="text-xl bg-blue-100">This is simple user component.. did you see?.. my color should be blue..!
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

        </div>

    )
}
