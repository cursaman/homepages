type Props = {
  percent: number;
  label?: string;
};

export default function ProgressBar({ percent, label = "학습 진행률" }: Props) {
  return (
    <div className="progress-wrap" aria-label={`${label} ${percent}%`}>
      <div className="progress-label">
        <span>{label}</span>
        <strong>{percent}%</strong>
      </div>
      <div className="progress-track" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
