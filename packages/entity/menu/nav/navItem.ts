import {Category, CategoryList} from  "../item/item"
import  * as React from "react"
export interface NavItemProps {
    name: string,
    path: string
}

export interface DropDownNavItemProps {
    category: Category
    handleOpen: () => void
    close: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

export interface DropDownBarProps {
    list: CategoryList;
    NavItemComponent: React.ComponentType<DropDownNavItemProps>; // Accepting a component as prop
}
