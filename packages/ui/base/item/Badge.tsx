"use client";
import { Button } from "../shadcn/button";
import { BadgeProps, Badge } from "../shadcn/badge";
import { Alert, AlertTitle, AlertDescription } from "../shadcn/alert"
import { Server,Copy } from "lucide-react"
interface ApiAlertProps {
    title: string;
    description: string;
    variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "Public",
    admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
    public: "secondary",
    admin: "destructive",
};

export const ApiAlert = ({
    title,
    description,
    variant = "public",
}: ApiAlertProps) => {
	const onCopy = () => {
		navigator.clipboard.writeText(description);
		//add toast call
	}
    return (
        <Alert>
            <Server className="h-4 w-4" />
            <AlertTitle className="flex item-center gap-x-2">{title}
                <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
            </AlertTitle>
            <AlertDescription>
                <code className="relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono justify-between">
                    {description}
                </code>
				<Button variant={"outline"} size={"icon"} onClick={onCopy}>
					<Copy className="w-4 h-4"/>
				</Button>
            </AlertDescription>
        </Alert>
    );
};

