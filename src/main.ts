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
});

// Reveal.js 시작 및 준비 완료 처리
deck.initialize().then(() => {
  // reveal 컨테이너에 ready 클래스 추가
  document.querySelector(".reveal")?.classList.add("ready");

  // Highlight.js 초기화
  hljs.highlightAll();

  // Mermaid 초기화
  mermaid.initialize({
    startOnLoad: true,
    theme: "dark",
  });
});
