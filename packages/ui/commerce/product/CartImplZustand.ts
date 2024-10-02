import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { CartImpl, CartItem } from '@entity/commerce/product/cart';
import { Product } from '@entity/commerce/product/product';

export class CartImplZustand implements CartImpl {
  private useStore;

  constructor() {
    this.useStore = create<{
      items: CartItem[];
      addItem: (product: Product) => void;
      removeItem: (productId: string) => void;
      clearCart: () => void;
    }>()(
      persist(
        (set) => ({
          items: [],
          addItem: (product) =>
            set((state) => ({
              items: [...state.items, { product }],
            })),
          removeItem: (id) =>
            set((state) => ({
              items: state.items.filter(
                (item) => item.product.id !== id
              ),
            })),
          clearCart: () => set({ items: [] }),
        }),
        {
          name: 'cart-storage',
          storage: createJSONStorage(() => localStorage),
        }
      )
    );
  }

  getItems(): CartItem[] {
    return this.useStore.getState().items;
  }

  addItem(product: Product): void {
    this.useStore.getState().addItem(product);
  }

  removeItem(productId: string): void {
    this.useStore.getState().removeItem(productId);
  }

  clearCart(): void {
    this.useStore.getState().clearCart();
  }
}
