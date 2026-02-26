import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-primary-light/30">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-primary focus-visible:outline-primary rounded"
        >
          Dverso
        </Link>
        <nav aria-label="Navegação principal" className="flex gap-4">
          <Link
            href="#quem-somos"
            className="text-foreground/80 hover:text-primary focus-visible:outline-primary rounded text-sm md:text-base"
          >
            Quem somos
          </Link>
          <Link
            href="#como-atuamos"
            className="text-foreground/80 hover:text-primary focus-visible:outline-primary rounded text-sm md:text-base"
          >
            Como atuamos
          </Link>
          <Link
            href="#anakin"
            className="text-foreground/80 hover:text-primary focus-visible:outline-primary rounded text-sm md:text-base"
          >
            Anakin
          </Link>
          <Link
            href="#agende"
            className="text-foreground/80 hover:text-primary focus-visible:outline-primary rounded text-sm md:text-base font-medium"
          >
            Agende
          </Link>
        </nav>
      </div>
    </header>
  );
}
