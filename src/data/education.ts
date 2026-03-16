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
    degree: "M.S., Computer Science and Engineering",
    school: "University of Connecticut",
    location: "Hartford, CT",
    gpa: "3.6/4.0",
    coursework: [
      "Bayesian Machine Learning",
      "Data Mining",
      "Big Data Algorithms",
      "Deep Learning",
      "System Design",
    ],
  },
  {
    date: "Aug 2020 — May 2024",
    degree: "B.Tech, Computer Science and Engineering",
    school: "Charotar University",
    location: "Gujarat, India",
    gpa: "3.7/4.0",
    coursework: [],
  },
];
