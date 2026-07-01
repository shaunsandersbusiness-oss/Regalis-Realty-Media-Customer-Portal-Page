@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;
  --color-gold: #c9a84c;
  --color-gold-dim: rgba(201, 168, 76, 0.15);
  --color-bg-dark: #0a0a0a;
}

:root {
  color-scheme: dark;
}

body {
  background-color: #000000;
  color: #d4d4d4;
  font-family: var(--font-sans);
  overflow-x: hidden;
}

/* ═══════════════════════════════════════════ */
/* NAVBAR                                      */
/* ═══════════════════════════════════════════ */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(201, 168, 76, 0.15);
  z-index: 1000;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.nav-logo-img {
  height: 40px;
  width: auto;
}

/* Desktop Nav Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  color: #D4D4D4;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap;
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

.nav-link:hover {
  color: #c9a84c;
  background: rgba(201, 168, 76, 0.06);
}

/* ACTIVE state — gold text + gold underline */
.nav-link.active {
  color: #c9a84c;
  position: relative;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 12px;
  right: 12px;
  height: 2px;
  background: #c9a84c;
  border-radius: 1px;
}

/* Hamburger Button (hidden on desktop) */
.nav-hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  flex-direction: column;
  gap: 5px;
}

.hamburger-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #D4D4D4;
  border-radius: 1px;
  transition: all 0.3s ease;
}

/* Mobile Menu Overlay (hidden by default) */
.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  right: -100%;
  width: 280px;
  height: calc(100vh - 70px);
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-left: 1px solid rgba(201, 168, 76, 0.1);
  padding: 24px;
  transition: right 0.3s ease;
  overflow-y: auto;
  z-index: 999;
}

.mobile-menu.open {
  right: 0;
}

.mobile-link {
  display: block;
  color: #D4D4D4;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

.mobile-link:hover,
.mobile-link:active {
  color: #c9a84c;
  background: rgba(201, 168, 76, 0.06);
}

.mobile-link.active {
  color: #c9a84c;
  background: rgba(201, 168, 76, 0.08);
  border-left: 2px solid #c9a84c;
}

/* ═══════════════════════════════════════════ */
/* RESPONSIVE — MOBILE (below 768px)           */
/* ═══════════════════════════════════════════ */

@media (max-width: 768px) {
  .nav-links {
    display: none; /* Hide desktop links */
  }

  .nav-hamburger {
    display: flex; /* Show hamburger */
  }

  .mobile-menu {
    display: block; /* Enable mobile menu (still off-screen until .open) */
  }
}

/* ═══════════════════════════════════════════ */
/* PAGE BODY OFFSET (so content isn't hidden   */
/* behind the fixed navbar)                    */
/* ═══════════════════════════════════════════ */

body {
  padding-top: 70px;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0a0a0a;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #444;
}

/* Animation Keyframes */
@keyframes float-orb {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  33% { transform: translate3d(30px, -50px, 0) scale(1.05); }
  66% { transform: translate3d(-20px, 20px, 0) scale(0.96); }
}

@keyframes rise-particle {
  0% { opacity: 0; transform: translate3d(0, 0, 0); }
  20% { opacity: 0.12; }
  100% { opacity: 0; transform: translate3d(20px, -250px, 0); }
}

@keyframes shimmer-horizon {
  0%, 100% { opacity: 0.05; transform: scaleX(0.8); }
  50% { opacity: 0.1; transform: scaleX(1); }
}

@keyframes cardGlow {
  0%   { transform: translate3d(0, 0, 0); }
  50%  { transform: translate3d(10%, -5%, 0); }
  100% { transform: translate3d(-5%, 10%, 0); }
}

/* Utility Classes for Animations */
.animate-float-1 { animation: float-orb 24s ease-in-out infinite; }
.animate-float-2 { animation: float-orb 34s ease-in-out infinite reverse; }
.animate-float-3 { animation: float-orb 29s ease-in-out infinite 5s; }

.animate-shimmer { animation: shimmer-horizon 12s ease-in-out infinite; }

/* Guide Card Glow */
.guide-card-glow::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    ellipse at 30% 50%,
    rgba(201, 168, 76, 0.015) 0%,
    transparent 60%
  );
  animation: cardGlow 20s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: 0;
}
