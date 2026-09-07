import Roadmap from "@/components/Roadmap";
import Link from "next/link";
import SubpageMotion from "@/components/SubpageMotion";

export default function StartPage() {
  return (
    <SubpageMotion>
      <main className="subpage subpage-start">
        <header className="subpage-hero">
          <div className="portfolio-shell">
            <div className="subpage-title-line"><span>생각에서 배포까지,</span></div>
            <div className="subpage-title-line subpage-title-accent"><span>열 번의 작은 완성.</span></div>
            <p>처음부터 모든 기술을 알 필요는 없습니다.<br />아래 10단계를 순서대로 경험해보세요.</p>
          </div>
        </header>
        <section className="subpage-content subpage-dark">
          <div className="portfolio-shell subpage-reveal"><Roadmap /></div>
        </section>
        <section className="subpage-next"><div className="portfolio-shell"><h2>첫 번째 아이디어부터<br />시작해볼까요?</h2><Link href="/steps/1" className="learning-button learning-button--dark">STEP 01 시작하기</Link></div></section>
      </main>
    </SubpageMotion>
  );
}
