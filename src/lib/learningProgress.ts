export type LearningProgress = {
  completedSteps: number[];
  practiceChecks: Record<number, boolean[]>;
  siteUrl: string;
};

const STORAGE_KEY = "ai-web-learning-progress";

export const emptyProgress: LearningProgress = {
  completedSteps: [],
  practiceChecks: {},
  siteUrl: ""
};

export function loadProgress(): LearningProgress {
  if (typeof window === "undefined") return emptyProgress;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;

    const parsed = JSON.parse(raw) as Partial<LearningProgress>;
    return {
      completedSteps: Array.isArray(parsed.completedSteps) ? parsed.completedSteps : [],
      practiceChecks: parsed.practiceChecks ?? {},
      siteUrl: typeof parsed.siteUrl === "string" ? parsed.siteUrl : ""
    };
  } catch {
    return emptyProgress;
  }
}

export function saveProgress(progress: LearningProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("learning-progress-changed"));
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("learning-progress-changed"));
}

export function getProgressPercent(completedSteps: number[]) {
  return Math.round((completedSteps.length / 10) * 100);
}

export function getNextStep(completedSteps: number[]) {
  for (let i = 1; i <= 10; i += 1) {
    if (!completedSteps.includes(i)) return i;
  }
  return 10;
}

export function normalizeUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}
