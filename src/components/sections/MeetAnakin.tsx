import { SectionWrapper } from "@/components/ui/SectionWrapper";
import Image from "next/image";

export function MeetAnakin() {
  return (
    <SectionWrapper id="anakin" variant="accent">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Conheça nossa estrela!
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-primary-light flex items-center justify-center">
          {/* Replace src with real image (e.g. /anakin.jpg) when available */}
          <Image
            src="/placeholder-anakin.svg"
            alt="Anakin, cachorro de suporte emocional do núcleo Dverso"
            width={224}
            height={224}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            O <strong>Anakin</strong> é o nosso cachorro de suporte emocional e
            uma presença especial no núcleo. Ele participa de parte das
            atividades e sessões, sempre de forma ética e planejada, para
            ajudar a criar um ambiente mais acolhedor e seguro.
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
            Conheça nossa estrela de quatro patas e descubra como a Dverso
            une inovação, cuidado e um toque de alegria no seu caminho.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
