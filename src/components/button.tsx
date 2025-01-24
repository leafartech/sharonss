"use client"

import { ReactNode, useEffect, useState } from "react"

interface ButtonProps {
    children: ReactNode
    isNotLink: boolean
}

export function Button({ children, isNotLink }: ButtonProps) {

    const [params, setParams] = useState<string>('')

    useEffect(() => {

        if (typeof window !== 'undefined') {

            const params = new URLSearchParams(window.location.search)

            const utm_source = params.get('utm_source')
            const utm_campaign = params.get('utm_campaign')
            const utm_medium = params.get('utm_medium')
            const utm_content = params.get('utm_content')
            const utm_term = params.get('utm_term')

            if (utm_source && utm_campaign && utm_medium && utm_content && utm_term)
                setParams(`utm_source=${utm_source}&utm_campaign=${utm_campaign}&utm_medium=${utm_medium}&utm_content=${utm_content}&utm_term=${utm_term}`)

        }
    }, [])

    if (isNotLink)
        return (
            <a href={'#preco'} type="submit" className="max-w-md w-full text-center bg-[#FF7F27] border border-[#FFE8D8] uppercase text-white font-semibold py-4 px-6 rounded-xl my-shadow">{children}</a>
        )

    return (
        <a href={`https://pay.kiwify.com.br/2U3Pn9L?${params}`} type="submit" className="max-w-md w-full text-center bg-[#FF7F27] border border-[#FFE8D8] uppercase text-white font-semibold py-4 px-6 rounded-xl my-shadow">{children}</a>
    )
}