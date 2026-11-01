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
    startLabel: "Jun 2025",
    endLabel: "Present",
    startDate: "2025-06",
    href: "https://voiceboard.ai/",
    summary:
      "Building a production SaaS platform for AI-powered interviews and 360° feedback reports, used by real customers. Deployed with Docker, GitHub Actions, Amazon ECR, and ECS.",
    points: [
      {
        title: "Credit ledger",
        detail:
          "Signed Stripe webhooks update a transactional, idempotent credit ledger, so a retry cannot grant credits twice.",
      },
      {
        title: "Workspace access",
        detail:
          "Workspace roles, membership, and email invites. Safeguards block unauthorized role changes and duplicate accounts.",
      },
      {
        title: "Voice interview agent",
        detail:
          "A browser interview agent on the OpenAI Realtime API and WebRTC, with turn-taking, interruption, transcript cleanup, tool-driven topics, and session resume.",
      },
      {
        title: "360 report pipeline",
        detail:
          "Scores and blind spots are computed in code. OpenAI writes the narrative only after that. Jobs run on BullMQ and Redis.",
      },
    ],
  },
  {
    id: "delaplex",
    company: "Delaplex",
    href: "https://delaplex.com/",
    title: "Python Developer Intern",
    startLabel: "Jan 2025",
    endLabel: "Jun 2025",
    startDate: "2025-01",
    endDate: "2025-06",
    points: [
      {
        title: "Document Q&A",
        detail:
          "Built a RAG-based document Q&A workflow using vector search and LLMs.",
      },
      {
        title: "Image similarity",
        detail:
          "Built an SSIM-based pipeline to identify and cluster visually similar images across document collections.",
      },
      {
        title: "GenAI",
        detail:
          "Integrated, tested, and deployed GenAI features in collaboration with the backend team.",
      },
    ],
  },
];
