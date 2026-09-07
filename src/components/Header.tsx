"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header learning-header">
      <div className="portfolio-shell header-inner">
        <Link href="/" className="brand" onClick={close}>
          처음 만드는 AI 웹사이트
        </Link>

        <button
          className="menu-button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav className={`main-nav ${open ? "open" : ""}`} aria-label="주 메뉴">
          <Link href="/start" onClick={close}>10 STEP</Link>
          <Link href="/projects" onClick={close}>실습</Link>
          <Link href="/prompts" onClick={close}>프롬프트</Link>
          <Link href="/faq" onClick={close}>FAQ</Link>
          <Link href="/steps/1" className="learning-nav-cta" onClick={close}>시작하기</Link>
        </nav>
      </div>
    </header>
  );
}
