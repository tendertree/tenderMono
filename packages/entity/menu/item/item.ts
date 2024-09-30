export type Item = {
  name: string;
  href: string;
  imageSrc?: string;
};

export type Category = {
  label: string;
  value: string; 
  featured: Item[];
};

export type CategoryList={
	list : Category[];
}
