import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="portfolio-shell center">
        <p className="not-found-number">404</p>
        <h1>해당 페이지를 찾을 수 없습니다.</h1>
        <p className="lead">주소를 다시 확인하거나 10 STEP에서 원하는 단계로 이동해주세요.</p>
        <div className="learning-actions not-found-actions">
          <Link href="/start" className="learning-button learning-button--dark">10 STEP 보기</Link>
          <Link href="/" className="learning-button learning-button--light">HOME으로</Link>
        </div>
      </div>
    </section>
  );
}
