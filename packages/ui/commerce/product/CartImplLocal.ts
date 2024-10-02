
import { CartImpl, CartItem } from '@entity/commerce/product/cart';
import { Product } from '@entity/commerce/product/product';

export class CartImplLocal implements CartImpl {
  private storageKey = 'cartItems';

constructor(initialProducts: Product[] = []) {
    this.initializeCartWithProducts(initialProducts);
  }

  private initializeCartWithProducts(products: Product[]): void {
    const initialCartItems: CartItem[] = products.map(product => ({ product }));
    localStorage.setItem(this.storageKey, JSON.stringify(initialCartItems));
  }



  getItems(): CartItem[] {
    const itemsJson = localStorage.getItem(this.storageKey);
    return itemsJson ? JSON.parse(itemsJson) : [];
  }

  addItem(product: Product): void {
    const items = this.getItems();
    const existingItemIndex = items.findIndex(item => item.product.id === product.id);

    if (existingItemIndex === -1) {
      // If the product is new, add it to the cart
      const newItem: CartItem = { product };
      items.push(newItem);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  removeItem(productId: string): void {
    let items = this.getItems();
    items = items.filter(item => item.product.id !== productId);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  clearCart(): void {
    localStorage.removeItem(this.storageKey);
  }
}
