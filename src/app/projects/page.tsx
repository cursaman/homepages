const projects = [
  ["골프 기록", "라운딩 기록과 사진을 정리하는 개인 사이트"],
  ["여행 앨범", "여행지별 사진과 메모를 모으는 사이트"],
  ["사진 포트폴리오", "내가 만든 사진 작업을 보여주는 사이트"],
  ["요리 기록", "내 레시피와 요리 사진을 정리하는 사이트"],
  ["소상공인 소개", "가게와 서비스를 소개하는 사이트"],
  ["나의 일상", "하루 기록을 모으는 개인 일기 사이트"]
];
import Link from "next/link";
import SubpageMotion from "@/components/SubpageMotion";

export default function ProjectsPage() {
  return (
    <SubpageMotion>
      <main className="subpage subpage-projects">
        <header className="subpage-hero"><div className="portfolio-shell"><div className="subpage-title-line"><span>좋아하는 주제가</span></div><div className="subpage-title-line subpage-title-accent"><span>첫 프로젝트가 됩니다.</span></div><p>잘 아는 관심사에서 시작하면 무엇을 만들지 더 선명하게 설명할 수 있습니다.</p></div></header>
        <section className="subpage-content"><div className="portfolio-shell project-topic-grid subpage-reveal">
          {projects.map(([title, desc], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{desc}</p></article>)}
        </div></section>
        <section className="subpage-next subpage-next-red"><div className="portfolio-shell"><h2>주제를 골랐다면<br />이제 한 문장으로.</h2><Link href="/steps/1" className="learning-button learning-button--white">아이디어 정리하기</Link></div></section>
      </main>
    </SubpageMotion>
  );
}
