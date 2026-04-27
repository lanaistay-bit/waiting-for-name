import {
  ALUMNI_PORTRAIT_URLS,
  getTimelineImageUrl,
} from "@/utils/generatedImages";

// ─────────────────────────────────────────────────────────────────
// COEP Technological University — About Us data
// Single source of truth for timeline, alumni, governance, committees
// ─────────────────────────────────────────────────────────────────

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  era: string;
  imageUrl: string;
}

export interface Alumni {
  id: string;
  name: string;
  batch: string;
  department: string;
  designation: string;
  contribution: string;
  award: string;
  imageUrl: string;
}

export interface BoardMember {
  srNo: number;
  member: string;
  name: string;
  role: string;
}

export interface BoardChairman {
  name: string;
  designation: string;
  organization: string;
  bio: string;
  imageUrl: string;
}

export interface BoardOfGovernance {
  intro: string;
  legalBasis: string;
  chairman: BoardChairman;
  members: BoardMember[];
}

export interface Committee {
  srNo: number;
  name: string;
  description: string;
  icon: string;
}

export interface AuthoritiesData {
  intro: string;
  committees: Committee[];
}

// ─────────────────────────────────────────────────────────────────
// 1. TIMELINE DATA
// ─────────────────────────────────────────────────────────────────

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: 1854,
    title: "Foundation: Poona Engineering Class",
    description:
      "The Poona Engineering Class and Mechanical School was established in Bhawani Peth to train subordinate officers for public works under colonial administration. It marked the dawn of formal engineering education in the Deccan region.",
    era: "Colonial Era",
    imageUrl: getTimelineImageUrl(1854),
  },
  {
    year: 1867,
    title: "Relocation to Wellesley Road",
    description:
      "The school was shifted to its permanent site on Wellesley Road (now Jagannath Shankarsheth Road), Shivajinagar — the campus that COEP still occupies today. The historic Gothic-style buildings began taking shape on the banks of the Mula-Mutha river.",
    era: "Colonial Era",
    imageUrl: getTimelineImageUrl(1867),
  },
  {
    year: 1908,
    title: "First Degree Programme in Civil Engineering",
    description:
      "A formal Bachelor of Civil Engineering degree programme was launched — the first degree-level engineering course at the institution. This milestone established COEP as a premier degree-granting technical institution in western India.",
    era: "Colonial Era",
    imageUrl: getTimelineImageUrl(1908),
  },
  {
    year: 1911,
    title: "Renamed: College of Engineering, Poona (COEP)",
    description:
      "The institution was officially renamed the College of Engineering, Poona — a name that would become synonymous with technical excellence across India for over a century. The new identity reflected its expanded scope and growing academic stature.",
    era: "Colonial Era",
    imageUrl: getTimelineImageUrl(1911),
  },
  {
    year: 1912,
    title: "Mechanical Engineering Degree Launched",
    description:
      "A degree programme in Mechanical Engineering was introduced, broadening the college's academic portfolio. The department would go on to produce some of the most distinguished engineers and industrialists in modern India.",
    era: "Colonial Era",
    imageUrl: getTimelineImageUrl(1912),
  },
  {
    year: 1932,
    title: "Electrical Engineering Department Established",
    description:
      "The Electrical Engineering department was formally established, equipping students to meet the growing demands of an electrifying India. This addition cemented COEP's position as a comprehensive engineering college ahead of its time.",
    era: "Colonial Era",
    imageUrl: getTimelineImageUrl(1932),
  },
  {
    year: 1947,
    title: "India's Independence — COEP Continues as Premier Institution",
    description:
      "As India gained independence, COEP transitioned from a colonial-era institution to a cornerstone of nation-building. The college committed itself to producing engineers who would power India's industrial and infrastructural renaissance.",
    era: "Post-Independence",
    imageUrl: getTimelineImageUrl(1947),
  },
  {
    year: 1966,
    title: "Affiliation to University of Pune",
    description:
      "COEP was formally affiliated to the University of Pune (now Savitribai Phule Pune University), aligning its degrees with the national higher-education framework. This strengthened academic credibility and expanded research opportunities.",
    era: "Post-Independence",
    imageUrl: getTimelineImageUrl(1966),
  },
  {
    year: 2004,
    title: "Autonomous Status & Centre of Excellence",
    description:
      "The Government of Maharashtra granted COEP full autonomous status, empowering it to design its own curriculum and examination system. It was simultaneously declared a Centre of Excellence in Technical Education — the first in Maharashtra.",
    era: "Autonomy Era",
    imageUrl: getTimelineImageUrl(2004),
  },
  {
    year: 2012,
    title: "Centenary of Mechanical Engineering",
    description:
      "COEP celebrated the centenary of its Mechanical Engineering department with a grand alumni reunion and a series of national conferences. The landmark event showcased 100 years of engineering excellence and alumni achievement across the globe.",
    era: "Autonomy Era",
    imageUrl: getTimelineImageUrl(2012),
  },
  {
    year: 2022,
    title: "Elevated to COEP Technological University",
    description:
      "In a historic milestone, COEP was elevated to a full-fledged Unitary Public University — COEP Technological University — under the Government of Maharashtra. This granted complete academic and administrative independence, opening new avenues for research, innovation, and global partnerships.",
    era: "Modern Era",
    imageUrl: getTimelineImageUrl(2022),
  },
  {
    year: 2024,
    title: "170 Years of Excellence",
    description:
      "COEP Technological University marked 170 years of unbroken engineering excellence. The year saw the inauguration of a state-of-the-art Library and Computer Science Building, symbolising the institution's commitment to world-class infrastructure and digital-age learning.",
    era: "Modern Era",
    imageUrl: getTimelineImageUrl(2024),
  },
];

// ─────────────────────────────────────────────────────────────────
// 2. ALUMNI DATA
// ─────────────────────────────────────────────────────────────────

export const ALUMNI_DATA: Alumni[] = [
  {
    id: "m-visvesvaraya",
    name: "Sir M. Visvesvaraya",
    batch: "Class of 1881",
    department: "Civil Engineering",
    designation: "Statesman, Engineer & Diwan of Mysore",
    contribution:
      "One of the greatest engineers India has ever produced, Sir M. Visvesvaraya designed flood-protection systems for Hyderabad and the Krishna Raja Sagara dam in Mysore. As Diwan of Mysore he transformed the state into an industrial and educational powerhouse, and September 15 is celebrated as Engineers' Day in his honour.",
    award: "Bharat Ratna (1955)",
    imageUrl: ALUMNI_PORTRAIT_URLS["m-visvesvaraya"],
  },
  {
    id: "thomas-kailath",
    name: "Thomas Kailath",
    batch: "Class of 1956",
    department: "Electrical Engineering",
    designation: "Emeritus Professor, Stanford University",
    contribution:
      "Thomas Kailath is a pioneering figure in information theory, signal processing, and control systems. His seminal work on Kalman filtering and MIMO wireless communications laid the foundation for modern communication networks. A prolific researcher and mentor at Stanford for over six decades, he has shaped generations of engineers worldwide.",
    award: "US National Medal of Science (2014)",
    imageUrl: ALUMNI_PORTRAIT_URLS["thomas-kailath"],
  },
  {
    id: "suhas-patankar",
    name: "Suhas V. Patankar",
    batch: "Class of 1962",
    department: "Mechanical Engineering",
    designation: "Professor Emeritus, University of Minnesota",
    contribution:
      "Suhas Patankar is widely regarded as a founding father of computational fluid dynamics (CFD). He co-developed the SIMPLE algorithm, which became the basis for virtually all modern CFD software used in aerospace, automotive, and energy engineering. His textbook 'Numerical Heat Transfer and Fluid Flow' remains a standard reference worldwide.",
    award: "ASME Fluid Engineering Award",
    imageUrl: ALUMNI_PORTRAIT_URLS["suhas-patankar"],
  },
  {
    id: "c-kumar-patel",
    name: "C. Kumar N. Patel",
    batch: "Class of 1958",
    department: "Physics & Engineering",
    designation: "Vice Chancellor for Research, UCLA",
    contribution:
      "C. Kumar N. Patel invented the carbon dioxide (CO₂) laser at Bell Labs in 1964, one of the most impactful inventions in the history of photonics. The CO₂ laser is now used in medicine, manufacturing, and telecommunications globally. Patel's work transformed laser science from a laboratory curiosity into a trillion-dollar industrial technology.",
    award: "US National Medal of Science (1996)",
    imageUrl: ALUMNI_PORTRAIT_URLS["c-kumar-patel"],
  },
  {
    id: "ramesh-raskar",
    name: "Ramesh Raskar",
    batch: "Class of 1994",
    department: "Electronics Engineering",
    designation: "Associate Professor, MIT Media Lab",
    contribution:
      "Ramesh Raskar invented the femto-camera — a camera so fast it can capture light in motion — and co-founded the Camera Culture research group at MIT Media Lab. With over 100 patents to his name, his work spans computational photography, augmented reality, and privacy-preserving AI. He is one of the most cited Indian inventors of his generation.",
    award: "Lemelson-MIT Prize (2016)",
    imageUrl: ALUMNI_PORTRAIT_URLS["ramesh-raskar"],
  },
  {
    id: "vijay-kelkar",
    name: "Vijay Kelkar",
    batch: "Class of 1964",
    department: "Mechanical Engineering",
    designation:
      "Former Advisor to Finance Minister of India; Chairman, NSE India",
    contribution:
      "Vijay Kelkar is one of India's most distinguished economists and public servants. He served as Advisor to the Finance Minister and is the architect of path-breaking tax reforms including the Kelkar Committee reports on direct and indirect taxes. He chaired the National Stock Exchange and played a pivotal role in shaping India's economic liberalisation.",
    award: "Padma Vibhushan (2014)",
    imageUrl: ALUMNI_PORTRAIT_URLS["vijay-kelkar"],
  },
  {
    id: "lila-poonawalla",
    name: "Lila Poonawalla",
    batch: "Class of 1965",
    department: "Mechanical Engineering",
    designation:
      "Industrialist, Philanthropist & Managing Director (Retd.), Thermax",
    contribution:
      "Lila Poonawalla was the first woman to graduate in Mechanical Engineering from COEP, breaking a formidable glass ceiling. She rose to become Managing Director of Thermax, a leading clean energy company, and is celebrated for her decades of philanthropic work through the Lila Poonawalla Foundation, which has funded education for thousands of underprivileged girls.",
    award: "Padma Shri (1989)",
    imageUrl: ALUMNI_PORTRAIT_URLS["lila-poonawalla"],
  },
  {
    id: "rajiv-bajaj",
    name: "Rajiv Bajaj",
    batch: "Class of 1988",
    department: "Mechanical Engineering",
    designation: "Managing Director, Bajaj Auto Ltd.",
    contribution:
      "Rajiv Bajaj took the bold decision to exit the scooter market and bet everything on motorcycles — a strategy that transformed Bajaj Auto into one of the world's top three motorcycle manufacturers. Under his leadership, brands like Pulsar and Dominar achieved iconic status globally, and Bajaj forged high-profile alliances with KTM and Triumph.",
    award: "CNBC Asia Business Leader Award",
    imageUrl: ALUMNI_PORTRAIT_URLS["rajiv-bajaj"],
  },
  {
    id: "laxman-narasimhan",
    name: "Laxman Narasimhan",
    batch: "Class of 1990",
    department: "Mechanical Engineering",
    designation: "Former CEO, Starbucks",
    contribution:
      "Laxman Narasimhan is one of the most prominent Indian-origin global CEOs. He served as Chief Commercial Officer at PepsiCo, CEO of Reckitt Benckiser, and most recently as CEO of Starbucks, where he led the brand's global transformation strategy. His journey from COEP to the helm of Fortune 500 companies is a benchmark for the institution's global alumni impact.",
    award: "Fortune's Most Powerful International Business Leaders",
    imageUrl: ALUMNI_PORTRAIT_URLS["laxman-narasimhan"],
  },
  {
    id: "sandeep-johri",
    name: "Sandeep Johri",
    batch: "Class of 1986",
    department: "Computer Engineering",
    designation: "CEO, Tricentis",
    contribution:
      "Sandeep Johri led Tricentis to become a global leader in enterprise software testing, with customers spanning Fortune 500 companies across healthcare, banking, and retail. Under his leadership, the company significantly expanded its AI-driven test automation platform, helping organisations accelerate software delivery while reducing defects and costs.",
    award: "Gartner Magic Quadrant Leader in Software Test Automation",
    imageUrl: ALUMNI_PORTRAIT_URLS["sandeep-johri"],
  },
];

// ─────────────────────────────────────────────────────────────────
// 3. BOARD OF GOVERNANCE
// ─────────────────────────────────────────────────────────────────

export const BOARD_OF_GOVERNANCE: BoardOfGovernance = {
  intro:
    "The Board of Governance is the apex governing body of COEP Technological University, responsible for overseeing the strategic direction, financial health, academic vision, and institutional governance of the university. It comprises distinguished leaders from academia, industry, and government.",
  legalBasis:
    "Constituted as per Section 23 of the COEP Technological University Act, Government of Maharashtra.",
  chairman: {
    name: "Shri. Vinayak Pai",
    designation: "MD & CEO, Tata Projects Ltd.",
    organization: "Tata Projects Limited",
    bio: "Shri. Vinayak Pai is a distinguished alumnus of COEP, Symbiosis, and IIT Bombay (SJMSOM). As MD & CEO of Tata Projects Ltd., one of India's fastest-growing infrastructure companies, he brings decades of leadership in large-scale engineering, construction, and technology-driven project delivery. His strategic vision and industry expertise guide the university's long-term direction.",
    imageUrl: "/assets/generated/alumni-executive-chairman.dim_300x300.jpg",
  },
  members: [
    {
      srNo: 1,
      member: "Vice Chancellor",
      name: "Prof. Sunil G. Bhirud",
      role: "Vice Chancellor, COEP Technological University",
    },
    {
      srNo: 2,
      member: "Academic Representative",
      name: "Prof. Milind Atrey",
      role: "Professor, IIT Bombay — Distinguished Academician",
    },
    {
      srNo: 3,
      member: "Government Nominee",
      name: "Ms. Khorgade",
      role: "Representative, Government of Maharashtra",
    },
    {
      srNo: 4,
      member: "Industry Nominee",
      name: "Shri. Lele",
      role: "Industry Expert & Alumnus Nominee",
    },
    {
      srNo: 5,
      member: "Board of Examinations",
      name: "Director, BoEE",
      role: "Director, Board of Examinations and Evaluation",
    },
    {
      srNo: 6,
      member: "Finance & Accounts Officer",
      name: "Mrs. Y. V. Haribhakta",
      role: "Finance & Accounts Officer, COEP Tech University",
    },
    {
      srNo: 7,
      member: "Registrar (Member Secretary)",
      name: "Registrar, COEP Tech",
      role: "Registrar — Ex-officio Member Secretary, Board of Governance",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// 4. AUTHORITIES & COMMITTEES
// ─────────────────────────────────────────────────────────────────

export const AUTHORITIES_DATA: AuthoritiesData = {
  intro:
    "COEP Technological University operates through a well-defined set of statutory authorities and specialised committees, each mandated to govern a specific domain of university functioning — ensuring transparency, accountability, and continuous academic excellence.",
  committees: [
    {
      srNo: 1,
      name: "University Authorities",
      description:
        "The overarching governing bodies of COEP Technological University, including the Board of Governance, Academic Council, and Executive Council. These authorities collectively frame the policies and regulations of the university.",
      icon: "🏛️",
    },
    {
      srNo: 2,
      name: "Academic Council Committee",
      description:
        "Oversees all academic policies, curriculum design, degree requirements, and educational standards across all programmes. It approves new courses, regulates academic quality, and ensures alignment with national and international educational benchmarks.",
      icon: "📚",
    },
    {
      srNo: 3,
      name: "Finance and Accounts Committee",
      description:
        "Manages the financial planning, budget preparation, expenditure oversight, and statutory audit of the university. It ensures fiscal discipline and transparent utilisation of public and self-generated funds.",
      icon: "💰",
    },
    {
      srNo: 4,
      name: "Purchase and Sales Committee",
      description:
        "Governs the procurement of equipment, materials, and services, as well as the disposal and sale of university assets. It enforces fair tendering practices and ensures value-for-money in all transactions.",
      icon: "🛒",
    },
    {
      srNo: 5,
      name: "Fees Fixation Committee",
      description:
        "Determines and periodically reviews the tuition fees, examination fees, and other charges applicable to all undergraduate, postgraduate, and doctoral programmes, balancing affordability with institutional sustainability.",
      icon: "📋",
    },
    {
      srNo: 6,
      name: "Buildings and Works Committee",
      description:
        "Oversees the planning, construction, renovation, and maintenance of all physical infrastructure on campus. It prioritises sustainable design, accessibility, and state-of-the-art facilities for students and faculty.",
      icon: "🏗️",
    },
    {
      srNo: 7,
      name: "Knowledge Resource Committee (KRC)",
      description:
        "Manages the university's central library, digital repositories, e-journal subscriptions, and knowledge infrastructure. It drives the adoption of open-access resources and supports research through curated academic collections.",
      icon: "🗂️",
    },
    {
      srNo: 8,
      name: "Internal Quality Assurance Committee (IQAC)",
      description:
        "Ensures continuous improvement in teaching, research, administration, and student outcomes through systematic quality audits, faculty development programmes, and NAAC accreditation processes.",
      icon: "✅",
    },
    {
      srNo: 9,
      name: "Board of Examination and Evaluation (BoEE)",
      description:
        "Conducts, supervises, and regulates all university examinations, result declarations, and evaluation processes. It upholds academic integrity and ensures fair, transparent, and timely assessment of all students.",
      icon: "📝",
    },
    {
      srNo: 10,
      name: "Board of Research, Innovation, Incubation and Linkages (RIIL)",
      description:
        "Promotes research excellence, technology transfer, startup incubation, and industry-academia collaboration. It oversees research funding, patents, MOUs with global institutions, and the COEP Research & Innovation Park.",
      icon: "🔬",
    },
    {
      srNo: 11,
      name: "Board of Students' Development (BoSD)",
      description:
        "Supports holistic student development through cultural clubs, technical societies, sports, wellness programmes, scholarship administration, and grievance redressal. It ensures every student has opportunities for growth beyond the classroom.",
      icon: "🎓",
    },
  ],
};
