# Codex

A modern web application built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter (via next/font)

## Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable React components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and shared logic
└── styles/          # Global styles and CSS modules
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env.local` and configure your environment variables:

```bash
cp .env.example .env.local
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

### Lint

Run ESLint:

```bash
npm run lint
```

## Environment Variables

See `.env.example` for a complete list of required environment variables for:

- Database (PostgreSQL)
- Supabase
- Redis
- Strapi CMS
- Sentry

## Import Aliases

The project uses absolute import aliases configured in `tsconfig.json`:

- `@/*` - src directory
- `@app/*` - app directory
- `@components/*` - components directory
- `@hooks/*` - hooks directory
- `@lib/*` - lib directory
- `@styles/*` - styles directory

## License

MIT
