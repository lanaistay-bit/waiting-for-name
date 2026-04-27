import {
  BarChart3,
  Megaphone,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProgramTab {
  id: string;
  label: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  keyCourses: string[];
  careers: string[];
  highlights: string[];
}

export const PROGRAM_TABS: ProgramTab[] = [
  {
    id: "finance",
    label: "Finance",
    icon: TrendingUp,
    tagline: "Master the language of business",
    description:
      "The Finance specialization equips students with rigorous quantitative skills and strategic insight to navigate complex financial markets. Grounded in COEP's engineering tradition, this program combines mathematical rigor with real-world financial decision-making.",
    keyCourses: [
      "Corporate Finance & Valuation",
      "Investment Analysis & Portfolio Management",
      "Financial Modeling & Excel",
      "Risk Management & Derivatives",
      "Financial Statement Analysis",
      "Mergers, Acquisitions & Restructuring",
    ],
    careers: [
      "Investment Banker",
      "CFO / Finance Director",
      "Financial Analyst",
      "Portfolio Manager",
      "Risk Manager",
    ],
    highlights: [
      "Live Bloomberg Terminal access",
      "Industry projects with leading banks & NBFCs",
      "Chartered Financial Analyst (CFA) prep support",
    ],
  },
  {
    id: "operations",
    label: "Operations",
    icon: Settings,
    tagline: "Engineer efficiency at scale",
    description:
      "Leveraging COEP's strong engineering heritage, the Operations specialization trains future leaders to optimize processes, manage supply chains, and drive operational excellence across industries from manufacturing to services.",
    keyCourses: [
      "Supply Chain Management",
      "Operations Research & Optimization",
      "Production Planning & Control",
      "Quality Management (ISO / Six Sigma)",
      "Lean Manufacturing & Process Improvement",
      "Project Management (PMBOK)",
    ],
    careers: [
      "Operations Manager",
      "Supply Chain Head",
      "Plant Manager",
      "Logistics Director",
      "Process Excellence Lead",
    ],
    highlights: [
      "Industry visits to Pune's manufacturing hubs",
      "Lean Six Sigma Green Belt certification support",
      "Live case studies from automotive & FMCG sectors",
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    tagline: "Build brands that resonate",
    description:
      "The Marketing specialization combines consumer psychology, data-driven strategy, and creative brand building. Students learn to craft campaigns, manage brands, and leverage digital channels to drive business growth in the modern marketplace.",
    keyCourses: [
      "Consumer Behavior & Insights",
      "Digital Marketing & Social Media",
      "Brand Management & Communication",
      "Marketing Research & Analytics",
      "Sales Management & Distribution",
      "Integrated Marketing Communications",
    ],
    careers: [
      "Brand Manager",
      "Chief Marketing Officer",
      "Digital Marketing Lead",
      "Market Research Analyst",
      "Product Manager",
    ],
    highlights: [
      "Live brand consulting projects",
      "Google Digital Marketing certification",
      "Annual marketing conclave with industry leaders",
    ],
  },
  {
    id: "hr",
    label: "HR",
    icon: Users,
    tagline: "Shape organizations, empower people",
    description:
      "The Human Resources specialization prepares leaders to attract, develop, and retain top talent while building high-performance cultures. Students gain expertise in organizational design, labor relations, and the strategic role of people in business success.",
    keyCourses: [
      "Organizational Behavior & Theory",
      "Talent Acquisition & Employer Branding",
      "Performance Management Systems",
      "Labor Laws & Industrial Relations",
      "Learning & Development",
      "HR Analytics & People Data",
    ],
    careers: [
      "HR Manager",
      "Chief Human Resources Officer",
      "OD Consultant",
      "Talent Acquisition Lead",
      "Learning & Development Manager",
    ],
    highlights: [
      "HR simulation labs and assessment centers",
      "SHRM certification prep",
      "Corporate HR partnerships for internships",
    ],
  },
  {
    id: "analytics",
    label: "Business Analytics",
    icon: BarChart3,
    tagline: "Turn data into competitive advantage",
    description:
      "The Business Analytics specialization — unique to MBA-BA — trains students at the intersection of management and data science. Graduates can translate complex datasets into actionable business insights using modern analytical tools and machine learning techniques.",
    keyCourses: [
      "Data Analytics with Python & R",
      "Machine Learning for Business",
      "Business Intelligence & Visualization",
      "Statistical Modeling & Forecasting",
      "Decision Support Systems",
      "Big Data & Cloud Analytics",
    ],
    careers: [
      "Data Analyst",
      "Business Intelligence Lead",
      "Analytics Manager",
      "Data Scientist",
      "Strategy & Analytics Consultant",
    ],
    highlights: [
      "Dedicated analytics lab with industry datasets",
      "Tableau & Power BI certification",
      "Capstone projects with data-driven companies",
    ],
  },
];

export interface Quarter {
  number: number;
  period: string;
  title: string;
  description: string;
  courses: string[];
}

export interface Phase {
  id: string;
  label: string;
  colorClass: string;
  quarters: Quarter[];
}
