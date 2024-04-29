export interface Product {
  _id: string;
  images: Array<string>;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
}

export type Products = Array<Product>
export type FeaturedProducts = Products