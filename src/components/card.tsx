import Image from "next/image"

type CardTypes = {
    title: string
    description: string
    imagePath: string
    label: string
}

export default function Card({ description, imagePath, label, title }: CardTypes) {
    return (
        <div className="relative w-full sm:max-w-4xl border-2 border-white rounded-3xl flex justify-center p-8 sm:py-16 sm:px-20">
            <p className="absolute -top-4 bg-gradient-to-r from-[#58B750] to-[#B9E89B] rounded-full px-6 py-1 uppercase text-base font-[300]">{label}</p>
            <div className="relative sm:grid sm:grid-cols-5 flex flex-col items-center">
                <div className="relative w-[184px] h-[184px] sm:absolute sm:-left-[120px] sm:w-[440px] sm:h-[384px]">
                    <Image
                        src={`/images/${imagePath}`}
                        alt="Imagem 3d de bônus"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-3 max-w-xl flex flex-col gap-4 sm:text-left text-center">
                    <h4 className=" font-bold text-white text-3xl sm:text-4xl">{title}</h4>
                    <p className="text-zinc-300">{description}</p>
                </div>
            </div>
        </div>
    )
}