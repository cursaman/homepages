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

function normalizeCompletedSteps(value: unknown) {
  if (!Array.isArray(value)) return [];

  return [...new Set(
    value.filter((step): step is number => Number.isInteger(step) && step >= 1 && step <= 10)
  )].sort((a, b) => a - b);
}

function normalizePracticeChecks(value: unknown) {
  const normalized: Record<number, boolean[]> = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return normalized;

  Object.entries(value).forEach(([key, checks]) => {
    const stepId = Number(key);
    if (!Number.isInteger(stepId) || stepId < 1 || stepId > 10 || !Array.isArray(checks)) return;
    normalized[stepId] = checks.map((check) => check === true);
  });

  return normalized;
}

export function loadProgress(): LearningProgress {
  if (typeof window === "undefined") return emptyProgress;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;

    const parsed = JSON.parse(raw) as Partial<LearningProgress>;
    return {
      completedSteps: normalizeCompletedSteps(parsed.completedSteps),
      practiceChecks: normalizePracticeChecks(parsed.practiceChecks),
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
  return normalizeCompletedSteps(completedSteps).length * 10;
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
