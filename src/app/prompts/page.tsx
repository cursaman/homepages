const promptGroups = [
  ["기획", "내가 만들려는 사이트의 목적, 사용자, 핵심 기능, 제외 기능을 PROJECT.md 형식으로 정리해줘."],
  ["디자인", "성인 초보자가 읽기 쉬운 디자인 시스템을 DESIGN.md 형식으로 만들어줘."],
  ["Codex", "AGENTS.md를 먼저 확인하고 요청한 작업만 구현해줘. 완료 후 npm run build를 확인해줘."],
  ["오류수정", "아래 오류의 원인을 설명하고 관련 파일만 최소 범위로 수정해줘."],
  ["Git", "현재 변경사항을 잃지 않는 방향으로 Git 오류 원인과 해결 순서를 알려줘."],
  ["배포", "Vercel 배포 오류의 원인을 확인하고 로컬 build가 성공하도록 최소 범위로 수정해줘."]
];

export default function PromptsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">PROMPTS</p>
        <h1>상황별 기본 프롬프트</h1>
        <div className="stack">
          {promptGroups.map(([title, content]) => (
            <article className="card" key={title}>
              <h2>{title}</h2>
              <p>{content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
