# Cinematic Portfolio Upgrade: Architectural Dev Log

**Date:** 2026-02-20
**Aesthetic Identity:** "High-End Cyber-Physical" / "Scalable Enterprise"

## Core Decisions

1. **Framework & Styling Setup**
   - Retaining the existing `create-react-app` setup within `my-app` to preserve the current routing and build pipeline.
   - Integrating **Tailwind CSS** into the project. Instead of rewriting all `module.css` files from scratch, Tailwind will be used for global architectural spacing, precise colors, and complex glassmorphic visual utility classes, supplementing the existing module structure where appropriate or replacing it for the upgraded components.

2. **Design System Configuration**
   - **Colors:** Deep Slate (`#121212`) for the base, Off-White (`#E2E8F0`) for typography. Accents will rely on Gold/Amber (`#D4AF37`) and Cyan/Teal (`#2DD4BF`) to establish the Cyber-Physical contrast.
   - **Typography:** Replacing generic sans-serifs with "Outfit" (headings, tight tracking, heavy weight) and "Plus Jakarta Sans" (body, data) for a premium, structured enterprise feel.
   - **Visual Texture:** A global SVG turbulence noise filter will be applied globally at 0.03 opacity to give a physical, cinematic grain to the otherwise digital aesthetic.

3. **Motion Architecture (Framer Motion)**
   - All physics-based micro-interactions will use a standardized spring configuration (e.g., `stiffness: 300, damping: 20`) to ensure consistency.
   - Scroll reveals will utilize `whileInView` with a threshold to prevent premature triggering.
   - The Experience section will employ `useScroll` to map the scroll progress directly to the height of a glowing Cyan SV line.

4. **Component Isolation**
   - The original content (text, roles, bullets, project descriptions) remains **strictly untouched**. Changes only apply to wrapper elements, class names, and Framer Motion wrappers (`<motion.div>`). 
   - Interactive Bento-box styling will replace standard flex/grid cards to provide a highly structured, scalable look.
