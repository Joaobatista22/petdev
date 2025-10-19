import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dodImage from "../../../public/undraw_dog_jfxm.svg";
import dodSecondImg from "../../../public/undraw_relaxing-walk_hvua.svg";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-[#7F03BB] text-white py-8 px-5 text-center relative overflow-hidden">
      <div>
        <Image
          src={dodImage}
          alt="foto cachorro"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
      </div>
      <article className="grid grid-cols-1 gap-2 items-center lg:grid-cols-2 relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Seu pet merece cuidado, carinho e atenção especial.
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Oferecemos os melhores serviços para garantir o bem-estar e a
            felicidade do seu amigo de quatro patas.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 rounded-lg p-4">
            <div className="p-2 flex-shrink-0 object-cover hidden md:block">
              <Image
                src={dodSecondImg}
                alt="foto cachorro"
                width={200}
                height={200}
                className="object-contain"
                quality={100}
                priority
              />
            </div>

            {/* Botão e desconto */}
            <div className="flex flex-col lg:justify-center text-center lg:text-left gap-5">
              <a
                href="#get-started"
                className="bg-white text-[#7F03BB] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center lg:justify-start"
              >
                <WhatsappLogoIcon className="w-8 h-8 mr-2" />
                Contato via WhatsApp
              </a>
              <p className="text-sm md:text-base">
                <b className="bg-white text-[#7F03BB] py-1 px-2 rounded-md">
                  5%
                </b>{" "}
                de desconto no primeiro serviço!
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block h-full w-full relative">
          <Image
            src={dodImage}
            alt="foto cachorro"
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            priority
          />
        </div>
      </article>
    </section>
  );
}
