import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "highlight.js/styles/monokai.css";
import hljs from "highlight.js";
import mermaid from "mermaid";

// Reveal.js 초기화
const deck = new Reveal({
  hash: true,
  slideNumber: true,
  controlsBackArrows: "faded",
  progress: true,
  keyboard: true,
  overview: true,
  center: true,
  transition: "slide",
  navigationMode: "linear",
});

// Mermaid 초기화 설정
mermaid.initialize({
  startOnLoad: false, // 자동 시작 비활성화
  theme: "dark",
});

// Highlight.js 초기화
hljs.highlightAll();

// 생성된 ID를 추적하기 위한 Set
const usedIds = new Set<string>();

// 고유 ID 생성 함수
function generateUniqueId(): string {
  let id: string;
  do {
    id = `mermaid-${Math.random().toString(36).slice(2, 11)}`;
  } while (usedIds.has(id));
  usedIds.add(id);
  return id;
}

// Reveal.js 시작 및 준비 완료 처리
deck.initialize().then(async () => {
  // mermaid 다이어그램 수동 렌더링
  const mermaidDiagrams = document.querySelectorAll(".mermaid");
  await Promise.all(
    Array.from(mermaidDiagrams).map(async (element) => {
      try {
        const id = generateUniqueId();
        const { svg } = await mermaid.render(id, element.textContent || "");
        element.innerHTML = svg;
      } catch (error) {
        console.error("Mermaid 렌더링 실패:", error);
      }
    })
  );

  // 모든 다이어그램이 렌더링된 후 ready 클래스 추가
  document.querySelector(".reveal")?.classList.add("ready");
});
