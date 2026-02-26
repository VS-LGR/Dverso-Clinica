import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PawPrint } from "@/components/ui/PawPrint";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";

export function ScheduleConsultation() {
  const hasWhatsApp = Boolean(siteConfig.whatsapp.number);

  return (
    <SectionWrapper id="agende" variant="muted" card entranceDelay="0.2s">
      <div className="flex items-center gap-3 mb-8">
        <PawPrint size={36} animate="none" className="opacity-70 text-accent" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Agende uma consulta
        </h2>
      </div>
      <p className="text-foreground/88 leading-relaxed mb-8 max-w-xl text-base md:text-lg">
        Estamos prontos para recebê-lo. Entre em contato pelo WhatsApp e agende
        seu horário. Será um prazer caminhar junto com você.
      </p>
      <Button
        as="link"
        href={siteConfig.whatsapp.url}
        variant="primary"
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!hasWhatsApp}
        className={
          !hasWhatsApp
            ? "pointer-events-none opacity-60"
            : "shadow-soft hover:shadow-card transition-shadow scale-100 hover:scale-[1.02] active:scale-[0.98]"
        }
      >
        Agendar via WhatsApp
      </Button>
      {!hasWhatsApp && (
        <p className="mt-4 text-sm text-foreground/60">
          Configure{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-foreground/80">
            NEXT_PUBLIC_WHATSAPP_NUMBER
          </code>{" "}
          no .env para ativar o link.
        </p>
      )}
    </SectionWrapper>
  );
}
