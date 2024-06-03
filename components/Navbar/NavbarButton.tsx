import { ReactNode } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface Props {
    onClick: () => void
    children: ReactNode
    label: string
    className?: string
    labelClassName?: string
}

const NavbarButton = ({ onClick, label, children, className, labelClassName}: Props) => (
    <div className="flex">
        <Button
            variant="outline"
            onClick={onClick}
            className={cn("flex flex-col h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 border-none", className)}
        >
            {children}
            <span className={cn("hidden text-xs font-semibold text-gray-500 sm:block", labelClassName)}>
                {label}
            </span>
        </Button>
    </div>
)

export default NavbarButton