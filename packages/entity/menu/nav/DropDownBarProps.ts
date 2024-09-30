import { CategoryList } from "../item/item";
import { DropDownNavItemProps } from "./navItem";


export interface DropDownBarProps {
    list: CategoryList;
    NavItemComponent: React.ComponentType<DropDownNavItemProps>; // Accepting a component as prop
}

