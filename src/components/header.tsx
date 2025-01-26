import Image from "next/image";
import { ReactNode, SetStateAction } from "react";
import { Button } from "./button";

interface FormProps {
    title: ReactNode
    description: ReactNode
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export function Header({ description, title, isOpen, setIsOpen }: FormProps) {
    return (
        <header className="header2 bg-black relative min-h-screen w-full flex items-center sm:items-center justify-center sm:px-4 sm:py-12 overflow-hidden">
            <Image
                src="/images/bg.webp"
                layout="fill"
                alt=""
                objectFit="cover"
                className="sm:block hidden"
            />
            <Image
                src="/images/bg-mob.webp"
                layout="fill"
                alt=""
                objectFit="cover"
                objectPosition="top"
                className="sm:hidden block"
            />
            <div className="w-full sm:max-w-6xl sm:grid sm:grid-cols-2 gap-12 sm:gap-12 flex flex-col z-50 pt-24 ">
                <div id="forms" className="flex flex-col gap-3 sm:gap-4 justify-center items-center sm:items-start sm:justify-start sm:text-left px-4 sm:px-0">
                    <div className="relative sm:w-[342px] w-[264px] h-[64px]">
                        <Image
                            src="/images/logo.webp"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-white text-lg sm:text-[30px] sm:leading-10 leading-6 sm:text-left text-center">{title}</h1>
                    <p className="text-white text-sm sm:text-lg font-thin sm:text-left text-center text-zinc-300 sm:max-w-full max-w-[70%]">{description}</p>
                    <div className="sm:w-full sm:max-w-md flex flex-col items-center gap-2 text-center sm:mt-0 mt-4">
                        <Button
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        >Preencha a Aplicação</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}