import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        surface: "oklch(var(--surface, 0.97 0 0))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
          gold: "#E8C42A",
          "gold-subtle": "rgba(232,196,42,0.10)",
          "gold-muted": "rgba(232,196,42,0.15)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        // COEP brand colors as direct Tailwind classes
        cobalt: {
          DEFAULT: "#1A237E",
          50: "#E8EAF6",
          100: "#C5CAE9",
          200: "#9FA8DA",
          400: "#5C6BC0",
          600: "#1A237E",
          800: "#0D1B6E",
          900: "#0A1550",
        },
        "deep-blue": "#0F3399",
        midnight: "#081E5C",
        gold: "#E8C42A",
        "navy-medium": "#283593",
        "navy-light": "#3949AB",
      },
      fontFamily: {
        // New institutional typography system
        cinzel:      ["Cinzel", "Georgia", "serif"],
        inter:       ["Inter", "system-ui", "sans-serif"],
        source:      ["Source Sans 3", "sans-serif"],
        baskerville: ["Libre Baskerville", "Georgia", "serif"],
        manrope:     ["Manrope", "system-ui", "sans-serif"],
        // Backward-compat aliases
        heading: ["Cinzel", "Georgia", "serif"],
        display: ["Cinzel", "Georgia", "serif"],
        body:    ["Source Sans 3", "sans-serif"],
        sans:    ["Inter", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Hero heading: 64px desktop / 42px tablet / 32px mobile
        "hero-h1":        ["4rem",    { fontWeight: "700", lineHeight: "1.2", letterSpacing: "0.5px" }],
        "hero-h1-md":     ["2.625rem",{ fontWeight: "700", lineHeight: "1.2", letterSpacing: "0.5px" }],
        "hero-h1-sm":     ["2rem",    { fontWeight: "700", lineHeight: "1.2", letterSpacing: "0.5px" }],
        // Section heading: 42px desktop / 32px tablet / 26px mobile
        "section-h2":     ["2.625rem",{ fontWeight: "600", lineHeight: "1.3" }],
        "section-h2-md":  ["2rem",    { fontWeight: "600", lineHeight: "1.3" }],
        "section-h2-sm":  ["1.625rem",{ fontWeight: "600", lineHeight: "1.3" }],
        // Card title
        "card-title":     ["1.375rem",{ fontWeight: "600", lineHeight: "1.3" }],
        // Stat number
        "stat-number":    ["2.25rem", { fontWeight: "700", lineHeight: "1" }],
        // Hero tagline
        "hero-tagline":   ["1.25rem", { fontWeight: "500", lineHeight: "1.5", letterSpacing: "1.5px" }],
        // Legacy clamp sizes
        "stats-xl": [
          "clamp(2.75rem, 5.5vw, 4.25rem)",
          { fontWeight: "800", lineHeight: "1" },
        ],
        "display-xl": [
          "clamp(3rem, 6.5vw, 5.5rem)",
          { fontWeight: "700", lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4.5vw, 3.75rem)",
          { fontWeight: "700", lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "section-heading": [
          "clamp(1.75rem, 3.25vw, 2.5rem)",
          { fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.015em" },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        "elevation-sm": "0 2px 8px -2px rgba(0,0,0,0.08)",
        "elevation-md": "0 4px 16px -4px rgba(0,0,0,0.12)",
        "elevation-lg": "0 8px 24px -8px rgba(0,0,0,0.16)",
        premium: "0 4px 24px rgba(0, 0, 0, 0.08)",
        "premium-hover": "0 8px 32px rgba(0, 0, 0, 0.14)",
          cobalt: "0 4px 20px rgba(26, 35, 126, 0.28)",
          "cobalt-sm": "0 2px 12px rgba(26, 35, 126, 0.20)",
          gold: "0 4px 20px rgba(232, 196, 42, 0.30)",
          "gold-sm": "0 2px 12px rgba(232, 196, 42, 0.22)",
        card: "0 2px 12px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 28px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)",
        subtle: "0 1px 3px rgba(0,0,0,0.08)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "carousel-slide": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        tickerScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        carouselSlideIn: {
          from: { opacity: "0", transform: "translateX(32px) scale(0.96)" },
          to: { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% center" },
          to: { backgroundPosition: "200% center" },
        },
        pulseCobalt: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "zoom-in-subtle": {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        imageReveal: {
          from: { opacity: "0", transform: "scale(1.04)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "carousel-slide": "carousel-slide 0.4s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        ticker: "tickerScroll 28s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.5s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "carousel-in": "carouselSlideIn 0.4s ease-out forwards",
        shimmer: "shimmer 1.5s infinite",
        "pulse-cobalt": "pulseCobalt 2s ease-in-out infinite",
        "pulse-gold": "pulseCobalt 2s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "zoom-in-subtle": "zoom-in-subtle 0.4s ease-out forwards",
        "image-reveal": "imageReveal 0.8s ease-out forwards",
        "count-up": "countUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
