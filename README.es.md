[English](./README.md) | [Español](./README.es.md)

---

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-edge-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![Resend](https://img.shields.io/badge/Resend-email-000000?logo=resend&logoColor=white)](https://resend.com)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)

# stvdn.github.io

Portafolio personal y blog de **Steven Peñafiel** — bilingüe (inglés / español),
totalmente estático, desplegable en GitHub Pages, con un backend serverless para
el formulario de contacto ejecutándose en Cloudflare Workers y Resend.

> Sitio en vivo: **https://stvdn.github.io**

<!-- TODO: coloca una captura de pantalla aquí, p. ej. <p align="center"><img src="./docs/screenshot.png" alt="captura" width="600" /></p> -->

## Stack Tecnologico

| | |
|---|---|
| [**Next.js 16**](https://nextjs.org) | App Router con `output: "export"` para un build 100% estático, más un segmento dinámico `[locale]` para el enrutamiento i18n. |
| [**Cloudflare Workers**](https://workers.cloudflare.com) | Un paquete de workspace separado (`worker/`) maneja los envíos del formulario de contacto en el edge — sin servidor ni contenedor que administrar. |
| [**Resend**](https://resend.com) | Entrega de correos transaccionales desde el Worker. Correos HTML con adjuntos de archivo opcionales. |
| [**Tailwind CSS v4**](https://tailwindcss.com) | Design tokens (de Figma) definidos una sola vez en `src/app/globals.css` vía `@theme inline` — color, tipografía y espaciado fluyen desde una única fuente de verdad. |
| [**TypeScript**](https://www.typescriptlang.org) | Todo tipado de extremo a extremo, incluyendo los bindings `Env` del Worker y las cadenas de los diccionarios. |
| [**i18n routing**](./src/i18n) | Ligero y hecho a medida: config de locale tipado (`en` / `es`), diccionarios por locale y datos del portafolio localizados — sin framework i18n pesado. |
| [**Motion**](https://motion.dev) | Scroll-reveal, entrada escalonada del header, un seguidor de mouse con partículas y transiciones animadas del modal. |
| [**pnpm Workspace**](https://pnpm.io) | Frontend y Worker comparten un solo monorepo (`pnpm-workspace.yaml`) con un lockfile unificado. |

## Como empezar

### Requisitos

- **Node.js 22+**
- **pnpm 10+** — `npm i -g pnpm` si no lo tienes.

### Instalar

```bash
git clone https://github.com/stvdn/stvdn.github.io.git
cd stvdn.github.io
pnpm install
```

### Variables de entorno

Copia el archivo de ejemplo y apúntalo a tu Worker:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_CONTACT_API_URL=https://portfolio-contact.tu-subdominio.workers.dev
```

### Ejecutar el sitio

```bash
pnpm dev
```

Abre <http://localhost:3000> — serás redirigido a `/en` por defecto.

### Ejecutar el Worker de contacto (opcional, para el formulario)

El Worker vive en su propio paquete de workspace y usa Wrangler para desarrollo
local. Crea un archivo `worker/.dev.vars` con tu secreto:

```dotenv
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Luego en una segunda terminal:

```bash
pnpm --filter portfolio-contact-worker dev
```

Esto sirve el Worker localmente (por defecto <http://localhost:8787>). Actualiza
`NEXT_PUBLIC_CONTACT_API_URL` en `.env.local` para coincidir.

### Build

```bash
pnpm build      # export estático → ./out
pnpm lint       # eslint
```

## Estructura del proyecto

```
stvdn.github.io/
├─ .github/
│  └─ workflows/deploy.yml       # CI: build → GitHub Pages
├─ src/
│  ├─ app/
│  │  ├─ page.tsx                # raíz → redirige a /<defaultLocale>
│  │  ├─ layout.tsx              # layout raíz (sin html/body aquí)
│  │  ├─ globals.css             # Tailwind v4 + design tokens de Figma
│  │  └─ [locale]/
│  │     ├─ layout.tsx           # html, body, fuentes, metadatos SEO
│  │     ├─ page.tsx             # portafolio: experiencia, proyectos, skills, educación
│  │     └─ blog/page.tsx        # índice del blog con estado vacío
│  ├─ components/                # Header, Sidebar, ContactModal, MouseFollower, ...
│  ├─ data/
│  │  ├─ portfolio.ts            # router de locale para datos del portafolio
│  │  ├─ portfolio.en.ts         # contenido del portafolio en inglés
│  │  ├─ portfolio.es.ts        # contenido del portafolio en español
│  │  ├─ portfolio.types.ts     # definiciones de tipos de contenido
│  │  └─ blog.ts                # posts del blog (contenido + metadatos)
│  └─ i18n/
│     ├─ config.ts              # locales: ["en", "es"], helpers
│     ├─ dictionaries.ts        # tipo Dictionary + getDictionary()
│     └─ dictionaries/
│        ├─ en.ts               # cadenas de UI (inglés)
│        └─ es.ts               # cadenas de UI (español)
└─ worker/                       # paquete del workspace pnpm
   ├─ src/index.ts              # Cloudflare Worker: API de contacto + Resend
   ├─ wrangler.jsonc           # config del Worker y vars de entorno (no secretas)
   └─ package.json              # scripts wrangler dev/deploy
```

## Despliegue

Este repo despliega **dos cosas de forma independiente**:

### 1. Sitio estático → GitHub Pages

Al hacer push a `main` se ejecuta `.github/workflows/deploy.yml`, que:

1. Instala con `pnpm install --frozen-lockfile`.
2. Construye el export estático (`pnpm build`) en `./out`.
3. Sube el artefacto y despliega a GitHub Pages vía `actions/deploy-pages`.

**Secrets del repo requeridos:**

| Secret | Descripción |
|---|---|
| `NEXT_PUBLIC_CONTACT_API_URL` | La URL del Worker desplegado (ver paso 2). |

Asegúrate de que el origen de Pages del repo esté en **GitHub Actions** (Settings → Pages → Source).

### 2. Worker de contacto → Cloudflare Workers

Desde la raíz del repo:

```bash
pnpm --filter portfolio-contact-worker deploy
```

Las vars no secretas (`CONTACT_TO_EMAIL`, `FROM_EMAIL`, `ALLOWED_ORIGIN`) viven en
`worker/wrangler.jsonc`. Crea el `RESEND_API_KEY` como un secreto del Worker:

```bash
cd worker
wrangler secret put RESEND_API_KEY
```

Pega tu API key de Resend cuando se te solicite.

## Contribuir

Este repo es principalmente un portafolio y una implementación de referencia, pero
se aceptan correcciones y mejoras. Algunas convenciones:

- **Usa pnpm** — nunca `npm` ni `yarn`.
- **Commits atómicos** — un cambio lógico por commit, estilo Conventional Commits
  (`feat:`, `fix:`, `refactor:`, `docs:`, ...). Consulta `git log` para ejemplos.
- **Nunca hagas push** sin revisión explícita — ver [`AGENTS.md`](./AGENTS.md).

## Licencia

[MIT](./LICENSE) © Steven Peñafiel