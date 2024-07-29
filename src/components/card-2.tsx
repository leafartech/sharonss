import { ReactNode } from "react"

interface CardProps {
    icon: ReactNode
    description: string
}

export function Card2({ description, icon }: CardProps) {
    return (
        <div className="max-w-sm bg-my rounded-[20px] py-8 px-8 flex flex-col items-center gap-4 text-center sm:h-52">
            {icon}
            <p className="text-white text-lg sm:text-base font-medium">{description}</p>
        </div>
    )
}