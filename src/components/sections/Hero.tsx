import { PawPrint } from "@/components/ui/PawPrint";

export function Hero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
      aria-label="Boas-vindas"
    >
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(165deg, var(--color-accent-light) 0%, var(--color-background) 35%, var(--color-primary-light) 70%, var(--color-muted) 100%)",
        }}
      />

      {/* Decorative paws — scattered, animated */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <PawPrint
          size={40}
          className="absolute top-[12%] left-[8%] text-primary/50"
          animationDelay="0s"
          animate="float"
        />
        <PawPrint
          size={28}
          className="absolute top-[22%] right-[12%] text-secondary/40"
          animationDelay="0.8s"
          animate="float"
        />
        <PawPrint
          size={36}
          className="absolute bottom-[28%] left-[15%] text-accent/50"
          animationDelay="1.2s"
          animate="float"
        />
        <PawPrint
          size={24}
          className="absolute bottom-[18%] right-[20%] text-primary/40"
          animationDelay="0.4s"
          animate="pulse"
        />
        <PawPrint
          size={32}
          className="absolute top-[45%] right-[6%] text-secondary-light/60"
          animationDelay="1.6s"
          animate="float"
        />
        <PawPrint
          size={20}
          className="absolute top-[55%] left-[10%] text-primary-light/70"
          animationDelay="2s"
          animate="pulse"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center opacity-0 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
          Saúde, acolhimento
          <br />
          <span className="text-primary">e alegria</span>
          <br />
          no seu caminho.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
          O Dverso é um núcleo terapêutico multidisciplinar com metodologia
          inovadora e um espaço pensado para você se sentir em casa.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <PawPrint size={28} animate="none" className="opacity-50" />
          <PawPrint size={20} animate="none" className="opacity-40" />
          <PawPrint size={28} animate="none" className="opacity-50" />
        </div>
      </div>
    </section>
  );
}
