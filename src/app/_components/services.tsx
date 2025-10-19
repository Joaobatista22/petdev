"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  ChevronLeft,
  ChevronRight,
  PawPrint,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Banner from "../../../public/adotebanner.svg";

const services = [
  {
    title: "Banho e Tosa",
    description:
      "Oferecemos serviços completos de banho e tosa para manter seu pet limpo e saudável.",
    duration: "30-60 minutos",
    price: "R$ 80 - R$ 150",
    icon: <Scissors className="w-8 h-8 text-blue-500" />,
    linkText: "Agende um Banho e Tosa",
    linkUrl:
      "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20banho%20e%20tosa%20para%20meu%20pet.",
  },
  {
    title: "Vacinação",
    description:
      "Proteja seu pet com nosso serviço de vacinação, garantindo a saúde e bem-estar dele.",
    duration: "15-30 minutos",
    price: "R$ 100 - R$ 200",
    icon: <Syringe className="w-8 h-8 text-green-500" />,
    linkText: "Agende uma Vacinação",
    linkUrl:
      "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20vacina%C3%A7%C3%A3o%20para%20meu%20pet.",
  },
  {
    title: "Transporte Pet",
    description:
      "Serviço de transporte seguro e confortável para levar seu pet onde ele precisar.",
    duration: "Variável",
    price: "R$ 50 - R$ 200",
    icon: <CarTaxiFront className="w-8 h-8 text-yellow-500" />,
    linkText: "Agende um Transporte",
    linkUrl:
      "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20transporte%20para%20meu%20pet.",
  },
  {
    title: "Hotel para Pets",
    description:
      "Oferecemos hospedagem confortável e segura para seu pet enquanto você estiver ausente.",
    duration: "Diária",
    price: "R$ 100 - R$ 300",
    icon: <Hotel className="w-8 h-8 text-purple-500" />,
    linkText: "Agende uma Hospedagem",
    linkUrl:
      "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20hospedagem%20para%20meu%20pet.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="w-full bg-gray-100 text-gray-800">
      <div className="container max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Nossos Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] rounded-2xl p-6 h-full flex flex-col space-y-4">
                    <span className="text-3xl">{service.icon}</span>

                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-5">
                      {service.description}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Duração: {service.duration}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      Preço: {service.price}
                    </p>
                    <div className="border-t border-gray-700"></div>
                    <a
                      href={service.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center px-4 py-2 text-white rounded-md hover:bg-[#7F03BB] transition"
                    >
                      <WhatsappLogoIcon className="w-5 h-5 mr-2" />
                      {service.linkText}
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>
          {/* Botões de navegação */}
          <button
            type="button"
            onClick={scrollPrev}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-[#7F03BB]" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 hover:text-[#7F03BB]" />
          </button>
        </div>
      </div>

      {/* Banner fora do container para ocupar full width */}
      <div className="mt-3 relative">
        <Image
          src={Banner}
          alt="Banner PetDev"
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
