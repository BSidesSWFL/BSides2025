[![Astro](https://img.shields.io/badge/Astro-v5.1.0-purple.svg?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-v19-teal.svg?logo=react)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-lightblue.svg?logo=tailwindcss)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-orange.svg?logo=cloudflare)](https://pages.cloudflare.com/)

---

# BSides SWFL 2025 Website

Welcome to the official website repository for the **BSides Southwest Florida 2025** conference. This site is built with Astro and deployed to Cloudflare Pages.

![BSides SWFL Logo](public/bsideslogo.png)

## Tech Stack

- **Framework:** [Astro](https://astro.build) with React islands
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com)
- **Language:** TypeScript

## Project Structure

```
src/
├── components/
│   ├── astro/          # Pure Astro components (no JS)
│   └── react/          # React islands (interactive)
├── layouts/
│   ├── BaseLayout.astro
│   └── PageLayout.astro
├── pages/              # Route pages
├── lib/                # Utility functions
├── styles/             # Global CSS
└── types/              # TypeScript types
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/BSidesSWFL/Bsides2025.git
   cd Bsides2025
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm run preview
   ```

## Branch Protection Rules

The `main` branch is protected. All contributions must go through:

- Work from the `staging` branch (or a feature branch)
- Open a **pull request (PR)** into `main` from `staging`
- Requirements:
  - At least 1 approval from a reviewer
  - All conversations must be resolved
  - Merge method is **Squash** for clean history

## Deployment

The site automatically deploys to Cloudflare Pages on push to `main` or `staging` branches via GitHub Actions.

### Manual Deployment

```bash
npm run deploy
```

## Migration from Next.js

This project was migrated from Next.js to Astro. See [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) for details on:

- Architecture changes
- Component migration strategy
- Data fetching changes (Sessionize)
- Performance improvements

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

Organized by [BSides SWFL](https://bsidesswfl.org)
Developed by the **FSW Software Engineering Club** and community volunteers.
