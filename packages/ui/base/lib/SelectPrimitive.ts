import * as React from 'react';
import { DismissableLayer } from '@radix-ui/react-dismissable-layer';
import { FocusScope } from '@radix-ui/react-focus-scope';
import * as PopperPrimitive from '@radix-ui/react-popper';
import { Portal as Portal$1 } from '@radix-ui/react-portal';
import { Primitive } from '@radix-ui/react-primitive';

type Scope<C = any> = {
    [scopeName: string]: React.Context<C>[];
} | undefined;

type ScopeHook = (scope: Scope) => {
    [__scopeProp: string]: Scope;
};

interface CreateScope {
    scopeName: string;
    (): ScopeHook;
}

type Direction = 'ltr' | 'rtl';
declare const createSelectScope: CreateScope;

interface SelectProps {
    children?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    onValueChange?(value: string): void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    dir?: Direction;
    name?: string;
    autoComplete?: string;
    disabled?: boolean;
    required?: boolean;
}

declare const Select: React.FC<SelectProps>;

// Primitive button props
type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.button>;

interface SelectTriggerProps extends PrimitiveButtonProps {
    className?: string;  // Add className to SelectTriggerProps
}

// Forward ref for SelectTrigger
declare const SelectTrigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;

// Primitive span props
type PrimitiveSpanProps = React.ComponentPropsWithoutRef<typeof Primitive.span>;

interface SelectValueProps extends Omit<PrimitiveSpanProps, 'placeholder'> {
    placeholder?: React.ReactNode;
}

declare const SelectValue: React.ForwardRefExoticComponent<SelectValueProps & React.RefAttributes<HTMLSpanElement>>;

interface SelectIconProps extends PrimitiveSpanProps {
}

declare const SelectIcon: React.ForwardRefExoticComponent<SelectIconProps & React.RefAttributes<HTMLSpanElement>>;

type PortalProps = React.ComponentPropsWithoutRef<typeof Portal$1>;

interface SelectPortalProps {
    children?: React.ReactNode;
    container?: PortalProps['container'];
}

declare const SelectPortal: React.FC<SelectPortalProps>;

interface SelectContentProps extends SelectContentImplProps {
}

declare const SelectContent: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;

type DismissableLayerProps = React.ComponentPropsWithoutRef<typeof DismissableLayer>;
type FocusScopeProps = React.ComponentPropsWithoutRef<typeof FocusScope>;

type SelectPopperPrivateProps = {
    onPlaced?: PopperContentProps['onPlaced'];
};

interface SelectContentImplProps extends Omit<SelectPopperPositionProps, keyof SelectPopperPrivateProps>, Omit<SelectItemAlignedPositionProps, keyof SelectPopperPrivateProps> {
    onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
    onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
    onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
    position?: 'item-aligned' | 'popper';
}

interface SelectItemAlignedPositionProps extends PrimitiveDivProps, SelectPopperPrivateProps {
}

type PopperContentProps = React.ComponentPropsWithoutRef<typeof PopperPrimitive.Content>;

interface SelectPopperPositionProps extends PopperContentProps, SelectPopperPrivateProps {
}

type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;

interface SelectViewportProps extends PrimitiveDivProps {
    nonce?: string;
}

declare const SelectViewport: React.ForwardRefExoticComponent<SelectViewportProps & React.RefAttributes<HTMLDivElement>>;

interface SelectGroupProps extends PrimitiveDivProps {
}

declare const SelectGroup: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;

interface SelectLabelProps extends PrimitiveDivProps {
}

declare const SelectLabel: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;

interface SelectItemProps extends PrimitiveDivProps {
    value: string;
    disabled?: boolean;
    textValue?: string;
}

declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;

interface SelectItemTextProps extends PrimitiveSpanProps {
}

declare const SelectItemText: React.ForwardRefExoticComponent<SelectItemTextProps & React.RefAttributes<HTMLSpanElement>>;

interface SelectItemIndicatorProps extends PrimitiveSpanProps {
}

declare const SelectItemIndicator: React.ForwardRefExoticComponent<SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

interface SelectScrollUpButtonProps extends Omit<SelectScrollButtonImplProps, 'onAutoScroll'> {
}

declare const SelectScrollUpButton: React.ForwardRefExoticComponent<SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;

interface SelectScrollDownButtonProps extends Omit<SelectScrollButtonImplProps, 'onAutoScroll'> {
}

declare const SelectScrollDownButton: React.ForwardRefExoticComponent<SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;

interface SelectScrollButtonImplProps extends PrimitiveDivProps {
    onAutoScroll(): void;
}

interface SelectSeparatorProps extends PrimitiveDivProps {
}

declare const SelectSeparator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;

type PopperArrowProps = React.ComponentPropsWithoutRef<typeof PopperPrimitive.Arrow>;

interface SelectArrowProps extends PopperArrowProps {
}

declare const SelectArrow: React.ForwardRefExoticComponent<SelectArrowProps & React.RefAttributes<SVGSVGElement>>;

declare const Root: React.FC<SelectProps>;
declare const Trigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const Value: React.ForwardRefExoticComponent<SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const Icon: React.ForwardRefExoticComponent<SelectIconProps & React.RefAttributes<HTMLSpanElement>>;
declare const Portal: React.FC<SelectPortalProps>;
declare const Content: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
declare const Viewport: React.ForwardRefExoticComponent<SelectViewportProps & React.RefAttributes<HTMLDivElement>>;
declare const Group: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Label: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;
declare const ItemText: React.ForwardRefExoticComponent<SelectItemTextProps & React.RefAttributes<HTMLSpanElement>>;
declare const ItemIndicator: React.ForwardRefExoticComponent<SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
declare const ScrollUpButton: React.ForwardRefExoticComponent<SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const ScrollDownButton: React.ForwardRefExoticComponent<SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;
declare const Separator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;
declare const Arrow: React.ForwardRefExoticComponent<SelectArrowProps & React.RefAttributes<SVGSVGElement>>;

export {
    Arrow,
    Content,
    Group,
    Icon,
    Item,
    ItemIndicator,
    ItemText,
    Label,
    Portal,
    Root,
    ScrollDownButton,
    ScrollUpButton,
    Select,
    SelectArrow,
    type SelectArrowProps,
    SelectContent,
    type SelectContentProps,
    SelectGroup,
    type SelectGroupProps,
    SelectIcon,
    type SelectIconProps,
    SelectItem,
    SelectItemIndicator,
    type SelectItemIndicatorProps,
    type SelectItemProps,
    SelectItemText,
    type SelectItemTextProps,
    SelectLabel,
    type SelectLabelProps,
    SelectPortal,
    type SelectPortalProps,
    type SelectProps,
    SelectScrollDownButton,
    type SelectScrollDownButtonProps,
    SelectScrollUpButton,
    type SelectScrollUpButtonProps,
    SelectSeparator,
    type SelectSeparatorProps,
    SelectTrigger,
    type SelectTriggerProps,
    SelectValue,
    type SelectValueProps,
    SelectViewport,
    type SelectViewportProps,
    Separator,
    Trigger,
    Value,
    Viewport,
    createSelectScope
};
