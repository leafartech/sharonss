import { ReactElement } from "react"

type CardTypes = {
    title: string
    description: string
}

export default function Card({ description, title }: CardTypes) {
    return (
        <div className="w-full max-w-3xl py-10 sm:py-6 px-6 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-my">
            <div className="w-12 sm:w-16 h-12 sm:h-16">
                <svg className="w-12 sm:w-16 h-12 sm:h-16" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 512 512" data-name="Layer 2"><g transform="matrix(1,0,0,1,0,0)"><g id="Icon"><g id="_37" data-name="37"><rect id="Background" fill="url(#linear-gradient)" height="512" rx="150" width="512" data-original-color="linear-gradient" stroke="none"></rect><path d="m380.68 116.95-162.3 152.74-19.3 28.86 73.63 73.63-134.33 22.95 116.87 116.87h106.73c82.84 0 150-67.16 150-150v-113.73z" fill="url(#linear-gradient-2)" data-original-color="linear-gradient-2" stroke="none"></path><g fill="#fff"><path d="m345.32 116.95-128.55 128.55-50.09-50.09c-9.76-9.76-25.59-9.76-35.36 0-9.76 9.76-9.76 25.59 0 35.36l67.77 67.77c9.76 9.76 25.59 9.76 35.36 0l146.24-146.24c9.76-9.76 9.76-25.59 0-35.36-9.76-9.76-25.59-9.76-35.36 0z" fill="#ffffffff" data-original-color="#ffffffff" stroke="none"></path><rect height="50" rx="25" transform="matrix(-1 0 0 -1 512 754.75)" width="250" x="131" y="352.38" fill="#ffffffff" data-original-color="#ffffffff" stroke="none"></rect></g></g></g></g><defs><linearGradient id="linear-gradient"><stop stop-color="#6f0b36ff" offset="0"></stop><stop stop-color="#ae0046ff" offset="1"></stop></linearGradient><linearGradient id="linear-gradient-2"><stop stop-color="#680d31ff" offset="0"></stop><stop stop-color="#77113aff" offset="1"></stop></linearGradient></defs></svg>
            </div>
            <div className="flex flex-col gap-1 text-white text-center sm:text-left">
                <h4 className="font-semibold text-base sm:text-xl">{title}</h4>
                <p className="font-thin text-sm sm:text-base text-zinc-300">{description}</p>
            </div>
        </div>
    )
}

type Card2Types = {
    Icon: ReactElement
    title: string
    description: string
}

export function Card2({ Icon, description, title }: Card2Types) {
    return (
        <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl border-b-2 border-my">
            <div className="flex flex-col gap-6">
                {Icon}
                <div className="flex flex-col gap-2">
                    <h4 className="text-my text-2xl font-semibold">{title}</h4>
                    <p className="">{description}</p>
                </div>
            </div>
        </div>
    )
}