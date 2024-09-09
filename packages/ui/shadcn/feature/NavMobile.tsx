import { Sheet, SheetContent, SheetTrigger } from 'base/sheet'
import { Menu } from 'lucide-react'
import React from 'react'

export default function NavMobile() {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex justify-center items-center">
                    <Menu className="text-[32px] text-light" />
                </div>
            </SheetTrigger>
            <SheetContent className="flex  flex-col">
                <div>logo</div>
            </SheetContent>
        </Sheet>
    )
}
