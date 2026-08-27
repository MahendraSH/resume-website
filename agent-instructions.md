# Agent Instructions & Development Rules
**Target Audience**: Coding Assistants (Cursor, Windsurf, Antigravity, etc.)  
**Owner / Developer Profile**: Mahendra S H (Java Cloud Full-Stack Engineer)  

This document serves as a strict rulebook for building, refactoring, or expanding any web projects (React, Next.js, Astro, etc.) for Mahendra. It preserves his visual tastes, interactive UX patterns, and technical preferences.

---

## 🛠️ 1. Technical Stack & Architecture

Always default to these packages and configurations when creating or modifying workspaces:

### **Frontend & Interfaces**
*   **Core Systems:** Astro (v6.x) for static/hybrid landing pages; React & Next.js for dashboard apps.
*   **Styling:** Tailwind CSS (v4) with native CSS-driven theme configurations.
*   **Components:** Shadcn UI, customized Radix primitives, and Tailwind-designed custom elements.
*   **State Management:** Client-side reactive stores using **Nanostores** (for Astro/lightweight pages) or **React Query (TanStack)** and **Redux** (for complex dashboards).
*   **Data Presentation:** **TanStack Table (v8)** for interactive grids and **Recharts** for budgetary/analytical dashboards.
*   **Forms & Validation:** **Zod** for schema validations, integrated with **React Hook Form**.

### **Backend & APIs**
*   **Core Engine:** Java 21, Spring Boot, Spring Batch (high-throughput batch processing).
*   **Communication:** Event-driven microservices via **Apache Kafka**, **AWS SQS**, and **AWS SNS**.
*   **Storage:** PostgreSQL (primary SQL database), MySQL, MongoDB, and AWS S3 (asset storage).
*   **ORM:** Prisma ORM (for Node/Next.js stacks) or JPA/Hibernate (for Spring Boot stacks).

---

## 🎨 2. Visual Design System & Aesthetics
All projects must match a **premium, local-first, Vercel-inspired developer aesthetic**.

### **Color Scheme (Dark-Mode First)**
Do not build light-theme toggles unless requested. The environment is dark-first:
*   **Base Background:** Pure Dark Black (`#09090b` / `zinc-950`)
*   **Card backgrounds:** Translucent dark gray (`#18181b` / `zinc-900` at low opacity, or `rgba(12, 12, 14, 0.6)`)
*   **Borders:** Subtle dark borders (`zinc-900` or `zinc-850/60` / `rgba(255, 255, 255, 0.05)`)
*   **Primary Text:** Off-white (`#fafafa` / `zinc-50` or `zinc-100`)
*   **Muted Text:** Medium gray (`zinc-400` or `zinc-500`)

### **Technology & Category Accent Colors**
Color choices are strictly semantic. Map technology stacks and item categories to these specific color tokens:

| Technology / Category | Color Token | Classes (Tailwind) |
| :--- | :--- | :--- |
| **Java 21** | Orange | `text-orange-400 border-orange-500/20 bg-orange-500/10` |
| **Spring Boot** | Emerald | `text-emerald-400 border-emerald-500/20 bg-emerald-500/10` |
| **React / Next.js** | Cyan / Blue | `text-cyan-400 border-cyan-500/20 bg-cyan-500/10` |
| **Apache Kafka** | Indigo | `text-indigo-400 border-indigo-500/20 bg-indigo-500/10` |
| **AWS Cloud Services** | Amber | `text-amber-400 border-amber-500/20 bg-amber-500/10` |
| **PostgreSQL / SQL** | Blue | `text-blue-400 border-blue-500/20 bg-blue-500/10` |
| **Enterprise Applications** | Blue | `bg-blue-500/10 text-blue-400 border-blue-500/20` |
| **Freelance Projects** | Emerald | `bg-emerald-500/10 text-emerald-400 border-emerald-500/20` |
| **Community Tools** | Indigo | `bg-indigo-500/10 text-indigo-400 border-indigo-500/20` |
| **Personal Projects** | Amber | `bg-amber-500/10 text-amber-400 border-amber-500/20` |
| **Miscellaneous / Tools** | Violet / Pink / Rose | `text-purple-400 border-purple-500/20 bg-purple-500/10` |

---

## ✨ 3. UI/UX Signature Patterns

To replicate Mahendra's exact premium styling, implement the following patterns:

### **A. Glassmorphism Panels (`.glass-panel`)**
Use this for floating widgets, modals, list cards, and terminal components.
```css
.glass-panel {
  background: rgba(12, 12, 14, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.03);
  transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.glass-panel:hover {
  border-color: rgba(255, 255, 255, 0.09);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(59, 130, 246, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
```

### **B. Premium Hover Borders (`.premium-card`)**
Bento grid items and core sections must have border gradients that dynamically shift or light up on hover.
```css
.premium-card {
  position: relative;
  background: rgba(12, 12, 14, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.premium-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01) 40%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.02));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.premium-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(99, 102, 241, 0.04);
}
.premium-card:hover::before {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(139, 92, 246, 0.15) 30%, rgba(0, 0, 0, 0) 70%, rgba(255, 255, 255, 0.03));
}
```

### **C. Blueprint Grids & Structural Lines**
To evoke a technical/developer blueprint look:
*   **Dot Grid Overlay:** Apply `.bg-grid-dots` (`background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)` with `background-size: 16px 16px`).
*   **Structural Divider Lines:** Place thin absolute lines with gradient masks:
    ```html
    <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-60"></div>
    <div class="absolute inset-y-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-zinc-900 to-transparent hidden lg:block opacity-45"></div>
    ```
*   **Monospace Status Text:** Add non-interactive monospace metadata in container corners (e.g. `SYS.INIT // 0x7E1B`, `LATENCY // 0.05ms`, or `VER.2.0`).

### **D. Ambient Glow Orbs**
Add large, blurred, animated background gradients to create depth:
```html
<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-zinc-950">
  <div class="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-blue-600/10 blur-[130px] animate-drift-slow"></div>
  <div class="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-purple-600/8 blur-[130px] animate-drift-reverse"></div>
</div>
```

### **E. Interactive Cmd+K Command Palette**
Include a command palette overlay supporting:
*   **Key combos:** Bind `Cmd+K` / `Ctrl+K` to open, and `Escape` to close.
*   **Actions:** Scroll-to-sections (`#skills`, `#projects`), path redirects, tel/mailto triggering, and opening social URLs.
*   **Temporary Highlights:** When navigating to an item from the command palette, add a temporary glow ring to draw attention:
    ```javascript
    element.classList.add('ring-2', 'ring-blue-500/50', 'duration-500');
    setTimeout(() => element.classList.remove('ring-2', 'ring-blue-500/50'), 2000);
    ```

### **F. Monospace Coding Switcher**
Embed mock code terminals with operational tab headers (e.g., file extensions like `.java`, `.log`, `.json`) allowing users to switch views.
Include a pulsing active online indicator dot (`bg-emerald-500`) overlapping the top right border.

---

## ⚡ 4. Developer Conventions & Rules

When writing files or introducing components, adhere strictly to these rules:

1.  **Keep Astro Components Config-Driven:**
    Centralize editable content (titles, links, descriptions, projects list, services) in a single configuration file like [config.ts](file:///Users/mahendra/Developer/resume-website/src/config.ts) and reference them dynamically inside `.astro` files.
2.  **Support ViewTransitions & Swap Actions:**
    Since Astro uses navigation lifecycle swaps, always wire event listeners (search filters, tab setups, back-to-top buttons) to both standard load and `'astro:after-swap'`:
    ```javascript
    document.addEventListener('astro:after-swap', setupFunction);
    ```
3.  **Optimize SVG Icons:**
    Do not import heavy icon libraries. Prefer placing precise inline `<svg>` blocks, or compiling them in a local dictionary file like `utils/icons.ts`.
4.  **Premium Typographies:**
    *   **Sans-Serif Font:** Geist, Inter.
    *   **Monospace Font:** Geist Mono, SFMono-Regular (used for terminal code, tags, tables, credentials, and time values).
    *   **Accent Logo Styles:** Playfair Display (classic serif), Space Grotesk, Syne, Outfit, or Plus Jakarta Sans.
5.  **Strict Linting & Clean Diffs:**
    *   Never modify the existing `.gitignore` or default configs.
    *   Keep modifications to existing code cleanly structured.
    *   Preserve existing docstrings, copyright tags, and metadata graphs unless explicitly instructed to update them.
