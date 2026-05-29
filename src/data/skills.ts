export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages & Backend",
    items: [
      "C#",
      "Python",
      "TypeScript",
      "SQL",
      "T-SQL",
      "JavaScript",
      "Bash",
    ],
  },
  {
    category: "Enterprise & Web",
    items: [
      "ASP.NET MVC",
      ".NET",
      "Web API",
      "Entity Framework",
      "REST APIs",
      "MVC",
      "SDLC",
      "OOP",
      "Git",
      "Visual Studio",
      "IIS",
    ],
  },
  {
    category: "Databases",
    items: ["SQL Server", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "AWS (EC2, S3)",
      "Linux",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "AngularJS (exposure)",
      "Bootstrap",
      "HTML/CSS",
    ],
  },
  {
    category: "Applied AI / ML",
    items: [
      "LangChain",
      "RAG",
      "scikit-learn",
      "PyTorch",
      "Hugging Face",
      "OpenAI API",
    ],
  },
];
