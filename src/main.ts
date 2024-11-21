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
  transitionSpeed: "default",
});

// Reveal.js 시작
deck.initialize();

// Highlight.js 초기화
hljs.highlightAll();

// Mermaid 초기화
mermaid.initialize({
  startOnLoad: true,
  theme: "dark",
});
