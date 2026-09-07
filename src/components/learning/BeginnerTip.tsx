type Props = {
  term: string;
  description: string;
};

export default function BeginnerTip({ term, description }: Props) {
  return (
    <aside className="tip-card">
      <strong>초보자 TIP · {term}</strong>
      <p>{description}</p>
    </aside>
  );
}
