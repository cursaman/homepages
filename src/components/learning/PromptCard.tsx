"use client";

import { useState } from "react";
import type { StepPrompt } from "@/data/steps";

export default function PromptCard({ prompt }: { prompt: StepPrompt }) {
  const [message, setMessage] = useState("복사하기");

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt.content);
      setMessage("✓ 복사했습니다");
      window.setTimeout(() => setMessage("복사하기"), 1600);
    } catch {
      setMessage("복사 실패");
      window.setTimeout(() => setMessage("복사하기"), 1600);
    }
  }

  return (
    <div className="prompt-card card">
      <div className="prompt-head">
        <span className="tool-badge">[{prompt.tool}]</span>
        <strong>{prompt.title}</strong>
      </div>
      <pre>{prompt.content}</pre>
      <button className="button button-secondary full-mobile" onClick={copyPrompt}>{message}</button>
    </div>
  );
}
