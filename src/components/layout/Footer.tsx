import { PawPrint } from "@/components/ui/PawPrint";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-muted to-primary-light/15 py-12 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center gap-8 opacity-[0.07]">
        <PawPrint size={48} animate="none" className="text-foreground" />
        <PawPrint size={32} animate="none" className="text-foreground" />
        <PawPrint size={48} animate="none" className="text-foreground" />
      </div>
      <div className="relative flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <PawPrint size={24} animate="none" className="opacity-60" />
          <span className="font-semibold text-foreground/85">Dverso</span>
          <span className="text-foreground/60">– Núcleo Terapêutico</span>
          <PawPrint size={24} animate="none" className="opacity-60" />
        </div>
        <p className="text-foreground/60 text-sm">© {year}</p>
      </div>
    </footer>
  );
}
