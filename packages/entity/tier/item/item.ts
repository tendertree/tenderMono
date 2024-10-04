export interface Item {
  id: number; // Unique identifier for each item
  name: string; // Name of the item
  description: string; // Description of the item
  categoryId: number; // Foreign key to the Category table
  imageUrl: string; // URL to an image representing the item
}
