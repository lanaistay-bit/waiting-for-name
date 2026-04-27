export type DMSPageRoute =
  "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies";

export type FacultyPageRoute =
  "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies/faculty";

export interface Faculty {
  id: string;
  name: string;
  title: string;
  designation: string;
  qualification: string;
  specialization: string;
  email: string;
  photo: string;
  publications?: number;
  experience?: number;
}

export interface Quarter {
  number: number;
  title: string;
  subtitle: string;
  courses: string[];
}

export interface Program {
  id: string;
  name: string;
  description: string;
  courses: string[];
  careers: string[];
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}
