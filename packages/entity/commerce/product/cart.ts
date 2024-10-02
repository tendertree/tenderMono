"use client"
import {Product} from "./product"
import { useState, useEffect, useCallback, useMemo } from 'react';
export interface CartItem  {
  product: Product;
};


export interface CartImpl {
  getItems: () => CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

export function CreateCart(CartImplementation: (new () => CartImpl) | (() => CartImpl)): CartImpl {
  if (typeof CartImplementation === 'function' && CartImplementation.prototype && CartImplementation.prototype.constructor === CartImplementation) {
    return new (CartImplementation as new () => CartImpl)();
  } else {
    return (CartImplementation as () => CartImpl)();
  }
}
