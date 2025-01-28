"use client"

import { ReactNode, SetStateAction, useEffect, useState } from "react"

interface ButtonProps {
    children: ReactNode
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export function Button({ children, isOpen, setIsOpen }: ButtonProps) {

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

    return (
        <button onClick={() => setIsOpen(!isOpen)} className="max-w-md w-full text-center btn-bg border-b border-black text-xl py-6 px-12 sm:px-6 rounded-xl my-shadow">{children}</button>
    )
}
export function ButtonLink({ children }: { children: ReactNode }) {

    const [params, setParams] = useState<string>('')

    useEffect(() => {

        if (typeof window !== 'undefined') {

            const params = new URLSearchParams(window.location.search)

            const utm_source = params.get('utm_source') ?? 'nao-traqueado'
            const utm_campaign = params.get('utm_campaign') ?? 'nao-traqueado'
            const utm_medium = params.get('utm_medium') ?? 'nao-traqueado'
            const utm_content = params.get('utm_content') ?? 'nao-traqueado'
            const utm_term = params.get('utm_term') ?? 'nao-traqueado'

            setParams(`utm_source=${utm_source}&utm_campaign=${utm_campaign}&utm_medium=${utm_medium}&utm_content=${utm_content}&utm_term=${utm_term}`)
        }
    }, [])

    console.log(params)

    return (
        <a href={`https://sharonsantos.com.br/sessao-estrategica-v2/?${params}`} className="sm:max-w-md w-full text-center btn-bg border-b border-black text-lg sm:text-xl py-6 px-12 sm:px-6 rounded-xl my-shadow">{children}</a>
    )
}