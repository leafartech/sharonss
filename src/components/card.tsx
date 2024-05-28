interface CardProps {
    title: string
    description: string
}

export function Card({ description, title }: CardProps) {
    return (
        <div className="max-w-sm bg-my rounded-[20px] py-8 px-8 flex flex-col gap-4 text-left">
            <h4 className="text-my2 font-bold text-2xl sm:text-3xl">{title}</h4>
            <p className="text-white text-lg sm:text-xl font-medium">{description}</p>
        </div>
    )
}