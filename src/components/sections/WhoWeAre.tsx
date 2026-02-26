import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Image from "next/image";

export function WhoWeAre() {
  return (
    <SectionWrapper id="quem-somos" variant="default">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Quem somos?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-secondary-light flex items-center justify-center">
          {/* Replace src with real image path (e.g. /selma.jpg) when available */}
          <Image
            src="/placeholder-founder.svg"
            alt="Selma, fundadora do núcleo Dverso"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            O <strong>Dverso</strong> é um núcleo terapêutico multidisciplinar que
            nasceu do desejo de oferecer um espaço de acolhimento e cuidado
            psicológico com uma abordagem inovadora. Acreditamos que cada pessoa
            merece um atendimento que respeite sua singularidade e que a terapia
            pode ser um caminho leve e transformador.
          </p>
          <p>
            <strong>Selma</strong>, nossa fundadora, é psicóloga e idealizadora
            do projeto. Com formação e experiência na área clínica, ela criou o
            Dverso para unir prática baseada em evidências a um ambiente
            humanizado e, quando possível, ao apoio de um companheiro especial:
            o Anakin. Selma conduz o núcleo com a visão de que inovação e
            acolhimento caminham juntos.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
