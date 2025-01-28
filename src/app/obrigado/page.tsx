import { ButtonLink } from "@/components/button";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <div className="bg-gradient-to-t from-my to-[#090b1a] min-h-screen flex flex-col items-center justify-center px-4">
                {/* <div className="flex flex-col gap-12">
                    <div>
                        <h2>Acesso ao PDF Script Closer Converte Desbloqueado!</h2>
                        <p></p>
                    </div>
                    <div className="relative">
                        <Image
                            src="/images/mock."
                            alt=""
                            layout="fill"
                        />
                    </div>
                </div> */}
                <div>
                    <div className="w-full max-w-3xl flex flex-col gap-4 items-center text-center">
                        <h2 className="text-3xl sm:text-3xl font-extrabold text-my2 ">OPORTUNIDADE ABERTA!</h2>
                        <div className="flex flex-col gap-4 sm:text-lg text-zinc-300">
                            <p>Pronto para dar o próximo passo?</p>
                            <p>Meus parabéns pelo seu interesse em implementar um Script Validado que a Converte Digital já aplicou em mais de 200 empresas.</p>
                            <p>O que acha de agora dar o próximo passo e participar de uma Sessão Estratégica Gratuita?</p>
                            <p>Caso você seja um dos selecionados, um dos Consultores Especializados do meu time irá te entregar, gratuitamente, o caminho mais assertivo de plugar a melhor estrutura comercial no seu Funil de Vendas atual.</p>
                            <p>E quem sabe, em pouco tempo, você conquiste a escala do seu negócio com 30, 35, 40% de taxa de conversão.</p>
                            <p>Eu acredito, e você?</p>
                            <p>Toque no botão abaixo e agende o seu horário agora mesmo:</p>
                        </div>
                        <div className="sm:mt-12 flex">
                            <ButtonLink>Agendar minha sessão gratuita</ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-8 bg-white text-sm text-center flex flex-col items-center justify-center">
                <p>Copyright © 2025 | Todos os direitos reservados</p>
            </footer>
        </>
    )
}