import Link from "next/link";
import { PawPrint } from "@/components/ui/PawPrint";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-primary-light/25 shadow-soft">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-primary focus-visible:outline-primary rounded transition-colors hover:text-primary-light"
        >
          <PawPrint size={28} animate="none" className="opacity-80" />
          Dverso
        </Link>
        <nav
          aria-label="Navegação principal"
          className="flex flex-wrap items-center gap-3 md:gap-6"
        >
          <Link
            href="#quem-somos"
            className="text-foreground/80 hover:text-primary focus-visible:outline-primary rounded px-2 py-1 text-sm md:text-base transition-colors"
          >
            Quem somos
          </Link>
          <Link
            href="#como-atuamos"
            className="text-foreground/80 hover:text-primary focus-visible:outline-primary rounded px-2 py-1 text-sm md:text-base transition-colors"
          >
            Como atuamos
          </Link>
          <Link
            href="#anakin"
            className="text-foreground/80 hover:text-primary focus-visible:outline-primary rounded px-2 py-1 text-sm md:text-base transition-colors"
          >
            Anakin
          </Link>
          <Link
            href="#agende"
            className="rounded-xl bg-primary/15 text-primary font-semibold px-4 py-2 text-sm md:text-base hover:bg-primary/25 focus-visible:outline-primary transition-colors"
          >
            Agende
          </Link>
        </nav>
      </div>
    </header>
  );
}
