export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-logo ${compact ? "brand-logo--compact" : ""}`}>
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path d="M3 3h13v13H3zM20 3h13v30H20zM3 20h13v13H3z" fill="currentColor" />
        <path d="M8 9h3v16h5v3H8z" fill="#fff" />
        <path d="m24 10 4 4-4 4v-3h-2v-2h2z" fill="#fff" />
      </svg>
      <span><strong>처음 만드는</strong><b>AI 웹사이트</b></span>
    </span>
  );
}
