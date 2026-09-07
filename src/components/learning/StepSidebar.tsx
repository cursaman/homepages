"use client";

import Link from "next/link";
import { useState } from "react";
import { steps } from "@/data/steps";
import ProgressBar from "@/components/ProgressBar";

type Props = {
  currentId: number;
  completedSteps: number[];
};

export default function StepSidebar({ currentId, completedSteps }: Props) {
  const [open, setOpen] = useState(false);
  const percent = completedSteps.length * 10;

  const content = (
    <>
      <nav className="step-list" aria-label="학습 단계">
        {steps.map((step) => {
          const complete = completedSteps.includes(step.id);
          const current = step.id === currentId;
          return (
            <Link
              key={step.id}
              href={`/steps/${step.id}`}
              className={`step-link ${current ? "current" : ""}`}
              onClick={() => setOpen(false)}
            >
              <span>{complete ? "✓" : current ? "●" : "○"}</span>
              <span>{String(step.id).padStart(2, "0")} {step.title}</span>
            </Link>
          );
        })}
      </nav>
      <ProgressBar percent={percent} />
    </>
  );

  return (
    <>
      <aside className="step-sidebar card">
        <h3>나의 학습</h3>
        {content}
      </aside>

      <div className="step-mobile-menu">
        <button className="button button-secondary" onClick={() => setOpen(v => !v)}>
          {open ? "전체 STEP 닫기 ▲" : "전체 STEP 보기 ▼"}
        </button>
        {open && <div className="card step-mobile-panel">{content}</div>}
      </div>
    </>
  );
}
