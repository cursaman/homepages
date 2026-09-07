import Link from "next/link";
import { steps } from "@/data/steps";

export default function Roadmap() {
  return (
    <div className="roadmap-grid">
      {steps.map((step) => (
        <Link key={step.id} href={`/steps/${step.id}`} className="roadmap-card card">
          <span className="step-number">{String(step.id).padStart(2, "0")}</span>
          <strong>{step.title}</strong>
          <p>{step.shortDescription}</p>
        </Link>
      ))}
    </div>
  );
}
