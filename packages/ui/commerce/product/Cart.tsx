'use client'

import { ShoppingCart } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@ui/base/shadcn/sheet'
import { formatPrice } from '../utils/price'
import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@ui/base/shadcn/separator'
import { buttonVariants } from '@ui/base/shadcn/button'
import { ScrollArea } from "@ui/base/shadcn/scroll-area"
import { CartImpl, CreateCart } from '@entity/commerce/product/cart'
import CartItem from './CartItem'
import {CartImplZustand } from './CartImplZustand'
import { CartImplLocal } from './CartImplLocal'
import { useEffect, useMemo, useState } from 'react'
import { ExampleProductCategoryList } from "@entity/commerce/product/category"

export default function Cart() {

  const dummyProducts= [
      { id: '1', name: 'Product 1', price: '10.99' },
      { id: '2', name: 'Product 2', price: '12.99' },
      { id: '3', name: 'Product 3', price: '15.99' }
    ];



    const cart = CreateCart(CartImplLocal(dummyProducts));
    const items = cart.getItems();
    const itemCount = items.length;
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cartTotal = items.reduce(
        (total, { product }) => total + product.price,
        0
    );

    const fee = 1;

    return (
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2'>
                <ShoppingCart
                    aria-hidden='true'
                    className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                />
                <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                    {isMounted ? itemCount : 0}
                </span>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg bg-cream'>
                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>Cart ({itemCount})</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className='flex w-full flex-col pr-6'>
                            <ScrollArea>
                                {items.map(({ product }) => (
                                    <CartItem
                                        category={ExampleProductCategoryList}
                                        product={product}
                                        key={product.id}
                                    />

                                ))}
                            </ScrollArea>
                        </div>
                        <div className='space-y-4 pr-6'>
                            <Separator />
                            <div className='space-y-1.5 text-sm'>
                                <div className='flex'>
                                    <span className='flex-1'>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Transaction Fee</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span>{formatPrice(cartTotal + fee)}</span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link
                                        href='/cart'
                                        className={buttonVariants({
                                            className: 'w-full',
                                        })}
                                    >
                                        Continue to Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div
                            aria-hidden='true'
                            className='relative mb-4 h-60 w-60 text-muted-foreground'
                        >
                            <Image
                                src='/hippo-empty-cart.png'
                                fill
                                alt='empty shopping cart hippo'
                            />
                        </div>
                        <div className='text-xl font-semibold'>
                            Your cart is empty
                        </div>
                        <SheetTrigger asChild>
                            <Link
                                href='/products'
                                className={buttonVariants({
                                    variant: 'link',
                                    size: 'sm',
                                    className: 'text-sm text-muted-foreground',
                                })}
                            >
                                Add items to your cart to checkout
                            </Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}

