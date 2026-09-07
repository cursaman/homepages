import { notFound } from "next/navigation";
import { getStepById, steps } from "@/data/steps";
import StepTemplate from "@/components/learning/StepTemplate";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return steps.map((step) => ({ id: String(step.id) }));
}

export default async function StepPage({ params }: Props) {
  const { id } = await params;
  const stepId = Number(id);

  if (!Number.isInteger(stepId)) notFound();

  const step = getStepById(stepId);
  if (!step) notFound();

  return <StepTemplate step={step} />;
}
