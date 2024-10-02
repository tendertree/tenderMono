export interface ImageType {
  url: string;
}

export interface Product {
  id: string; 
  name: string;
  price: number;
  category: string; 
  images: { image: ImageType }[];
}
