import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>처음 만드는 AI 웹사이트</strong>
          <p>아이디어부터 배포까지, 한 단계씩 완성합니다.</p>
        </div>

        <div className="footer-links">
          <Link href="/start">10 STEP</Link>
          <Link href="/projects">실습</Link>
          <Link href="/prompts">프롬프트</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        <small>© 2026 AI Web Learning</small>
      </div>
    </footer>
  );
}
