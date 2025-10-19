// components/Partners.tsx
import Image from "next/image";
import styles from "./Partners.module.css";
import { Award, Heart } from "lucide-react";
import HeroImage from "../../../public/dog-is-looking-plate-peanuts_890580-914.jpg";

const partners = [
  { id: 1, src: "/logos/pedigree.png", alt: "Pedigree" },
  { id: 2, src: "/logos/royalcanin.jpg", alt: "Royal Canin" },
  { id: 3, src: "/logos/whiskas.png", alt: "Whiskas" },
  { id: 4, src: "/logos/hills.png", alt: "Hills" },
  { id: 5, src: "/logos/bosch.png", alt: "Bosch" },
  { id: 6, src: "/logos/advance.png", alt: "Advance" },
];

export default function Partners() {
  return (
    <section className="w-full bg-gray-20 py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Nossos Parceiros</h2>
        <p className="text-gray-600">As melhores marcas para seu pet</p>
      </div>
      <div className="w-100% h-25 flex">
        <div className={styles.sliderContainer}>
          <div className={styles.sliderTrack}>
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={partner.id + "-" + index}
                className={styles.sliderItemImg}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:items-start gap-6">
        {/* Coluna dos Cards */}
        <div className="h-full flex flex-col gap-6 items-center lg:flex-row lg:justify-end ">
          <div className="bg-white w-72 rounded-3xl p-6 border border-gray-100 shadow-xl lg:shadow-2xl transition">
            <div className="ml-4 w-10 h-10 flex items-center justify-center rounded-lg bg-pink-100 mb-4">
              <span className="text-pink-600 text-xl">
                <Heart className="text-pink-950 w-6 h-6" />
              </span>
            </div>
            <h3 className="ml-4 text-lg font-semibold text-gray-800">
              Pet Saudável
            </h3>
            <p className="ml-4 text-gray-500 text-sm mt-2">
              Ração de qualidade promove saúde, energia, bem-estar e nutrição
              completa para o seu companheiro.
            </p>
          </div>

          <div className="bg-white w-72 rounded-3xl p-6 border border-gray-100 shadow-xl lg:shadow-2xl transition">
            <div className="ml-4 w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100 mb-4">
              <span className="text-yellow-500 text-xl">
                <Award className="text-yellow-600 w-6 h-6" />
              </span>
            </div>
            <h3 className="ml-4 text-lg font-semibold text-gray-800">
              Qualidade
            </h3>
            <p className="ml-4 text-gray-500 text-sm mt-2">
              Uma boa ração não só mantém seu pet saudável, como também
              fortalece seu corpo, contribui para uma vida longa e feliz.
            </p>
          </div>
        </div>

        {/* Coluna da Imagem */}
<div className="flex lg:block  justify-center lg:justify-end mt-12 lg:mt-0">

          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[500px] overflow-hidden border-8 border-white shadow-lg rounded-[60%_40%_30%_60%/60%_30%_70%_30%] relative z-10">
            <Image
              src={HeroImage}
              alt="Parceiros"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
