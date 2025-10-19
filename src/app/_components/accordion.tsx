import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionPage = () => {
  return (
    <section className="w-[370px] lg:w-4xl p-10 pl-10 mx-auto bg-[#7F03BB] rounded-lg my-20 ">
      <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-center text-white">
        Perguntas Frequentes
      </h2>
      <Accordion className="border-b border-gray-200" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl text-white lg:text-2xl">
            Quais serviços o petshop oferece?
          </AccordionTrigger>
          <AccordionContent className="text-white text-sm lg:text-xl">
            Banho, tosa, atendimento veterinário, hotel e adestramento.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl text-white lg:text-2xl">
            Vocês vendem rações e acessórios?
          </AccordionTrigger>
          <AccordionContent className="text-white text-sm lg:text-xl">
            Sim! Temos rações, brinquedos e acessórios de várias marcas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl text-white lg:text-2xl">
            Como agendar um banho ou tosa?
          </AccordionTrigger>
          <AccordionContent className="text-white text-sm lg:text-xl">
            Você pode agendar pelo nosso site ou WhatsApp.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
