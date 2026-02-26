import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";

export function ScheduleConsultation() {
  const hasWhatsApp = Boolean(siteConfig.whatsapp.number);

  return (
    <SectionWrapper id="agende" variant="muted">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Agende uma consulta
      </h2>
      <p className="text-foreground/90 leading-relaxed mb-8 max-w-xl">
        Estamos prontos para recebê-lo. Entre em contato pelo WhatsApp e
        agende seu horário. Será um prazer caminhar junto com você.
      </p>
      <Button
        as="link"
        href={siteConfig.whatsapp.url}
        variant="primary"
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!hasWhatsApp}
        className={!hasWhatsApp ? "pointer-events-none opacity-60" : ""}
      >
        Agendar via WhatsApp
      </Button>
      {!hasWhatsApp && (
        <p className="mt-4 text-sm text-foreground/60">
          Configure <code className="bg-muted px-1 rounded">NEXT_PUBLIC_WHATSAPP_NUMBER</code> no .env para ativar o link.
        </p>
      )}
    </SectionWrapper>
  );
}
