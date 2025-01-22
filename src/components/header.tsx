import Image from "next/image";
import { Form } from "./form";
import { ReactNode } from "react";
import { Button } from "./button";
import Calendar from "./calendar";

interface FormProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
    }
    title: ReactNode
    description: ReactNode
    form?: boolean
}

export function Header({ searchParams, description, title, form }: FormProps) {
    return (
        <header className="header2 relative sm:min-h-screen w-full flex sm:items-center justify-center sm:px-4 pb-4 pt-6 sm:py-12 overflow-hidden">
            <Image
                src="/images/bg.png"
                layout="fill"
                alt=""
                objectFit="cover"
            />
            <div className="sm:hidden absolute top-0 w-full h-full bg-black/60"></div>
            <div className="w-full sm:max-w-6xl sm:grid sm:grid-cols-2 gap-12 sm:gap-12 flex flex-col z-50  ">
                <div id="forms" className="flex flex-col gap-6 justify-start items-start sm:items-start sm:justify-start sm:text-left px-4 sm:px-0">
                    <div className="w-full rounded-2xl border border-[#B9E89B] px-4 text-base sm:px-12 py-3 flex items-center gap-2 text-[#B9E89B]">
                        <span className="hidden sm:block h-[10px] w-[10px] bg-[#B9E89B] rounded-full"></span>
                        <p>Workshop Intensino Suplementação Materno infantil</p>
                    </div>
                    <div className="relative sm:w-[264px] w-[220px] h-[64px]">
                        <Image
                            src="/images/logo.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="font-extrabold text-my2 text-[30px] sm:text-[40px] leading-9 sm:leading-[48px]">{title}</h1>
                    <p className="text-white text-lg sm:text-2xl font-medium">{description}</p>
                    <ul className="text-white flex flex-col gap-2">
                        <li className="relative flex items-center ps-7 text-lg">
                            <svg className="absolute left-0" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.47485 15.5488C6.34308 15.6805 6.12944 15.6805 5.99767 15.5488L0.238592 9.78968C0.106821 9.65791 0.106821 9.44427 0.238593 9.3125L2.60302 6.94807C2.73493 6.81616 2.94884 6.81632 3.08056 6.94842L5.99755 9.87404C6.12931 10.0062 6.34331 10.0063 6.4752 9.87427L15.9194 0.420475C16.0512 0.28859 16.2649 0.288536 16.3967 0.420354L18.7614 2.78501C18.8932 2.91679 18.8932 3.13043 18.7614 3.2622L6.47485 15.5488Z" fill="#B9E89B" />
                            </svg>
                            <p>Ganhando mais, trabalhando menos e liberando <strong>mais tempo para sua família</strong>.</p>
                        </li>
                        <li className="relative flex items-center ps-7 text-lg">
                            <svg className="absolute left-0" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.47485 15.5488C6.34308 15.6805 6.12944 15.6805 5.99767 15.5488L0.238592 9.78968C0.106821 9.65791 0.106821 9.44427 0.238593 9.3125L2.60302 6.94807C2.73493 6.81616 2.94884 6.81632 3.08056 6.94842L5.99755 9.87404C6.12931 10.0062 6.34331 10.0063 6.4752 9.87427L15.9194 0.420475C16.0512 0.28859 16.2649 0.288536 16.3967 0.420354L18.7614 2.78501C18.8932 2.91679 18.8932 3.13043 18.7614 3.2622L6.47485 15.5488Z" fill="#B9E89B" />
                            </svg>
                            <p>Sendo visto como autoridade e referência n1 na sua cidade.</p>
                        </li>
                        <li className="relative flex items-center ps-7 text-lg">
                            <svg className="absolute left-0" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.47485 15.5488C6.34308 15.6805 6.12944 15.6805 5.99767 15.5488L0.238592 9.78968C0.106821 9.65791 0.106821 9.44427 0.238593 9.3125L2.60302 6.94807C2.73493 6.81616 2.94884 6.81632 3.08056 6.94842L5.99755 9.87404C6.12931 10.0062 6.34331 10.0063 6.4752 9.87427L15.9194 0.420475C16.0512 0.28859 16.2649 0.288536 16.3967 0.420354L18.7614 2.78501C18.8932 2.91679 18.8932 3.13043 18.7614 3.2622L6.47485 15.5488Z" fill="#B9E89B" />
                            </svg>
                            <p>Parando de depender de planos de saúde e indicações</p>
                        </li>
                    </ul>
                    <div className="w-full max-w-md flex flex-col gap-2 text-center">
                        <Calendar className="sm:block hidden" />
                        <Button>Quero garantir minha vaga</Button>
                        <Calendar className="block sm:hidden" />
                    </div>
                </div>
                {/* <div className="relative">
                    <svg className="w-20 h-20 absolute -top-4 -right-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389 375" fill="none"><path d="M0 190.279C0 80.7911 83.8969 0 196.495 0C307.548 0 388.354 80.7911 388.354 190.279C388.354 294.91 307.548 374.156 196.495 374.156C83.8969 374.156 0 294.91 0 190.279Z" fill="white"></path><path d="M40.4023 189.617C40.4023 103.086 106.857 39.0713 196.053 39.0713C283.924 39.0713 347.95 103.086 347.95 189.617C347.95 272.394 283.924 335.085 196.053 335.085C106.857 335.085 40.4023 272.394 40.4023 189.617Z" fill="#201C3C"></path><path d="M151.678 282.99C220.562 255.176 285.03 192.707 285.03 145.91C285.03 124.719 271.783 116.11 255.224 116.11C233.588 116.11 219.016 133.328 219.016 139.288C219.016 141.274 239.991 145.91 239.991 170.191C239.991 192.707 225.64 220.962 210.406 234.868C204.445 198.005 198.042 160.258 193.185 125.822C192.081 121.187 190.536 121.187 188.107 121.187H128.054C125.626 121.187 122.314 122.07 123.418 127.147L151.678 282.99Z" fill="#5385FF"></path></svg>
                    <Image
                        width={536}
                        height={668}
                        src="/images/bg1.webp"
                        alt="Imagem de fundo"
                        className="sm:rounded-[32px]"
                    />
                    <svg className="w-20 h-20 absolute -bottom-4 -left-4" viewBox="0 0 80 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 39.1319C0 16.6151 17.2539 0 40.4103 0C63.2489 0 79.8671 16.6151 79.8671 39.1319C79.8671 60.6499 63.2489 76.9473 40.4103 76.9473C17.2539 76.9473 0 60.6499 0 39.1319Z" fill="white" />
                        <path d="M8.30896 38.9957C8.30896 21.2001 21.9757 8.03516 40.3194 8.03516C58.3905 8.03516 71.5578 21.2001 71.5578 38.9957C71.5578 56.0193 58.3905 68.912 40.3194 68.912C21.9757 68.912 8.30896 56.0193 8.30896 38.9957Z" fill="#201C3C" />
                        <g clip-path="url(#clip0_207_21)">
                            <mask id="mask0_207_21" maskUnits="userSpaceOnUse" x="23" y="19" width="35" height="44">
                                <path d="M57.187 19H23V63H57.187V19Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_207_21)">
                                <path d="M24.6652 43.4932C24.9244 43.0697 25.309 42.8332 25.7036 42.8332C25.8518 42.8332 25.9999 42.868 26.1438 42.9358L31.0396 45.2495C31.2205 45.3357 31.4214 45.321 31.5952 45.2128L52.7299 32.0862C53.7954 31.4555 55.0675 32.0532 55.5632 33.4282C56.0603 34.8105 55.5945 36.4678 54.5262 37.1242L34.6806 49.3653C32.5125 50.6945 29.9485 50.4103 27.9899 48.6192L25.0341 45.9132C24.7122 45.6198 24.4971 45.1633 24.4401 44.6628C24.3917 44.232 24.4715 43.8158 24.668 43.4932H24.6652Z" fill="#5484FF" />
                                <path d="M31.7875 28.7752C31.6052 28.5662 31.5197 28.2692 31.5539 27.9575C31.5881 27.6458 31.7348 27.391 31.9556 27.259L33.0638 26.5898C33.7732 26.1627 34.6065 26.2727 35.2717 26.9088L44.9139 34.9058L39.8414 38.0573L31.7875 28.7752Z" fill="#5484FF" />
                                <path d="M25 54L56 54" stroke="#5484FF" stroke-width="2" stroke-linecap="round" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_207_21">
                                <rect width="35" height="44" fill="white" transform="translate(23 19)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div> */}
            </div>
        </header>
    )
}