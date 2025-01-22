import { Button } from "@/components/button";
import Calendar from "@/components/calendar";
import Card from "@/components/card";
import { Header } from "@/components/header";
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
      <Header
        title={<span>Nutricionista irá Revelar em 2 dias De Forma Inédita:</span>}
        description={<>Como se tornar <strong>Referência </strong> em Suplementação Materno Infantil na sua cidade e <strong>atender 10 Pacientes Novas em tempo Record.</strong></>}
        searchParams={searchParams}
      />
      <main className="bg-black">
        <Section
          className="py-12 sm:py-12 px-4"
        >
          <div className="w-full max-w-4xl flex flex-col gap-4">
            <h2 className="text-xl sm:text-3xl text-white text-center">A Alta Demanda por Nutricionistas <br className="sm:block hidden" />Materno-Infantil Aumenta <strong className="text-[#C4DC73]">TODOS OS DIAS</strong></h2>
            <Slider />
          </div>
        </Section>
        <Section
          className="py-4 sm:py-12 px-4"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-xl sm:text-3xl text-white text-center">Quem participou das auals <br className="sm:block hidden" />Recomenda <strong className="text-[#C4DC73]">TODOS OS DIAS</strong></h2>
            <div className="flex gap-8 justify-center flex-wrap">
              <video
                src="/images/vid01.mp4"
                className="rounded-3xl"
                controls
                preload="metadata"
                poster="/images/thumb01.png"
                playsInline
                muted
                loop
                style={{
                  maxWidth: '256px',
                  height: '452px',
                  display: 'block',
                }}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <video
                src="/images/vid02.mp4"
                className="rounded-3xl"
                controls
                preload="metadata"
                poster="/images/thumb02.png"
                playsInline
                muted
                loop
                style={{
                  maxWidth: '256px',
                  height: '452px',
                  display: 'block',
                }}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <video
                src="/images/vid03.mp4"
                className="rounded-3xl"
                controls
                preload="metadata"
                poster="/images/thumb03.png"
                playsInline
                muted
                loop
                style={{
                  maxWidth: '256px',
                  height: '452px',
                  display: 'block',
                }}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </Section>
        <Section
          className="pb-0 sm:py-12 px-4"
        >
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl sm:text-3xl text-white text-center max-w-2xl">Uma imersão prática com estudos de caso para você <strong className="text-[#C4DC73]">NÃO COMETER</strong> os erros em atender essa demanda que só cresce…</h2>
            <div className="relative sm:w-[1060px] sm:h-[537px]">
              <Image
                src="/images/noticia.png"
                alt="Notícia"
                layout="fill"
                // width={1060}
                // height={537}
                objectFit="contain"
              />
            </div>
          </div>
        </Section>
        <section
          className="pt-0 pb-12 sm:py-12"
        >
          <div className="sm:grid sm:grid-cols-2 flex flex-col">
            <div className="rounded-r-[32px] linear-01 py-12 sm:py-24 flex justify-end px-12">
              <div className="max-w-md flex flex-col gap-6">
                <h4 className="text-[#265922] text-2xl font-bold max-w-md">DIA 1 - Fundamentos da Suplementação Materno-Infantil</h4>
                <ul className="relative flex flex-col gap-3 text-[#265922]">
                  <li className="relative flex items ps-4">
                    <div className="h-[6px] w-[6px] absolute top-2 left-0 bg-[#265922] rounded-full"></div>
                    <p>Como identificar a real necessidade nutricional das mães e crianças.</p>
                  </li>
                  <li className="relative flex items ps-4">
                    <div className="h-[6px] w-[6px] absolute top-2 left-0 bg-[#265922] rounded-full"></div>
                    <p>A fórmula para criar protocolos personalizados que geram resultados rápidos.</p>
                  </li>
                  <li className="relative flex items ps-4">
                    <div className="h-[6px] w-[6px] absolute top-2 left-0 bg-[#265922] rounded-full"></div>
                    <p>Estudo de casos práticos: Exemplos reais de estratégias que deram certo.</p>
                  </li>
                  <li className="relative flex items ps-4">
                    <div className="h-[6px] w-[6px] absolute top-2 left-0 bg-[#265922] rounded-full"></div>
                    <p>Evitando os 5 principais erros que prejudicam o atendimento e a fidelização</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-r-[32px] pb-0 pt-12 sm:py-24 flex justify-start px-12 text-white">
              <div className="max-w-md flex flex-col gap-6">
                <h4 className="text-2xl font-bold max-w-md">DIA 2 - Estratégias para Ser Referência na Sua Cidade</h4>
                <ul className="relative flex flex-col gap-3">
                  <li className="relative flex items ps-4">
                    <div className="h-[6px] w-[6px] absolute top-2 left-0 bg-white rounded-full"></div>
                    <p className="text-zinc-300">Como montar uma estratégia de marketing profissional sem depender de planos de saúde. </p>
                  </li>
                  <li className="relative flex items ps-4">
                    <div className="h-[6px] w-[6px] absolute top-2 left-0 bg-white rounded-full"></div>
                    <p className="text-zinc-300">Técnicas exclusivas para atrair pacientes com alto poder aquisitivo. </p>
                  </li>
                  <li className="relative flex items ps-4">
                    <div className="h-[6px] w-[6px] absolute top-2 left-0 bg-white rounded-full"></div>
                    <p className="text-zinc-300">Criando autoridade e construindo uma reputação sólida nas redes sociais. </p>
                  </li>
                  <li className="relative flex items ps-4">
                    <div className="h-[6px] w-[6px] absolute top-2 left-0 bg-white rounded-full"></div>
                    <p className="text-zinc-300">Passo a passo para organizar sua agenda e atender mais pacientes, liberando mais tempo para sua família.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Section
          className="pt-0 pb-12 sm:py-12 px-4"
        >
          <div className="flex flex-col gap-12 items-center">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center max-w-2xl">Bônus <strong className="text-[#C4DC73]">Exclusivos</strong> Liberados</h2>
              <p className="text-white text-zinc-300">Ao concluir sua inscrição, você irá receber o acesso imediato a todos esses bônus:</p>
            </div>
            <div className="flex flex-col gap-16">
                <Card
                  title="Guia completo de suplementação:"
                  description="Um guia prático com as principais informações sobre os nutrientes essenciais na nutrição materno infantil, indicações de suplementação, dosagens recomendadas e cuidados a serem tomados."
                  imagePath="bn1.png"
                  label="Bônus 1"
                />
                <Card
                  title="Modelos de planos de suplementação:"
                  description="Modelos personalizáveis para que vocês possam criar planos de suplementação individualizados para seus pacientes."
                  imagePath="bn2.png"
                  label="Bônus 2"
                />
                <Card
                  title="Compilado de artigos científicos:"
                  description="Uma seleção de 20 artigos científicos relevantes sobre suplementação materno-infantil, para aprofundar o conhecimento e estudos."
                  imagePath="bn3.png"
                  label="Bônus 3"
                />
            </div>
          </div>
        </Section>
        <Section
          className="py-12 sm:py-12 px-4"
        >
          <div className="w-[334px] linear-02 flex flex-col items-center gap-4 rounded-2xl">
            <div className="w-full py-6 px-6 border-b-4 border-[#573C08]">
              <h5 className="text-3xl text-[#573C08] text-center">Ingresso <strong>Gold:</strong></h5>
            </div>
            <div className="max-w-[269px] flex flex-col gap-5 px-4">
              <ul className="flex flex-col gap-2">
                <li className="relative flex items-center ps-7">
                  <svg className="w-6 h-6 absolute left-0" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.084C12.9445 22.084 14.3749 21.7995 15.7095 21.2467C17.0441 20.6939 18.2567 19.8836 19.2782 18.8622C20.2996 17.8407 21.1099 16.6281 21.6627 15.2935C22.2155 13.9589 22.5 12.5285 22.5 11.084C22.5 9.63944 22.2155 8.20905 21.6627 6.87447C21.1099 5.53989 20.2996 4.32725 19.2782 3.30581C18.2567 2.28436 17.0441 1.47411 15.7095 0.921309C14.3749 0.368508 12.9445 0.0839844 11.5 0.0839844C8.58262 0.0839844 5.78473 1.24291 3.72183 3.30581C1.65893 5.36871 0.5 8.1666 0.5 11.084C0.5 14.0014 1.65893 16.7993 3.72183 18.8622C5.78473 20.9251 8.58262 22.084 11.5 22.084ZM11.2164 15.5329L17.3276 8.19954L15.4502 6.63509L10.1947 12.9405L7.47522 10.2199L5.747 11.9481L9.41367 15.6148L10.3597 16.5608L11.2164 15.5329Z" fill="#573C08" />
                  </svg>
                  <p className="text-[#573C08]">Acesso aos 2 dias do evento online</p>
                </li>
                <li className="relative flex items-center ps-7">
                  <svg className="w-6 h-6 absolute left-0" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.084C12.9445 22.084 14.3749 21.7995 15.7095 21.2467C17.0441 20.6939 18.2567 19.8836 19.2782 18.8622C20.2996 17.8407 21.1099 16.6281 21.6627 15.2935C22.2155 13.9589 22.5 12.5285 22.5 11.084C22.5 9.63944 22.2155 8.20905 21.6627 6.87447C21.1099 5.53989 20.2996 4.32725 19.2782 3.30581C18.2567 2.28436 17.0441 1.47411 15.7095 0.921309C14.3749 0.368508 12.9445 0.0839844 11.5 0.0839844C8.58262 0.0839844 5.78473 1.24291 3.72183 3.30581C1.65893 5.36871 0.5 8.1666 0.5 11.084C0.5 14.0014 1.65893 16.7993 3.72183 18.8622C5.78473 20.9251 8.58262 22.084 11.5 22.084ZM11.2164 15.5329L17.3276 8.19954L15.4502 6.63509L10.1947 12.9405L7.47522 10.2199L5.747 11.9481L9.41367 15.6148L10.3597 16.5608L11.2164 15.5329Z" fill="#573C08" />
                  </svg>
                  <p className="text-[#573C08]">Acesso ao grupo de Whatsapp Exclusivo</p>
                </li>
                <li className="relative flex items-center ps-7">
                  <svg className="w-6 h-6 absolute left-0" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.084C12.9445 22.084 14.3749 21.7995 15.7095 21.2467C17.0441 20.6939 18.2567 19.8836 19.2782 18.8622C20.2996 17.8407 21.1099 16.6281 21.6627 15.2935C22.2155 13.9589 22.5 12.5285 22.5 11.084C22.5 9.63944 22.2155 8.20905 21.6627 6.87447C21.1099 5.53989 20.2996 4.32725 19.2782 3.30581C18.2567 2.28436 17.0441 1.47411 15.7095 0.921309C14.3749 0.368508 12.9445 0.0839844 11.5 0.0839844C8.58262 0.0839844 5.78473 1.24291 3.72183 3.30581C1.65893 5.36871 0.5 8.1666 0.5 11.084C0.5 14.0014 1.65893 16.7993 3.72183 18.8622C5.78473 20.9251 8.58262 22.084 11.5 22.084ZM11.2164 15.5329L17.3276 8.19954L15.4502 6.63509L10.1947 12.9405L7.47522 10.2199L5.747 11.9481L9.41367 15.6148L10.3597 16.5608L11.2164 15.5329Z" fill="#573C08" />
                  </svg>
                  <p className="text-[#573C08]">Gravação do Evento por 30 dias</p>
                </li>
                <li className="relative flex items-center ps-7">
                  <svg className="w-6 h-6 absolute left-0" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.084C12.9445 22.084 14.3749 21.7995 15.7095 21.2467C17.0441 20.6939 18.2567 19.8836 19.2782 18.8622C20.2996 17.8407 21.1099 16.6281 21.6627 15.2935C22.2155 13.9589 22.5 12.5285 22.5 11.084C22.5 9.63944 22.2155 8.20905 21.6627 6.87447C21.1099 5.53989 20.2996 4.32725 19.2782 3.30581C18.2567 2.28436 17.0441 1.47411 15.7095 0.921309C14.3749 0.368508 12.9445 0.0839844 11.5 0.0839844C8.58262 0.0839844 5.78473 1.24291 3.72183 3.30581C1.65893 5.36871 0.5 8.1666 0.5 11.084C0.5 14.0014 1.65893 16.7993 3.72183 18.8622C5.78473 20.9251 8.58262 22.084 11.5 22.084ZM11.2164 15.5329L17.3276 8.19954L15.4502 6.63509L10.1947 12.9405L7.47522 10.2199L5.747 11.9481L9.41367 15.6148L10.3597 16.5608L11.2164 15.5329Z" fill="#573C08" />
                  </svg>
                  <p className="text-[#573C08]">Apostila Digital</p>
                </li>
                <li className="relative flex items-center ps-7">
                  <svg className="w-6 h-6 absolute left-0" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 22.084C12.9445 22.084 14.3749 21.7995 15.7095 21.2467C17.0441 20.6939 18.2567 19.8836 19.2782 18.8622C20.2996 17.8407 21.1099 16.6281 21.6627 15.2935C22.2155 13.9589 22.5 12.5285 22.5 11.084C22.5 9.63944 22.2155 8.20905 21.6627 6.87447C21.1099 5.53989 20.2996 4.32725 19.2782 3.30581C18.2567 2.28436 17.0441 1.47411 15.7095 0.921309C14.3749 0.368508 12.9445 0.0839844 11.5 0.0839844C8.58262 0.0839844 5.78473 1.24291 3.72183 3.30581C1.65893 5.36871 0.5 8.1666 0.5 11.084C0.5 14.0014 1.65893 16.7993 3.72183 18.8622C5.78473 20.9251 8.58262 22.084 11.5 22.084ZM11.2164 15.5329L17.3276 8.19954L15.4502 6.63509L10.1947 12.9405L7.47522 10.2199L5.747 11.9481L9.41367 15.6148L10.3597 16.5608L11.2164 15.5329Z" fill="#573C08" />
                  </svg>
                  <p className="text-[#573C08]">Brindes exclusivos</p>
                </li>
              </ul>
              <div className="flex flex-col items-center">
                <p className="line-through text-xl text-[#D3A851]">De R$197</p>
                <p className="-mt-4  font-bold">
                  <span className="text-lg">R$</span>
                  <span className="text-[88px] text-[#573C08]">47</span>
                </p>
              </div>
            </div>
            <div className="pb-8 -mt-6">
              <Button>Quero garantir minha vaga</Button>
            </div>
          </div>
        </Section>
        <div className="bg-02">
          <Section
            className="relative py-12 sm:py-12 px-4"
          >
            <div className="sm:grid sm:grid-cols-2 text-white">
              <div></div>
              <div className="flex flex-col gap-4 max-w-lg">
                <h4 className="text-3xl">Quem é A Nutricionista <br /><strong>Fabiana Montanholi</strong>?</h4>
                <div className="flex flex-col gap-4 text-zinc-300">
                  <p>Fabiana Montanholi é nutricionista com mais de 10 anos de experiência e uma das maiores referências em Suplementação Materno-Infantil no Brasil. </p>
                  <p>Atualmente, Fabiana dedica-se a capacitar outros nutricionistas a se tornarem autoridades em suplementação materno-infantil, através de cursos, workshops e mentorias, ajudando-os a crescerem profissionalmente e conquistarem mais tempo e liberdade financeira. </p>
                  <h6 className="font-semibold text-white text-lg">Reconhecida por:</h6>
                  <ul className="">
                    <li>✅ Atendimentos personalizados com resultados comprovados.</li>
                    <li>✅ Estratégias práticas que aumentam a fidelização de pacientes.</li>
                    <li>✅ Dedicação em formar profissionais que se destacam no mercado.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <footer className="py-4 bg-zinc-900 text-white text-sm text-center flex flex-col items-center justify-center">
        <p>Copyright © 2025 | Todos os direitos reservados</p>
      </footer>
    </div>
  )
}