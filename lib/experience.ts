export type ExperienceRole = {
  id: string;
  company: string;
  title: string;
  startLabel: string;
  endLabel: string;
  startDate: string;
  endDate?: string;
  href?: string;
  summary?: string;
  points: { title: string; detail: string }[];
};

export const experience: ExperienceRole[] = [
  {
    id: "voiceboard",
    company: "Voiceboard.ai",
    title: "Product Engineer",
    startLabel: "June 2025",
    endLabel: "Present",
    startDate: "2025-06",
    href: "https://voiceboard.ai/",
    summary:
      "AI research agent that interviews people and turns those conversations into reports. In use with real clients.",
    points: [
      {
        title: "Billing system",
        detail: "Built the billing system and integrated it with Stripe.",
      },
      {
        title: "Workspace management",
        detail:
          "Implemented workspace management and role-based access control.",
      },
      {
        title: "Background jobs",
        detail:
          "Built and maintained backend features, including background jobs with BullMQ and Redis.",
      },
      {
        title: "Q&A coaching agent",
        detail:
          "Built a Q&A coaching agent with tool calling, 13 tools, and PostgreSQL-backed memory.",
      },
      {
        title: "Realtime survey agent",
        detail: "Optimized prompts for a realtime survey agent that uses tools.",
      },
      {
        title: "360-degree feedback",
        detail: "Worked on AI analysis of 360-degree feedback reports.",
      },
      {
        title: "Deployment",
        detail: "Used AWS ECS and ECR for CI/CD and deployment.",
      },
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
      {
        title: "Document Q&A",
        detail:
          "Applied retrieval-augmented generation to document question answering, including vector databases and retrieval.",
      },
      {
        title: "Image similarity",
        detail: "Applied SSIM for image similarity.",
      },
      {
        title: "GenAI",
        detail: "Contributed to GenAI integration, testing, and deployment.",
      },
    ],
  },
];
