"use client";

type Props = {
  items: string[];
  checks: boolean[];
  onChange: (checks: boolean[]) => void;
};

export default function PracticeChecklist({ items, checks, onChange }: Props) {
  return (
    <div className="checklist">
      {items.map((item, index) => {
        const checked = Boolean(checks[index]);
        return (
          <label className={`check-row ${checked ? "checked" : ""}`} key={item}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                const next = [...checks];
                next[index] = !checked;
                onChange(next);
              }}
            />
            <span>{item}</span>
          </label>
        );
      })}
    </div>
  );
}
