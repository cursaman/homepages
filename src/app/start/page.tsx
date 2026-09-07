import Roadmap from "@/components/Roadmap";

export default function StartPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">START</p>
        <h1>생각 → 기획 → 만들기 → 확인 → 저장 → 배포</h1>
        <p className="lead">처음부터 모든 기술을 알 필요는 없습니다. 아래 10단계를 순서대로 경험해보세요.</p>
        <Roadmap />
      </div>
    </section>
  );
}
