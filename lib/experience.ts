export type ExperienceRole = {
  id: string;
  company: string;
  title: string;
  startLabel: string;
  endLabel: string;
  startDate: string;
  endDate?: string;
  points: string[];
};

export const experience: ExperienceRole[] = [
  {
    id: "voiceboard",
    company: "Voiceboard.ai",
    title: "Product Engineer",
    startLabel: "June 2025",
    endLabel: "Present",
    startDate: "2025-06",
    points: [
      "Implemented Stripe billing and subscriptions.",
      "Worked on workspace multi-tenancy and permissions.",
      "Built and maintained backend features, including background jobs with BullMQ and Redis.",
      "Worked on AI analysis of 360-degree feedback reports.",
      "Built a coaching agent that uses tool calling, with 13 tools available to it.",
      "Implemented PostgreSQL-backed memory for that agent.",
      "Used AWS ECS and ECR for CI/CD and deployment.",
    ],
  },
  {
    id: "delaplex",
    company: "Delaplex",
    title: "Python Developer Intern",
    startLabel: "January 2025",
    endLabel: "June 2025",
    startDate: "2025-01",
    endDate: "2025-06",
    points: [
      "Applied retrieval-augmented generation to document question answering, including vector databases and retrieval.",
      "Applied SSIM for image similarity.",
      "Contributed to GenAI integration, testing, and deployment.",
    ],
  },
];
