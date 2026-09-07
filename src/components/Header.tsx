"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header portfolio-header">
      <div className="portfolio-shell header-inner">
        <Link href="/#top" className="brand" onClick={close}>
          LEE / CHARACTER
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
          <Link href="/#work" onClick={close}>Work</Link>
          <Link href="/#about" onClick={close}>About</Link>
          <Link href="/#contact" className="nav-contact" onClick={close}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
