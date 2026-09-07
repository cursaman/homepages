"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeProgress from "@/components/HomeProgress";
import Roadmap from "@/components/Roadmap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const examples = ["골프 기록", "여행 앨범", "사진 포트폴리오", "요리 기록", "소상공인 소개", "나의 일상"];

export default function LearningHome() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".learning-hero-line > span", {
      yPercent: 110,
      duration: 1.05,
      stagger: 0.1,
      ease: "power4.out",
    });
    gsap.from(".learning-hero-visual", {
      opacity: 0,
      scale: 0.88,
      duration: 1.1,
      delay: 0.2,
      ease: "power3.out",
    });
    gsap.utils.toArray<HTMLElement>(".learning-reveal").forEach((item) => {
      gsap.from(item, {
        y: 42,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 86%", once: true },
      });
    });
  }, { scope });

  return (
    <main className="learning-home" ref={scope}>
      <section className="learning-hero" id="top">
        <div className="portfolio-shell learning-hero-stage">
          <div className="learning-hero-copy">
            <div className="learning-hero-line"><span>처음 만드는</span></div>
            <div className="learning-hero-line learning-hero-line--accent"><span>AI 웹사이트</span></div>
            <p>코딩부터 시작하지 않습니다.<br />아이디어부터 인터넷 배포까지 10단계로 직접 경험합니다.</p>
            <div className="learning-actions">
              <Link href="/steps/1" className="learning-button learning-button--dark">STEP 01 시작하기</Link>
              <Link href="/start" className="learning-button learning-button--light">전체 과정 보기</Link>
            </div>
            <small>코딩 경험이 없어도 시작할 수 있습니다.</small>
          </div>

          <div className="learning-hero-visual" aria-hidden="true">
            <div className="learning-window">
              <div className="learning-window-bar"><i /><i /><i /></div>
              <div className="learning-window-copy">MY FIRST<br />WEBSITE</div>
              <div className="learning-window-flow"><span>아이디어</span><span>기획</span><span>개발</span><span>배포</span></div>
            </div>
            <div className="learning-character">
              <Image src="/images/character-cool.png" alt="" fill priority loading="eager" sizes="(max-width: 767px) 58vw, 26vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="learning-progress-section">
        <div className="portfolio-shell learning-progress-grid learning-reveal">
          <div><p className="learning-kicker">이어가는 배움</p><h2>오늘도 한 단계만.</h2></div>
          <HomeProgress />
        </div>
      </section>

      <section className="learning-chapter learning-why">
        <div className="portfolio-shell">
          <div className="learning-heading-row learning-reveal">
            <h2>막막함을<br />작은 행동으로.</h2>
            <p>처음 만드는 사람에게 필요한 건<br />더 많은 이론이 아니라 정확한 다음 단계입니다.</p>
          </div>
          <div className="learning-bento learning-reveal">
            <article><strong>무엇부터 해야 할지 모르겠어요.</strong><p>첫 행동부터 순서대로 안내합니다.</p></article>
            <article><strong>코딩이 어려워 보여요.</strong><p>기술보다 결과 경험을 먼저 만듭니다.</p></article>
            <article><strong>인터넷에 어떻게 올리죠?</strong><p>GitHub와 Vercel까지 끝까지 경험합니다.</p></article>
          </div>
        </div>
      </section>

      <section className="learning-chapter learning-roadmap">
        <div className="portfolio-shell">
          <div className="learning-heading-row learning-reveal">
            <h2>첫 웹사이트가<br />만들어지는 10 STEP</h2>
            <p>아이디어부터 배포까지,<br />완성의 흐름을 놓치지 않습니다.</p>
          </div>
          <div className="learning-reveal"><Roadmap /></div>
        </div>
      </section>

      <section className="learning-chapter learning-projects">
        <div className="portfolio-shell">
          <div className="learning-heading-row learning-reveal">
            <h2>좋아하는 것으로<br />시작하세요.</h2>
            <p>거창한 아이디어보다<br />내가 잘 아는 관심사가 좋습니다.</p>
          </div>
          <div className="learning-example-grid learning-reveal">
            {examples.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-method">
        <div className="portfolio-shell learning-reveal">
          <p>직접 해보며 이해하는 방식</p>
          <div className="learning-method-flow"><span>설명</span><span>예제</span><span>실습</span><span>결과</span></div>
          <p>긴 이론보다 직접 해보면서 이해하도록 구성했습니다.</p>
        </div>
      </section>

      <section className="learning-final">
        <div className="learning-marquee" aria-hidden="true"><span>IDEA TO LIVE · IDEA TO LIVE ·&nbsp;</span><span>IDEA TO LIVE · IDEA TO LIVE ·&nbsp;</span></div>
        <div className="portfolio-shell learning-final-inner">
          <p>아이디어 하나면 충분합니다.</p>
          <h2>배우고, 만들고,<br />세상에 공개하세요.</h2>
          <p>10단계를 마치면 다른 사람에게 보여줄 수 있는 실제 웹사이트 주소가 남습니다.</p>
          <Link href="/steps/1" className="learning-button learning-button--white">첫 웹사이트 시작하기</Link>
        </div>
      </section>
    </main>
  );
}
