import Link from "next/link";
import Roadmap from "@/components/Roadmap";
import HomeProgress from "@/components/HomeProgress";

const examples = ["골프 기록", "여행 앨범", "사진 포트폴리오", "요리 기록", "소상공인 소개", "나의 일상"];

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">AI × WEB × BEGINNER</p>
            <h1>처음 만드는<br />AI 웹사이트</h1>
            <p className="hero-copy">
              코딩부터 시작하지 않습니다.<br />
              아이디어부터 인터넷 배포까지 10단계로 직접 경험합니다.
            </p>
            <div className="hero-actions">
              <Link href="/steps/1" className="button button-primary">STEP 01 시작하기</Link>
              <Link href="/start" className="button button-secondary">전체 과정 보기</Link>
            </div>
            <p className="muted">코딩 경험이 없어도 시작할 수 있습니다.</p>
          </div>

          <div className="hero-visual card">
            <span>아이디어</span><span>→</span><span>기획</span><span>→</span><span>개발</span><span>→</span><span>배포</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <HomeProgress />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">WHY</p>
          <h2>왜 10단계로 나눴을까요?</h2>
          <div className="three-grid">
            <article className="card"><h3>무엇부터 해야 할지 모르겠어요.</h3><p>첫 행동부터 순서대로 안내합니다.</p></article>
            <article className="card"><h3>코딩이 어려워 보여요.</h3><p>기술보다 결과 경험을 먼저 만듭니다.</p></article>
            <article className="card"><h3>인터넷에 어떻게 올리죠?</h3><p>GitHub와 Vercel까지 끝까지 경험합니다.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">ROADMAP</p>
          <h2>첫 웹사이트가 만들어지는 10 STEP</h2>
          <Roadmap />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">PROJECT</p>
          <h2>좋아하는 것으로 시작하세요.</h2>
          <div className="example-grid">
            {examples.map((item) => <div className="card example-card" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow center">
          <p className="eyebrow">HOW TO LEARN</p>
          <h2>설명 → 예제 → 실습 → 결과</h2>
          <p className="lead">긴 이론보다 직접 해보면서 이해하는 방식으로 구성했습니다.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container center">
          <p className="eyebrow">RESULT</p>
          <h2>아이디어 하나면 충분합니다.</h2>
          <p className="lead">10단계를 마치면 다른 사람에게 보여줄 수 있는 실제 웹사이트 주소가 남습니다.</p>
          <Link href="/steps/1" className="button button-light">첫 웹사이트 시작하기</Link>
        </div>
      </section>
    </>
  );
}
