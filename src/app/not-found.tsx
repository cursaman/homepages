import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow center">
        <p className="eyebrow">404</p>
        <h1>해당 페이지를 찾을 수 없습니다.</h1>
        <p className="lead">주소를 다시 확인하거나 10 STEP에서 원하는 단계로 이동해주세요.</p>
        <div className="hero-actions">
          <Link href="/start" className="button button-primary">10 STEP 보기</Link>
          <Link href="/" className="button button-secondary">HOME으로</Link>
        </div>
      </div>
    </section>
  );
}
