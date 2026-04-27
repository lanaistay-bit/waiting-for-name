const FACULTY_DATA = [
  // ── HIERARCHY POSITION 1 ──────────────────────────────────────────────────
  {
    id: "dr-sandeep-meshram",
    name: "Dr. Sandeep A. Meshram",
    title: "Head of Department & Associate Professor",
    designation: "Head of Department & Associate Professor, DMS",
    expertise: [
      "Operations Management",
      "Strategy",
      "Rural Marketing",
      "Supply Chain Management",
      "Sustainability & Environmental Management",
      "Entrepreneurship Development"
    ],
    photoUrl: "/assets/faculty/sandeep-meshram.jpg",
    email: "hod.management@coeptech.ac.in",
    phone: "020-25507006 / 7214",
    qualification: "Ph.D. (Management), MBA, B.E. (Civil Engineering)",
    bio: "Dr. Sandeep A. Meshram serves as the Head of Department at the Department of Management Studies, COEP Technological University. With 30+ years of experience spanning placement strategy, career development, geological investigations, and water resources engineering, he has led COEP to national-level recognition for placement excellence.",
    isSpecial: true,
    education: [
      { degree: "Ph.D. in Management Studies" },
      { degree: "M.B.A. (Masters in Business Administration)" },
      { degree: "Bachelor of Engineering (Civil Engineering), COEP" }
    ],
    experience: [
      "Head of Department, DMS, COEP Technological University (current)",
      "Training & Placement Officer (T&P), COEP (prior role)",
      "Consultant to National Water Development Agency, Govt. of India",
      "Member (Geology), Dam Safety Review Committee, Govt. of Maharashtra"
    ],
    achievements: [
      "Special Independence Day Award by PMC, 18th August 2012",
      "CAREER GURU Award — 4 consecutive years (2013, 2014, 2015 & 2017)",
      "COEP Placement Cell strategy picked as a Case Study by AICTE",
      "First Prize Winner, Poster Presentation, 12th FICCI Higher Education Summit 2016"
    ],
    researchInterests: [
      "Rural Marketing & Consumer Behavior",
      "Supply Chain Management & Logistics",
      "Sustainability and Environmental Management",
      "Entrepreneurship Development"
    ]
  },
  // ── HIERARCHY POSITION 2 ──────────────────────────────────────────────────
  {
    id: "dr-arun-mudbidri",
    name: "Dr. Arun Mudbidri",
    title: "Assistant Professor",
    designation: "Assistant Professor — Entrepreneurship & Innovation",
    expertise: [
      "Entrepreneurship",
      "Innovation",
      "Management Education",
      "Student Employability",
      "Corporate-Academic Interface"
    ],
    photoUrl: "/assets/faculty/arun-mudbidri.jpg",
    phone: "020-25507862",
    email: "ngmt@coeptech.ac.in",
    qualification: "Ph.D. (Management/Education), MBA",
    bio: "Dr. Arun Mudbidri is an Assistant Professor with 40+ years in academic and corporate leadership. He built SIBM Pune into one of India's top MBA programs and brings decades of institutional and corporate experience to COEP's management department.",
    isSpecial: true,
    education: [
      { degree: "Ph.D. in Management / Education" },
      { degree: "MBA (Masters in Business Administration)" }
    ],
    experience: [
      "Assistant Professor, DMS, COEP Technological University (since October 2023)",
      "Director, Symbiosis Institute of Business Management (SIBM), Pune",
      "Chief Administrator, Symbiosis (post-SIBM Director role)"
    ],
    achievements: [
      "Built SIBM Pune into one of India's top-ranked MBA programs",
      "40+ years of industry and academic leadership",
      "Pioneer in innovative management education practices"
    ],
    researchInterests: [
      "Management Education Innovation",
      "Student Employability and Career Development",
      "Corporate-Academic Interface"
    ]
  },
  // ── HIERARCHY POSITION 3 ──────────────────────────────────────────────────
  {
    id: "dr-shilpa-kankonkar",
    name: "Dr. Shilpa Kankonkar",
    title: "Associate Professor",
    designation: "Associate Professor, Department of Management Studies",
    expertise: [
      "Finance",
      "Banking",
      "Financial Management",
      "Marketing Research",
      "Operations Management",
      "Business Analytics"
    ],
    photoUrl: "/assets/faculty/shilpa-kankonkar.jpg",
    email: "shilpak.mngmt@coeptech.ac.in",
    qualification: "Ph.D. (Management), MBA (Finance/Marketing)",
    bio: "Dr. Shilpa Kankonkar is an Associate Professor at the Department of Management Studies, COEP Technological University, with expertise in Finance, Banking, and Operations. She is actively engaged in research and curriculum development, mentoring MBA students in research projects.",
    isSpecial: true,
    education: [
      { degree: "Ph.D. in Management" },
      { degree: "MBA (Finance / Marketing)" }
    ],
    experience: [
      "Associate Professor, DMS, COEP Technological University",
      "Teaching and research in Management Studies",
      "Industry experience in Finance and Operations"
    ],
    achievements: [
      "Research publications in management journals",
      "Active contributor to department curriculum development",
      "Mentoring MBA students in research projects"
    ],
    researchInterests: [
      "Financial Management",
      "Banking & Financial Institutions",
      "Marketing Research",
      "Business Analytics"
    ]
  },
  // ── HIERARCHY POSITION 4 ──────────────────────────────────────────────────
  {
    id: "mr-kanad-deshmukh",
    name: "Mr. Kanad Deshmukh",
    title: "Assistant Professor",
    designation: "Assistant Professor — Marketing & Digital Marketing",
    expertise: [
      "Marketing",
      "Digital Marketing",
      "Organisational Behaviour",
      "Business Communication"
    ],
    photoUrl: "/assets/faculty/kanad-deshmukh.jpg",
    qualification: "MBA, NET Qualified",
    bio: "Mr. Kanad Deshmukh is an Assistant Professor at the Department of Management Studies, contributing to foundational and advanced management courses in Marketing and Digital Marketing. He is committed to student-centric teaching.",
    isSpecial: true,
    researchInterests: [
      "Marketing Management",
      "Digital Marketing",
      "Organisational Behaviour"
    ]
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
      "Sustainability"
    ],
    photoUrl: "/assets/faculty/sonal-mahajan.jpg",
    qualification: "Ph.D. (Law), LLM, MBA",
    bio: "Dr. Sonal Mahajan is an Associate Professor at DMS, bringing academic depth in Marketing, Consumer Behavior, ethics, and governance. Her sessions encourage students to think critically about corporate responsibility and sustainable business practices.",
    education: [
      { degree: "Ph.D. in Law / Management" },
      { degree: "LLM (Master of Laws)" },
      { degree: "MBA" }
    ],
    experience: [
      "Associate Professor, DMS, COEP Technological University",
      "Research in Marketing and Consumer Behavior",
      "Industry consulting in Corporate Governance"
    ],
    achievements: [
      "Published research in peer-reviewed journals",
      "Active curriculum development for MBA programs"
    ],
    researchInterests: [
      "Marketing Research",
      "Consumer Behavior",
      "Business Ethics",
      "Corporate Governance"
    ]
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
      "Data Analysis"
    ],
    photoUrl: "/assets/faculty/suvarna-gavade.jpg",
    qualification: "M.Sc. (Statistics), MBA",
    bio: "Mrs. Suvarna Gavade brings practical management expertise to the department. Her contributions include teaching and mentoring students on HR, OB, financial and strategic dimensions of management.",
    researchInterests: [
      "Human Resource Management",
      "Financial Management",
      "Corporate Strategy"
    ]
  },
  {
    id: "mrs-saanchita-thanedar",
    name: "Mrs. Saanchita Thanedar-Satalkar",
    title: "Assistant Professor",
    designation: "Assistant Professor — Business Analytics & Data Science",
    expertise: [
      "Business Analytics",
      "Data Science",
      "Human Resource Management",
      "Organisational Development",
      "Training & Development"
    ],
    photoUrl: "/assets/faculty/saanchita-thanedar-satalkar.jpg",
    qualification: "MBA (HR), Ph.D. (Pursuing)",
    bio: "Mrs. Saanchita Thanedar-Satalkar is an Assistant Professor focused on Business Analytics, Data Science, and HR. She brings academic rigor combined with practical insights, enabling students to develop a nuanced understanding of organisational dynamics and data-driven decision making.",
    researchInterests: [
      "Business Analytics",
      "Data Science & AI",
      "Human Resource Management",
      "Talent Management"
    ]
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
      "Economics"
    ],
    photoUrl: "/assets/faculty/prema-mani-yadav.jpg",
    qualification: "M.A. (Economics), NET Qualified",
    bio: "Ms. Prema Mani Yadav specialises in Operations Research and Supply Chain Management. She brings contemporary marketing perspectives to her teaching, helping students understand consumer behaviour and effective market strategies.",
    researchInterests: [
      "Operations Research",
      "Supply Chain Management",
      "Marketing Management",
      "Consumer Behaviour"
    ]
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
      "Marketing Research"
    ],
    photoUrl: "/assets/faculty/sidra-tariq.jpg",
    qualification: "Ph.D. (Marketing)",
    bio: "Dr. Sidra Tariq contributes specialised knowledge in Strategic Management and HR. Her academic background enriches the department's teaching fabric and provides students with exposure to contemporary research methodologies and analytical approaches.",
    researchInterests: [
      "Strategic Management",
      "Research Methodology",
      "Business Analytics",
      "Marketing Research"
    ]
  }
];
export {
  FACULTY_DATA as F
};
