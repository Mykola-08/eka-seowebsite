# EKA Design System

Unified design guidelines for the EKA SEO Website. Covers typography, color, animation, components, forms, accessibility, performance, and marketing pages.

---

## Table of Contents

1. [Typography & Color](#1-typography--color)
2. [Animation & Motion](#2-animation--motion)
3. [Components](#3-components)
4. [Forms & Controls](#4-forms--controls)
5. [Accessibility & Touch](#5-accessibility--touch)
6. [Performance](#6-performance)
7. [Marketing Pages](#7-marketing-pages)

---

## 1. Typography & Color

### Font Rendering

```css
body {
  -webkit-font-smoothing: antialiased;
}
```

### Font Subsetting

Subset fonts based on content/language. Only include characters you actually use.

### Font Weight Variables

```css
:root {
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Preventing Layout Shift

- **Never** change font weight on hover or selected states — causes layout shift.
- Use `font-variant-numeric: tabular-nums` for numbers that change dynamically (counters, prices, timers).

### Text Wrapping

```css
h1, h2, h3 {
  text-wrap: balance;
}
```

### Letter Spacing by Size

Larger text needs tighter letter spacing; smaller text needs looser spacing. Pair font sizes with optimal letter spacing in a Text component.

### Typographic Characters

| Instead of | Use                    |
|------------|------------------------|
| `...`      | `…` (ellipsis)         |
| `'`        | `'` (curly apostrophe) |
| `"`        | `"` (curly quotes)     |

### Shadows & Borders (Flat Apple Clean Minimalist)

**DO NOT USE SHADOWS.** The site design is strictly flat to maintain an Apple-clean minimalist aesthetic.
- Use borders instead of shadows to separate surfaces (e.g., `border border-border/60`).
- Ensure all elevation tokens (`--shadow-sm`, `--shadow-md`, etc.) evaluate to flat (`0 0 #0000`).

### Rounding (Fully Rounded Radius)

The baseline border-radius for the entire website is designed to be highly rounded, reflecting macOS/iOS behaviors:
- **Controls & Buttons**: `rounded-full` (e.g., standard buttons, inputs, hover pills in headers).
- **Large Surfaces**: `rounded-[2rem]` (e.g., cards, dialogs, dropdown panels, cookie banners).
- Avoid blocky or squared-off corners (`rounded-md`, `rounded-lg`, `rounded-xl`) across foundational elements.

### Hairline Borders

Use 0.5px borders on retina displays:

```css
:root {
  --border-hairline: 1px;

  @media only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi) {
    --border-hairline: 0.5px;
  }
}
```

### Gradients

- **Eased gradients** over linear gradients for solid colors (avoids banding). Tool: https://larsenwork.com/easing-gradients/
- **Prefer `mask-image`** over gradients for fades — works better with varying content.

```css
.fade-bottom {
  mask-image: linear-gradient(to bottom, black 80%, transparent);
}
```

### Scrollbars

Only customize scrollbars in small elements (code snippets), never the page scrollbar:

```css
.code-block::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.code-block::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
```

### Focus Outlines

Only use grey, black, or white outline colors. Custom colored outlines clash with the interface.

### Z-Index Scale

Use a fixed scale, avoid arbitrary values:

```css
:root {
  --z-dropdown: 100;
  --z-modal: 200;
  --z-tooltip: 300;
  --z-toast: 400;
}
```

Prefer `isolation: isolate` to create stacking contexts without z-index.

### Safe Areas

Account for device notches/home indicators:

```css
.footer {
  padding-bottom: env(safe-area-inset-bottom);
}
```

### Dark Mode

Use CSS variables with a numerical scale and flip them per theme. **Do not** use Tailwind `dark:` modifier for manual overrides:

```css
:root {
  --gray-1: #fafafa;
  --gray-12: #171717;
}
[data-theme="dark"] {
  --gray-1: #171717;
  --gray-12: #fafafa;
}

/* Good */
.button { background: var(--gray-12); color: var(--gray-1); }

/* Avoid */
.button { @apply bg-gray-900 dark:bg-gray-100; }
```

### Decorative Elements

- Disable `pointer-events` on decorative backgrounds.
- Disable `user-select` on code illustrations.

### Refresh Behavior

No flash of content on refresh — store state in localStorage/sessionStorage, use proper SSR hydration, set initial state before render.

---

## 2. Animation & Motion

Based on Emil Kowalski's "Animations on the Web" course.

### Quick Decision

1. **Element entering or exiting?** → `ease-out`
2. **On-screen element moving?** → `ease-in-out`
3. **Hover/color transition?** → `ease`
4. **Seen 100+ times daily?** → Don't animate

### Easing Curves

#### ease-out (Most Common)

For user-initiated interactions: dropdowns, modals, tooltips, elements entering/exiting.

```css
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
--ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
--ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
--ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);
```

#### ease-in-out (For Movement)

For elements already on screen that need to move/morph:

```css
--ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
--ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
--ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
--ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
--ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
--ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
```

#### ease (For Hover Effects)

```css
transition: background-color 150ms ease;
```

#### linear — Only for constant-speed animations (marquees, tickers, progress bars).

#### ease-in — Almost never use. Feels sluggish.

### Paired Elements Rule

Elements that animate together **must** use the same easing and duration:

```css
.modal { transition: transform 200ms ease-out; }
.overlay { transition: opacity 200ms ease-out; }
```

### Duration Guidelines

| Element Type              | Duration    |
|---------------------------|-------------|
| Micro-interactions        | 100–150ms   |
| Standard UI               | 150–250ms   |
| Modals, drawers           | 200–300ms   |
| Page transitions          | 300–400ms   |

UI animations should stay under 300ms.

### Frequency Principle

- **100+ times/day** → No animation
- **Occasional use** → Standard animation
- **Rare/first-time** → Can add delight

### When to Animate

**Do:** Enter/exit transitions, state changes, user action feedback, rare interactions.
**Don't:** Keyboard-initiated actions, frequently-used hover effects, anything 100+ times daily.

### Spring Animations

Use springs for drag interactions, "alive" elements, interruptible gestures:

```js
// Apple approach (recommended)
{ type: "spring", duration: 0.5, bounce: 0.2 }
```

Keep bounce subtle (0.1–0.3) or avoid entirely in most UI.

### Animation Performance

Only animate `transform` and `opacity` — these run on the GPU.

**Avoid:** `padding`, `margin`, `height`, `width` (trigger layout), `blur-sm` filters above 20px.

```css
.animated-element { will-change: transform; }
```

**Framer Motion:**

```jsx
// Hardware accelerated
<motion.div animate={{ transform: "translateX(100px)" }} />

// NOT hardware accelerated
<motion.div animate={{ x: 100 }} />
```

### `prefers-reduced-motion`

Every animation needs a reduced-motion media query:

```css
@media (prefers-reduced-motion: reduce) {
  .modal { animation: none; }
}
```

Framer Motion:

```jsx
const shouldReduceMotion = useReducedMotion();
<motion.div initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} />
```

For video: show play buttons instead of autoplay when reduced motion is preferred.

### Theme Transitions

**Disable all transitions during theme switches** to prevent flash of animated content:

```js
function setTheme(theme) {
  document.documentElement.classList.add('no-transitions');
  document.documentElement.setAttribute('data-theme', theme);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('no-transitions');
    });
  });
}
```

### Practical Tips

| Scenario                         | Solution                                              |
|----------------------------------|-------------------------------------------------------|
| Responsive button feel           | `transform: scale(0.97)` on `:active`                |
| Element appears from nowhere     | Start from `scale(0.95)`, not `scale(0)`             |
| Shaky animations                 | `will-change: transform`                              |
| Hover flicker                    | Animate child element, not parent                     |
| Wrong scale origin               | Set `transform-origin` to trigger location            |
| Sequential tooltips feel slow    | Skip delay after first tooltip                        |
| Small tap targets                | 44px minimum hit area (pseudo-element)                |
| Hover triggers on mobile         | `@media (hover: hover) and (pointer: fine)`           |

---

## 3. Components

### Compound Components

Use when multiple related parts share state:

```jsx
<Dialog>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Are you sure?</Dialog.Title>
    <Dialog.Close>Cancel</Dialog.Close>
  </Dialog.Content>
</Dialog>
```

**When to use:** Multiple related elements sharing implicit state, components with slots, flexible composition needs.
**When NOT:** Simple components with fixed structure, 1–3 props, structure never changes.

### Customizability — The Goldilocks Principle

```jsx
// Just right — variants + escape hatch
<Button variant="primary" size="md" className="custom-override">Click me</Button>
```

**Layers:** Variants → Size → `className` escape hatch → `asChild` for element polymorphism.

### Props API

- **Consistent naming:** `disabled` (not `isDisabled`), `open` (not `isNotClosed`).
- **Event handlers:** Prefix with `on` (`onChange`, `onBlur`, `onOpenChange`).
- **Children vs render props:** Children for simple cases, render props for data-driven rendering.

### Composition Over Configuration

Prefer composable JSX over configuration objects:

```jsx
<Card>
  <CardHeader><CardTitle>Title</CardTitle></CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter><Button>Action</Button></CardFooter>
</Card>
```

### The `asChild` Pattern (Radix)

```jsx
import { Slot } from "@radix-ui/react-slot";

function Button({ asChild, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp {...props} />;
}
```

### Radix + Framer Motion Animations

Use `asChild` with a `motion` component for animated Radix primitives:

```tsx
<Dialog.Content asChild>
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
  >
    {children}
  </motion.div>
</Dialog.Content>
```

For exit animations, hoist state and use `AnimatePresence` with `forceMount`:

```tsx
const [open, setOpen] = useState(false);

<Dialog.Root open={open} onOpenChange={setOpen}>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <AnimatePresence>
    {open && (
      <Dialog.Content forceMount asChild>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {children}
        </motion.div>
      </Dialog.Content>
    )}
  </AnimatePresence>
</Dialog.Root>
```

### Forward Refs & Spread Props

Always forward refs for DOM-wrapping components. Spread remaining props with `...props`.

### MagicGradient Component

High-performance wrapper around ShaderGradient v2 for cinema-quality moving backgrounds.

**Quick usage:**

```jsx
import MagicGradient from '../components/common/MagicGradient';
<MagicGradient preset="ocean" />
```

**Presets:** `default` (clean), `neon` (cyberpunk), `warm` (sunset), `ocean` (deep sea), `zen` (minimal).

**Key props:** `preset`, `color1`–`color3`, `type` (`plane`/`sphere`/`waterPlane`), `uSpeed`, `uStrength`, `animate`.

**Performance notes:**
- Pixel density hardcoded to `1`.
- `pointer-events: none`, `z-index: -10` by default.
- Requires WebGL. Limit to 1–3 instances per view.
- For container animation, animate `opacity` — don't re-mount the canvas.

---

## 4. Forms & Controls

### Inputs

- **Labels:** Clicking label must focus the input. Always associate via `for`/`id` or wrapping.
- **Input types:** Use appropriate `type` attributes (`email`, `tel`, `url`, `number`, `search`).
- **Spellcheck/autocomplete:** Disable by default for cleaner UX.
- **Decorations:** Position icons absolutely over the input with padding. Clickable icons should refocus the input.
- **iOS font size:** Inputs must be ≥16px to prevent zoom on focus.
- **Autofocus:** Not on touch devices (opens keyboard unexpectedly).

```jsx
const isTouchDevice = 'ontouchstart' in window;
<input autoFocus={!isTouchDevice} />
```

### Forms

- Wrap inputs in `<form>` for Enter-to-submit.
- Support `Cmd+Enter` / `Ctrl+Enter` for textarea submission.
- Prefill with logged-in user data when possible.

### Buttons

- Always use `<button>`, never `<div onClick>`.
- Disable after submission to prevent duplicate requests.
- Show keyboard shortcuts in tooltips.
- `transform: scale(0.97)` on `:active` for press feel.

### Checkboxes & Controls

No dead zones — space between label and control must be clickable.

### Destructive Actions

Require confirmation (proper modal, not `confirm()`).

### Component Libraries

Use Base UI or Radix for accessible primitives. Ensure accessibility is maintained.

---

## 5. Accessibility & Touch

### Touch Devices

**Hover effects:** Only apply with `@media (hover: hover) and (pointer: fine)`. Hover enhances, never enables functionality.

**Touch action:**
- `touch-action: none` for custom pan/zoom gestures.
- `touch-action: manipulation` on buttons/links to prevent double-tap zoom.

**Tap targets:** Minimum 44px, use pseudo-elements if visual size is smaller.

**Video:** `muted playsinline` for iOS autoplay.

**OS shortcuts:** Replace `Cmd` with `Ctrl` based on OS.

### Keyboard Navigation

- Tab only through visible elements. Use `visibility: hidden` or `inert` for hidden panels.
- `scrollIntoView({ behavior: 'smooth', block: 'nearest' })` on keyboard focus.
- Move focus to modal on open, return to trigger on close.

### ARIA

- `aria-label` on icon-only buttons.
- `role="img"` + `aria-label` on code illustrations.

### Tooltips

- 200ms delay before showing.
- Sequential tooltip "warm" state — no delay/animation after first opens.
- Safe-area for submenus via `clip-path` for diagonal cursor movement.

### Time-Limited Actions

Freeze timers when tab is hidden via `visibilitychange` event.

### Feedback

Feedback components must be visible, not hidden behind hover/modals.

---

## 6. Performance

### Animation Performance

See [Section 2](#2-animation--motion). Only animate `transform` and `opacity`. Pause looping animations when off-screen.

### Lists & Virtualization

Virtualize large lists with `@tanstack/react-virtual`:

```jsx
const virtualizer = useVirtualizer({
  count: items.length,
  getScrollElement: () => parentRef.current,
  estimateSize: () => 50,
});
```

### Transitions

**Never** use `transition: all`. Specify exact properties:

```css
.button {
  transition: background-color 200ms ease, transform 200ms ease;
}
```

### Layout Performance

- Hardcoded dimensions for images/videos.
- Skip font weight changes on hover.
- `font-variant-numeric: tabular-nums` for changing numbers.
- Use skeletons for async content.

### Font & Image Preloading

```jsx
import { preload } from 'react-dom';
preload('/fonts/inter-var.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
```

```html
<link rel="preload" as="image" href="/hero.webp" />
```

### React Performance

- Animate outside React's render cycle when possible (use refs for direct DOM manipulation).
- Use hardware-accelerated Framer Motion: `animate={{ transform: "translateX(100px)" }}`.

### CSS Performance

- Don't animate CSS variables in deep trees — triggers style recalculation on all descendants.
- Keep `blur()` filters subtle (< 20px), especially in Safari.

### Static Generation

Generate blogs, changelogs, docs at build time with revalidation:

```jsx
export const revalidate = 3600;
```

### Off-Screen Content

Pause resource-intensive operations when off-screen using `IntersectionObserver`.

---

## 7. Marketing Pages

### Animations

- **No scroll animations** (no fade-ups, translate-Y on scroll).
- **No disconnected motion** (no scroll hijacking, no non-1:1 parallax, no auto-advancing carousels).
- **Intro animations:** Disable if seen during current session (use `sessionStorage`).

### Performance

- Preload fonts and above-the-fold images.
- Static generation for all content pages.

### Navigation

Header submenu content must exist in DOM (for accessibility/SEO), just visually hidden.

### CTAs

Different CTAs based on auth state:

| State      | CTA                                |
|------------|------------------------------------|
| Logged out | "Get Started" / "Sign Up"          |
| Logged in  | "Go to Dashboard" / "Open App"     |

### Documentation

- Copy-to-clipboard button on all code snippets.
- "Copy as Markdown" button on docs pages.
- Visual examples alongside code.

### Blog & Changelog

- RSS feed at `/blog/rss.xml` and `/changelog/rss.xml`.
- `text-wrap: balance` on headings.

### Illustrations

- `aria-label` for accessibility.
- `user-select: none`, `pointer-events: none` for decorative illustrations.

### Scroll Margins

```css
[id] {
  scroll-margin-top: 80px; /* sticky header height */
}
```
