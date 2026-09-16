import { notFound } from "next/navigation";
import { getStepById, steps } from "@/data/steps";
import StepTemplate from "@/components/learning/StepTemplate";
import { createPageMetadata } from "@/lib/siteMetadata";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return steps.map((step) => ({ id: String(step.id) }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const step = getStepById(Number(id));
  if (!step) return {};

  return createPageMetadata(
    `STEP ${String(step.id).padStart(2, "0")} ${step.title}`,
    step.shortDescription,
    `/steps/${step.id}/`
  );
}

export default async function StepPage({ params }: Props) {
  const { id } = await params;
  const stepId = Number(id);

  if (!Number.isInteger(stepId)) notFound();

  const step = getStepById(stepId);
  if (!step) notFound();

  return <StepTemplate step={step} />;
}
