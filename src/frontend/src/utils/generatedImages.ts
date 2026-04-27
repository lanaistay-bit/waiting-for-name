/**
 * generatedImages.ts
 * Central registry mapping roles/categories to generated image paths.
 * All paths are /assets/generated/... served from public/.
 */

// ─── Portrait images ─────────────────────────────────────────────────────────
// Each role maps to a unique, humanised Indian-looking portrait image

export function getMalePortraitUrl(
  role: "vc" | "director" | "dean" | "faculty" | "default" = "default",
): string {
  if (role === "vc")
    return "/assets/generated/vc-portrait-indian.dim_300x400.jpg";
  if (role === "director")
    return "/assets/generated/director-sp-mahajan-portrait.dim_300x400.jpg";
  if (role === "dean")
    return "/assets/generated/dean-pa-sadgir-portrait.dim_300x400.jpg";
  return "/assets/generated/adean-pp-bartakke-portrait.dim_300x400.jpg";
}

export function getFemalePortraitUrl(): string {
  return "/assets/generated/director-female-portrait.dim_300x400.jpg";
}

export function getPortraitUrl(
  gender: "male" | "female",
  role?: "vc" | "director" | "dean" | "faculty" | "default",
): string {
  if (gender === "female") return getFemalePortraitUrl();
  return getMalePortraitUrl(role);
}

// ─── Alumni portraits ────────────────────────────────────────────────────────

export const ALUMNI_PORTRAIT_URLS: Record<string, string> = {
  "m-visvesvaraya":
    "/assets/generated/visvesvaraya-historical-portrait.dim_300x400.jpg",
  "thomas-kailath": "/assets/generated/alumni-thomas-kailath.dim_300x300.jpg",
  "suhas-patankar": "/assets/generated/alumni-suhas-patankar.dim_300x300.jpg",
  "c-kumar-patel": "/assets/generated/alumni-c-kumar-patel.dim_300x300.jpg",
  "ramesh-raskar": "/assets/generated/alumni-ramesh-raskar.dim_300x300.jpg",
  "vijay-kelkar": "/assets/generated/alumni-vijay-kelkar.dim_300x300.jpg",
  "lila-poonawalla": "/assets/generated/alumni-lila-poonawalla.dim_300x300.jpg",
  "rajiv-bajaj": "/assets/generated/alumni-rajiv-bajaj.dim_300x300.jpg",
  "laxman-narasimhan":
    "/assets/generated/alumni-laxman-narasimhan.dim_300x300.jpg",
  "sandeep-johri": "/assets/generated/alumni-sandeep-johri.dim_300x300.jpg",
};

export function getAlumniPortraitUrl(id: string): string {
  return (
    ALUMNI_PORTRAIT_URLS[id] ??
    "/assets/generated/alumni-modern-executive-portrait.dim_300x300.jpg"
  );
}

// ─── Timeline images ─────────────────────────────────────────────────────────

export const TIMELINE_IMAGE_URLS: Record<number, string> = {
  1854: "/assets/generated/timeline-1854-foundation.dim_800x500.jpg",
  1867: "/assets/generated/timeline-1854-foundation.dim_800x500.jpg",
  1908: "/assets/generated/timeline-1908-civil-engineering.dim_800x500.jpg",
  1911: "/assets/generated/timeline-1908-civil-engineering.dim_800x500.jpg",
  1912: "/assets/generated/timeline-1908-civil-engineering.dim_800x500.jpg",
  1932: "/assets/generated/timeline-1908-civil-engineering.dim_800x500.jpg",
  1947: "/assets/generated/timeline-1947-independence.dim_800x500.jpg",
  1966: "/assets/generated/timeline-1947-independence.dim_800x500.jpg",
  2004: "/assets/generated/timeline-2022-university.dim_800x500.jpg",
  2012: "/assets/generated/timeline-2022-university.dim_800x500.jpg",
  2022: "/assets/generated/timeline-2022-university.dim_800x500.jpg",
  2024: "/assets/generated/timeline-2022-university.dim_800x500.jpg",
};

export function getTimelineImageUrl(year: number): string {
  return (
    TIMELINE_IMAGE_URLS[year] ??
    "/assets/generated/timeline-2022-university.dim_800x500.jpg"
  );
}

// ─── Fallback images (Unsplash — always available) ───────────────────────────

export const IMAGE_FALLBACKS = {
  campus:
    "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
  sports:
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
  culturalFest:
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
  library:
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
  researchLab:
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  engineering:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  notice:
    "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80",
  convocation:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  industry:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
};

// ─── Campus collage images ────────────────────────────────────────────────────

export const CAMPUS_IMAGE_URLS: Record<string, string> = {
  "Historic Campus":
    "https://www.coeptech.ac.in/wp-content/uploads/2022/09/COEP-Main-Building-scaled.jpg",
  "Sports & Athletics":
    "https://www.coeptech.ac.in/wp-content/uploads/2023/05/Sports-Ground.jpg",
  "Cultural Fests":
    "https://www.coeptech.ac.in/wp-content/uploads/2023/10/Cultural-Fest.jpg",
  "Research Labs":
    "https://www.coeptech.ac.in/wp-content/uploads/2023/03/Research-Lab.jpg",
  Library:
    "https://www.coeptech.ac.in/wp-content/uploads/2023/08/KRC-Library.jpg",
};

export const CAMPUS_IMAGE_FALLBACKS: Record<string, string> = {
  "Historic Campus": IMAGE_FALLBACKS.campus,
  "Sports & Athletics": IMAGE_FALLBACKS.sports,
  "Cultural Fests": IMAGE_FALLBACKS.culturalFest,
  "Research Labs": IMAGE_FALLBACKS.researchLab,
  Library: IMAGE_FALLBACKS.library,
};

export function getCampusImageUrl(scene: string): string {
  return CAMPUS_IMAGE_URLS[scene] ?? IMAGE_FALLBACKS.campus;
}

export function getCampusImageFallback(scene: string): string {
  return CAMPUS_IMAGE_FALLBACKS[scene] ?? IMAGE_FALLBACKS.campus;
}

// ─── Event images ─────────────────────────────────────────────────────────────

export const EVENT_IMAGE_URLS: Record<string, string> = {
  Festival:
    "https://www.coeptech.ac.in/wp-content/uploads/2025/01/ZEST26-1024x576.jpg",
  Sports: "https://www.coeptech.ac.in/wp-content/uploads/2023/10/Regatta.jpg",
  Culture:
    "https://www.coeptech.ac.in/wp-content/uploads/2023/11/Impressions.jpg",
  Academic:
    "https://www.coeptech.ac.in/wp-content/uploads/2024/08/First-Convocation-Ceremony-2024-1024x576.jpg",
  Research:
    "https://www.coeptech.ac.in/wp-content/uploads/2023/07/research-innovation.jpg",
  Management:
    "https://www.coeptech.ac.in/wp-content/uploads/2024/12/Industry-Meet.jpg",
  Examination: IMAGE_FALLBACKS.notice,
  Scholarship: IMAGE_FALLBACKS.convocation,
  Finance: IMAGE_FALLBACKS.notice,
  General: IMAGE_FALLBACKS.campus,
  PhD: IMAGE_FALLBACKS.researchLab,
};

export const EVENT_IMAGE_FALLBACKS: Record<string, string> = {
  Festival: IMAGE_FALLBACKS.culturalFest,
  Sports: IMAGE_FALLBACKS.sports,
  Culture: IMAGE_FALLBACKS.culturalFest,
  Academic: IMAGE_FALLBACKS.convocation,
  Research: IMAGE_FALLBACKS.researchLab,
  Management: IMAGE_FALLBACKS.industry,
  Examination: IMAGE_FALLBACKS.notice,
  Scholarship: IMAGE_FALLBACKS.convocation,
  Finance: IMAGE_FALLBACKS.notice,
  General: IMAGE_FALLBACKS.campus,
  PhD: IMAGE_FALLBACKS.researchLab,
};

export function getEventImageUrl(category: string): string {
  return EVENT_IMAGE_URLS[category] ?? IMAGE_FALLBACKS.culturalFest;
}

export function getEventImageFallback(category: string): string {
  return EVENT_IMAGE_FALLBACKS[category] ?? IMAGE_FALLBACKS.campus;
}

// ─── Research thumbnail images ────────────────────────────────────────────────

export const RESEARCH_IMAGE_URLS: Record<string, string> = {
  iot: "https://www.coeptech.ac.in/wp-content/uploads/2023/09/bhau-institute.jpg",
  ar: "https://www.coeptech.ac.in/wp-content/uploads/2022/11/AR-VR-Lab.jpg",
  ai: "https://www.coeptech.ac.in/wp-content/uploads/2022/11/AR-VR-Lab.jpg",
  energy:
    "https://www.coeptech.ac.in/wp-content/uploads/2023/07/research-innovation.jpg",
  blockchain:
    "https://www.coeptech.ac.in/wp-content/uploads/2023/08/smart-manufacturing.jpg",
  ml: "https://www.coeptech.ac.in/wp-content/uploads/2023/09/bhau-institute.jpg",
  data: "https://www.coeptech.ac.in/wp-content/uploads/2023/07/research-innovation.jpg",
  medical:
    "https://www.coeptech.ac.in/wp-content/uploads/2023/03/Research-Lab.jpg",
  urban: "https://www.coeptech.ac.in/wp-content/uploads/2022/11/AR-VR-Lab.jpg",
};

export const RESEARCH_IMAGE_FALLBACKS: Record<string, string> = {
  iot: IMAGE_FALLBACKS.engineering,
  ar: IMAGE_FALLBACKS.researchLab,
  ai: IMAGE_FALLBACKS.researchLab,
  energy: IMAGE_FALLBACKS.engineering,
  blockchain: IMAGE_FALLBACKS.engineering,
  ml: IMAGE_FALLBACKS.researchLab,
  data: IMAGE_FALLBACKS.researchLab,
  medical: IMAGE_FALLBACKS.researchLab,
  urban: IMAGE_FALLBACKS.campus,
};

export function getResearchImageUrl(topic: string): string {
  const lower = topic.toLowerCase();
  if (
    lower.includes("iot") ||
    lower.includes("machine learning") ||
    lower.includes("manufacturing")
  )
    return RESEARCH_IMAGE_URLS.iot;
  if (
    lower.includes("augmented") ||
    lower.includes("ar") ||
    lower.includes("ai") ||
    lower.includes("urban")
  )
    return RESEARCH_IMAGE_URLS.ar;
  if (
    lower.includes("energy") ||
    lower.includes("renewable") ||
    lower.includes("solar")
  )
    return RESEARCH_IMAGE_URLS.energy;
  if (lower.includes("blockchain") || lower.includes("supply chain"))
    return RESEARCH_IMAGE_URLS.blockchain;
  if (
    lower.includes("medical") ||
    lower.includes("deep learning") ||
    lower.includes("data")
  )
    return RESEARCH_IMAGE_URLS.data;
  return RESEARCH_IMAGE_URLS.iot;
}

export function getResearchImageFallback(topic: string): string {
  const lower = topic.toLowerCase();
  if (
    lower.includes("iot") ||
    lower.includes("machine learning") ||
    lower.includes("manufacturing")
  )
    return RESEARCH_IMAGE_FALLBACKS.iot;
  if (
    lower.includes("augmented") ||
    lower.includes("ar") ||
    lower.includes("ai") ||
    lower.includes("urban")
  )
    return RESEARCH_IMAGE_FALLBACKS.ar;
  if (
    lower.includes("energy") ||
    lower.includes("renewable") ||
    lower.includes("solar")
  )
    return RESEARCH_IMAGE_FALLBACKS.energy;
  if (lower.includes("blockchain") || lower.includes("supply chain"))
    return RESEARCH_IMAGE_FALLBACKS.blockchain;
  if (
    lower.includes("medical") ||
    lower.includes("deep learning") ||
    lower.includes("data")
  )
    return RESEARCH_IMAGE_FALLBACKS.data;
  return RESEARCH_IMAGE_FALLBACKS.iot;
}
