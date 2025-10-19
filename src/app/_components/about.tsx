import { Check } from "lucide-react";
import abount1Img from "../../../public/banho.jpg";
import abount2Img from "../../../public/happy-dog-cat-together_1194-588955.jpg";
import backgroundAdress from "../../../public/backroung.svg";
import addressDog from "../../../public/dogaddres.svg";
import Image from "next/image";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="w-full bg-gray-100 text-gray-800 py-8 px-5 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          {/* Imagem */}
          <div className="relative w-full h-80 lg:h-[500px]">
            <Image
              src={abount1Img}
              alt="Sobre Nós"
              fill
              className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              quality={100}
              priority
            />
          </div>
          {/* Imagem menor */}
          <div className="absolute w-30 h-30 lg:w-40 lg:h-40 rounded-lg overflow-hidden border-4 border-white shadow-lg -bottom-10 right-4">
            <Image
              src={abount2Img}
              alt="foto menor"
              fill
              quality={100}
              priority
            />
          </div>
        </div>
        {/* Conteúdo */}
        <div className="flex flex-col justify-center gap-6 text-center lg:text-left pt-12">
          <h2 className="text-3xl md:text-5xl font-bold">Sobre Nós</h2>
          <p className="text-lg md:text-2xl">
            Somos apaixonados por cuidar do seu pet. Nossa equipe dedicada
            oferece serviços de alta qualidade para garantir que seu amigo de
            quatro patas receba o melhor cuidado possível.
          </p>
          <p className="text-sm md:text-base">
            Nossa missão é proporcionar um ambiente seguro e amoroso para todos
            os pets, garantindo que cada visita seja uma experiência positiva e
            agradável.
          </p>
          <ul>
            <li className="flex items-center gap-2 text-sm md:text-base">
              <Check className="text-red-500" /> Banho e Tosa
            </li>
            <li className="flex items-center gap-2 text-sm md:text-base">
              <Check className="text-red-500" /> Consultas Veterinárias
            </li>
            <li className="flex items-center gap-2 text-sm md:text-base">
              <Check className="text-red-500" /> Hospedagem
            </li>
          </ul>
          <a
            href="#get-started"
            className="w-full lg:w-[50%] bg-white hover:text-white text-[#7F03BB] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#5FFC7B] transition flex items-center justify-center lg:justify-start"
          >
            <WhatsappLogoIcon className="w-8 h-8 mr-2" />
            Contato via WhatsApp
          </a>
        </div>
      </div>

      <div className="relative w-full mt-20 rounded-2xl overflow-hidden">
        {/* Banner de fundo */}
        <div className="w-full lg:h-[580px]">
          <Image
            src={backgroundAdress}
            alt="background"
            className="w-full object-cover"
          />
        </div>

        {/* Conteúdo por cima do background */}
        <div className="absolute inset-0 flex flex-col items-center text-center ">
          <h1 className="mt-6 text-white text-2xl drop-shadow-lg font-black lg:text-4xl">
            ONDE ESTAMOS{" "}
            <span className="text-blue-950 text-3xl font-black lg:text-5xl">
              LOCALIZADOS?
            </span>
          </h1>

          {/* Grid dentro do background */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto">
            {/* Coluna da Imagem */}
            <div className="flex justify-center md:justify-end w-full">
              <Image
                src={addressDog}
                alt="imagem endereço"
                className="w-50 h-auto object-cover md:w-72 lg:w-100 pt-4"
                style={{ filter: "drop-shadow(0 4px 6px black)" }}
              />
            </div>

            {/* Coluna dos Endereços */}
            <div className="flex flex-row sm:flex-col flex-wrap justify-center md:justify-start items-center md:items-start text-white gap-4 lg:p-5 lg:pt-20">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-blue-950 font-bold text-xs lg:text-2xl">
                  ENDEREÇO 1:
                </p>
                <p className="font-black text-sm leading-4 drop-shadow-lg text-center md:text-left lg:text-2xl lg:leading-6">
                  Rua Alegre, 123
                  <br />
                  Cidade Brasileira
                  <br />
                  Estado, País
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-blue-950 font-bold text-xs lg:text-2xl">
                  ENDEREÇO 2:
                </p>
                <p className="font-black text-sm leading-4 drop-shadow-lg text-center md:text-left lg:text-2xl lg:leading-6">
                  Rua Alegre, 123
                  <br />
                  Cidade Brasileira
                  <br />
                  Estado, País
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
