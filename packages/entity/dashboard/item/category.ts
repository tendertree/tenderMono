export interface Category {
  categoryId: number; // Unique identifier for each category
  name: string; // Name of the category
  parentId?: number; // Self-referential key for hierarchical categories, optional if it's a top-level category
}
