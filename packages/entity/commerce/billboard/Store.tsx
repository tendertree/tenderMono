export interface Store {
    id: string;
    name: string;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Billboards {
    id: string;
    label: string;
    imageUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Category {
    id: string;
    itemId: string;
    itemLabel: string;
    name: string;
}

