# Astro Developer Utility Starter Kit

A high-performance, Vercel-inspired developer utility starter kit built on top of **Astro 6.x** and **Tailwind CSS v4**. 

This boilerplate is designed to help developers spin up elegant, local-first web applications, validators, visualizers, or generators in minutes. It extracts and unifies the core design patterns of `json-all` and `logoname`.

---

## 🚀 Key Features

*   **Astro 6.x & Tailwind CSS v4:** Leverages the latest compiler optimizations and the pure CSS-driven `@tailwindcss/vite` configuration.
*   **Centralized Configuration (`src/config.ts`):** Change your project's brand name, meta descriptions, tagline, author information, social links, FAQs, and feature items in a single place to update the entire website instantly.
*   **3-Column Workspace Studio (`src/pages/create.astro`):**
    *   **Column 1: Raw JSON/Code Editor:** Fully loaded with live gutter line index counts, syntax validation console indicators, and format/minify buttons.
    *   **Column 2: Visual Stage Canvas (`src/components/Canvas.astro`):** Displays dynamic outputs (such as reactive SVG line graphs or spreadsheet grids) that adapt as the user types.
    *   **Column 3: Controls Sidebar (`src/components/Sidebar.astro`):** Hosts input selectors, checkbox toggles, range sliders, and exporter buttons linking parameters directly to global stores.
*   **Nanostores State Management (`src/stores/appStore.ts`):** Lightweight, reactive atoms connecting the Editor, Canvas, and Sidebar controls seamlessly across client-side scripts.
*   **SEO-Ready Layout (`src/layouts/Layout.astro`):** Includes automatic canonical URLs, Twitter Cards, Open Graph tags, robots directives, and Structured Data (JSON-LD WebApplication schema).
*   **Sleek Keyboard Command Palette (`src/components/CommandPalette.astro`):** Fully functional overlay triggered via `Cmd+K` (Mac) or `Ctrl+K` (Windows) allowing keyboard navigation, filtering, and execution of workspace actions.
*   **Rich Documentation & Legal Templates:** Pre-designed Home landing page (`index.astro`), Features Directory (`features.astro`), User Guides (`how-to-use.astro`), Privacy Policy, Terms of Service, and Cookie Consent managers.
*   **Local-First Helpers (`src/utils/`):** Out-of-the-box scripts for copying to clipboards, client-side downloading, localStorage caching, CSV data compiling, and an inline SVG icon registry.

---

## 📁 Project Structure

```text
packages/starter-astro/
├── public/
│   ├── favicon.svg             # Standard branding icon
│   └── og-image.png            # Open Graph social preview placeholder
├── src/
│   ├── components/
│   │   ├── Canvas.astro         # Stage preview & dynamic output renderer
│   │   ├── CommandPalette.astro # Searchable Cmd+K navigation overlay
│   │   ├── CookieConsent.astro  # LocalStorage consent banner
│   │   ├── Footer.astro         # Multi-column brand footer
│   │   ├── Logo.astro           # Customizable SVG logo splitting site name
│   │   ├── Navbar.astro         # Responsive header with editor actions
│   │   └── Sidebar.astro        # Controls panel with range sliders/selects
│   ├── layouts/
│   │   └── Layout.astro         # Base wrapper setting up CSS, SEO, metadata
│   ├── pages/
│   │   ├── cookie-policy.astro  # Cookie Policy page
│   │   ├── create.astro         # Main Workspace Studio layout
│   │   ├── features.astro       # Features listing directory
│   │   ├── how-to-use.astro     # User Guides & documentation
│   │   ├── index.astro          # Landing homepage template
│   │   ├── privacy.astro        # Privacy Policy page
│   │   └── terms.astro          # Terms of Service page
│   ├── stores/
│   │   └── appStore.ts          # Reactive Nanostores
│   ├── styles/
│   │   └── global.css           # Tailwind v4 directives, custom font imports
│   ├── utils/
│   │   ├── helpers.ts           # Clipboard, file download, CSV formats, LS cache
│   │   └── icons.ts             # SVG inline path dictionary
│   └── config.ts                # Central brand configurations
├── astro.config.mjs             # Astro and Vite plugins configuration
├── package.json                 # Package scripts & dependencies
└── tsconfig.json                # TypeScript settings
```

---

## 🛠️ How to Adapt for a New Tool (5-Minute Tutorial)

To build a new developer tool (e.g., an "SQL Formatter", "YAML-to-JSON Converter", "SVG Generator", or "Base64 Encoder"), follow these simple steps:

### 1. Re-Brand via `src/config.ts`
Modify `src/config.ts` with your new tool parameters:
```typescript
export const APP_CONFIG = {
  name: "SQLBeast",
  domain: "https://sql-beast.vercel.app",
  tagline: "High-Performance SQL Workspace",
  description: "Format, analyze, and optimize database queries locally in your browser.",
  // ...
};
```
All pages (metadata, titles, navbar, footer, schema structured data) will update to show **SQLBeast** automatically.

### 2. Define Custom States in `src/stores/appStore.ts`
Set up atoms for the values you need to share between the controls and canvas:
```typescript
import { atom } from 'nanostores';

export const sqlDialect = atom<string>('postgresql'); // postgresql, mysql, sqlite
export const capitalizeKeywords = atom<boolean>(true);
```

### 3. Customize Inputs in `src/components/Sidebar.astro`
Update select inputs or checkbox toggles in the sidebar:
```html
<select id="control-dialect" class="...">
  <option value="postgresql">PostgreSQL</option>
  <option value="mysql">MySQL</option>
</select>
```
Link them to your Nanostores in the `<script>` tag:
```typescript
import { sqlDialect } from '../stores/appStore';
document.getElementById('control-dialect').addEventListener('change', (e) => {
  sqlDialect.set(e.target.value);
});
```

### 4. Build Output Logic in `src/components/Canvas.astro`
Inject your output renderer. Subscribe to the raw text input and dialect state to format queries client-side and display them:
```typescript
import { workspaceInput, sqlDialect } from '../stores/appStore';

workspaceInput.subscribe(inputSql => {
  const currentDialect = sqlDialect.get();
  // Perform your SQL formatting/highlighting client-side here...
  document.getElementById('formatted-output').textContent = formatQuery(inputSql, currentDialect);
});
```

---

## 🚀 Running Locally

All scripts are executed from the workspace root (or inside `packages/starter-astro/`):

1.  **Install dependencies:**
    ```bash
    yarn install
    ```
2.  **Run development server:**
    ```bash
    yarn workspace starter-astro dev
    ```
3.  **Build production site:**
    ```bash
    yarn workspace starter-astro build
    ```
4.  **Preview production build:**
    ```bash
    yarn workspace starter-astro preview
    ```
