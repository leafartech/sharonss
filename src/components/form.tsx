'use client'

import { useEffect } from "react";

interface FormProps {
    searchParams: {
      utm_content?: string
      utm_campaign?: string
      utm_term?: string
      utm_source?: string
      utm_medium?: string
    }
  }

export function Form({ searchParams: { utm_campaign, utm_content, utm_medium, utm_source, utm_term } }: FormProps) {
    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://duasporuma.activehosted.com/f/embed.php?id=19';
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
                const inpt1 = document.getElementById('field[9]') as HTMLInputElement // utmsource
                const inpt2 = document.getElementById('field[6]') as HTMLInputElement // utmmedium
                const inpt3 = document.getElementById('field[4]') as HTMLInputElement // utmcampaign
                const inpt4 = document.getElementById('field[7]') as HTMLInputElement // utmcontent
                const inpt5 = document.getElementById('field[58]') as HTMLInputElement // utmterm

                inpt1.value = utm_source || ''
                inpt2.value = utm_medium || ''
                inpt3.value = utm_campaign || ''
                inpt4.value = utm_content || ''
                inpt5.value = utm_term || ''
            }, 1500)
        }
    }, [cont])

    return (
        <div className="w-full h-[256px]">
            <div id="_forms_19" className={`_form_19 max-w-sm -translate-y-4`}></div>
        </div>
    )
}