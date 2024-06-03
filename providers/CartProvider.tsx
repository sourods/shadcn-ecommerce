"use client";
import { setCurrencyFormat } from "@/lib/utils";
import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { ReactNode } from "react";

interface Props extends Omit<Cart, 'items'> {
    children: ReactNode
}
type Currency = Pick<Props, 'currency' | 'location'>
interface CartContextValue {
    addItem: (product: Product) => void,
    handleDisplayCart: () => void,
    removeItem: (productId: Product['_id']) => void
    cartDetails: Cart['items']
    setCurrency: ({ currency, location }: Currency) => void
    totalPrice: string
    shouldDisplayCart: boolean
    formatCurrency: (price: number) => string
    currency: string
}


const CartContext = createContext({})


export default function CartProvider({ children, successUrl, cancelUrl, currency, location }: Props) {
    const [cartState, setCartState] = useState<Cart>({
        successUrl,
        cancelUrl,
        currency,
        location,
        items: [],
    })
    const [displayCart, setDisplayCart] = useState(false)
    const totalPrice = useMemo(() => cartState.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0), [cartState.items])
    const cartDetails = useMemo(() => cartState.items.map(item => ({ ...item, price: setCurrencyFormat(location, currency, item.price) })), [cartState.items])

    const addItem = (product: Product) => {
        const alreadyAddedProduct = cartState.items.some(item => item._id === product._id)
        setCartState((currentCartState) => ({
            ...currentCartState,
            items: alreadyAddedProduct ?
                currentCartState.items.map(item => item._id === product._id ?
                    { ...item, quantity: item.quantity + 1 } : item) :
                [...currentCartState.items, { ...product, quantity: 1 }]
        }))
    }
    const removeItem = (productId: Product['_id']) => {
        const shouldRemoveQuantity = cartState.items.some(item => item._id === productId && item.quantity > 1)
        setCartState((currentCartState) => ({
            ...currentCartState,
            items: shouldRemoveQuantity ?
                currentCartState.items.map(item => item._id === productId ?
                    { ...item, quantity: item.quantity - 1 } : item) :
                currentCartState.items.filter(item => item._id !== productId)
        }))
    }
    const handleDisplayCart = () => setDisplayCart(!displayCart)

    useEffect(() => {
        if (!displayCart && cartState.items.length) {
            setDisplayCart(true)
        }
    }, [cartState.items])

    const cart = {
        addItem,
        handleDisplayCart,
        removeItem,
        cartDetails,
        setCurrency: ({ currency, location }: Currency) =>
            setCartState((currentCartState) => ({ ...currentCartState, currency, location })),
        totalPrice: setCurrencyFormat(location, currency, totalPrice),
        shouldDisplayCart: displayCart,
        formatCurrency: (price: number) => setCurrencyFormat(location, currency, price),
        currency: cartState.currency
    }
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    );
}

export function useShoppingCart() {
    const cartContextValue = useContext(CartContext)
    if (!Object.keys(cartContextValue).length) {
        throw Error('CartProvider must be provided');
    }
    return cartContextValue as CartContextValue;
}