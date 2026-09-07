"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  { title: "Tiny Rebel", note: "Character direction · 2026", image: "/images/character-cool.png", className: "project-card project-card--cool" },
  { title: "Love Signal", note: "Expression study · 2026", image: "/images/character-heart.jpg", className: "project-card project-card--heart" },
  { title: "Little Attitude", note: "Visual story · 2026", image: "/images/character-wink.jpg", className: "project-card project-card--wink" },
  { title: "Soft, Loud, Alive", note: "A living character archive", className: "project-card project-card--type" },
];

export default function PortfolioHome() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".hero-line > span", { yPercent: 110, duration: 1.15, stagger: 0.12, ease: "power4.out" });
    gsap.from(".hero-character", { scale: 0.82, opacity: 0, rotate: 3, duration: 1.25, delay: 0.28, ease: "power3.out" });

    gsap.utils.toArray<HTMLElement>(".project-media").forEach((item) => {
      gsap.fromTo(item, { scale: 0.86, opacity: 0.35 }, {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: item, start: "top 90%", end: "center 48%", scrub: 0.7 },
      });
    });

    gsap.fromTo(".manifesto-word", { opacity: 0.12 }, {
      opacity: 1,
      stagger: 0.08,
      scrollTrigger: { trigger: ".manifesto-copy", start: "top 78%", end: "bottom 52%", scrub: 0.8 },
    });
  }, { scope });

  const manifesto = "작고 익숙한 표정에서 오래 기억되는 성격을 발견합니다".split(" ");

  return (
    <main className="portfolio" ref={scope}>
      <section className="portfolio-hero" id="top">
        <div className="portfolio-shell hero-stage">
          <div className="hero-heading" aria-label="Small face, big character">
            <div className="hero-line"><span>SMALL FACE,</span></div>
            <div className="hero-line hero-line--offset"><span>BIG CHARACTER.</span></div>
          </div>
          <div className="hero-character" aria-hidden="true">
            <Image src="/images/character-cool.png" alt="" fill priority loading="eager" sizes="(max-width: 767px) 76vw, 38vw" />
          </div>
          <div className="hero-intro">
            <p>Character artist<br />based in Seoul</p>
            <a href="#work" className="text-link">Selected work <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="portfolio-section work-section" id="work">
        <div className="portfolio-shell">
          <div className="section-heading-row">
            <h2>Selected characters</h2>
            <p>표정과 태도가 먼저 말을 거는<br />캐릭터를 만듭니다.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={project.className} key={project.title}>
                {project.image ? (
                  <div className="project-media">
                    <Image src={project.image} alt={`${project.title} 캐릭터 작업`} fill sizes="(max-width: 767px) 100vw, 58vw" />
                  </div>
                ) : (
                  <div className="project-phrase" aria-hidden="true"><span>NOT JUST</span><span>CUTE.</span></div>
                )}
                <div className="project-meta">
                  <h3>{project.title}</h3><p>{project.note}</p><span className="project-index">0{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section manifesto-section" id="about">
        <div className="portfolio-shell manifesto-layout">
          <p className="manifesto-kicker">Playful forms. Precise feelings.</p>
          <p className="manifesto-copy">
            {manifesto.map((word) => <span className="manifesto-word" key={word}>{word} </span>)}
          </p>
          <div className="manifesto-image">
            <Image src="/images/character-heart.jpg" alt="손가락 하트를 표현하는 캐릭터" fill sizes="(max-width: 767px) 44vw, 18vw" />
          </div>
        </div>
      </section>

      <section className="portfolio-section process-section">
        <div className="portfolio-shell">
          <h2>From a tiny gesture<br />to a whole personality.</h2>
          <div className="process-accordion">
            <article><span>Observe</span><p>일상의 작고 솔직한 몸짓을 수집합니다.</p></article>
            <article><span>Shape</span><p>실루엣과 표정으로 한눈에 읽히는 성격을 만듭니다.</p></article>
            <article><span>Animate</span><p>장면 속에서 살아 움직이는 태도로 완성합니다.</p></article>
          </div>
        </div>
      </section>

      <section className="portfolio-cta" id="contact">
        <div className="marquee" aria-hidden="true">
          <div>LET&apos;S MAKE A CHARACTER · LET&apos;S MAKE A CHARACTER ·&nbsp;</div>
          <div>LET&apos;S MAKE A CHARACTER · LET&apos;S MAKE A CHARACTER ·&nbsp;</div>
        </div>
        <div className="portfolio-shell cta-inner">
          <p>Have a story in mind?</p>
          <h2>LET&apos;S MAKE IT<br />UNFORGETTABLE.</h2>
          <a href="mailto:hello@character.studio" className="cta-button">Start a project</a>
        </div>
      </section>
    </main>
  );
}
