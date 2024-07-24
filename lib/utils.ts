import { type ClassValue, clsx } from "clsx"
import { notFound } from "next/navigation"
import { twMerge } from "tailwind-merge"

const { API_BASE_URL, API_PORT } = process.env

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export async function getData<T>(path: string) {
  const data = await request(path)
  if (data !== undefined) {
    return data as T
  }
  return notFound()
}

async function request(path: string) {
  try {
    const response = await fetch(`${API_BASE_URL}:${API_PORT}${path}`)
    if (!response.ok) {
      return undefined
    }
    const data = await response.json()
    return data
  } catch (error) {
    return undefined
  }
}

export const setCurrencyFormat = (location: string, currency: string, value: number) =>
  new Intl.NumberFormat(location, {
    style: 'currency',
    currency,
  }).format(value)

export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.getFullYear() > 0;
}