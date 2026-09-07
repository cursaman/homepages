"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SubpageMotion({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".subpage-title-line > span", {
      yPercent: 110,
      duration: 1,
      stagger: 0.08,
      ease: "power4.out",
    });

    gsap.utils.toArray<HTMLElement>(".subpage-reveal").forEach((item) => {
      gsap.from(item, {
        y: 34,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 88%", once: true },
      });
    });
  }, { scope });

  return <div ref={scope}>{children}</div>;
}
