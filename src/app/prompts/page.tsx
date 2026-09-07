const promptGroups = [
  ["기획", "내가 만들려는 사이트의 목적, 사용자, 핵심 기능, 제외 기능을 PROJECT.md 형식으로 정리해줘."],
  ["디자인", "성인 초보자가 읽기 쉬운 디자인 시스템을 DESIGN.md 형식으로 만들어줘."],
  ["Codex", "AGENTS.md를 먼저 확인하고 요청한 작업만 구현해줘. 완료 후 npm run build를 확인해줘."],
  ["오류수정", "아래 오류의 원인을 설명하고 관련 파일만 최소 범위로 수정해줘."],
  ["Git", "현재 변경사항을 잃지 않는 방향으로 Git 오류 원인과 해결 순서를 알려줘."],
  ["배포", "Vercel 배포 오류의 원인을 확인하고 로컬 build가 성공하도록 최소 범위로 수정해줘."]
];
import Link from "next/link";
import SubpageMotion from "@/components/SubpageMotion";

export default function PromptsPage() {
  return (
    <SubpageMotion>
      <main className="subpage subpage-prompts">
        <header className="subpage-hero"><div className="portfolio-shell"><div className="subpage-title-line"><span>막힐 때 바로 쓰는</span></div><div className="subpage-title-line subpage-title-accent"><span>상황별 프롬프트.</span></div><p>목적에 맞는 문장으로 AI와 더 정확하게 대화해보세요.</p></div></header>
        <section className="subpage-content"><div className="portfolio-shell prompt-accordion subpage-reveal">
          {promptGroups.map(([title, content], index) => <article key={title}><div><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2></div><p>{content}</p></article>)}
        </div></section>
        <section className="subpage-next"><div className="portfolio-shell"><h2>문장을 골랐다면<br />직접 사용해보세요.</h2><Link href="/start" className="learning-button learning-button--dark">10 STEP 보기</Link></div></section>
      </main>
    </SubpageMotion>
  );
}
