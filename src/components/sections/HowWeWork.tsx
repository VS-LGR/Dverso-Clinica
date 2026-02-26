import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PawPrint } from "@/components/ui/PawPrint";

export function HowWeWork() {
  return (
    <SectionWrapper id="como-atuamos" variant="default" card entranceDelay="0.1s">
      <div className="flex items-center gap-3 mb-8">
        <PawPrint size={36} animate="none" className="opacity-70 text-secondary" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Como atuamos?
        </h2>
      </div>
      <div className="space-y-6 text-foreground/88 leading-relaxed text-base md:text-lg">
        <p>
          Nossa atuação é{" "}
          <strong className="text-primary">multidisciplinar</strong>: integramos
          diferentes olhares e recursos para que o tratamento seja o mais
          adequado a você. O foco está no acolhimento e no vínculo terapêutico,
          com uma metodologia que prioriza a escuta e o respeito ao seu ritmo.
        </p>
        <p>
          Acreditamos em uma{" "}
          <strong className="text-secondary">abordagem inovadora</strong> sem
          abrir mão da seriedade e da base científica. Por isso, além do
          setting tradicional, oferecemos a possibilidade de sessões com o apoio
          do nosso cachorro de suporte, o Anakin, que contribui para um ambiente
          mais leve e seguro. Tudo é pensado para que você se sinta bem-vindo e
          em condições de evoluir no seu processo.
        </p>
        <p>
          Se você busca terapia ou acompanhamento psicológico com um método
          diferenciado e um espaço que valoriza a pessoa por inteiro, o Dverso
          está de portas abertas para conversar.
        </p>
      </div>
    </SectionWrapper>
  );
}
