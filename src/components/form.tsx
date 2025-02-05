import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react"

type FormTypes = {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
    isca?: boolean
}

type DataTypes = {
    name: string,
    email: string
    phone: string
    monthly_income: string
    current_moment: string
}

const initialData = {
    name: '',
    email: '',
    phone: '',
    monthly_income: '',
    current_moment: '',
}

export default function Form({ isOpen, setIsOpen, isca }: FormTypes) {

    const [data, setData] = useState<DataTypes>(initialData)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { push } = useRouter()

    function formatPhone(phone: string): string {
        phone = phone.replace(/\D/g, '');

        phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
        phone = phone.replace(/(\d{5})(\d)/, '$1-$2');

        return phone;
    }

    function handleChange(type: keyof DataTypes, e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {

        let hlp = { ...data }
        const value = e.target.value

        if (type === 'phone') {
            hlp[type] = formatPhone(value)
        } else {
            hlp[type] = value
        }

        setData(hlp)
    }

    async function formSubmited(e: FormEvent) {
        e.preventDefault()
        setIsLoading(true)

        const params = new URLSearchParams(window.location.search)

        const utm_source = params.get('utm_source')
        const utm_campaign = params.get('utm_campaign')
        const utm_medium = params.get('utm_medium')
        const utm_content = params.get('utm_content')
        const utm_term = params.get('utm_term')

        await fetch("/api/pipefy", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data,
                utm_source,
                utm_campaign,
                utm_medium,
                utm_content,
                utm_term,
                isca
            })
        }).then(async res => {

            const response = await res.json()

            setIsLoading(false)
            push('/obrigado')
        }).catch(e => console.log(e))
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[999999999]">
            <div onClick={() => setIsOpen(!isOpen)} className="absolute top-0 left-0 h-full w-full bg-black/60"></div>
            <form onSubmit={(e) => formSubmited(e)} className="w-full max-w-2xl relative flex items-center justify-center bg-white rounded-2xl p-12">
                <button onClick={() => setIsOpen(!isOpen)} className="absolute top-4 right-4">
                    <svg className="w-6 h-6 fill-zinc-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></svg>
                </button>
                <div className="w-full max-w-lg flex flex-col items-center gap-4">
                    {/* <div className="relative sm:w-[264px] w-[200px] h-[38px]">
                        <Image
                            src="/images/logo-black.webp"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div> */}
                    <h2 className="text-my text-2xl sm:text-3xl font-bold text-center">Preencha para Aplicar</h2>
                    <div className="w-full flex flex-col items-center gap-4">
                        <input
                            type="text"
                            name="name"
                            className="w-full sm:max-w-sm border rounded py-1 px-4 text-sm font-thin outline-none focus:border-zinc-400"
                            placeholder="Digite seu nome"
                            value={data.name}
                            required
                            onChange={(e) => handleChange('name', e)}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Seu melhor email"
                            className="w-full sm:max-w-sm border rounded py-1 px-4 text-sm font-thin outline-none focus:border-zinc-400"
                            value={data.email}
                            required
                            onChange={(e) => handleChange('email', e)}
                        />
                        <input
                            type="text"
                            name="phone"
                            maxLength={15}
                            minLength={15}
                            required
                            placeholder="Digite seu telefone"
                            className="w-full sm:max-w-sm border rounded py-1 px-4 text-sm font-thin outline-none focus:border-zinc-400"
                            value={data.phone}
                            onChange={(e) => handleChange('phone', e)}
                        />
                        <select
                            className="w-full sm:max-w-sm border rounded py-1 px-4 text-sm font-thin outline-none focus:border-zinc-400"
                            name="monthly_income"
                            required
                            value={data.monthly_income}
                            onChange={(e) => handleChange('monthly_income', e)}
                        >
                            <option>Faturamento mensal</option>
                            <option>Até 12k mensal</option>
                            <option>13k a 30k mensal</option>
                            <option>31k a 70k mensal</option>
                            <option>Mais de 150k mensal</option>
                        </select>
                        <select
                            className="w-full sm:max-w-sm border rounded py-1 px-4 text-sm font-thin outline-none focus:border-zinc-400"
                            name="monthly_income"
                            required
                            value={data.current_moment}
                            onChange={(e) => handleChange('current_moment', e)}
                        >
                            <option>Qual seu momento atual?</option>
                            <option>Já tenho equipe comercial, mas não tenho processos e time comercial alinhados para altas taxas de conversão</option>
                            <option>Já tenho equipe performando e quero escalar</option>
                            <option>Já sei que preciso de um time comercial de alta performance, mas não sei por onde começar </option>
                        </select>
                    </div>
                    <button className="w-full sm:max-w-sm text-center btn-bg py-3 px-12 sm:px-6 rounded-xl my-shadow" type="submit">
                        {isLoading ? (
                            <div className="flex-col gap-4 w-full flex items-center justify-center">
                                <div className="w-5 h-5 border-2 text-white text-4xl animate-spin border-zinc-100 flex items-center justify-center border-t-blue-400 rounded-full">
                                </div>
                            </div>
                        ) : (
                            <span>Aplicar</span>
                        )}
                    </button>
                    <p className="text-center max-w-xs text-xs text-zinc-400">Concordo em receber comunicados <br />via Whatsapp e E-mail.</p>
                </div>
            </form >
        </div >
    )
}