import { Product } from "./product"

export interface CartItem extends Product {
  quantity: number
}

export interface Cart {
  successUrl: string
  cancelUrl: string
  currency: string
  location: string
  items: CartItem[]
}