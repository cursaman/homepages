import Link from "next/link";
import { steps } from "@/data/steps";

export default function StepNavigation({ currentId }: { currentId: number }) {
  const prev = steps.find((step) => step.id === currentId - 1);
  const next = steps.find((step) => step.id === currentId + 1);

  return (
    <div className="step-navigation">
      {prev ? (
        <Link className="button button-secondary" href={`/steps/${prev.id}`}>
          ← STEP {String(prev.id).padStart(2, "0")} {prev.title}
        </Link>
      ) : (
        <Link className="button button-secondary" href="/">← HOME</Link>
      )}

      {next ? (
        <Link className="button button-primary" href={`/steps/${next.id}`}>
          STEP {String(next.id).padStart(2, "0")} {next.title} →
        </Link>
      ) : (
        <Link className="button button-primary" href="/">HOME으로 →</Link>
      )}
    </div>
  );
}
