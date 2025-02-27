import Image from "next/image";

export default function Page() {
    return (
        <>
            <header className="min-h-screen w-full flex items-center justify-center bg-live px-4 py-12">
                <div className="sm:max-w-7xl sm:grid sm:grid-cols-2 items-center flex flex-col gap-12">
                    <div className="max-w-lg flex flex-col gap-8 text-white text-center">
                        <h3 className="text-2xl font-bold">Parabéns você tá dentro das<br /> masterclass semanais!</h3>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4xl grad-text font-semibold">Seja muito bem-vindo(a)!</h2>
                            <div className="relative h-10 w-full rounded-full overflow-hidden bg-white/100">
                                <div className="absolute left-0 top-0 h-full w-[90%] grad-loader flex justify-end items-center pe-2">
                                    <p className="font-medium text-lg">90%</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-2xl font-thin"><strong className="font-bold">Falta apenas mais uma etapa</strong> para que a reserva do seu lugar seja finalizada.</p>
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-2xl font-semibold grad-text">Entre para o meu Grupo do WhatsApp.</p>
                            <p className="text-sm font-thin">As informações e os links das lives serão enviados somente por lá</p>
                            <a href="https://chat.whatsapp.com/D4MJ8tqakwS1w9Q4pXzPGO" className="w-full max-w-md btn-live-typ">Entrar no grupo do whatsapp</a>
                        </div>
                    </div>
                    <div className="relative xl:h-[524px] sm:h-[440px] xl:w-[524px] sm:w-[440px] w-[324px] h-[324px]">
                        <Image
                            alt="Imagem Sharon Santos"
                            src="/images/bg-live.png"
                            objectFit="contain"
                            layout="fill"
                        />
                    </div>
                </div>
            </header>
            <footer className="py-8 bg-white text-sm text-center flex flex-col items-center justify-center">
                <p>Copyright © 2025 | Todos os direitos reservados</p>
            </footer>
        </>
    )
}