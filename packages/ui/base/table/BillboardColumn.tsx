
"use client";
import { Button } from "../shadcn/button"
import {
    ColumnDef,
} from "@tanstack/react-table";
import { ArrowDown } from "lucide-react"

import { CellImage } from "./CellImage";
export type BillboardColumns = {
    id: string;
    label: string;
    imageUrl: string;
    createdAt: string;
}
export const columns: ColumnDef<BillboardColumns>[] = [
    {
        accessorKey: "imageUrl",
        header: "Image",
        cell: ({ row }) => {
            const { imageUrl } = row.original
            return (
                <CellImage imageUrl={imageUrl} />
            )
        }

    },
    {
        accessorKey: "label",
        header: ({ column }) => {
            <Button onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
                variant="ghost" size="sm">
            Name
            <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
        }
    },
    {
        accessorKey: "createdAt",
        header: "Date",
    },
];


