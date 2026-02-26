/**
 * Site-wide config. WhatsApp number and message come from env for easy change per environment.
 */
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const whatsappMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Olá! Gostaria de agendar uma consulta na Dverso.";

export const siteConfig = {
  name: "Dverso",
  tagline: "Núcleo Terapêutico",
  whatsapp: {
    number: whatsappNumber,
    message: whatsappMessage,
    /** Full URL to open WhatsApp chat (web or app). */
    get url(): string {
      if (!this.number) return "#";
      const encoded = encodeURIComponent(this.message);
      return `https://wa.me/${this.number.replace(/\D/g, "")}?text=${encoded}`;
    },
  },
} as const;
