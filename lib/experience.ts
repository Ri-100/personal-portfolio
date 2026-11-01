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
      "Production SaaS for AI interviews and 360 reports, in use with real clients. Deployed with Docker, GitHub Actions, Amazon ECR, and ECS.",
    points: [
      {
        title: "Credit ledger",
        detail:
          "Stripe checkout and subscriptions with signed webhooks. Credits move through a transactional, idempotent ledger, so a retried webhook cannot grant credits twice.",
      },
      {
        title: "Workspace access",
        detail:
          "Workspace roles, membership, and email invites, with checks that block unauthorized role changes and duplicate accounts.",
      },
      {
        title: "Voice interview agent",
        detail:
          "Browser agent on the OpenAI Realtime API and WebRTC. Turn-taking, interruption, transcript cleanup, tool-driven topic progression, and session resume.",
      },
      {
        title: "360 report pipeline",
        detail:
          "Survey scores and blind spots are computed in code. OpenAI writes the narrative only after that. Jobs run on BullMQ and Redis.",
      },
    ],
  },
  {
    id: "delaplex",
    company: "Delaplex",
    href: "https://delaplex.com/",
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
        detail:
          "Built an SSIM pipeline that finds and clusters similar visuals across document collections.",
      },
      {
        title: "GenAI",
        detail:
          "Integrated, tested, and deployed the GenAI features with the backend team.",
      },
    ],
  },
];
