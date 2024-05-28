import Image from "next/image"
import { ReactNode } from "react"

interface HeroFlexProps {
    children?: ReactNode
    imagePath: string
    width: number
    height: number
    reverse?: boolean
}

export default function HeroFlex({ children, imagePath, height, width, reverse }: HeroFlexProps) {
    return (
        <div className={`w-full sm:max-w-6xl sm:grid sm:grid-cols-2 flex ${reverse ? 'flex-col' : 'flex-col-reverse'} items-center gap-6 sm:gap-12`}>
            <div className="">
                {children}
            </div>
            <div className="flex justify-end">
                <div className="sm:w-[500px]">
                    <Image
                        src={`/images/${imagePath}`}
                        width={width}
                        height={height}
                        alt="Imagem Sede de Viajar Ilustrativa"
                    />
                </div>
            </div>
        </div>
    )
}
