import mapaBrasil from "../../../public/mapa.svg";
import dodSecondImg from "../../../public/undraw_relaxing-walk_hvua.svg";
import Image from "next/image";

export function HeaderPage() {
  return (
    <footer className="w-full bg-[#1e293b]  text-white p-4">
      <article className="grid grid-cols-3 gap-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center md:justify-start items-center gap-2 mb-3">
            <h2 className="text-xl font-semibold text-white lg:text-2xl">Institucional</h2>
          </div>
          <div className="space-y-1">
            <p className="text-sm">Trabalhe conosco</p>
            <p className="text-sm">Política de privacidade</p>
            <p className="text-sm">Termos de uso</p>
          </div>
        </div>
                <div className="max-w-7xl mx-auto">
          <div className="flex justify-center md:justify-start items-center gap-2 mb-3">
           <h2 className="text-xl font-semibold text-white lg:text-2xl">Serviços</h2>
          </div>
          <div className="space-y-1">
            <p className="text-sm">Banho e Tosa</p>
            <p className="text-sm">Veterinário</p>
            <p className="text-sm">Pet Hotel</p>
            <p className="text-sm">Clube de Vantagens</p>
          </div>
        </div>
                <div className="max-w-7xl mx-auto">
          <div className="flex justify-center md:justify-start items-center gap-2 mb-3">
            <h2 className="text-xl font-semibold text-white lg:text-2xl">Atendimento</h2>
          </div>
          <div className="space-y-1">
            <p className="text-sm">Fale conosco</p>
            <p className="text-sm">Central de ajuda</p>
            <p className="text-sm">Dúvidas frequentes</p>
          </div>
        </div>



      </article>
    </footer>
  );
}
