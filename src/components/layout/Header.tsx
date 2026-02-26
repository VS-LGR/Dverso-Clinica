import Link from "next/link";
import { PawPrint } from "@/components/ui/PawPrint";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-primary-light/20 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-foreground focus-visible:outline-primary rounded transition-colors hover:text-primary"
        >
          <PawPrint size={24} animate="none" className="opacity-70 text-primary" />
          <span className="tracking-tight">Dverso</span>
        </Link>
        <nav
          aria-label="Navegação principal"
          className="flex flex-wrap items-center gap-1 md:gap-5"
        >
          <Link
            href="#quem-somos"
            className="text-foreground/75 hover:text-foreground focus-visible:outline-primary rounded px-3 py-2 text-sm font-medium transition-colors"
          >
            Quem somos
          </Link>
          <Link
            href="#como-atuamos"
            className="text-foreground/75 hover:text-foreground focus-visible:outline-primary rounded px-3 py-2 text-sm font-medium transition-colors"
          >
            Como atuamos
          </Link>
          <Link
            href="#anakin"
            className="text-foreground/75 hover:text-foreground focus-visible:outline-primary rounded px-3 py-2 text-sm font-medium transition-colors"
          >
            Anakin
          </Link>
          <Link
            href="#agende"
            className="ml-1 rounded-lg bg-primary text-white font-semibold px-4 py-2 text-sm hover:bg-primary-light focus-visible:outline-primary transition-colors"
          >
            Agende
          </Link>
        </nav>
      </div>
    </header>
  );
}
