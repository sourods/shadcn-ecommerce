"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/providers/CartProvider";
import { Product } from "@/types/product";
import { Star, Truck } from "lucide-react";

interface Props {
    product: Product
}

export default function Offer({
    product
}: Props) {
    const { addItem, formatCurrency } = useShoppingCart();
    return (
        <>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
                <Button className="rounded-full gap-x-2">
                    <span className="text-sm">4.2</span>
                    <Star className="h-5 w-5" />
                </Button>

                <span className="text-sm text-gray-500 transition duration-100">
                    56 Ratings
                </span>
            </div>

            <div className="mb-4">
                <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-gray-800 md:text-2xl">
                        {formatCurrency(product.price)}
                    </span>
                    <span className="mb-0.5 text-red-500 line-through">
                        {formatCurrency(product.price + 30)}
                    </span>
                </div>

                <span className="text-sm text-gray-500">
                    Incl. Vat plus shipping
                </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
                <Truck className="w-6 h-6" />
                <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
                <Button
                    onClick={() => addItem(product)}
                >
                    Add To Cart
                </Button>
                <Button
                    variant="outline"
                    onClick={() => addItem(product)}
                >
                    Checkout Now
                </Button>
            </div>
        </>
    );
}
