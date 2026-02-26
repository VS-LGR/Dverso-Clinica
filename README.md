# Dverso – Núcleo Terapêutico

Página institucional da clínica de psicologia Dverso: núcleo terapêutico multidisciplinar com metodologia inovadora e terapia com apoio do cachorro de suporte Anakin.

## Stack

- **Next.js** (App Router), **TypeScript**, **Tailwind CSS**
- Deploy via **Vercel**
- Responsivo (desktop e mobile)

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Build de produção:

```bash
npm run build
npm start
```

## Configuração (WhatsApp)

O botão **Agende via WhatsApp** usa variáveis de ambiente. Copie `.env.example` para `.env` e preencha:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` – número completo com DDI, sem espaços ou símbolos (ex.: `5511999999999`)
- `NEXT_PUBLIC_WHATSAPP_MESSAGE` – (opcional) mensagem padrão ao abrir o chat

Sem `NEXT_PUBLIC_WHATSAPP_NUMBER` configurado, o botão permanece visível mas desabilitado e uma dica é exibida.

## Estrutura de pastas

```
src/
├── app/                 # App Router
│   ├── layout.tsx       # Layout global, meta, fontes
│   ├── page.tsx         # Página principal (seções)
│   └── globals.css      # Estilos globais e variáveis do design system
├── components/
│   ├── sections/        # Seções da página
│   │   ├── WhoWeAre.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── MeetAnakin.tsx
│   │   └── ScheduleConsultation.tsx
│   ├── ui/              # Button, SectionWrapper
│   └── layout/          # Header, Footer
├── config/              # site.config.ts (WhatsApp, nome do site)
├── types/
├── styles/
└── assets/
public/                  # Arquivos estáticos
├── placeholder-founder.svg   # Substituir por foto da Selma
└── placeholder-anakin.svg    # Substituir por foto do Anakin
```

## Onde ajustar textos e imagens

- **Textos**: editar diretamente nos componentes em `src/components/sections/` (WhoWeAre, HowWeWork, MeetAnakin, ScheduleConsultation).
- **Imagem da fundadora**: trocar `src` do `Image` em `WhoWeAre.tsx` (ex.: `/selma.jpg`) e colocar o arquivo em `public/`.
- **Imagem do Anakin**: idem em `MeetAnakin.tsx` (ex.: `/anakin.jpg`) em `public/`.
- **Logo/nome no header**: `src/components/layout/Header.tsx`.

## Pontos de atenção e melhorias futuras

- **Imagens**: Os placeholders atuais são SVGs. Ao adicionar fotos reais (Selma, Anakin), use formatos otimizados (ex.: WebP) e ajuste `width`/`height` no componente se necessário.
- **SEO**: Meta description e título já estão em `layout.tsx`. Possíveis melhorias: Open Graph, `sitemap.xml`, schema.org para local business.
- **Analytics**: Se quiser métricas (ex.: Vercel Analytics ou Google Analytics), adicionar depois sem alterar a estrutura.
- **Formulário de contato**: O escopo atual é apenas o CTA para WhatsApp. Um formulário na página pode ser incluído em uma etapa futura.
