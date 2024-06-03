"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, User, Menu } from "lucide-react";
import { useShoppingCart } from "@/providers/CartProvider";
import CurrencyModal from "./CurrencyDialog";
import { useState } from "react";
import { COUNTRIES_CURRENCY, LINKS } from "./constants";
import NavbarButton from "./NavbarButton";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const pathname = usePathname();
  const { handleDisplayCart, currency } = useShoppingCart();
  const [displayCurrencyDialog, setDisplayCurrencyDialog] = useState(false)
  const [displayMobileNavbar, setDisplayMobileNavbar] = useState(false)

  const openCurrencyDialog = () => setDisplayCurrencyDialog(true)

  return (
    <>
      <header className="mb-8 border-b">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className="text-2xl md:text-4xl font-bold">
              Next<span className="text-primary">Commerce</span>
            </h1>
          </Link>

          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            {LINKS.map((link, index) => (
              <div key={index}>
                {pathname === link.href ? (
                  <Link
                    className="text-lg font-semibold text-primary"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex flex-row">
            <NavbarButton label="Account" className="hidden sm:flex" onClick={handleDisplayCart}>
              <User />
            </NavbarButton>
            <NavbarButton label="Cart" onClick={handleDisplayCart}>
              <ShoppingBag />
            </NavbarButton>
            <NavbarButton label="Currency" className="hidden sm:flex" onClick={() => setDisplayCurrencyDialog(true)}>
              <p className="text-2xl leading-6">
                {COUNTRIES_CURRENCY.find(country => country.currency === currency)?.symbol}
              </p>
            </NavbarButton>
            <NavbarButton label="Menu" className="sm:hidden" onClick={() => setDisplayMobileNavbar(true)}>
              <Menu />
            </NavbarButton>
          </div>
        </div>
      </header>
      <CurrencyModal display={displayCurrencyDialog} onClose={() => setDisplayCurrencyDialog(false)} />
      <MobileNavbar
        display={displayMobileNavbar}
        onClose={() => setDisplayMobileNavbar(false)}
        openBag={handleDisplayCart}
        openCurrencyDialog={openCurrencyDialog}
        currency={currency}
      />
    </>
  );
}
