# Blog GitHub 프로젝트 분석

## 프로젝트 개요

Next.js 16 기반의 개인 블로그/포트폴리오 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 16.0.10 (App Router)
- **React**: 19.2.1
- **Styling**: Tailwind CSS 4.0.0-alpha.13
- **Font**: Geist (Sans, Mono)
- **Content**: MDX (next-mdx-remote)
- **Syntax Highlighting**: sugar-high
- **Analytics**: Vercel Analytics, Speed Insights
- **Language**: TypeScript 5

## 프로젝트 구조

```
app/
├── blog/
│   ├── [slug]/
│   │   └── page.tsx      # 블로그 상세 페이지 (동적 라우트)
│   ├── posts/            # MDX 블로그 포스트 저장소
│   │   ├── spaces-vs-tabs.mdx
│   │   ├── vim.mdx
│   │   └── static-typing.mdx
│   ├── page.tsx          # 블로그 목록 페이지
│   └── utils.ts          # 블로그 유틸리티 함수
├── components/
│   ├── nav.tsx           # 네비게이션 컴포넌트
│   ├── mdx.tsx           # MDX 렌더링 컴포넌트
│   ├── footer.tsx        # 푸터 컴포넌트
│   └── posts.tsx         # 포스트 목록 컴포넌트
├── og/
│   └── route.tsx         # OpenGraph 이미지 생성
├── rss/
│   └── route.ts          # RSS 피드 생성
├── layout.tsx            # 루트 레이아웃
├── page.tsx              # 홈페이지
├── sitemap.ts            # 사이트맵 생성
├── robots.ts             # robots.txt 생성
└── not-found.tsx         # 404 페이지
```

## 주요 기능

### 블로그 시스템
- MDX 파일 기반 블로그 포스트
- Frontmatter 메타데이터 지원 (title, publishedAt, summary, image)
- 동적 라우팅으로 slug 기반 포스트 접근

### SEO
- 동적 메타데이터 생성
- OpenGraph 이미지 자동 생성
- 사이트맵 및 robots.txt 자동 생성
- JSON-LD 구조화 데이터

## 주의사항

### Next.js 15+ params 변경사항

Next.js 15부터 동적 라우트의 `params`가 **Promise**로 변경되었습니다.

**잘못된 방식 (Next.js 14 이하)**:
```tsx
export default function Page({ params }) {
  const slug = params.slug // Error!
}
```

**올바른 방식 (Next.js 15+)**:
```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
}
```

## 개발 명령어

```bash
pnpm dev      # 개발 서버 실행
pnpm build    # 프로덕션 빌드
pnpm start    # 프로덕션 서버 실행
```

## 블로그 포스트 작성법

`app/blog/posts/` 디렉토리에 `.mdx` 파일 생성:

```mdx
---
title: '포스트 제목'
publishedAt: '2025-01-29'
summary: '포스트 요약'
image: '/optional-image.png'
---

포스트 내용...
```
