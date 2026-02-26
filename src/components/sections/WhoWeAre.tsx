import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PawPrint } from "@/components/ui/PawPrint";
import Image from "next/image";

export function WhoWeAre() {
  return (
    <SectionWrapper id="quem-somos" variant="muted" card entranceDelay="0.05s">
      <div className="flex items-center gap-3 mb-8">
        <PawPrint size={36} animate="none" className="opacity-70" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Quem somos?
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="shrink-0 w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden bg-gradient-to-br from-secondary-light to-accent-light shadow-soft flex items-center justify-center ring-2 ring-white/60">
          <Image
            src="/placeholder-founder.svg"
            alt="Selma, fundadora do núcleo Dverso"
            width={208}
            height={208}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-5 text-foreground/88 leading-relaxed text-base md:text-lg">
          <p>
            O <strong className="text-primary">Dverso</strong> é um núcleo
            terapêutico multidisciplinar que nasceu do desejo de oferecer um
            espaço de acolhimento e cuidado psicológico com uma abordagem
            inovadora. Acreditamos que cada pessoa merece um atendimento que
            respeite sua singularidade e que a terapia pode ser um caminho leve
            e transformador.
          </p>
          <p>
            <strong className="text-secondary">Selma</strong>, nossa fundadora,
            é psicóloga e idealizadora do projeto. Com formação e experiência na
            área clínica, ela criou o Dverso para unir prática baseada em
            evidências a um ambiente humanizado e, quando possível, ao apoio de
            um companheiro especial: o Anakin. Selma conduz o núcleo com a visão
            de que inovação e acolhimento caminham juntos.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
