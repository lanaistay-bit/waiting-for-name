const ALUMNI_PORTRAIT_URLS = {
  "m-visvesvaraya": "/assets/generated/visvesvaraya-historical-portrait.dim_300x400.jpg",
  "thomas-kailath": "/assets/generated/alumni-thomas-kailath.dim_300x300.jpg",
  "suhas-patankar": "/assets/generated/alumni-suhas-patankar.dim_300x300.jpg",
  "c-kumar-patel": "/assets/generated/alumni-c-kumar-patel.dim_300x300.jpg",
  "ramesh-raskar": "/assets/generated/alumni-ramesh-raskar.dim_300x300.jpg",
  "vijay-kelkar": "/assets/generated/alumni-vijay-kelkar.dim_300x300.jpg",
  "lila-poonawalla": "/assets/generated/alumni-lila-poonawalla.dim_300x300.jpg",
  "rajiv-bajaj": "/assets/generated/alumni-rajiv-bajaj.dim_300x300.jpg",
  "laxman-narasimhan": "/assets/generated/alumni-laxman-narasimhan.dim_300x300.jpg",
  "sandeep-johri": "/assets/generated/alumni-sandeep-johri.dim_300x300.jpg"
};
const TIMELINE_IMAGE_URLS = {
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
  2024: "/assets/generated/timeline-2022-university.dim_800x500.jpg"
};
function getTimelineImageUrl(year) {
  return TIMELINE_IMAGE_URLS[year] ?? "/assets/generated/timeline-2022-university.dim_800x500.jpg";
}
const IMAGE_FALLBACKS = {
  campus: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
  sports: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
  culturalFest: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
  library: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
  researchLab: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
  engineering: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  notice: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80",
  convocation: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  industry: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
};
const CAMPUS_IMAGE_URLS = {
  "Historic Campus": "https://www.coeptech.ac.in/wp-content/uploads/2022/09/COEP-Main-Building-scaled.jpg",
  "Sports & Athletics": "https://www.coeptech.ac.in/wp-content/uploads/2023/05/Sports-Ground.jpg",
  "Cultural Fests": "https://www.coeptech.ac.in/wp-content/uploads/2023/10/Cultural-Fest.jpg",
  "Research Labs": "https://www.coeptech.ac.in/wp-content/uploads/2023/03/Research-Lab.jpg",
  Library: "https://www.coeptech.ac.in/wp-content/uploads/2023/08/KRC-Library.jpg"
};
const CAMPUS_IMAGE_FALLBACKS = {
  "Historic Campus": IMAGE_FALLBACKS.campus,
  "Sports & Athletics": IMAGE_FALLBACKS.sports,
  "Cultural Fests": IMAGE_FALLBACKS.culturalFest,
  "Research Labs": IMAGE_FALLBACKS.researchLab,
  Library: IMAGE_FALLBACKS.library
};
function getCampusImageUrl(scene) {
  return CAMPUS_IMAGE_URLS[scene] ?? IMAGE_FALLBACKS.campus;
}
function getCampusImageFallback(scene) {
  return CAMPUS_IMAGE_FALLBACKS[scene] ?? IMAGE_FALLBACKS.campus;
}
const EVENT_IMAGE_URLS = {
  Festival: "https://www.coeptech.ac.in/wp-content/uploads/2025/01/ZEST26-1024x576.jpg",
  Sports: "https://www.coeptech.ac.in/wp-content/uploads/2023/10/Regatta.jpg",
  Culture: "https://www.coeptech.ac.in/wp-content/uploads/2023/11/Impressions.jpg",
  Academic: "https://www.coeptech.ac.in/wp-content/uploads/2024/08/First-Convocation-Ceremony-2024-1024x576.jpg",
  Research: "https://www.coeptech.ac.in/wp-content/uploads/2023/07/research-innovation.jpg",
  Management: "https://www.coeptech.ac.in/wp-content/uploads/2024/12/Industry-Meet.jpg",
  Examination: IMAGE_FALLBACKS.notice,
  Scholarship: IMAGE_FALLBACKS.convocation,
  Finance: IMAGE_FALLBACKS.notice,
  General: IMAGE_FALLBACKS.campus,
  PhD: IMAGE_FALLBACKS.researchLab
};
const EVENT_IMAGE_FALLBACKS = {
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
  PhD: IMAGE_FALLBACKS.researchLab
};
function getEventImageUrl(category) {
  return EVENT_IMAGE_URLS[category] ?? IMAGE_FALLBACKS.culturalFest;
}
function getEventImageFallback(category) {
  return EVENT_IMAGE_FALLBACKS[category] ?? IMAGE_FALLBACKS.campus;
}
const RESEARCH_IMAGE_URLS = {
  iot: "https://www.coeptech.ac.in/wp-content/uploads/2023/09/bhau-institute.jpg",
  ar: "https://www.coeptech.ac.in/wp-content/uploads/2022/11/AR-VR-Lab.jpg",
  energy: "https://www.coeptech.ac.in/wp-content/uploads/2023/07/research-innovation.jpg",
  blockchain: "https://www.coeptech.ac.in/wp-content/uploads/2023/08/smart-manufacturing.jpg",
  data: "https://www.coeptech.ac.in/wp-content/uploads/2023/07/research-innovation.jpg"
};
const RESEARCH_IMAGE_FALLBACKS = {
  iot: IMAGE_FALLBACKS.engineering,
  ar: IMAGE_FALLBACKS.researchLab,
  energy: IMAGE_FALLBACKS.engineering,
  blockchain: IMAGE_FALLBACKS.engineering,
  data: IMAGE_FALLBACKS.researchLab
};
function getResearchImageUrl(topic) {
  const lower = topic.toLowerCase();
  if (lower.includes("iot") || lower.includes("machine learning") || lower.includes("manufacturing"))
    return RESEARCH_IMAGE_URLS.iot;
  if (lower.includes("augmented") || lower.includes("ar") || lower.includes("ai") || lower.includes("urban"))
    return RESEARCH_IMAGE_URLS.ar;
  if (lower.includes("energy") || lower.includes("renewable") || lower.includes("solar"))
    return RESEARCH_IMAGE_URLS.energy;
  if (lower.includes("blockchain") || lower.includes("supply chain"))
    return RESEARCH_IMAGE_URLS.blockchain;
  if (lower.includes("medical") || lower.includes("deep learning") || lower.includes("data"))
    return RESEARCH_IMAGE_URLS.data;
  return RESEARCH_IMAGE_URLS.iot;
}
function getResearchImageFallback(topic) {
  const lower = topic.toLowerCase();
  if (lower.includes("iot") || lower.includes("machine learning") || lower.includes("manufacturing"))
    return RESEARCH_IMAGE_FALLBACKS.iot;
  if (lower.includes("augmented") || lower.includes("ar") || lower.includes("ai") || lower.includes("urban"))
    return RESEARCH_IMAGE_FALLBACKS.ar;
  if (lower.includes("energy") || lower.includes("renewable") || lower.includes("solar"))
    return RESEARCH_IMAGE_FALLBACKS.energy;
  if (lower.includes("blockchain") || lower.includes("supply chain"))
    return RESEARCH_IMAGE_FALLBACKS.blockchain;
  if (lower.includes("medical") || lower.includes("deep learning") || lower.includes("data"))
    return RESEARCH_IMAGE_FALLBACKS.data;
  return RESEARCH_IMAGE_FALLBACKS.iot;
}
export {
  ALUMNI_PORTRAIT_URLS as A,
  getCampusImageUrl as a,
  getResearchImageFallback as b,
  getResearchImageUrl as c,
  getEventImageUrl as d,
  getEventImageFallback as e,
  getTimelineImageUrl as f,
  getCampusImageFallback as g
};
