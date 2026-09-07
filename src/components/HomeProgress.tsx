"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import { getNextStep, getProgressPercent, loadProgress, LearningProgress } from "@/lib/learningProgress";

export default function HomeProgress() {
  const [progress, setProgress] = useState<LearningProgress | null>(null);

  useEffect(() => {
    const update = () => setProgress(loadProgress());
    update();
    window.addEventListener("storage", update);
    window.addEventListener("learning-progress-changed", update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("learning-progress-changed", update);
    };
  }, []);

  if (!progress) return null;

  const percent = getProgressPercent(progress.completedSteps);
  const nextStep = getNextStep(progress.completedSteps);
  const allDone = progress.completedSteps.length === 10;

  return (
    <section className="home-progress card">
      <p className="eyebrow">{percent > 0 ? "다시 오셨네요." : "첫 학습을 시작해보세요."}</p>
      <ProgressBar percent={percent} />
      <p className="muted">
        {allDone
          ? "모든 STEP을 완료했습니다."
          : `${progress.completedSteps.length}개의 STEP을 완료했습니다.`}
      </p>
      <Link href={allDone ? "/steps/10" : `/steps/${nextStep}`} className="button button-primary">
        {allDone ? "완료 결과 보기" : `STEP ${String(nextStep).padStart(2, "0")} 계속하기`}
      </Link>
    </section>
  );
}
