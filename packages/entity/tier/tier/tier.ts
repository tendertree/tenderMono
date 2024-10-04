export interface Tier {
  Id: number; // Unique identifier for each tier
  name: string; // Name of the tier (e.g., S-Tier, A-Tier)
  description: string; // Description of what this tier represents
}

// TierList.ts
export interface TierList {
  Id: number; // Unique identifier for each tier list
  name: string; // Name of the tier list
  createdAt: Date; // Timestamp when the tier list was created
  updatedAt: Date; // Timestamp when the tier list was last updated
}

// TierListItem.ts
export interface TierListItem {
  Id: number; // Unique identifier for each item in a tier list
  tierListId: number; // Foreign key to the TierLists table
  itemId: number; // Foreign key to the Items table
  tierId: number; // Foreign key to the Tiers table, indicating which tier this item belongs to within this list
}
