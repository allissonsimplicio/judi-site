# Judi - Site Institucional

## Visão Geral

Site institucional do Judi (CRM Advocacia v2), separado do aplicativo principal.

**Objetivo:** Landing page profissional, central de ajuda e páginas legais.

## Stack Tecnológica

- **Framework:** Astro 4 (SSG/SSR)
- **Styling:** Tailwind CSS 3
- **Busca:** Pagefind (search estático)
- **Deploy:** Vercel
- **Analytics:** PostHog
- **Cookies:** Cookie consent banner (LGPD)

### Por que Astro?

- Zero JS por padrão = carregamento ultra-rápido
- SEO excelente (HTML estático)
- Content Collections para artigos de ajuda
- Suporta componentes React se precisar
- Build output pequeno

## Estrutura

```
judi-site/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Pricing.astro
│   │   ├── CookieBanner.astro
│   │   └── Search.astro
│   ├── layouts/
│   │   └── Layout.astro  # Layout base
│   ├── pages/
│   │   ├── index.astro           # Home/Landing
│   │   ├── termos.astro          # Termos de Uso
│   │   ├── privacidade.astro     # Política de Privacidade
│   │   └── ajuda/
│   │       ├── index.astro       # Central de Ajuda
│   │       └── [...slug].astro   # Artigos dinâmicos
│   ├── content/
│   │   └── ajuda/                # Artigos de ajuda (Markdown)
│   │       ├── primeiros-passos.md
│   │       ├── clientes/
│   │       ├── processos/
│   │       └── ...
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   ├── favicon.svg
│   └── robots.txt
└── astro.config.mjs
```

## Decisões de Design

### Cores (do CRM)
- **Primária:** #6d8a99 (azul acinzentado)
- **Primária Light:** #b0c4de
- **Primária Hover:** #5a7280
- **Background:** #e7e2df (bege claro)
- **Paper:** #ffffff
- **Secundária:** #dc004e (accent)

### Tipografia
- **Família:** Montserrat (Google Fonts)
- **Headings:** Bold
- **Body:** Regular

### Estilo Visual
- Moderno, clean, profissional
- Boa quantidade de whitespace
- Animações sutis (fade-in, hover states)
- Dark mode suportado
- Mobile-first responsive

## Páginas

### 1. Home (Landing Page)
- Hero com headline forte + CTA
- Seção de features/benefícios
- Como funciona (steps)
- Planos e preços
- Depoimentos/social proof (futuro)
- FAQ resumido
- CTA final

### 2. Central de Ajuda
- Busca full-text (Pagefind)
- Categorias:
  - Primeiros Passos
  - Clientes
  - Processos
  - Intimações
  - Documentos
  - Assinatura Digital
  - Financeiro
  - Configurações
  - Integrações
- Artigos em Markdown (fácil manutenção)

### 3. Termos de Uso
- Completo, linguagem clara
- Seções numeradas
- Última atualização visível

### 4. Política de Privacidade
- LGPD compliant
- Dados coletados (usuário, clientes, pagamentos)
- Stripe (processador de pagamentos)
- PostHog (analytics)
- Cookies utilizados
- Direitos do titular
- Contato do DPO/responsável

## Integrações

### PostHog
- Pageviews
- Feature flags (A/B testing futuro)
- Session replay opcional
- Respeitar opt-out de cookies

### Cookie Consent
- Banner não-intrusivo
- Categorias: Essenciais, Analytics, Marketing
- Salvar preferência em localStorage
- Bloquear scripts até consentimento

## Variáveis de Ambiente

```env
# URLs
PUBLIC_APP_URL=https://app.judi.com.br
PUBLIC_SITE_URL=https://judi.com.br

# Analytics
PUBLIC_POSTHOG_KEY=phc_xxx
PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Contato
PUBLIC_CONTACT_EMAIL=contato@judi.com.br
PUBLIC_SUPPORT_EMAIL=suporte@judi.com.br
```

## Roadmap

### Fase 1 ✅ Concluída (2026-02-03)
- [x] Setup projeto Astro + Tailwind
- [x] Layout base (Header, Footer)
- [x] Home page completa
- [x] Termos de Uso
- [x] Política de Privacidade
- [x] Central de Ajuda (estrutura)

### Fase 2 🔄 Em Progresso
- [x] Conteúdo de ajuda - Primeiros Passos (2 artigos)
- [x] Conteúdo de ajuda - Processos (1 artigo)
- [x] Conteúdo de ajuda - Intimações (1 artigo)
- [x] Conteúdo de ajuda - Chat Jurídico (1 artigo)
- [x] Conteúdo de ajuda - Assinador (1 artigo)
- [x] Conteúdo de ajuda - Configurações (1 artigo)
- [ ] Screenshots do CRM para artigos
- [ ] Artigos restantes (clientes, financeiro, tarefas, etc.)
- [ ] Busca com Pagefind
- [ ] Cookie consent banner
- [ ] PostHog integração
- [ ] SEO (meta tags, sitemap, robots)

### Fase 3
- [ ] Blog (opcional)
- [ ] Changelog público
- [ ] Status page
- [ ] Depoimentos

## Comandos

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## Notas

- Manter consistência visual com o app
- Textos legais revisados por advogado (Alos)
- Artigos de ajuda podem ser escritos incrementalmente
- Site deve carregar < 1s no Lighthouse
