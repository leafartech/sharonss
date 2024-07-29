import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Card2 } from "@/components/card-2";
import { HeaderThird } from "@/components/header-3";
import HeroFlex from "@/components/heroflex";
import Section from "@/components/section";
import { Slider } from "@/components/slider";
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
    <div className="">
      <HeaderThird
        title={<>Aprenda o método dos Brasileiros na Europa para Economizar 50% nas passagens aéreas para o Brasil.</>}
        description={<>Inscreva-se agora no Treinamento online e gratuito e junte-se à Comunidade de Brasileiros na Europa que Aproveitará Férias, Natal ou Ano Novo no Brasil com Passagens 50% mais baratas! <strong>Não Fique de Fora!</strong></>}
        searchParams={searchParams}
      />
      <main className="">
        <Section
          className="py-16 overflow-hidden px-4"
        >
          <div className="flex flex-col items-center text-center gap-6 sm:gap-12">
            <h2 className="font-bold text-2xl sm:text-4xl text-[#1C1E3A]">O que você vai aprender na melhor aula sobre passagens aéreas da sua vida?</h2>
            <div className="flex items-center flex-col sm:flex-row gap-4 sm:gap-8">
              <Card2
                icon={<>
                  <svg className="h-8 w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m397-115-99-184-184-99 71-70 145 25 102-102-317-135 84-86 385 68 124-124q23-23 57-23t57 23q23 23 23 56.5T822-709L697-584l68 384-85 85-136-317-102 102 26 144-71 71Z" /></svg>
                </>}
                description="Estrutura de emissões de passagens responsáveis por gerar mais de 5.000 vôos"
              />
              <Card2
                icon={<>
                  <svg className="h-8 w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" /></svg>
                </>}
                description="Como usar os seus gastos do dia a dia já existentes para conseguir descontos nas passagens"
              />
              <Card2
                icon={<>
                  <svg className="h-8 w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" /></svg>
                </>}
                description="O passo a passo para você aplicar e emitir múltiplas passagens para seu marido, sua esposa e seus filhos irem ao Brasil"
              />
            </div>
            <Button type="redirect" />
          </div>
        </Section>
        <Section classNameS="bg-my py-12" className="px-4">
          <div className="sm:grid sm:grid-cols-2 flex flex-col gap-12">
            <div className="sm:max-w-md flex flex-col gap-8">
              <h2 className="text-white font-bold text-2xl sm:text-3xl sm:max-w-xs">Quem vai te guiar nesse treinamento?</h2>
              <div className="sm:w-96">
                <Image
                  src="/images/bg5.webp"
                  alt="Imagem da Ani com passaporte"
                  width={865}
                  height={1080}
                  className="rounded-[20px]"
                />
              </div>
            </div>
            <div className="max-w-md flex flex-col items-start gap-6">
              <h4 className="text-white font-bold text-2xl sm:text-3xl">Prazer, Ani Mendonça!</h4>
              <div className="flex flex-col gap-4 text-white sm:text-lg font-medium mb-4">
                <p className="ps-6 relative after:absolute after:w-4 after:rounded-full after:h-1 after:bg-[#5484ff] after:left-0 after:top-[12px]">Ajudei mais de 5.000 famílias brasileiras morando no exterior a voltar uma ou mais de uma vez por ano ao Brasil comprando passagens pelo menos 50% mais baratas</p>
                <p className="ps-6 relative after:absolute after:w-4 after:rounded-full after:h-1 after:bg-[#5484ff] after:left-0 after:top-[12px]">Em 4 anos na Europa, visitei o Brasil mais de 15 vezes e trouxe familiares mais de 10 vezes… sem ser rica</p>
                <p className="ps-6 relative after:absolute after:w-4 after:rounded-full after:h-1 after:bg-[#5484ff] after:left-0 after:top-[12px]">Lidero o movimento que mais leva brasileiros para passar datas importantes no Brasil todos os anos</p>
                <p>A minha missão é ajudar famílias brasileiras a alcançarem a qualidade de vida completa que vieram buscar morando no exterior, sem precisar ficar meses e anos sem ver seus familiares no Brasil por causa do preço das passagens.</p>
              </div>
              <Button type="redirect" />
            </div>
          </div>
        </Section>
      </main>
      <footer className="py-4 bg-[#14112a] text-white text-sm text-center flex flex-col items-center justify-center">
        <p>Copyright © 2024 | Treinamento - Duas Por Uma</p>
        <p>Sede de Viajar Comércio de Infoprodutos e Cursos Digitais LTDA - 47.418.377/0001-29</p>
      </footer>
    </div>
  )
}