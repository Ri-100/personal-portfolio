export type TechnicalRangeGroup = {
  id: string;
  label: string;
  detail: string;
};

export const technicalRange: TechnicalRangeGroup[] = [
  {
    id: "backend",
    label: "Backend",
    detail: "Stripe, PostgreSQL, Redis, BullMQ, AWS ECS, ECR",
  },
  {
    id: "ai",
    label: "AI",
    detail:
      "Tool calling, retrieval-augmented generation, vector databases, SSIM",
  },
];
