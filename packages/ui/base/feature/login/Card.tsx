import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../base/card"
import { Label } from "../../shadcn/label"
import { Input } from "../../shadcn/input"
import { Button } from "../../shadcn/button"

export default function LoginForm() {
    return (
        <Card className="mx-auto max-w-sm ">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Login</CardTitle>
                <CardDescription>Enter your email and password to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
