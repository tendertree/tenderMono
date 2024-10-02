import { CategoryList } from "../item/item";
import { DropDownNavItemProps } from "./navItem";
import * as React from "react";

export interface DropDownBarProps {
    list: CategoryList;
    NavItemComponent: React.ComponentType<DropDownNavItemProps>; // Accepting a component as prop
}

