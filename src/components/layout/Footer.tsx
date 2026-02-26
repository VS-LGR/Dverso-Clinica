export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 px-4 text-center text-foreground/70 text-sm">
      <p>Dverso – Núcleo Terapêutico © {year}</p>
    </footer>
  );
}
