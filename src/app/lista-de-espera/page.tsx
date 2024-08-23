import { FormEspera } from "@/components/form-espera";
import Image from "next/image";

interface FormProps {
    searchParams: {
      utm_content?: string
      utm_campaign?: string
      utm_term?: string
      utm_source?: string
      utm_medium?: string
    }
  }
  

export default function Page({ searchParams }: FormProps) {
    return (
        <>
            <header className="relative bg-espera h-screen w-full flex items-center justify-center px-4">
                <div className="absolute top-0 left-0 h-full w-full bg-blue-500/60"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-black/40"></div>
                <div className="w-full xl:max-w-2xl max-w-xl flex flex-col items-center justify-center gap-4 z-50">
                    <div className="relative w-[180px] h-[105px] sm:w-[280px] sm:h-[163px]">
                        <Image
                            src="/images/logo-espera.webp"
                            alt="Logo Treinamento Duas por Uma"
                            layout="fill"
                        />
                    </div>
                    <div className="sm:w-[520px] flex flex-col gap-2 text-white text-center">
                        <h1 className="font-extrabold text-5xl sm:text-4xl uppercase">Inscrições encerradas</h1>
                        <p className="text-lg sm:text-2xl font-semibold">Cadastre-se na lista de espera para receber o aviso de reabertura em primeira mão.</p>
                    </div>
                    <div className="sm:w-[520px] relative flex flex-col items-center bg-white text-center rounded-3xl">
                        <div className="px-4 pt-8 flex flex-col gap-0">
                            <div className="flex flex-col gap-2">
                                <h3 className="uppercase text-lg sm:text-xl font-extrabold text-zinc-700">Preencha o divulário <br /> abaixo para entrar na lista</h3>
                                <p className="text-sm text-zinc-500">Não se preocupe, seus dados estão seguros conosco.</p>
                            </div>
                            <FormEspera searchParams={searchParams} />
                        </div>
                    </div>
                </div>
            </header>
            <footer className="flex flex-col gap-2 items-center justify-center py-6 bg-[#14122a]">
                <div className="font-bold text-xs sm:text-sm text-white text-center">
                    <p>Copyright © 2024 | Treinamento - Duas Por Uma</p>
                    <p>Sede de Viajar Comércio de Infoprodutos e Cursos Digitais LTDA - 47.418.377/0001-29</p>
                </div>
            </footer>
        </>
    )
}