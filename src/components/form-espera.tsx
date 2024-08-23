'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface FormProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
        pagina?: string
    }
}

export function FormEspera({ searchParams: { utm_campaign, utm_content, utm_medium, utm_source, utm_term, pagina } }: FormProps) {
    let cont = 0
    const pag = usePathname().split('/')
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://duasporuma.activehosted.com/f/embed.php?id=24';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            document.body.appendChild(script);
            cont++;
        }
    }, []);
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                const inpt0 = document.getElementById('field[80]') as HTMLInputElement // pagina
                const inpt1 = document.getElementById('field[89]') as HTMLInputElement // utmsource
                const inpt2 = document.getElementById('field[87]') as HTMLInputElement // utmmedium
                const inpt3 = document.getElementById('field[88]') as HTMLInputElement // utmcampaign
                const inpt4 = document.getElementById('field[86]') as HTMLInputElement // utmcontent
                const inpt5 = document.getElementById('field[90]') as HTMLInputElement // utmterm

                inpt0.value = pag[1] || 'nao-traqueado'
                inpt1.value = utm_source || 'nao-traqueado'
                inpt2.value = utm_medium || 'nao-traqueado'
                inpt3.value = utm_campaign || 'nao-traqueado'
                inpt4.value = utm_content || 'nao-traqueado'
                inpt5.value = utm_term || 'nao-traqueado'
            }, 2000)
        }
    }, [cont])

    return (
        <div className="w-full h-[224px] translate-y-4">
            <div id="_forms_24" className={`_form_24 max-w-sm -translate-y-4`}></div>
        </div>
    )
}