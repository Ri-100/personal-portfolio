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
      "Built and maintained backend features for the product, including background jobs with BullMQ and Redis.",
      "Worked on AI analysis of 360-degree feedback reports.",
      "Built a coaching agent that uses tool calling, with 13 tools available to the agent.",
      "Implemented PostgreSQL-backed memory for that agent.",
      "Worked on CI/CD and deployment with AWS ECS and ECR.",
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
      "Worked on a retrieval-augmented generation solution for document question answering, including vector databases and retrieval.",
      "Worked on SSIM-based image similarity.",
      "Contributed to GenAI integration, testing, and deployment.",
    ],
  },
];
