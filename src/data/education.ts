export interface EducationItem {
  date: string;
  degree: string;
  school: string;
  location: string;
  gpa: string;
  coursework: string[];
}

export const education: EducationItem[] = [
  {
    date: "Aug 2024 — May 2026",
    degree: "M.S., Computer Science",
    school: "University of Connecticut",
    location: "Storrs, CT",
    gpa: "3.6/4.0",
    coursework: [
      "Distributed Systems",
      "Deep Learning",
      "Data Mining",
      "Database Systems",
      "Big Data Algorithms",
      "System Design",
    ],
  },
  {
    date: "Aug 2020 — May 2024",
    degree: "B.Tech, Computer Science",
    school: "Charotar University of Science & Technology",
    location: "Gujarat, India",
    gpa: "3.8/4.0",
    coursework: [],
  },
];

export interface LeadershipItem {
  role: string;
  org: string;
  detail: string;
}

export const leadership: LeadershipItem[] = [
  {
    role: "AI/ML Team Lead",
    org: "Google Developer Student Clubs (GDSC)",
    detail:
      "Led AI/ML peer learning, project discussions, and developer community support.",
  },
  {
    role: "Technical Coordinator",
    org: "Rotaract Club",
    detail:
      "Managed technology operations, event workflows, and digital coordination.",
  },
];
