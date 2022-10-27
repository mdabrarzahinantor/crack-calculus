import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

const Math = ({ equation }) => {
  return (
    <div style={{ fontSize: "1.2rem" }}>
      <MathJaxContext version={3} config={config}>
        <MathJax hideUntilTypeset={"first"}>{equation}</MathJax>
      </MathJaxContext>
    </div>
  );
};

export default Math;
