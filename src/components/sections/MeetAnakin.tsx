import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PawPrint } from "@/components/ui/PawPrint";
import { DogSticker } from "@/components/ui/DogSticker";
import Image from "next/image";

export function MeetAnakin() {
  return (
    <SectionWrapper
      id="anakin"
      variant="highlight"
      card
      entranceDelay="0.15s"
      className="relative"
    >
      {/* Stickers: sparse, don't overlap content */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 pointer-events-none hidden sm:block">
        <DogSticker size={72} variant="tilt-right" className="opacity-90" />
      </div>
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 pointer-events-none hidden sm:block">
        <DogSticker size={56} variant="tilt-left" className="opacity-85" />
      </div>

      <div className="relative">
        {/* Badge "Nossa estrela" */}
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-4 py-1.5 text-sm font-semibold tracking-wide mb-6">
          <PawPrint size={20} animate="pulse" className="opacity-90" />
          Nossa estrela
        </div>

        <div className="flex items-center gap-3 mb-8">
          <PawPrint size={40} animate="pulse" className="opacity-80" />
          <h2 className="text-3xl md:text-4xl lg:text-[2.25rem] font-bold text-foreground tracking-tight">
            Conheça nossa estrela!
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          <div className="shrink-0 w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-primary-light to-accent-light shadow-soft flex items-center justify-center ring-2 ring-white/70">
            <Image
              src="/placeholder-anakin.svg"
              alt="Anakin, cachorro de suporte emocional do núcleo Dverso"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-5 text-foreground/88 leading-relaxed text-base md:text-lg flex-1">
            <p>
              O <strong className="text-primary">Anakin</strong> é o nosso
              cachorro de suporte emocional e uma presença especial no núcleo.
              Ele participa de parte das atividades e sessões, sempre de forma
              ética e planejada, para ajudar a criar um ambiente mais acolhedor
              e seguro.
            </p>
            <p>
              A interação com animais pode reduzir ansiedade, favorecer o
              vínculo e trazer leveza ao setting terapêutico. O Anakin foi
              preparado para esse papel e atua sob supervisão, contribuindo para
              que você se sinta mais à vontade durante o processo. Para muitas
              pessoas, ele acaba se tornando uma referência de carinho e apoio
              dentro da clínica.
            </p>
            <p>
              Conheça nossa estrela de quatro patas e descubra como a Dverso
              une inovação, cuidado e um toque de alegria no seu caminho.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
