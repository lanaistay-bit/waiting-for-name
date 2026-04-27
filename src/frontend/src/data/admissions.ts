// ─── Admissions data for COEP Technological University ─────────────────────

export interface BtechProgram {
  id: string;
  name: string;
  intake: number;
  specialization?: string;
}

export interface MtechProgram {
  id: string;
  dept: string;
  spec: string;
  intake: number;
}

export interface PhDArea {
  id: string;
  dept: string;
  description: string;
}

export interface MBASpec {
  id: string;
  name: string;
  desc: string;
  highlights: string[];
}

export interface PGDiplomaProgram {
  id: string;
  name: string;
  dept: string;
  duration: string;
}

export interface FeeRow {
  id: string;
  program: string;
  category: string;
  tuitionFee: string;
  otherFees: string;
  totalAnnual: string;
}

export interface ProcessStep {
  n: number;
  title: string;
  desc: string;
}

export interface Scholarship {
  id: string;
  name: string;
  eligibility: string;
  benefit: string;
}

// ─── B.Tech Programs ────────────────────────────────────────────────────────

export const BTECH_PROGRAMS: BtechProgram[] = [
  { id: "ce", name: "Computer Engineering", intake: 120 },
  { id: "it", name: "Information Technology", intake: 60 },
  { id: "me", name: "Mechanical Engineering", intake: 120 },
  { id: "civil", name: "Civil Engineering", intake: 60 },
  { id: "ee", name: "Electrical Engineering", intake: 60 },
  { id: "etc", name: "Electronics & Telecom Engineering", intake: 60 },
  { id: "ic", name: "Instrumentation & Control Engineering", intake: 30 },
  { id: "met", name: "Metallurgy & Material Technology", intake: 30 },
];

export const BTECH_PROCESS: ProcessStep[] = [
  {
    n: 1,
    title: "Appear for MHT-CET / JEE Main",
    desc: "Qualify the Maharashtra state CET or JEE Main with a valid score. Scores are used for merit-based shortlisting in the centralized admission process.",
  },
  {
    n: 2,
    title: "Register on CAP Portal",
    desc: "Register on the State Common Admission Process portal managed by State CET Cell, Maharashtra at cetcell.mahacet.org.",
  },
  {
    n: 3,
    title: "Document Verification",
    desc: "Submit academic documents, domicile certificate, and caste/category certificates at the designated Facilitation Centre.",
  },
  {
    n: 4,
    title: "CAP Rounds Allotment",
    desc: "Participate in centralized allotment rounds (CAP Round I, II, III). Confirm seat and pay acceptance fees within the deadline.",
  },
  {
    n: 5,
    title: "Reporting to Institute",
    desc: "Report to COEP Technological University with all original documents and complete the admission formalities to secure your seat.",
  },
];

// ─── M.Tech Programs ────────────────────────────────────────────────────────

export const MTECH_PROGRAMS: MtechProgram[] = [
  {
    id: "mce",
    dept: "Computer Engineering",
    spec: "Computer Engineering (AI/ML)",
    intake: 18,
  },
  {
    id: "mcs",
    dept: "Computer Engineering",
    spec: "Computer Networks & Security",
    intake: 18,
  },
  {
    id: "mcam",
    dept: "Mechanical Engineering",
    spec: "CAD/CAM & Robotics",
    intake: 18,
  },
  {
    id: "mth",
    dept: "Mechanical Engineering",
    spec: "Thermal Engineering",
    intake: 18,
  },
  {
    id: "mmfg",
    dept: "Mechanical Engineering",
    spec: "Manufacturing Engineering",
    intake: 18,
  },
  {
    id: "mse",
    dept: "Civil Engineering",
    spec: "Structural Engineering",
    intake: 18,
  },
  {
    id: "mgeo",
    dept: "Civil Engineering",
    spec: "Geotechnical Engineering",
    intake: 18,
  },
  {
    id: "mwr",
    dept: "Civil Engineering",
    spec: "Water Resources Engineering",
    intake: 18,
  },
  {
    id: "mps",
    dept: "Electrical Engineering",
    spec: "Power Systems",
    intake: 18,
  },
  {
    id: "mvlsi",
    dept: "Electronics & Telecom",
    spec: "VLSI Design",
    intake: 18,
  },
  {
    id: "mmet",
    dept: "Metallurgy",
    spec: "Metallurgy & Material Science",
    intake: 18,
  },
];

export const MTECH_ELIGIBILITY = [
  "B.E. / B.Tech in relevant engineering discipline with minimum 55% aggregate marks",
  "Valid GATE score in the corresponding paper is mandatory",
  "Maharashtra domicile certificate for State Quota seats",
  "All India candidates eligible for Institute / Management quota seats",
];

export const MTECH_PROCESS: ProcessStep[] = [
  {
    n: 1,
    title: "Secure Valid GATE Score",
    desc: "Obtain a valid GATE score in the relevant engineering discipline. The GATE score remains valid for 3 years from the year of examination.",
  },
  {
    n: 2,
    title: "Online Application on DTE Portal",
    desc: "Fill the online application form on the DTE Maharashtra portal during the designated admission window, typically May–June each year.",
  },
  {
    n: 3,
    title: "Merit List & Centralised Counselling",
    desc: "Candidates are shortlisted based on GATE score. Attend centralised counselling for seat allotment across participating institutes.",
  },
  {
    n: 4,
    title: "Reporting to Institute",
    desc: "Report to COEP with all original documents, pay admission fees, and complete institute-level admission formalities.",
  },
];

// ─── Ph.D. Research Areas ──────────────────────────────────────────────────

export const PHD_AREAS: PhDArea[] = [
  {
    id: "cs",
    dept: "Computer Engineering",
    description: "AI/ML, Computer Vision, Cybersecurity, Distributed Systems",
  },
  {
    id: "me",
    dept: "Mechanical Engineering",
    description: "Advanced Manufacturing, Robotics, Thermal & Fluid Sciences",
  },
  {
    id: "civil",
    dept: "Civil Engineering",
    description:
      "Structural Engineering, Geotechnics, Environmental & Water Resources",
  },
  {
    id: "ee",
    dept: "Electrical Engineering",
    description: "Power Electronics, Smart Grids, Electric Vehicles",
  },
  {
    id: "etc",
    dept: "Electronics & Telecom",
    description: "VLSI Design, Embedded Systems, Signal Processing",
  },
  {
    id: "ic",
    dept: "Instrumentation & Control",
    description: "Industrial Automation, IoT, Sensor Systems",
  },
  {
    id: "met",
    dept: "Metallurgy & Material Technology",
    description: "Nano Technology, Material Characterization, Alloy Design",
  },
  {
    id: "chem",
    dept: "Chemical Engineering",
    description: "Process Engineering, Green Chemistry, Reaction Engineering",
  },
  {
    id: "mgmt",
    dept: "Management Studies",
    description:
      "Business Analytics, Operations Research, Organizational Behavior",
  },
];

export const PHD_PROCESS: ProcessStep[] = [
  {
    n: 1,
    title: "Online Application",
    desc: "Apply through the COEP official portal during the designated admission window — typically January and July of each year. Fill in complete academic details.",
  },
  {
    n: 2,
    title: "Written Entrance Test",
    desc: "Appear for the PhD entrance examination covering research aptitude and domain knowledge in your chosen area. GATE-qualified candidates may be exempt.",
  },
  {
    n: 3,
    title: "Interview & Research Proposal",
    desc: "Shortlisted candidates are called for a research proposal presentation and an interview with the Doctoral Committee of the concerned department.",
  },
  {
    n: 4,
    title: "Supervisor Allotment",
    desc: "Matched with a faculty supervisor based on your research interest, the supervisor's availability, and open positions in the department.",
  },
  {
    n: 5,
    title: "Course Work & Registration",
    desc: "Complete mandatory course work in the first year, clear qualifying exams, and register as a doctoral scholar. Research officially begins post-registration.",
  },
];

// ─── MBA ───────────────────────────────────────────────────────────────────

export const MBA_SPECS: MBASpec[] = [
  {
    id: "gm",
    name: "General Management",
    desc: "A holistic business management curriculum covering Finance, Marketing, HR, Operations, and Strategy. Prepares graduates for corporate leadership and consulting.",
    highlights: [
      "Finance & Investment Management",
      "Strategic Marketing",
      "Human Resource Management",
      "Operations & Supply Chain",
      "Business Strategy & Entrepreneurship",
    ],
  },
  {
    id: "ba",
    name: "Business Analytics",
    desc: "Data-driven decision making, predictive modelling, and analytics tools for modern enterprises. Blends management education with advanced data science.",
    highlights: [
      "Data Analytics & Visualization",
      "Predictive Modelling & ML",
      "Business Intelligence Tools",
      "Decision Sciences",
      "Digital Transformation",
    ],
  },
];

export const MBA_PROCESS: ProcessStep[] = [
  {
    n: 1,
    title: "National Entrance Score",
    desc: "Obtain a valid score in CAT / MAT / CMAT / XAT / MH-MBA CET. Scores from the current or immediately preceding year are accepted.",
  },
  {
    n: 2,
    title: "Online Application",
    desc: "Fill the DMS MBA application form with academic details, work experience (if any), and test scores. Upload all required documents.",
  },
  {
    n: 3,
    title: "Group Discussion",
    desc: "Participate in a structured group discussion to assess communication skills, leadership potential, and business awareness.",
  },
  {
    n: 4,
    title: "Personal Interview",
    desc: "Face a panel interview with DMS faculty evaluating motivation, analytical aptitude, communication, and long-term career goals.",
  },
  {
    n: 5,
    title: "Merit List & Enrollment",
    desc: "Final selection based on a composite score: 50% entrance test + 25% GD performance + 25% PI score. Offer letters issued online.",
  },
];

// ─── PG Diploma ────────────────────────────────────────────────────────────

export const PG_DIPLOMA_PROGRAMS: PGDiplomaProgram[] = [
  {
    id: "pgac",
    name: "PG Diploma in Advanced Computing",
    dept: "Computer Engineering",
    duration: "1 Year",
  },
  {
    id: "pges",
    name: "PG Diploma in Embedded Systems",
    dept: "Electronics & Telecom",
    duration: "1 Year",
  },
  {
    id: "pgsd",
    name: "PG Diploma in Structural Design",
    dept: "Civil Engineering",
    duration: "1 Year",
  },
  {
    id: "pgia",
    name: "PG Diploma in Industrial Automation",
    dept: "Instrumentation & Control",
    duration: "1 Year",
  },
  {
    id: "pgba",
    name: "PG Diploma in Business Analytics",
    dept: "Management Studies",
    duration: "1 Year",
  },
  {
    id: "pgme",
    name: "PG Diploma in Manufacturing Excellence",
    dept: "Mechanical Engineering",
    duration: "1 Year",
  },
];

export const PG_DIPLOMA_PROCESS: ProcessStep[] = [
  {
    n: 1,
    title: "Educational Qualification Check",
    desc: "B.E. / B.Tech in a relevant engineering discipline or equivalent degree with a minimum of 50% aggregate marks.",
  },
  {
    n: 2,
    title: "Application Submission",
    desc: "Apply through the institute portal or the respective department during the announced application window (typically September–October).",
  },
  {
    n: 3,
    title: "Merit-Based Selection",
    desc: "Shortlisting based on academic performance and/or a written test or interview conducted by the department.",
  },
  {
    n: 4,
    title: "Confirmation & Fee Payment",
    desc: "Confirm your admission by paying the programme fees within the stipulated deadline. Classes begin in November.",
  },
];

// ─── Fee Structure ─────────────────────────────────────────────────────────

export const FEE_STRUCTURE: FeeRow[] = [
  {
    id: "btech-open",
    program: "B.Tech",
    category: "Open / General",
    tuitionFee: "₹1,37,500",
    otherFees: "₹15,000",
    totalAnnual: "₹1,52,500",
  },
  {
    id: "btech-obc",
    program: "B.Tech",
    category: "OBC / EWS",
    tuitionFee: "₹68,750",
    otherFees: "₹15,000",
    totalAnnual: "₹83,750",
  },
  {
    id: "btech-sc",
    program: "B.Tech",
    category: "SC / ST / VJNT",
    tuitionFee: "Nil",
    otherFees: "₹15,000",
    totalAnnual: "₹15,000",
  },
  {
    id: "mtech",
    program: "M.Tech",
    category: "All Categories",
    tuitionFee: "₹70,000",
    otherFees: "₹12,000",
    totalAnnual: "₹82,000",
  },
  {
    id: "mba-open",
    program: "MBA",
    category: "Open / General",
    tuitionFee: "₹1,25,000",
    otherFees: "₹15,000",
    totalAnnual: "₹1,40,000",
  },
  {
    id: "mba-obc",
    program: "MBA",
    category: "OBC / EWS",
    tuitionFee: "₹62,500",
    otherFees: "₹15,000",
    totalAnnual: "₹77,500",
  },
  {
    id: "phd",
    program: "Ph.D. (Full Time)",
    category: "All Categories",
    tuitionFee: "₹30,000",
    otherFees: "₹10,000",
    totalAnnual: "₹40,000",
  },
  {
    id: "pgdip",
    program: "PG Diploma",
    category: "All Categories",
    tuitionFee: "₹45,000",
    otherFees: "₹8,000",
    totalAnnual: "₹53,000",
  },
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "s1",
    name: "EBC Scholarship",
    eligibility: "Family income below ₹8 lakh per annum",
    benefit: "50% tuition fee waiver for eligible candidates",
  },
  {
    id: "s2",
    name: "Govt. of Maharashtra Merit Scholarship",
    eligibility: "Top 10% students based on academic merit",
    benefit: "Full tuition fee waiver for the academic year",
  },
  {
    id: "s3",
    name: "SC / ST Concession",
    eligibility: "SC, ST, VJNT, SBC category students",
    benefit: "Full tuition fee exemption as per GoM norms",
  },
  {
    id: "s4",
    name: "Institute Merit Scholarship",
    eligibility: "Top performers in each programme per year",
    benefit: "Cash award + recognition at convocation",
  },
];

export const FEE_NOTES = [
  "Fees are subject to revision by the Shikshon Shulka Samiti each academic year",
  "A one-time Development Fee of ₹10,000 is applicable at the time of first admission",
  "Hostel and mess fees are charged separately and vary by accommodation type",
  "Refund policy is governed by UGC guidelines; refer to the official refund schedule",
  "Government scholarship disbursement may vary; students are required to pay fees and claim reimbursement",
];

// ─── Admission stats ───────────────────────────────────────────────────────

export const ADMISSION_STATS = [
  { label: "Established", value: "1854", icon: "🏛️" },
  { label: "Accreditation", value: "NAAC A++", icon: "🏆" },
  { label: "B.Tech Programs", value: "8", icon: "📚" },
  { label: "Total Intake", value: "540+", icon: "🎓" },
  { label: "PhD Departments", value: "9", icon: "🔬" },
  { label: "Placement Rate", value: "95%+", icon: "💼" },
];
