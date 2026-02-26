import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PawPrint } from "@/components/ui/PawPrint";
import Image from "next/image";

export function MeetAnakin() {
  return (
    <SectionWrapper id="anakin" variant="accent" card entranceDelay="0.15s">
      <div className="flex items-center gap-3 mb-8">
        <PawPrint size={36} animate="pulse" className="opacity-80" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Conheça nossa estrela!
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="shrink-0 w-52 h-52 md:w-60 md:h-60 rounded-3xl overflow-hidden bg-gradient-to-br from-primary-light to-accent-light shadow-soft flex items-center justify-center ring-2 ring-white/60">
          <Image
            src="/placeholder-anakin.svg"
            alt="Anakin, cachorro de suporte emocional do núcleo Dverso"
            width={240}
            height={240}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-5 text-foreground/88 leading-relaxed text-base md:text-lg">
          <p>
            O <strong className="text-primary">Anakin</strong> é o nosso
            cachorro de suporte emocional e uma presença especial no núcleo.
            Ele participa de parte das atividades e sessões, sempre de forma
            ética e planejada, para ajudar a criar um ambiente mais acolhedor
            e seguro.
          </p>
          <p>
            A interação com animais pode reduzir ansiedade, favorecer o vínculo
            e trazer leveza ao setting terapêutico. O Anakin foi preparado para
            esse papel e atua sob supervisão, contribuindo para que você se
            sinta mais à vontade durante o processo. Para muitas pessoas, ele
            acaba se tornando uma referência de carinho e apoio dentro da
            clínica.
          </p>
          <p>
            Conheça nossa estrela de quatro patas e descubra como a Dverso une
            inovação, cuidado e um toque de alegria no seu caminho.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
