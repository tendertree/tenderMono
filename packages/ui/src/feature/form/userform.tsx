import { FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from "@ui/shadcn/form";
import { Input } from "@ui/shadcn/input";
import { useForm } from "react-hook-form";


export function UserForm() {
    return (
        <FormField
            name="username"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />

    )
}

