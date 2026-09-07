export type StepPrompt = {
  tool: "CHAT" | "WORK" | "CODEX";
  title: string;
  content: string;
};

export type Step = {
  id: number;
  title: string;
  shortDescription: string;
  what: string;
  why: string;
  beginnerTip: {
    term: string;
    description: string;
  };
  example: string;
  prompts: StepPrompt[];
  practice: string[];
  result: string;
};

export const steps: Step[] = [
  {
    id: 1,
    title: "아이디어",
    shortDescription: "뭘 만들지 정해요.",
    what: "내가 관심 있는 주제에서 만들고 싶은 웹사이트를 하나 정합니다.",
    why: "주제가 명확해야 AI에게 무엇을 만들어야 하는지 정확하게 설명할 수 있습니다.",
    beginnerTip: {
      term: "아이디어",
      description: "거창한 사업 아이템이 아니라 내가 좋아하거나 필요한 것에서 시작하면 됩니다."
    },
    example: "골프를 좋아한다 → 나의 골프 기록 홈페이지",
    prompts: [
      {
        tool: "CHAT",
        title: "아이디어 찾기",
        content: "나는 골프에 관심이 있어. 초보자가 만들기 좋은 웹사이트 아이디어 5개를 추천해줘."
      }
    ],
    practice: ["내가 좋아하는 것 3개 적기", "사이트 주제 하나 선택하기", "누가 사용할지 생각하기", "한 문장으로 설명하기"],
    result: "나는 ______ 홈페이지를 만들겠습니다."
  },
  {
    id: 2,
    title: "기획",
    shortDescription: "왜 만드는지 정해요.",
    what: "사이트 목적, 사용자, 핵심 기능을 간단하게 문서로 정리합니다.",
    why: "기획이 있어야 AI가 중간에 방향을 잃지 않습니다.",
    beginnerTip: {
      term: "PROJECT.md",
      description: "무엇을 만들고 왜 만드는지 적어두는 프로젝트 설명서입니다."
    },
    example: "골프 기록을 쉽게 남기고 다시 볼 수 있는 개인 기록 사이트",
    prompts: [
      {
        tool: "WORK",
        title: "PROJECT.md 만들기",
        content: "나의 골프 기록 사이트를 만들려고 해. 목적, 사용자, 핵심 기능, 제외 기능을 PROJECT.md 형식으로 정리해줘."
      }
    ],
    practice: ["사이트 목적 정하기", "사용자 정하기", "핵심 기능 3개 정하기", "제외 기능 정하기"],
    result: "PROJECT.md"
  },
  {
    id: 3,
    title: "레퍼런스",
    shortDescription: "좋은 사이트를 찾아요.",
    what: "비슷한 분위기나 구조를 가진 사이트 2~3개를 찾아 참고합니다.",
    why: "말로만 설명하는 것보다 실제 예시가 있으면 디자인 방향을 잡기 쉽습니다.",
    beginnerTip: {
      term: "레퍼런스",
      description: "그대로 복사하는 대상이 아니라 좋은 부분을 참고하기 위한 자료입니다."
    },
    example: "골프장 사이트, 스포츠 기록 앱, 개인 포트폴리오에서 원하는 구성 참고",
    prompts: [
      {
        tool: "CHAT",
        title: "레퍼런스 분석",
        content: "내가 참고한 사이트 3개의 공통점과 가져오면 좋은 UI 요소를 초보자 관점에서 정리해줘."
      }
    ],
    practice: ["참고 사이트 2~3개 찾기", "좋은 점 적기", "따라 하지 않을 점 적기"],
    result: "레퍼런스 2~3개와 참고 포인트"
  },
  {
    id: 4,
    title: "화면설계",
    shortDescription: "필요한 화면을 정해요.",
    what: "사이트 메뉴와 사용자가 이동하는 흐름을 정합니다.",
    why: "화면 구조가 정해져야 개발 중에 페이지가 계속 늘어나지 않습니다.",
    beginnerTip: {
      term: "사이트맵",
      description: "사이트에 어떤 페이지가 있고 서로 어떻게 연결되는지 보여주는 지도입니다."
    },
    example: "HOME / 라운딩 기록 / 골프장 / 사진",
    prompts: [
      {
        tool: "WORK",
        title: "사이트맵 만들기",
        content: "골프 기록 사이트의 사이트맵과 HOME에서 각 페이지로 이동하는 사용자 흐름을 만들어줘."
      }
    ],
    practice: ["메뉴 정하기", "필요한 페이지 정하기", "HOME에서의 이동 흐름 그리기"],
    result: "사이트맵 + 사용자 흐름"
  },
  {
    id: 5,
    title: "디자인",
    shortDescription: "어떻게 보일지 정해요.",
    what: "색상, 글꼴, 버튼, 카드, 여백, 반응형 규칙을 정합니다.",
    why: "디자인 규칙이 없으면 AI가 페이지마다 서로 다른 스타일을 만들 수 있습니다.",
    beginnerTip: {
      term: "디자인 시스템",
      description: "사이트 전체에서 반복해서 사용하는 색상, 글자, 버튼 등의 공통 규칙입니다."
    },
    example: "파란색 포인트, 흰색 카드, 큰 제목, 넉넉한 여백",
    prompts: [
      {
        tool: "WORK",
        title: "DESIGN.md 만들기",
        content: "성인 초보자용 교육 사이트에 맞는 색상, 글꼴, 버튼, 카드, 반응형 기준을 DESIGN.md로 정리해줘."
      }
    ],
    practice: ["대표 색상 정하기", "글자 크기 정하기", "버튼 규칙 정하기", "모바일 기준 정하기"],
    result: "DESIGN.md"
  },
  {
    id: 6,
    title: "개발준비",
    shortDescription: "AI 작업규칙을 정해요.",
    what: "Codex가 프로젝트에서 지켜야 할 작업 규칙을 작성합니다.",
    why: "작업 범위를 정해두면 작은 수정 때문에 전체 프로젝트가 흔들리는 일을 줄일 수 있습니다.",
    beginnerTip: {
      term: "AGENTS.md",
      description: "AI 개발자에게 주는 프로젝트 작업 설명서라고 생각하면 됩니다."
    },
    example: "요청 범위만 수정, 불필요한 리팩터링 금지, build 확인",
    prompts: [
      {
        tool: "WORK",
        title: "AGENTS.md 만들기",
        content: "이 프로젝트에서 Codex가 지켜야 할 작업 범위, 금지사항, build 확인 규칙을 AGENTS.md로 작성해줘."
      }
    ],
    practice: ["수정 범위 규칙 정하기", "금지사항 정하기", "완료 조건 정하기"],
    result: "AGENTS.md"
  },
  {
    id: 7,
    title: "AI 개발",
    shortDescription: "하나씩 만들어봐요.",
    what: "작은 작업 단위로 나누어 Codex에게 구현을 요청합니다.",
    why: "한 번에 전체 사이트를 요청하면 오류가 났을 때 원인을 찾기 어렵습니다.",
    beginnerTip: {
      term: "작은 TASK",
      description: "Header 하나, Hero 하나처럼 한 번에 확인 가능한 크기의 작업입니다."
    },
    example: "Header → HOME Hero → Roadmap → STEP Template 순서로 구현",
    prompts: [
      {
        tool: "CODEX",
        title: "작은 단위 개발",
        content: "AGENTS.md와 DESIGN.md를 확인하고 Header만 구현해줘. 다른 페이지는 수정하지 말고 완료 후 npm run build로 확인해줘."
      }
    ],
    practice: ["작업 하나 정하기", "Codex 요청 작성하기", "브라우저에서 확인하기", "build 실행하기"],
    result: "실행 가능한 웹사이트"
  },
  {
    id: 8,
    title: "테스트",
    shortDescription: "제대로 되는지 확인해요.",
    what: "PC와 모바일에서 사이트를 직접 사용하면서 문제를 찾습니다.",
    why: "코드가 작성됐다고 사이트가 완성된 것은 아닙니다.",
    beginnerTip: {
      term: "QA",
      description: "사이트가 정상 동작하고 사용하기 편한지 확인하는 과정입니다."
    },
    example: "메뉴, 버튼, 새로고침, 모바일, 긴 글자, 404 확인",
    prompts: [
      {
        tool: "CODEX",
        title: "오류 수정",
        content: "아래 오류의 원인을 확인하고 관련 파일만 최소 범위로 수정해줘. 수정 후 기존 기능과 npm run build를 확인해줘."
      }
    ],
    practice: ["PC 확인", "모바일 확인", "새로고침 확인", "잘못된 주소 확인"],
    result: "QA 완료"
  },
  {
    id: 9,
    title: "Git/GitHub",
    shortDescription: "정상 상태를 저장해요.",
    what: "작업한 프로젝트를 Git으로 기록하고 GitHub에 올립니다.",
    why: "문제가 생겼을 때 이전 정상 상태를 확인하고 프로젝트를 온라인에서 관리할 수 있습니다.",
    beginnerTip: {
      term: "Git",
      description: "처음에는 게임의 세이브 포인트처럼 생각하면 쉽습니다."
    },
    example: "git add . → git commit → git push",
    prompts: [
      {
        tool: "CHAT",
        title: "Git 오류 확인",
        content: "git push 중 오류가 발생했어. 현재 변경사항을 잃지 않는 방향으로 원인과 확인 순서를 알려줘. 강제 push는 사용하지 마."
      }
    ],
    practice: ["git status 확인", "commit 만들기", "GitHub 저장소 연결", "push 확인"],
    result: "GitHub Repository"
  },
  {
    id: 10,
    title: "Vercel 배포",
    shortDescription: "인터넷에 공개해요.",
    what: "GitHub 저장소를 Vercel에 연결해 실제 인터넷 주소를 만듭니다.",
    why: "로컬에서만 보이는 사이트를 다른 사람도 접속할 수 있는 실제 웹사이트로 바꾸는 단계입니다.",
    beginnerTip: {
      term: "배포",
      description: "내 컴퓨터에서 만든 사이트를 인터넷에서 접속할 수 있게 올리는 과정입니다."
    },
    example: "GitHub → Vercel Import → Deploy → 실제 URL 확인",
    prompts: [
      {
        tool: "CHAT",
        title: "배포 오류 확인",
        content: "Vercel 배포 중 아래 오류가 발생했어. 원인을 설명하고 관련 파일만 최소 범위로 수정하는 방법을 알려줘."
      }
    ],
    practice: ["GitHub 최신 상태 확인", "Vercel Import", "Deploy", "실제 URL과 새로고침 확인"],
    result: "실제 웹사이트 URL"
  }
];

export const getStepById = (id: number) => steps.find((step) => step.id === id);
