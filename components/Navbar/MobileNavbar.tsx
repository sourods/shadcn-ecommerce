"use client"

import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet";
import { COUNTRIES_CURRENCY, LINKS } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { Fragment } from "react";
import { Button } from "../ui/button";
import NavbarButton from "./NavbarButton";

interface Props {
    display: boolean
    onClose: () => void
    openBag: () => void
    openCurrencyDialog: () => void
    currency: string
}


export default function MobileNavbar({ display, onClose, openBag, currency, openCurrencyDialog }: Props) {
    const pathname = usePathname();
    const onClickBag = () => {
        onClose()
        openBag()
    }
    const onClickCurrency = () => {
        onClose()
        openCurrencyDialog()
    }
    return (
        <Sheet open={display} onOpenChange={onClose}>
            <SheetContent className="sm:max-w-lg w-[90vw]">
                <div className="h-full flex flex-col gap-4">
                    <div className="mt-8 overflow-y-auto">
                        <nav className="grid gap-6 2xl:ml-16">
                            {LINKS.map((link, index) => (
                                <Fragment key={index}>
                                    {pathname === link.href ? (
                                        <Link
                                            className="flex justify-between items-center text-lg font-semibold text-primary"
                                            href={link.href}
                                        >
                                            {link.name}
                                            <ChevronRight />
                                        </Link>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="flex justify-between items-center text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                                        >
                                            {link.name}
                                            <ChevronRight />
                                        </Link>
                                    )}
                                </Fragment>
                            ))}
                        </nav>
                    </div>
                    <span>
                        <p className="text-gray-500">
                            Join us for the best products and price.
                        </p>
                        <div className="flex gap-2.5">
                            <Button asChild>
                                <Link href="/register">
                                    Join Us
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                asChild
                            >
                                <Link href="/login">
                                    Sign In
                                </Link>
                            </Button>
                        </div>
                    </span>
                    <div>
                        <NavbarButton
                            label="Cart"
                            className="flex-row p-0 w-full gap-2 justify-start"
                            labelClassName="flex text-lg"
                            onClick={onClickBag}>
                            <ShoppingBag />
                        </NavbarButton>
                        <NavbarButton
                            label="Currency"
                            className="flex-row p-0 w-full gap-2 justify-start"
                            labelClassName="flex text-lg"
                            onClick={onClickCurrency}>
                            <p className="text-2xl leading-6 ml-1">
                                {COUNTRIES_CURRENCY.find(country => country.currency === currency)?.symbol}
                            </p>
                        </NavbarButton>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
