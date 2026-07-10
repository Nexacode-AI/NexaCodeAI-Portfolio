# NexaCode.AI — Portfolio Website

Marketing site for **NexaCode.AI**, an AI product studio. A single-page,
animated Next.js site covering services, process, work, and a project-request
contact form.

🔗 **Live:** https://nexa-code-ai-portfolio.vercel.app

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — scroll & reveal animations
- [lucide-react](https://lucide.dev) — icons
- Deployed on [Vercel](https://vercel.com)

## Project structure

The application lives in the [`web/`](web/) directory.

```
web/
├── src/
│   ├── app/          # App Router entry (layout, page, global styles)
│   └── components/   # Section + UI components (Hero, Services, Contact, …)
└── public/           # Static assets
```

The homepage is composed in [`web/src/app/page.tsx`](web/src/app/page.tsx) from
section components: Hero, About, Services, Chatbots, TechStack, Industries,
Process, Work, FAQ, Contact, and Footer.

## Getting started

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack)  |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Environment variables

Copy [`web/.env.example`](web/.env.example) to `web/.env.local` and fill in the
values. Configure the same variables in the Vercel project settings for
production.

| Variable                            | Description                                                                 |
| ----------------------------------- | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`  | [Web3Forms](https://web3forms.com) access key used by the contact form.     |

## Deployment

The site auto-deploys to Vercel on push to `main`. Ensure the environment
variables above are set in the Vercel project before deploying.
