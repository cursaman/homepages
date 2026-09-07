const faqs = [
  ["코딩을 몰라도 시작할 수 있나요?", "네. 이 과정은 전체 제작 흐름을 먼저 경험하는 것을 목표로 합니다."],
  ["Chat과 Codex는 어떻게 나누나요?", "Chat은 생각과 질문, Codex는 실제 코드 작업에 사용합니다."],
  ["Git은 왜 필요한가요?", "프로젝트의 정상 상태를 기록하고 이전 상태를 확인하기 위해 사용합니다."],
  ["GitHub는 왜 필요한가요?", "프로젝트를 온라인에서 보관하고 Vercel과 연결하기 위해 사용합니다."],
  ["localStorage는 DB인가요?", "아닙니다. 현재 브라우저에만 저장되는 간단한 저장공간입니다."],
  ["새로고침하면 기록이 사라지나요?", "이 사이트의 학습 진행상황은 localStorage에 저장되므로 같은 브라우저에서는 유지됩니다."],
  ["다른 PC에서도 이어지나요?", "로그인과 DB가 없는 V1에서는 기기 간 동기화되지 않습니다."],
  ["Vercel은 무엇인가요?", "GitHub의 프로젝트를 실제 인터넷 주소로 배포해주는 서비스입니다."]
];

export default function FaqPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">FAQ</p>
        <h1>자주 묻는 질문</h1>
        <div className="stack">
          {faqs.map(([q, a]) => (
            <article className="card" key={q}>
              <h2>{q}</h2>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
