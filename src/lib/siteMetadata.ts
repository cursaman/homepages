import type { Metadata } from "next";

export const SITE_NAME = "처음 만드는 AI 웹사이트";
export const SITE_URL = "https://cursaman.github.io/homepages";
export const SITE_DESCRIPTION = "아이디어부터 배포까지 10단계로 경험하는 초보자용 AI 웹사이트 교육";
export const SHARE_IMAGE = `${SITE_URL}/images/teacher.png`;

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ko_KR",
      type: "website",
      images: [{ url: SHARE_IMAGE, width: 1536, height: 1024, alt: SITE_NAME }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SHARE_IMAGE]
    }
  };
}
