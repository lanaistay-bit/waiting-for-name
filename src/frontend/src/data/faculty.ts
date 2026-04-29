export interface FacultyProfile {
  id: string;
  name: string;
  title: string;
  designation: string;
  expertise: string[];
  photoUrl: string;
  email?: string;
  phone?: string;
  qualification?: string;
  bio?: string;
  education?: { degree: string; institution?: string }[];
  experience?: string[];
  achievements?: string[];
  researchInterests?: string[];
  isSpecial?: boolean;
}

export const FACULTY_DATA: FacultyProfile[] = [
  // ── HIERARCHY POSITION 1 ──────────────────────────────────────────────────
  {
    id: "dr-sandeep-meshram",
    name: "Dr. Sandeep A. Meshram",
    title:
      "Associate Professor (Geology) & Dean — School of Transdisciplinary Sciences and Management",
    designation:
      "Associate Dean, School of Multidisciplinary Sciences & Management | Associate Professor (Geology), COEP Technological University",
    expertise: [
      "Engineering Geology",
      "Dam Safety",
      "Corporate Relations",
      "Training & Placement",
      "Interlinking of Rivers",
      "Institutional Development",
    ],
    photoUrl: "/assets/faculty/sandeep-meshram.jpg",
    email: "sam.civil@coeptech.ac.in",
    phone: "+91 93253 54317",
    qualification:
      "Ph.D. in Geology (Faculty of Science), Amravati University | M.Sc (Tech) Applied Geology, Nagpur University",
    bio: "Dr. Sandeep A. Meshram is an Associate Professor of Geology and Associate Dean of the School of Multidisciplinary Sciences and Management at COEP Technological University, Pune. With over 24 years of academic and industry experience, he has made significant contributions to engineering geology, institutional development, and student placements.",
    isSpecial: true,
    education: [
      {
        degree: "Ph.D. in Geology (Faculty of Science)",
        institution: "Amravati University, Amravati",
      },
      {
        degree: "M.Sc (Tech) Applied Geology",
        institution: "Post Graduate Department of Geology, Nagpur University",
      },
    ],
    experience: [
      "Associate Dean — School of Multidisciplinary Sciences & Management, COEP Technological University, Pune (Current) | Formerly DEAN-School of Transdisciplinary Sciences and Management and Convener-Deans Committee",
      "Corporate Relations Officer (First-ever CRO) — COEP, Pune (2016–2019) | Pioneered Industry-supported Centres of Excellence; coined COEP-ISR concept; secured exclusive MoUs with Seagate, TCS, Cognizant, Tech Mahindra, TATA Motors; raised ₹44L+ in sponsorships annually; managed AICTE MARGDARSHAN (25+ mentee colleges)",
      "Head, Training & Placement Cell — COEP, Pune (2008–2015) | Grew campus recruiters from 100 to 210/year; 10% YoY increase in placements; initiated 100+ industry MoUs; established Cognizant Computer Lab and 10+ industry-supported labs; founded Federation of TPOs in Pune",
      "Consultant — Chief Project Coordinator, National Water Development Agency, Govt. of India | DPRs for Interlinking of Rivers: Krishna-Almatti-Pennar, Cauvery-Vaigai-Gundar, Rajasthan-Sabarmati Link Canal projects, Mumbai-Pune Expressway, and MAHA METRO; geological investigations for tunnels, dams, bridges",
      "Member (Geology) — Dam Safety Review Committee, Govt. of Maharashtra & DRIP-1 Gujarat (National level, Ongoing)",
    ],
    achievements: [
      "Special Independence Day Award by PMC at hands of Dy. Chief Minister, Maharashtra (Aug 2012) — for Interlinking of Rivers work",
      "Career Guru Award — National Employability Conclave (Aspiring Minds) — 2013, 2014, 2015, 2017",
      "Institute awarded National Employability Award (2013, 2014) and National Employability Gold Award (2015)",
      "COEP Placement Cell strategies adopted as a Case Study by AICTE — published on AICTE website",
      "First Prize, Poster Presentation — 12th FICCI Higher Education Summit 2016 (MHRD & Deptt of Commerce, Govt of India)",
      "Publications: National Conferences — 16 | International Conferences — 03 | Journals — 08",
      "Life Member, Indian Geological Congress (LM-182/1994)",
      "Life Member, Indian Water Resources Society (LM-4677/1994)",
      "Life Member, Indian Society for Technical Education / ISTE (LM-33886/2002)",
      "Life Member, Gondwana Geological Society (LM-446/2006)",
      "Fellow, Geological Association and Research Center (Honorary)",
    ],
    researchInterests: [
      "Engineering Geology",
      "Rock Mechanics",
      "Dam Safety",
      "Groundwater Resources",
      "Interlinking of Rivers",
      "Geo-environmental Studies",
    ],
  },
  // ── HIERARCHY POSITION 2 ──────────────────────────────────────────────────
  {
    id: "dr-arun-mudbidri",
    name: "Dr. Arun Mudbidri",
    title: "Professor of Practice & Academic Head",
    designation:
      "Professor of Practice & Academic Head, Department of Management Studies, COEP Technological University",
    expertise: [
      "Management Education",
      "Corporate Relations",
      "Student Employability",
      "Institutional Leadership",
      "Brand Building",
    ],
    photoUrl: "/assets/faculty/arun-mudbidri.jpg",
    phone: "9823137008",
    email: "mudbidria@gmail.com",
    qualification:
      "PhD in Management, MPM (MBA-HR), LLB, B.Com — Savitribai Phule Pune University (SPPU)",
    bio: "Dr. Arun Mudbidri brings with him 40 years of rich experience in the Education Sector, particularly in building student employability, enhancing brand image of institutes amongst all stakeholders, introducing innovative practices in management institutes, establishing strong corporate connect, and sustaining relationships with the corporate community for career building. He started his career with Symbiosis in 1979 and rose to become Director of SIBM Pune and later Chief Administration of Symbiosis before joining COEP Tech as Professor of Practice & Academic Head in October 2023.",
    isSpecial: true,
    education: [
      {
        degree: "PhD in Management",
        institution: "Savitribai Phule Pune University (SPPU)",
      },
      {
        degree: "MPM (MBA – HR)",
        institution: "Savitribai Phule Pune University (SPPU)",
      },
      { degree: "LLB", institution: "Savitribai Phule Pune University (SPPU)" },
      {
        degree: "B.Com",
        institution: "Savitribai Phule Pune University (SPPU)",
      },
    ],
    experience: [
      "Professor of Practice & Academic Head — Department of Management Studies, COEP Technological University (October 2023 – Till Date)",
      "Chief Administration — Symbiosis Open Education Society (SOES), Pune (September 2020 – September 2023)",
      "Founder Director — Samvit School of Infrastructure Business (SSIB) (2010–11 to 2019–2020)",
      "Advisor – Infrastructure Management Program — Symbiosis Centre for Corporate Education (November 2016 – April 2018)",
      "Director — Symbiosis Institute of Business Management (SIBM), Pune (September 2000 – May 2010)",
      "Registrar — Symbiosis Society (1987 – 2000)",
    ],
    achievements: [
      "Ranked SIBM 4th Top B-School in India for 4 consecutive years (2006, 2007, 2008, 2009) — AC Nielsen survey published by India Today & Business Today",
      "First Dean of the Management Faculty after Symbiosis became a Deemed University in 2002",
      "Approved Research Guide at Symbiosis International Deemed University — 2 PhD students completed",
      "Pioneered HR School concept to attract quality students to the HR profession for IT Industry",
      "First Director within Symbiosis Group to form an Alumni Association and run an Alumni Portal",
      "Ensured 100% placement success including international placements during tenure as SIBM Director",
      "Over 2000 students placed in senior corporate positions during his tenure at SIBM",
    ],
    researchInterests: [
      "Management Education Innovation",
      "Student Employability and Career Development",
      "Corporate-Academic Interface",
    ],
  },
  // ── HIERARCHY POSITION 3 ──────────────────────────────────────────────────
  {
    id: "dr-shilpa-kankonkar",
    name: "Shilpa Kankonkar",
    title: "Associate Professor & Deputy Training and Placement Officer",
    designation:
      "Associate Professor & Deputy Training and Placement Officer, COEP Technological University (UG & PG)",
    expertise: [
      "Strategic Alliances",
      "Entrepreneurship Development",
      "Business Innovation",
      "Training & Placement",
      "Design Thinking",
    ],
    photoUrl: "/assets/faculty/shilpa-kankonkar.jpg",
    email: "shilpak.mngmt@coeptech.ac.in",
    qualification:
      "Management Professional — 20+ years cross-industry experience",
    bio: "A seasoned professional in management with more than two decades of hands-on experience across education, Fintech, banking, international education, service industry, and business consulting. She has donned many hats including assisting chambers of commerce and industry in India in positions of repute. She possesses a strong inherent passion for corporate interaction with the student community through linkages, engagements, and interactions.",
    isSpecial: true,
    education: [
      { degree: "Management (Post Graduate)", institution: "Pune University" },
    ],
    experience: [
      "Associate Professor & Deputy Training and Placement Officer — COEP Technological University (Current)",
      "Convenor – Institute Innovation Council / Coordinator SPOC-ARIIA / Coordinator-NISP / Entrepreneurship Development — Neville Wadia Institute of Management Studies and Research, Pune & Dr D Y Patil Institute of Management Studies (Previous)",
      "Visiting Professor — National Insurance Academy, MIT WPU University, Ramcharan School of Leadership, WPU (Ongoing)",
    ],
    achievements: [
      "Received Award Certificate of Excellence for Honourable Achievement in Entrepreneurship Education from Lead India Foundation (August 2021)",
      "Excellence Service Award (August 2021)",
      "Advisory Board Member – Maharashtra Centre for Entrepreneurship Development (MCED), Govt Statutory Body",
      "Mentor with Start Up India (Govt of India), BAMU University, and SPPU Incubation Centre",
      "Conducted 50+ training programs on Business Innovation, Entrepreneurship, Design Thinking, and behavioral topics",
      "Executed 30+ MOUs for institutional development activities",
      "Trained 100+ teachers through FDP & EDP",
      "Strong exposure with 100+ Corporates & Academics in creating partnerships",
      "Editorial Board Member: International Journal of Advance Study and Research Work (ISSN: 2581-5997)",
      "Editorial Board Member: Global Research and Development Journal for Engineering (ISSN: 2455-5703)",
      "Written 4 Books: Services Marketing, Entrepreneurship Development, Business Taxation, Micro Insurance: Cracking Rural India's Huge Insurance Potential",
      "5 Monographs on: Effective Teaching, Insurance Text and Cases, Financial Services, Academic Excellence, Interview Skills",
    ],
    researchInterests: [
      "Entrepreneurship Development",
      "Business Innovation",
      "Design Thinking",
      "Strategic Alliances",
    ],
  },
  // ── HIERARCHY POSITION 4 ──────────────────────────────────────────────────
  {
    id: "mr-kanad-deshmukh",
    name: "Kanad Deshmukh",
    title: "Assistant Professor",
    designation:
      "Assistant Professor, Department of Management Studies, COEP Technological University",
    expertise: [
      "Financial Analysis & Modeling",
      "Equity Valuation (DCF)",
      "Derivatives & Capital Markets",
      "Corporate Finance",
      "Placement & Industry Relations",
    ],
    photoUrl: "/assets/faculty/kanad-deshmukh.jpg",
    email: "kanad.deshmukh@gmail.com",
    phone: "91 86050 19930",
    qualification:
      "MBA – Finance (First Class), BE – Chemical Engineering (First Class)",
    bio: "A dedicated tutor and skilled derivative and equity analyst with more than 17 years of experience in financial analysis, report writing, consulting, entrepreneurship, and teaching. He covers Finance subjects at the post-graduation level including Financial Management, Derivatives, Corporate Finance, Security Analysis & Portfolio Management, Finance for Non-Finance, and Capital Markets. He also leads Placement & Internship Strategy, Corporate Relations, Student Preparation, and Alumni & Industry Engagement for COEP MBA.",
    isSpecial: true,
    education: [
      {
        degree: "MBA – Finance (First Class)",
        institution: "AISSMS Institute of Management, University of Pune",
      },
      {
        degree: "PG Diploma – Industrial Water Treatment (First Class)",
        institution: "Vishwakarma Institute of Technology, Pune",
      },
      {
        degree: "BE – Chemical Engineering (First Class)",
        institution: "Vishwakarma Institute of Technology, University of Pune",
      },
    ],
    experience: [
      "Assistant Professor — COEP Technological University, Pune (July 2024 – Till Date)",
      "US Equity and Derivative Analyst — Phoenix Consultants, Pune (December 2021 – Till Date)",
      "Freelance Visiting Faculty — Pune (August 2022 – July 2024)",
      "Director — Delpha Foods Pvt. Ltd., Pune (January 2017 – December 2022)",
      "Director — Delpha Consultants Pvt. Ltd., Pune (July 2013 – November 2018)",
      "Team Lead — Infosys Ltd. – Knowledge Services, Pune (July 2011 – July 2013)",
      "Senior Associate — Infosys Ltd. – Knowledge Services, Bangalore (July 2009 – July 2011)",
      "Finance Executive — HSBC Global Resourcing, Gurgaon (January 2009 – July 2009)",
      "Business Analyst — I3 Consulting Private Ltd., Gurgaon (February 2008 – January 2009)",
    ],
    achievements: [
      "Black Belt in Isshinryu Karate — Gold Medalist at two national tournaments",
      "Scored 90% in NCFM (NSE's Certification in Financial Markets) – Beginner's Module",
      "Scored 89% in NCFM (NSE's Certification in Financial Markets) – Derivatives (Dealer's) Module",
      "Successfully ventured a startup and closed an exit deal",
      "Post Graduate Diploma in Industrial Water and Wastewater Treatment at Center for Engineering Excellence, VIT",
      "Second Position at Inter-College Rifle Shooting Competition",
    ],
    researchInterests: [
      "Financial Markets & Derivatives",
      "Corporate Finance",
      "Equity Valuation",
      "Capital Markets",
    ],
  },
  // ── REMAINING FACULTY (original relative order) ───────────────────────────
  {
    id: "dr-sonal-mahajan",
    name: "Dr. Sonal Mahajan",
    title: "Associate Professor",
    designation: "Associate Professor, Department of Management Studies",
    expertise: [
      "Marketing",
      "Consumer Behavior",
      "Business Ethics",
      "Corporate Governance",
      "Sustainability",
    ],
    photoUrl: "/assets/faculty/sonal-mahajan.jpg",
    qualification: "Ph.D. (Law), LLM, MBA",
    bio: "Dr. Sonal Mahajan is an Associate Professor at DMS, bringing academic depth in Marketing, Consumer Behavior, ethics, and governance. Her sessions encourage students to think critically about corporate responsibility and sustainable business practices.",
    education: [
      { degree: "Ph.D. in Law / Management" },
      { degree: "LLM (Master of Laws)" },
      { degree: "MBA" },
    ],
    experience: [
      "Associate Professor, DMS, COEP Technological University",
      "Research in Marketing and Consumer Behavior",
      "Industry consulting in Corporate Governance",
    ],
    achievements: [
      "Published research in peer-reviewed journals",
      "Active curriculum development for MBA programs",
    ],
    researchInterests: [
      "Marketing Research",
      "Consumer Behavior",
      "Business Ethics",
      "Corporate Governance",
    ],
  },
  {
    id: "mrs-suvarna-gavade",
    name: "Mrs. Suvarna Gavade",
    title: "Assistant Professor",
    designation: "Assistant Professor — Human Resources & OB",
    expertise: [
      "Human Resources",
      "Organizational Behavior",
      "Financial Management",
      "Corporate Strategy",
      "Data Analysis",
    ],
    photoUrl: "/assets/faculty/suvarna-gavade.jpg",
    qualification: "M.Sc. (Statistics), MBA",
    bio: "Mrs. Suvarna Gavade brings practical management expertise to the department. Her contributions include teaching and mentoring students on HR, OB, financial and strategic dimensions of management.",
    researchInterests: [
      "Human Resource Management",
      "Financial Management",
      "Corporate Strategy",
    ],
  },
  {
    id: "mrs-saanchita-thanedar",
    name: "Sanchita Satalkar",
    title: "Assistant Professor",
    designation:
      "Assistant Professor, Department of Management Studies, COEP Technological University",
    expertise: [
      "Human Resource Management",
      "Conflict & Negotiation",
      "Organizational Development",
      "Behavioral Training",
      "Leadership Development",
    ],
    photoUrl: "/assets/faculty/saanchita-thanedar-satalkar.jpg",
    qualification:
      "MBA – HR (University of Pune), Counsellor Certification (PGCCP), B.Com",
    bio: "Sanchita Satalkar is an MBA in HR (Pune University, India) with 15+ years of global experience as an HR Professional in various sectors including Retail, Oil & Gas, Training & Development, and Education. She recently wrote a book on conflict and negotiation — practical insights and real-world strategies to help students and organizations navigate and resolve conflicts effectively. She conducts webinars and in-person trainings in Behavioral Training for corporate sectors and educational institutes.",
    education: [
      {
        degree: "Counsellor Certification (PGCCP)",
        institution: "Emoticons, Pune",
      },
      { degree: "MBA – HR", institution: "University of Pune" },
      { degree: "B.Com", institution: "BMCC, University of Pune" },
    ],
    experience: [
      "Assistant Professor — Department of Management Studies, COEP Technological University (Current)",
      "Assistant Professor (HR) — Symbiosis Institute of Business Management (SIBM) (Previous)",
      "HR Executive — Exxon Mobil, Singapore (Previous)",
      "Assistant Manager – HR (Training & Development) — Reliance Retail, Mumbai (Previous)",
    ],
    achievements: [
      "Author: Book on Conflict and Negotiation – Practical Insights and Real-World Strategies",
      "Presented paper on 'Evolving Global Capability Centres: From Back-Office Operations to Innovation Powerhouses' at RIIM Institute",
      "Received 'Best Trainer' award at Reliance Retail",
      "Completed Peace Ambassadors Leadership Program (UK) — Group Leader",
      "Recipient of Lila Poonawalla Foundation Scholarship for Post Graduation (MBA-HR)",
      "Area Director – Area D3 District 80, Toastmasters International",
      "Runner-up at International Speech Contest at Area Level – Toastmaster Singapore",
      "Active member at Toastmasters Club West, India",
      "Part of curriculum designing for HR subjects at SIBM",
      "Conducts webinars/trainings on: Conflict & Negotiation, Stress Management, Goal Setting, Work Life Balance, Motivation, Business Communication, Time Management, Emotional Intelligence",
    ],
    researchInterests: [
      "Business Analytics",
      "Data Science & AI",
      "Human Resource Management",
      "Talent Management",
    ],
  },
  {
    id: "ms-prema-yadav",
    name: "Ms. Prema Mani Yadav",
    title: "Assistant Professor",
    designation: "Assistant Professor — Operations Research & SCM",
    expertise: [
      "Operations Research",
      "Supply Chain Management",
      "Marketing Management",
      "Consumer Behaviour",
      "Economics",
    ],
    photoUrl: "/assets/faculty/prema-mani-yadav.jpg",
    qualification: "M.A. (Economics), NET Qualified",
    bio: "Ms. Prema Mani Yadav specialises in Operations Research and Supply Chain Management. She brings contemporary marketing perspectives to her teaching, helping students understand consumer behaviour and effective market strategies.",
    researchInterests: [
      "Operations Research",
      "Supply Chain Management",
      "Marketing Management",
      "Consumer Behaviour",
    ],
  },
  {
    id: "dr-sidra-tariq",
    name: "Dr. Sidra Tariq",
    title: "Assistant Professor",
    designation: "Assistant Professor — Strategic Management & HR",
    expertise: [
      "Strategic Management",
      "Human Resources",
      "Research Methodology",
      "Business Analytics",
      "Marketing Research",
    ],
    photoUrl: "/assets/faculty/sidra-tariq.jpg",
    qualification: "Ph.D. (Marketing)",
    bio: "Dr. Sidra Tariq contributes specialised knowledge in Strategic Management and HR. Her academic background enriches the department's teaching fabric and provides students with exposure to contemporary research methodologies and analytical approaches.",
    researchInterests: [
      "Strategic Management",
      "Research Methodology",
      "Business Analytics",
      "Marketing Research",
    ],
  },
];
