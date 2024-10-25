import { useState } from "react";
import { PopoverTrigger, Popover, PopoverContent } from "../shadcn/popover";
import { Command, CommandGroup, CommandInput, CommandItem, CommandEmpty } from "../shadcn/command";
import { useParams, useRouter } from "next/navigation";
import { Button } from "../shadcn/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Data {
    name: string;
    id: string;
}

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface SwitcherProps extends PopoverTriggerProps {
    items: Data[];
}

export function Switcher({ items }: SwitcherProps) {
    const params = useParams();
    const router = useRouter();
    const list = items.map((item) => ({
        label: item.name,
        value: item.id,
    }));

    const currentItem = list.find((item) => item.value === params.id);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(currentItem?.value || "");

    const selected = (store: { value: string; label: string }) => {
        setOpen(false);
        router.push(`/switcher/${store.value}`);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                    {currentItem?.label || "Select framework..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <Command>
                    <CommandInput placeholder="Search framework" />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {list.map((data) => (
                            <CommandItem
                                key={data.value}
                                value={data.value}
                                onSelect={(selectedValue) => {
                                    setValue(selectedValue);
                                    selected({ value: selectedValue, label: data.label });
                                }}
                            >
                                <Check className={cn("mr-2 h-4 w-4", value === data.value ? "opacity-100" : "opacity-0")} />
                                {data.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
