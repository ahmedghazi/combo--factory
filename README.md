# combo-factory

Combo Factory is a content-driven website powered by a Sanity CMS studio and a Next.js frontend.

The project is split into two main parts:

- **`web/`**
  Public-facing website built with Next.js and TypeScript.
- **`studio/`**
  Sanity Studio used as a headless CMS to manage content (navigation, pages, settings, media, etc.).

---

## Tech Stack

- **Runtime / Language**
  - Node.js `20.19.5`
  - TypeScript

- **Frontend**
  - Next.js (App Router, `web/`)
  - React 18
  - SCSS modules / partials for styling

- **CMS / Backend**
  - Sanity v3 Studio (`studio/`)
  - Sanity Presentation / Preview
  - Sanity Media plugin
  - Sanity Codegen for typed GROQ queries

- **Deployment**
  - Frontend deployed on a Node-compatible host (e.g. Vercel)
    (production URL referenced in config: `https://combo-factory.vercel.app`)
  - Sanity Studio deployed via `sanity deploy`
    (default URL referenced: `https://backoffice--combo-factory.sanity.studio`)

---

## Project Structure

```text
www/
├── README.md
├── studio/            # Sanity Studio project (schemas, desk structure, plugins)
│   ├── sanity.config.ts
│   ├── schemaTypes/   # Document & object schemas (pages, settings, etc.)
│   └── src/           # Desk structure, actions, presentation config, etc.
└── web/               # Next.js frontend
    ├── app/
    │   ├── page.tsx           # Home page
    │   ├── not-found.tsx      # 404 page
    │   ├── config/website.ts  # Site-level config
    │   ├── components/        # UI & modules
    │   └── sanity-api/        # Sanity API client config
    └── ...
```

---

## Prerequisites

- Node.js **20.19.5**
- Yarn or npm
- A Sanity project with:
  - `projectId`
  - `dataset`
  - API access for the frontend
  - Studio URL / API configuration

---

## Environment & Configuration

This project uses environment variables for:

- Sanity project configuration (project ID, dataset, API version)
- Frontend access to Sanity content (read access)
- Preview / revalidation hooks
- Studio URL

Configure these variables securely in:

- Your hosting provider’s environment settings, and/or
- Local `.env` / `.env.local` files (which should **never** be committed to version control).

For security reasons, exact variable names and values are not listed in this README.
Refer to your internal configuration or deployment documentation to see the required keys.

---

## Getting Started

### 1. Install dependencies

From the `www/` root, install for both apps:

```bash
cd studio
yarn install   # or npm install

cd ../web
yarn install   # or npm install
```

### 2. Run Sanity Studio (CMS)

```bash
cd studio
yarn dev       # or npm run dev
# Studio will start on http://localhost:3333 by default
```

### 3. Run the Next.js frontend

```bash
cd web
yarn dev       # or npm run dev
# Frontend will start on http://localhost:3000
```

The frontend reads content from Sanity using the project configuration in `web/app/sanity-api/sanity.api.ts`.

---

## Sanity Studio

Key files:

- `studio/sanity.config.ts`
  Sanity project configuration:
  - Project `title`: **Combo Factory**
  - `projectId` / `dataset`
  - Installed plugins: structure tool, Vision, Media, Presentation, etc.
- `studio/schemaTypes/`
  Content schemas, including:
  - Global settings (header/footer, navigation, logos, texts)
  - Page and module definitions

Development scripts (run in `studio/`):

```bash
yarn dev            # Run studio locally
yarn build          # Production build
yarn deploy         # Deploy studio to Sanity
yarn deploy-graphql # Deploy GraphQL API (if used)
yarn codegen        # Generate TypeScript types from schemas
```

---

## Frontend (Next.js)

The frontend:

- Consumes content from Sanity using a shared API config in
  `web/app/sanity-api/sanity.api.ts`
- Uses Next.js App Router (`web/app/`) with typed content models (via codegen)
- Uses SCSS partials/components for styling
  (for example, `web/app/styles/components/_cards.scss`)

To build and run in production mode:

```bash
cd web
yarn build
yarn start
```

---

## Deployment

- **Frontend**
  Deploy `web/` to your hosting provider (e.g. Vercel).
  Make sure all required environment variables are configured in the hosting platform.

- **Sanity Studio**
  Deploy from `studio/` using:

  ```bash
  cd studio
  yarn deploy
  ```

---

## License

This project is currently marked as:

```json
"license": "UNLICENSED"
```

Please do not redistribute or reuse the code without permission from the owner.

#
