export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-logo ${compact ? "brand-logo--compact" : ""}`}>
      <strong className="brand-logo__mark" aria-hidden="true">AI.</strong>
      <span className="brand-logo__name">처음 만드는 웹사이트</span>
    </span>
  );
}
