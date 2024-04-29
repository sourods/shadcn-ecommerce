import { Products } from "@/types/product"
import { type ClassValue, clsx } from "clsx"
import { redirect } from "next/navigation"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function request(endpoint: string) {
  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      if (response.status === 404) {
        return redirect('error/not-found')
      }
      return redirect('error/unavaible')
    }
    const data: Products = await response.json()
    if (!data.length) {
      return redirect('error/not-found')
    }
    return data
  } catch (error) {
    return redirect('error/unavaible')
  }
}

export const setCurrencyFormat = (location: string, currency: string, value: number) =>
  new Intl.NumberFormat(location, {
    style: 'currency',
    currency,
  }).format(value)