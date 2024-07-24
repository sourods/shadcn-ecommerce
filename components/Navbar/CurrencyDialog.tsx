'use client'
import { useShoppingCart } from "@/providers/CartProvider"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { COUNTRIES_CURRENCY } from "./constants"
interface Props {
    display: boolean
    onClose: () => void
}

const CurrencyDialog = ({ display, onClose }: Props) => {
    const { setCurrency } = useShoppingCart()
    const onCurrencyChange = (value: string) => {
        const newCurrency = COUNTRIES_CURRENCY.find(country => country.location === value) || COUNTRIES_CURRENCY[0]
        setCurrency(newCurrency)
    }
    return (
        <Dialog open={display} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Preferences</DialogTitle>
                    <DialogDescription>
                        Select in which currency you want to purchase the products.
                    </DialogDescription>
                </DialogHeader>
                <Select onValueChange={onCurrencyChange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select your currency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Currency</SelectLabel>
                            {COUNTRIES_CURRENCY.map(({ currency, symbol }) => (
                                <SelectItem value={currency} key={currency}>{`${symbol} ${currency}`}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </DialogContent>
        </Dialog>
    )
}

export default CurrencyDialog