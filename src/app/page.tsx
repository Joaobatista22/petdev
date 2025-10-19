import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import Partners from "./_components/partners";
import { Services } from "./_components/services";
import { AccordionPage } from "./_components/accordion";
import {HeaderPage} from "./_components/header";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Partners />
      <AccordionPage />
      <HeaderPage />
    </main>
  );
}
