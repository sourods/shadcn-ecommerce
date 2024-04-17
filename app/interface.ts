export interface fullProduct {
  _id: string;
  imagesUrl: Array<string>;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  priceId: string;
}

export type simplifiedProduct = Omit<fullProduct, 'description' | 'imagesUrl'> & {
  imageUrl: string
}
