"use client";

import { useEffect, useMemo, useState } from "react";
import type { Step } from "@/data/steps";
import {
  LearningProgress,
  emptyProgress,
  getProgressPercent,
  loadProgress,
  normalizeUrl,
  resetProgress,
  saveProgress
} from "@/lib/learningProgress";
import BeginnerTip from "./BeginnerTip";
import PracticeChecklist from "./PracticeChecklist";
import PromptCard from "./PromptCard";
import StepSidebar from "./StepSidebar";
import StepNavigation from "./StepNavigation";
import ProgressBar from "@/components/ProgressBar";

export default function StepTemplate({ step }: { step: Step }) {
  const [progress, setProgress] = useState<LearningProgress>(emptyProgress);
  const [ready, setReady] = useState(false);
  const [urlMessage, setUrlMessage] = useState("");

  useEffect(() => {
    setProgress(loadProgress());
    setReady(true);
  }, []);

  const checks = progress.practiceChecks[step.id] ?? step.practice.map(() => false);
  const allChecked = useMemo(
    () => step.practice.length > 0 && step.practice.every((_, i) => Boolean(checks[i])),
    [checks, step.practice]
  );
  const completed = progress.completedSteps.includes(step.id);
  const percent = getProgressPercent(progress.completedSteps);

  function updateChecks(next: boolean[]) {
    const nextProgress = {
      ...progress,
      practiceChecks: {
        ...progress.practiceChecks,
        [step.id]: next
      }
    };
    setProgress(nextProgress);
    saveProgress(nextProgress);
  }

  function completeStep() {
    if (!allChecked || completed) return;
    const completedSteps = [...new Set([...progress.completedSteps, step.id])].sort((a, b) => a - b);
    const nextProgress = { ...progress, completedSteps };
    setProgress(nextProgress);
    saveProgress(nextProgress);
  }

  function updateSiteUrl(value: string) {
    const nextProgress = { ...progress, siteUrl: value };
    setProgress(nextProgress);
    saveProgress(nextProgress);
  }

  function openSite() {
    const normalized = normalizeUrl(progress.siteUrl);
    try {
      const parsed = new URL(normalized);
      if (!["http:", "https:"].includes(parsed.protocol)) throw new Error();
      setUrlMessage("");
      window.open(parsed.toString(), "_blank", "noopener,noreferrer");
    } catch {
      setUrlMessage("올바른 사이트 주소를 입력해주세요.");
    }
  }

  function handleReset() {
    if (!window.confirm("모든 학습 진행상황이 삭제됩니다. 정말 처음부터 시작하시겠습니까?")) return;
    resetProgress();
    setProgress(emptyProgress);
  }

  if (!ready) {
    return <div className="container section step-loading"><p>학습 정보를 불러오는 중입니다.</p></div>;
  }

  return (
    <div className="container step-layout section step-shell">
      <StepSidebar currentId={step.id} completedSteps={progress.completedSteps} />

      <article className="step-content">
        <header className="step-page-header">
          <p className="eyebrow">STEP {String(step.id).padStart(2, "0")} / 10</p>
          <h1>{step.title}</h1>
          <p className="lead">{step.shortDescription}</p>
          <ProgressBar percent={percent} />
        </header>

        <section className="learning-block">
          <h2>이번 STEP에서는 무엇을 하나요?</h2>
          <p>{step.what}</p>
        </section>

        <section className="learning-block">
          <h2>왜 필요한가요?</h2>
          <p>{step.why}</p>
        </section>

        <BeginnerTip term={step.beginnerTip.term} description={step.beginnerTip.description} />

        <section className="learning-block">
          <h2>실제 사례</h2>
          <div className="card"><p>{step.example}</p></div>
        </section>

        <section className="learning-block">
          <h2>AI에게 어떻게 요청하나요?</h2>
          <div className="stack">
            {step.prompts.map((prompt) => <PromptCard key={`${prompt.tool}-${prompt.title}`} prompt={prompt} />)}
          </div>
        </section>

        <section className="learning-block">
          <h2>직접 해보기</h2>
          <PracticeChecklist items={step.practice} checks={checks} onChange={updateChecks} />
        </section>

        <section className="learning-block result-card card">
          <p className="eyebrow">오늘의 결과물</p>
          <h2>{step.result}</h2>
        </section>

        <section className="learning-block completion-box card">
          {completed ? (
            <>
              <h2>✓ STEP {String(step.id).padStart(2, "0")} 완료!</h2>
              <p>현재 학습 진행률은 {percent}%입니다.</p>
            </>
          ) : (
            <>
              <h2>STEP {String(step.id).padStart(2, "0")}을 완료했나요?</h2>
              {!allChecked && <p className="muted">실습 항목을 모두 체크하면 완료할 수 있습니다.</p>}
              <button className="button button-primary full-mobile" disabled={!allChecked} onClick={completeStep}>
                STEP {String(step.id).padStart(2, "0")} 완료하기
              </button>
            </>
          )}
        </section>

        {step.id === 10 && (
          <section className="learning-block card">
            <p className="eyebrow">MY LIVE SITE</p>
            <h2>나의 첫 웹사이트</h2>
            <input
              className="url-input"
              type="text"
              placeholder="my-site.vercel.app"
              value={progress.siteUrl}
              onChange={(e) => updateSiteUrl(e.target.value)}
            />
            {urlMessage && <p className="error-text">{urlMessage}</p>}
            <button className="button button-primary full-mobile" onClick={openSite}>내 사이트 열기</button>

            {percent === 100 && (
              <div className="celebration">
                <strong>🎉 모든 STEP을 완료했습니다!</strong>
                <p>아이디어 하나에서 시작해 실제 웹사이트 배포까지 완주했습니다.</p>
              </div>
            )}
          </section>
        )}

        <StepNavigation currentId={step.id} />

        <div className="reset-area">
          <button className="text-button" onClick={handleReset}>진행상황 초기화</button>
        </div>
      </article>
    </div>
  );
}
