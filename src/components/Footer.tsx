import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="site-footer learning-footer">
      <div className="portfolio-shell footer-inner">
        <BrandLogo compact />
        <p>아이디어부터 배포까지,<br />한 단계씩 완성합니다.</p>
        <div className="footer-links">
          <Link href="/start">10 STEP</Link>
          <Link href="/projects">실습</Link>
          <Link href="/prompts">프롬프트</Link>
          <Link href="/faq">FAQ</Link>
          <a href="#top">Back to top</a>
        </div>
        <small>© 2026 AI Web Learning</small>
      </div>
    </footer>
  );
}
