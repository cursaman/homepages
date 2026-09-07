const projects = [
  ["골프 기록", "라운딩 기록과 사진을 정리하는 개인 사이트"],
  ["여행 앨범", "여행지별 사진과 메모를 모으는 사이트"],
  ["사진 포트폴리오", "내가 만든 사진 작업을 보여주는 사이트"],
  ["요리 기록", "내 레시피와 요리 사진을 정리하는 사이트"],
  ["소상공인 소개", "가게와 서비스를 소개하는 사이트"],
  ["나의 일상", "하루 기록을 모으는 개인 일기 사이트"]
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">PRACTICE PROJECTS</p>
        <h1>좋아하는 주제로 시작하세요.</h1>
        <div className="three-grid">
          {projects.map(([title, desc]) => (
            <article className="card" key={title}>
              <h2>{title}</h2>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
