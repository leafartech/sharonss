"use client"

import { Button } from "@/components/button";
import Card, { Card2 } from "@/components/card";
import { FormLive } from "@/components/form";
import { HeaderLive } from "@/components/header";
import Section from "@/components/section";
import Image from "next/image";
import { useState } from "react";

export default function Page() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="">
      <div className="z-[9999] fixed top-0 w-full py-2 sm:py-4 bg-my flex items-center justify-center text-white font-thin px-4">
        <p className="text-center">Exclusivo para <strong className="text-my2 sm:mx-2 font-bold"> escritórios de advocacia </strong> que faturam acima de 50mil/mês</p>
      </div>
      <HeaderLive
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={<>Maximize o <strong className="text-my2">potencial de sua empresa</strong> sem ficar refém das operações diárias!</>}
        description={<>Você quer escalar sua empresa e aumentar seus lucros, mas <strong>se sente preso na gestão operacional</strong>? Descubra como liberar seu tempo e focar na saúde e no crescimento do seu negócio! Nesta <strong>sexta-feira, às 13h</strong>, eu vou compartilhar estratégias vitais em uma live exclusiva.</>}
      />
      <main className="bg-[#141940]">
        <Section classNameS="relative py-12 sm:-mt-24 -mt-48 px-4">
          <div className="w-full max-w-5xl rounded-3xl bg-white pt-8 sm:pt-16 pb-8 px-12 flex flex-col items-center">
            <div className="flex flex-col gap-6">
              {/* <h2 className="text-center text-[#141940] text-2xl sm:text-4xl font-bold">Seu atendimento não terá mais desculpa para dizer que os leads estão “desqualificados”</h2> */}
              <h2 className="text-center text-[#141940] text-2xl sm:text-4xl font-bold">O que você irá aprender:</h2>
              <div className="flex flex-col items-center gap-4">
                <Card
                  title="Construir e Capacitar um Time Comercial Eficaz"
                  // description="Aproveite ao máximo a demanda que você já atrai e transforme visitantes em clientes fidelizados com técnicas comprovadas."
                  // description="Se você já tem uma boa lista de leads, mas não tem um time comercial para vender para ela, você precisa urgentemente "
                  description="Prepare sua equipe para gerar vendas constantes e escaláveis. "
                />
                <Card
                  title="Otimizar a Gestão de Leads:"
                  description="Aproveite ao máximo cada interação em sua lista de leads e no Instagram para converter mais e melhor."
                />
                <Card
                  title="Alcançar Vendas Recorrentes e Previsíveis"
                  description="Estabeleça processos que garantam um fluxo de receita constante sem a sua intervenção diária."
                />
              </div>
              <h4 className="text-base text-center text-[#141940]">🔗 Junte-se a nós e transforme sua capacidade de liderar e crescer sua empresa sem estar sobrecarregado pelas operações cotidianas. Inscreva-se agora!</h4>
            </div>
          </div>
        </Section>
        <Section classNameS="bg-white sm:-mt-0 py-12 px-4">
          <div className="flex flex-col items-center gap-8">
            <h2 className="max-w-4xl text-center text-[#141940] text-3xl sm:text-4xl font-bold">Aprenda de forma 100% online e gratuita como:</h2>
            <div className="flex gap-6 flex-wrap justify-center">
              <Card2
                title="Contratar uma equipe"
                description=""
                // description="Estratégias personalizadas e acionáveis para alavancar suas vendas e otimizar seus processos."
                Icon={<svg className="h-12 w-12 text-my" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 512 512"><path clip-rule="evenodd" d="m500.26 368.84c-.93-8.35-7.42-14.67-15.79-15.38l-16.47-1.4c-2.33-.2-4.25-1.59-5.15-3.73s-.54-4.49.95-6.29l10.55-12.71c5.36-6.46 5.41-15.52.12-22.04-5.4-6.65-11.53-12.73-18.22-18.07-6.56-5.24-15.62-5.11-22.04.3l-12.63 10.65c-1.79 1.51-4.14 1.88-6.28 1-2.15-.88-3.56-2.79-3.78-5.12l-1.53-16.46c-.78-8.36-7.15-14.8-15.5-15.67-8.51-.88-17.14-.85-25.65.1-.63.07-1.25.18-1.86.32v-161.77c0-27.92-22.71-50.63-50.63-50.63h-61.83c-3.22-6.9-10.2-11.7-18.3-11.7h-13.36c-2.42-16.52-16.68-29.24-33.87-29.24-17.18 0-31.45 12.72-33.88 29.24h-13.36c-8.1 0-15.08 4.8-18.3 11.7h-61.82c-27.92 0-50.63 22.72-50.63 50.63v347.8c0 27.92 22.71 50.63 50.63 50.63h254.73c14.65 0 28.38-6.4 37.85-17.05l.07.75c.78 8.36 7.15 14.8 15.5 15.67 4.1.43 8.24.64 12.37.64 4.44 0 8.87-.25 13.28-.74 8.35-.93 14.67-7.42 15.38-15.79l1.4-16.47c.2-2.33 1.59-4.25 3.73-5.15s4.49-.54 6.29.95l12.71 10.55c6.46 5.36 15.52 5.41 22.04.12 6.65-5.4 12.73-11.53 18.07-18.22 5.24-6.56 5.11-15.62-.3-22.04l-10.65-12.63c-1.51-1.79-1.88-4.14-1-6.28.88-2.15 2.79-3.56 5.12-3.78l16.46-1.53c8.36-.78 14.8-7.15 15.67-15.5.89-8.52.86-17.15-.09-25.66zm-143.28-266.27v168.07c-1.96 2.56-3.23 5.7-3.53 9.16l-1.4 16.47c-.2 2.33-1.59 4.25-3.73 5.15-1.9.8-3.96.6-5.66-.49v-198.36c0-14.51-11.8-26.31-26.31-26.31h-59.93v-14.32h59.93c22.41 0 40.63 18.23 40.63 40.63zm-225.43-42.13c0-5.62 4.58-10.2 10.2-10.2h17.99c2.76 0 5-2.24 5-5 0-13.37 10.88-24.24 24.24-24.24 13.37 0 24.24 10.88 24.24 24.24 0 2.76 2.24 5 5 5h17.99c5.62 0 10.2 4.58 10.2 10.2v17.32c0 5.62-4.58 10.2-10.2 10.2h-94.47c-5.62 0-10.2-4.58-10.2-10.2v-17.32zm10.21 37.52h94.47c8.1 0 15.08-4.8 18.3-11.7h61.83c8.99 0 16.31 7.32 16.31 16.31v190.13l-3.35-2.78c-6.46-5.36-15.52-5.41-22.04-.12-6.65 5.4-12.73 11.53-18.07 18.22-5.24 6.56-5.11 15.62.3 22.04l10.65 12.63c1.51 1.79 1.88 4.14 1 6.28-.88 2.15-2.79 3.56-5.12 3.78l-16.46 1.53c-8.36.78-14.8 7.15-15.67 15.5-.88 8.51-.85 17.14.1 25.65.93 8.35 7.42 14.67 15.79 15.38l16.47 1.4c2.33.2 4.25 1.59 5.15 3.73s.54 4.49-.95 6.29l-10.55 12.71c-5.36 6.46-5.41 15.52-.12 22.04 2.75 3.38 5.69 6.62 8.79 9.69h-236.96c-8.99 0-16.31-7.32-16.31-16.31v-347.8c0-8.99 7.32-16.31 16.31-16.31h61.83c3.21 6.91 10.2 11.71 18.3 11.71zm174.6 393.04h-254.73c-22.4 0-40.63-18.23-40.63-40.63v-347.8c0-22.4 18.23-40.63 40.63-40.63h59.93v14.32h-59.93c-14.51 0-26.31 11.8-26.31 26.31v347.8c0 14.51 11.8 26.31 26.31 26.31h248.8c6.25 3.51 13.97 2.86 19.63-1.91l12.63-10.65c1.79-1.51 4.13-1.88 6.28-1s3.56 2.79 3.78 5.12l.01.11c-6.84 13.79-20.98 22.65-36.4 22.65zm174.05-97.54c-.37 3.54-3.1 6.25-6.65 6.58l-16.46 1.53c-6.01.56-11.17 4.37-13.45 9.94s-1.28 11.9 2.61 16.52l10.65 12.63c2.3 2.72 2.35 6.56.13 9.35-4.9 6.13-10.47 11.75-16.56 16.7-2.77 2.25-6.61 2.22-9.35-.05l-12.71-10.55c-4.65-3.86-10.99-4.81-16.54-2.48-5.56 2.33-9.32 7.51-9.83 13.53l-1.4 16.47c-.3 3.55-2.99 6.31-6.53 6.7-7.8.87-15.71.9-23.51.09-3.54-.37-6.25-3.1-6.58-6.65l-1.53-16.46c-.56-6.01-4.37-11.17-9.94-13.45-1.98-.81-4.05-1.21-6.11-1.21-3.74 0-7.43 1.31-10.41 3.82l-12.63 10.65c-2.72 2.29-6.57 2.35-9.35.12-6.13-4.89-11.75-10.47-16.7-16.56-2.24-2.76-2.22-6.61.05-9.35l10.55-12.71c3.86-4.65 4.81-10.99 2.48-16.54-2.33-5.56-7.51-9.32-13.53-9.83l-16.47-1.4c-3.55-.3-6.31-2.98-6.7-6.53-.87-7.8-.9-15.71-.09-23.51.37-3.54 3.1-6.25 6.65-6.58l16.46-1.53c6.01-.56 11.17-4.37 13.45-9.94 2.28-5.58 1.28-11.91-2.61-16.52l-10.65-12.63c-2.3-2.72-2.35-6.56-.13-9.35 4.9-6.13 10.47-11.75 16.56-16.7 2.77-2.25 6.61-2.22 9.35.05l12.71 10.55c4.65 3.86 10.99 4.81 16.54 2.48 5.56-2.33 9.32-7.51 9.83-13.53l1.4-16.47c.3-3.55 2.99-6.31 6.53-6.7 7.8-.87 15.71-.9 23.51-.09 3.54.37 6.25 3.1 6.58 6.65l1.53 16.46c.56 6.01 4.37 11.17 9.94 13.45s11.9 1.28 16.52-2.61l12.63-10.65c2.72-2.3 6.57-2.35 9.35-.13 6.13 4.9 11.75 10.47 16.7 16.56 2.24 2.77 2.22 6.61-.05 9.35l-10.55 12.71c-3.86 4.65-4.81 10.99-2.48 16.54 2.33 5.56 7.51 9.32 13.53 9.83l16.47 1.4c3.55.3 6.31 2.98 6.7 6.53.87 7.81.9 15.72.09 23.52zm-108.27-67.44c-30.94 0-56.11 25.17-56.11 56.11s25.17 56.11 56.11 56.11 56.11-25.17 56.11-56.11-25.17-56.11-56.11-56.11zm0 102.23c-25.43 0-46.11-20.69-46.11-46.11 0-25.43 20.69-46.11 46.11-46.11 25.43 0 46.11 20.69 46.11 46.11s-20.69 46.11-46.11 46.11zm26.9-30.58c-.93 1.6-2.61 2.5-4.33 2.5-.85 0-1.71-.22-2.5-.67l-17.18-9.92c-.9.35-1.88.55-2.9.55-4.42 0-8-3.58-8-8 0-2.53 1.17-4.77 3-6.24v-29c0-2.76 2.24-5 5-5s5 2.24 5 5v29c1.53 1.23 2.59 3 2.9 5.03l17.18 9.92c2.39 1.38 3.21 4.44 1.83 6.83zm-140.71-210.71c15.59 0 28.27-12.68 28.27-28.27s-12.68-28.27-28.27-28.27-28.27 12.68-28.27 28.27c.01 15.59 12.69 28.27 28.27 28.27zm0-46.53c10.07 0 18.27 8.2 18.27 18.27s-8.19 18.27-18.27 18.27-18.27-8.19-18.27-18.27 8.2-18.27 18.27-18.27zm-163.63 234.22c-13.23 2.35-23.32 13.93-23.32 27.82 0 15.59 12.68 28.27 28.27 28.27s28.27-12.68 28.27-28.27c0-13.85-10.02-25.4-23.18-27.8 7.65-89.85 66.09-147.66 105.08-176.63l-2.86 16.41c-.47 2.72 1.35 5.31 4.07 5.78.29.05.58.08.86.08 2.39 0 4.5-1.71 4.92-4.14l4.94-28.38c.47-2.72-1.35-5.31-4.07-5.78l-28.39-4.94c-2.72-.47-5.31 1.35-5.78 4.07s1.35 5.31 4.07 5.78l16.57 2.88c-40.56 30.06-101.75 90.45-109.45 184.85zm23.22 27.82c0 10.07-8.19 18.27-18.27 18.27-10.07 0-18.27-8.2-18.27-18.27s8.19-18.27 18.27-18.27c10.07.01 18.27 8.2 18.27 18.27zm104.45-150.7c1.95-1.95 5.12-1.95 7.07 0l11.46 11.46 11.46-11.46c1.95-1.95 5.12-1.95 7.07 0s1.95 5.12 0 7.07l-11.46 11.46 11.46 11.46c1.95 1.95 1.95 5.12 0 7.07-.98.98-2.26 1.46-3.54 1.46s-2.56-.49-3.54-1.46l-11.46-11.46-11.46 11.46c-1.95 1.95-5.12 1.95-7.07 0s-1.95-5.12 0-7.07l11.46-11.46-11.46-11.46c-1.95-1.95-1.95-5.12.01-7.07zm-148.02-9.54 11.46-11.46-11.46-11.47c-1.95-1.95-1.95-5.12 0-7.07s5.12-1.95 7.07 0l11.46 11.46 11.46-11.46c1.95-1.95 5.12-1.95 7.07 0s1.95 5.12 0 7.07l-11.46 11.46 11.46 11.46c1.95 1.95 1.95 5.12 0 7.07-.98.98-2.26 1.46-3.54 1.46s-2.56-.49-3.54-1.46l-11.46-11.46-11.45 11.47c-1.95 1.95-5.12 1.95-7.07 0s-1.95-5.12 0-7.07zm111.07 83.55-11.46 11.46 11.46 11.46c1.95 1.95 1.95 5.12 0 7.07-.98.98-2.26 1.46-3.54 1.46s-2.56-.49-3.54-1.46l-11.46-11.46-11.46 11.46c-1.95 1.95-5.12 1.95-7.07 0s-1.95-5.12 0-7.07l11.46-11.46-11.46-11.46c-1.95-1.95-1.95-5.12 0-7.07s5.12-1.95 7.07 0l11.46 11.46 11.46-11.46c1.95-1.95 5.12-1.95 7.07 0 1.96 1.95 1.96 5.11.01 7.07zm-66.67-202.11 11.46 11.46 11.46-11.46c1.95-1.95 5.12-1.95 7.07 0s1.95 5.12 0 7.07l-11.46 11.46 11.46 11.46c1.95 1.95 1.95 5.12 0 7.07-.98.98-2.26 1.46-3.54 1.46s-2.56-.49-3.54-1.46l-11.46-11.46-11.46 11.46c-1.95 1.95-5.12 1.95-7.07 0s-1.95-5.12 0-7.07l11.46-11.46-11.46-11.46c-1.95-1.95-1.95-5.12 0-7.07 1.96-1.96 5.12-1.95 7.08 0zm52.14-80.8c0-4.48 3.63-8.11 8.11-8.11s8.11 3.63 8.11 8.11-3.63 8.11-8.11 8.11c-4.49 0-8.11-3.63-8.11-8.11z" fill-rule="evenodd"></path></svg>}
              />
              <Card2
                title="Treinar e definir metas"
                description=""
                // description="Análise detalhada da sua empresa, identificando oportunidades de crescimento e áreas a serem aprimoradas."
                Icon={<svg className="h-12 w-12 text-my" xmlns="http://www.w3.org/2000/svg" id="Layer_3" viewBox="0 0 512 512"><path d="m16 104h232c4.418 0 8-3.582 8-8v-80c0-4.418-3.582-8-8-8h-232c-4.418 0-8 3.582-8 8v80c0 4.418 3.582 8 8 8zm8-80h216v64h-216z"></path><path d="m16 504h208c4.418 0 8-3.582 8-8v-80c0-4.418-3.582-8-8-8h-208c-4.418 0-8 3.582-8 8v80c0 4.418 3.582 8 8 8zm8-80h192v64h-192z"></path><path d="m256 383.912c1.256 0 2.496.088 3.76.088 31.18.139 62.072-5.976 90.848-17.984 3.332 7.275 7.858 13.94 13.392 19.72 6.224 6.574 10.214 14.945 11.4 23.92-9.256 3.552-15.374 12.43-15.4 22.344v16c0 13.255 10.745 24 24 24 0 17.673 14.327 32 32 32s32-14.327 32-32c13.255 0 24-10.745 24-24v-16c-.03-9.92-6.159-18.799-15.424-22.344 1.107-8.872 5.017-17.16 11.16-23.656 25.223-25.963 27.128-66.659 4.44-94.864l29.48-29.48c3.123-3.124 3.123-8.188 0-11.312l-35.2-35.2c-22.261-22.28-47.913-40.893-76-55.144h105.544c4.418 0 8-3.582 8-8v-136h-16v128h-16v-80h-16v80h-16v-56h-16v56h-16v-48h-16v48h-16v-32h-16v32h-7.4c-31.067-10.614-63.674-16.02-96.504-16h-.184c-78.998-.172-154.785 31.248-210.488 87.264l-35.08 35.08c-3.123 3.124-3.123 8.188 0 11.312l32.488 32.496c55.648 55.919 134.294 88.153 213.168 89.76zm-201.848-101.08-26.84-26.832 29.424-29.424c33.555-33.681 75.125-58.276 120.8-71.472-55.736 43.132-65.953 123.281-22.82 179.016 6.237 8.06 13.418 15.344 21.388 21.696-46.088-13.806-88.004-38.891-121.952-72.984zm361.848 205.168c-8.837 0-16-7.163-16-16h32c0 8.837-7.163 16-16 16zm40-40c0 4.418-3.582 8-8 8h-64c-4.418 0-8-3.582-8-8v-16c0-4.418 3.582-8 8-8h64c4.418 0 8 3.582 8 8zm.24-73.128c-8.671 9.056-14.17 20.68-15.672 33.128h-49.152c-1.583-12.526-7.144-24.214-15.864-33.344-21.39-22.339-20.62-57.788 1.719-79.177 22.339-21.39 57.788-20.62 79.177 1.719 20.816 21.739 20.724 56.046-.208 77.674zm28.448-118.872-23.824 23.824c-30.955-24.861-76.203-19.921-101.064 11.034-7.816 9.731-12.963 21.33-14.936 33.654-1.342 8.735-1.092 17.641.736 26.288-27.14 11.529-56.353 17.382-85.84 17.2-2.4 0-4.8-.12-7.2-.176-61.794-1.809-110.421-53.37-108.612-115.164 1.773-60.548 51.39-108.701 111.964-108.66h.088c61.827.071 111.929 50.173 112 112h16c-.031-39.511-18.343-76.783-49.6-100.952 45.647 13.165 87.192 37.734 120.72 71.392z"></path><path d="m410.344 77.656c3.124 3.123 8.188 3.123 11.312 0l56-56-11.312-11.312-50.344 50.344-18.344-18.344c-3.009-3.008-7.846-3.134-11.008-.288l-80 72 10.704 11.888 74.4-66.92z"></path><path d="m56 48h120v16h-120z"></path><path d="m192 48h32v16h-32z"></path><path d="m40 448h112v16h-112z"></path><path d="m256 184c-39.764 0-72 32.236-72 72s32.236 72 72 72 72-32.236 72-72c-.044-39.746-32.254-71.956-72-72zm0 128c-30.928 0-56-25.072-56-56s25.072-56 56-56 56 25.072 56 56c-.04 30.911-25.089 55.96-56 56z"></path><path d="m168 448h32v16h-32z"></path></svg>}
              />
              <Card2
                title="Vender para listas e interações"
                description=""
                // description="Perspectiva de quem já ajudou mais de 200 empresas a construírem times comerciais de alta performance."
                Icon={<svg className="h-12 w-12 text-my" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m212.117188 248.320312c5.242187-2.460937 8.347656-9.308593 8.347656-17.765624 0-14.234376-9.632813-19.15625-22.582032-19.15625-18.085937 0-23.4375 11.023437-23.4375 18.621093 0 4.496094.960938 5.996094 7.167969 5.996094 5.140625 0 6.636719-2.144531 6.636719-5.351563 0-4.28125 2.570312-7.171874 9.527344-7.171874 5.777344 0 9.417968 2.355468 9.417968 9.417968 0 9.203125-4.496093 10.488282-9.847656 10.488282-3.105468 0-4.175781 2.78125-4.175781 5.457031 0 2.78125 1.070313 5.457031 4.175781 5.457031 6.847656 0 11.773438 2.25 11.773438 10.167969v2.035156c0 8.132813-3.425782 11.558594-11.453125 11.558594-6.851563 0-11.132813-3-11.132813-7.8125 0-3.425781-1.496094-4.925781-7.167968-4.925781-4.816407 0-6.636719 1.179687-6.636719 5.460937 0 8.667969 7.0625 19.476563 24.617187 19.476563 14.125 0 25.683594-6.527344 25.683594-23.757813v-2.035156c0-8.882813-4.601562-13.699219-10.914062-16.160157zm0 0"></path><path d="m256.746094 223.597656c5.886718 0 10.917968 2.890625 10.917968 7.921875 0 4.171875 3.425782 5.242188 7.277344 5.242188 4.386719 0 6.527344-1.390625 6.527344-5.777344 0-8.992187-7.277344-19.585937-24.402344-19.585937-14.554687 0-25.792968 6.636718-25.792968 24.507812v29.863281c0 17.871094 11.023437 24.507813 25.152343 24.507813 14.128907 0 25.042969-6.636719 25.042969-24.507813v-1.5c0-16.910156-10.058594-22.152343-22.152344-22.152343-5.566406 0-10.703125 1.28125-14.234375 5.457031v-11.667969c0-8.453125 4.386719-12.308594 11.664063-12.308594zm-.425782 29.433594c7.0625 0 11.238282 3.316406 11.238282 12.199219v1.394531c0 8.453125-4.175782 12.308594-11.132813 12.308594-7.0625 0-11.34375-3.855469-11.34375-12.308594v-2.355469c0-8.136719 4.496094-11.238281 11.238281-11.238281zm0 0"></path><path d="m340.230469 235.90625c0-17.871094-11.023438-24.507812-25.152344-24.507812s-25.042969 6.636718-25.042969 24.507812v29.859375c0 17.875 10.914063 24.511719 25.042969 24.511719s25.152344-6.636719 25.152344-24.511719zm-13.914063 29.859375c0 8.457031-4.28125 12.308594-11.238281 12.308594-7.0625 0-11.132813-3.851563-11.132813-12.308594v-29.859375c0-8.453125 4.070313-12.308594 11.132813-12.308594 6.957031 0 11.238281 3.855469 11.238281 12.308594zm0 0"></path><path d="m512 255.566406c-.105469-61.59375-22.382812-121.058594-62.761719-167.488281-2.71875-3.125-7.457031-3.453125-10.582031-.734375s-3.453125 7.457031-.734375 10.582031c26.050781 29.953125 44.09375 65.671875 52.90625 103.847657-12.988281-15.707032-31.742187-30.042969-55.695313-42.289063-17.960937-9.179687-38.109374-16.820313-59.835937-22.78125-5.960937-21.726563-13.597656-41.875-22.78125-59.835937-12.246094-23.953126-26.578125-42.707032-42.285156-55.691407 38.007812 8.773438 73.585937 26.699219 103.449219 52.558594 3.128906 2.710937 7.867187 2.371094 10.578124-.757813 2.710938-3.132812 2.371094-7.871093-.761718-10.582031-46.46875-40.234375-105.953125-62.394531-167.496094-62.394531-68.378906 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531v.433594c.105469 61.566406 22.367188 121.015625 62.71875 167.433594 1.480469 1.707031 3.566406 2.578124 5.660156 2.578124 1.746094 0 3.5-.601562 4.917969-1.835937 3.128906-2.71875 3.457031-7.457031.738281-10.582031-26.023437-29.941406-44.054687-65.644532-52.859375-103.800782 12.984375 15.707032 31.738281 30.042969 55.695313 42.289063 17.957031 9.179687 38.105468 16.820313 59.832031 22.78125 5.960937 21.726563 13.601563 41.875 22.78125 59.835937 12.246094 23.953126 26.582031 42.707032 42.289063 55.691407-38.15625-8.804688-73.859376-26.835938-103.800782-52.863281-3.125-2.714844-7.863281-2.386719-10.578125.742187-2.71875 3.125-2.386719 7.863281.738281 10.578125 46.421876 40.351562 105.867188 62.613281 167.433594 62.71875h.433594c68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-.144531 0-.289062 0-.433594zm-426.414062-169.980468c32.519531-32.515626 72.691406-54.597657 116.457031-64.558594-16.316407 13.40625-31.128907 32.945312-43.566407 57.828125l-8.296874-24.828125c-1.316407-3.929688-5.5625-6.050782-9.492188-4.738282s-6.046875 5.5625-4.734375 9.492188l14.332031 42.886719c1.050782 3.140625 3.976563 5.125 7.113282 5.125.789062 0 1.589843-.125 2.378906-.386719l42.886718-14.335938c3.929688-1.3125 6.050782-5.5625 4.738282-9.492187-1.3125-3.925781-5.558594-6.046875-9.492188-4.734375l-26.609375 8.894531c22.550781-45.824219 52.890625-71.738281 84.699219-71.738281 30.976562 0 60.511719 24.398438 83.160156 68.699219 7.566406 14.800781 14.039063 31.191406 19.332032 48.796875-31.886719-7.238282-66.636719-11.046875-102.492188-11.046875-67.542969 0-131.15625 13.507812-179.128906 38.035156-24.027344 12.285156-42.824219 26.667969-55.8125 42.429687 9.972656-43.714843 32.042968-83.839843 64.527344-116.328124zm46.910156 272.90625c-17.601563-5.292969-33.996094-11.765626-48.796875-19.332032-44.300781-22.648437-68.699219-52.183594-68.699219-83.160156s24.398438-60.511719 68.699219-83.160156c14.808593-7.570313 31.210937-14.046875 48.828125-19.34375-7.351563 32.273437-11.078125 66.6875-11.078125 102.503906 0 35.855469 3.808593 70.605469 11.046875 102.492188zm123.503906 138.507812c-30.976562 0-60.511719-24.398438-83.160156-68.699219-7.566406-14.800781-14.039063-31.191406-19.332032-48.796875 31.886719 7.238282 66.636719 11.046875 102.492188 11.046875 17.714844 0 35.300781-.9375 52.484375-2.796875l-16.386719 22.917969c-2.410156 3.367187-1.632812 8.054687 1.738282 10.464844 1.320312.941406 2.84375 1.398437 4.355468 1.398437 2.335938 0 4.640625-1.089844 6.105469-3.136718l26.300781-36.785157c.875-1.222656 1.355469-2.667969 1.398438-4.148437.015625-.457032-.007813-.917969-.074219-1.386719-.363281-2.484375-1.902344-4.503906-3.972656-5.578125l-35.875-25.652344c-3.367188-2.40625-8.050781-1.632812-10.460938 1.738282-2.410156 3.367187-1.632812 8.054687 1.738281 10.464843l21.050782 15.050781c-15.863282 1.628907-32.074219 2.449219-48.40625 2.449219-37.75 0-74.148438-4.332031-107.019532-12.53125-8.199218-32.867187-12.53125-69.269531-12.53125-107.019531 0-37.628906 4.234376-73.613281 12.582032-107.03125 32.859375-8.191406 69.242187-12.519531 106.972656-12.519531 37.75 0 74.152344 4.332031 107.019531 12.53125 8.199219 32.867187 12.53125 69.269531 12.53125 107.019531 0 39.074219-4.640625 76.703125-13.40625 110.464844-.199219.511718-.339843 1.050781-.421875 1.601562-5.8125 21.96875-13.378906 42.273438-22.5625 60.234375-22.648437 44.300781-52.183594 68.699219-83.160156 68.699219zm170.414062-70.585938c-32.488281 32.484376-72.613281 54.554688-116.328124 64.53125 15.761718-12.992187 30.144531-31.785156 42.429687-55.8125 9.1875-17.96875 16.828125-38.128906 22.789063-59.871093 52.75-14.460938 92.9375-37.628907 115.671874-65.328125-9.957031 43.773437-32.039062 83.957031-64.5625 116.480468zm35.789063-109.035156c-20.605469 16.878906-49.011719 30.960938-82.691406 41.066406 7.234375-31.875 11.039062-66.609374 11.039062-102.445312 0-35.855469-3.808593-70.605469-11.046875-102.496094 17.601563 5.296875 33.996094 11.765625 48.796875 19.335938 44.300781 22.648437 68.699219 52.183594 68.699219 83.160156 0 21.507812-12.03125 42.734375-34.796875 61.378906zm0 0"></path></svg>}
              />
            </div>
            {/* <p className="text-lg font-medium text-center translate-y-4">Conheça o verdadeiro poder de um Closer de Alta Performance</p> */}
            <div className="flex justify-center">
              <Button isOpen={isOpen} setIsOpen={setIsOpen}>Preencha a Aplicação</Button>
            </div>
          </div>
        </Section>
        <Section classNameS="relative img-bg bg-my px-4 sm:pt-0 h-[1000px]" className="flex justify-center">
          <Image
            src="/images/bg-2mob.webp"
            layout="fill"
            alt=""
            objectFit="cover"
            className="sm:hidden block"
          />
          <div className="sm:grid sm:grid-cols-2 z-50 sm:pt-0 pt-[28rem]">
            <div></div>
            <div className="flex flex-col gap-6 text-white sm:text-left text-center">
              <div className="flex flex-col gap-2">
                <h4 className="text-xl text-[#d8647c]">Quem é</h4>
                <h2 className="text-2xl sm:text-5xl font-bold">Sharon Santos</h2>
              </div>
              <div className="flex flex-col gap-4 font-thin text-zinc-300 text-sm sm:text-lg sm:max-w-full max-w-xs">
                <p>Já gerou mais de 2 milhões em vendas, terceirizando e construindo equipes comerciais. E desde então decidiu ajudar outros negócios digitais a plugar e escalarem o seu setor comercial através de mentorias.</p>
                <p>Especialista em gestão e criação de time comerciais capacitados e orientados para negócios digitais. Há 5 anos na área de vendas, onde desenvolveu habilidade da gestão de time, treinamentos e seleção para contratação.</p>
                <p>Entregando mais de 40% de conversão para com equipes comerciais através de inteligência em vendas e boas práticas de gestão.</p>
                <p>Você não consegue fazer sozinho o que uma equipe faria por você!</p>
              </div>
              <div className="max-w-xs text-black">
                <Button isOpen={isOpen} setIsOpen={setIsOpen}>Preencha a Aplicacao</Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer className="py-8 bg-white text-sm text-center flex flex-col items-center justify-center">
        <p>Copyright © 2025 | Todos os direitos reservados</p>
      </footer>
      {isOpen && (
        <FormLive
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isca={true}
          funil="Live"
        />
      )}
    </div>
  )
}