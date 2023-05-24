import { r as reactExports, t as Recoil_index_20, o as Recoil_index_24, a3 as useToast, j as jsx, b as jsxs, c as FontAwesomeIcon, w as faArrowUp, x as faBackspace, v as betterReactMathjax, s as styled } from "./PageViewer-d914b069.js";
import { T as ToggleButton } from "./ToggleButton-8895d2cd.js";
import { T as ToggleButtonGroup } from "./ToggleButtonGroup-27ddd2ae.js";
import { f as focusedMathField, a as focusedMathFieldReturn, p as palletRef } from "./MathInputSelector-9ebf91fb.js";
const Panel = styled.div`
  height: 240px;
  // position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--canvas);
  color: var(--canvas);
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;
const SubSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  /* flex-basis: 27%; */
  flex-grow: 1;
`;
const ContainerSection = styled.div`
  display: grid;
  flex-direction: row;
  flex-wrap: no-wrap;
  /* flex-basis: 27%; */
  /* flex-grow: 1; */
`;
styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  flex-basis: 19%;
`;
const ToggleButtonSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;
const Section = styled.div`
  height: 160px;
  /* min-width: 100px; */
  /* max-width: 300px; */
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const LettersSection = styled.div`
  height: 150px;
  max-width: 700px;
  flex-basis: 90%;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Button = styled.button`
  flex-basis: 18%;
  height: 30px;
  color: var(--mainBlue);
  border: 2px solid var(--mainBlue);
  background: white;
  border-radius: 5px;
`;
const Button33 = styled.button`
  flex-basis: ${(props) => props.alpha ? "20%" : "28%"};
  height: 30px;
  color: ${(props) => props.alpha || props.transition ? "white" : "var(--mainBlue)"};
  border: 2px solid var(--mainBlue);
  border-radius: 5px;
  background: ${(props) => props.alpha || props.transition ? "var(--mainBlue)" : "white"};
`;
styled.button`
  flex-basis: 24%;
  height: 30px;
  color: var(--mainBlue);
  border: 2px solid var(--mainBlue);
  border-radius: 5px;
  background: white;
`;
const White15Button = styled.button`
  flex-basis: 14%;
  margin: 1px;
  height: 30px;
  background: ${(props) => props.lowercase ? "white" : "var(--mainBlue)"};
  border: ${(props) => props.lowercase ? "2px solid var(--mainBlue)" : "none"};
  color: ${(props) => props.lowercase ? "var(--mainBlue)" : "white"};
  border-radius: 5px;
`;
const CursorButton = styled.button`
  flex-basis: 18%;
  height: 30px;
  background: var(--mainBlue);
  border: none;
  color: white;
  border-radius: 5px;
`;
const DeleteButton = styled.button`
  flex-basis: 18%;
  height: 30px;
  background: var(--mainBlue);
  border: none;
  color: white;
  border-radius: 5px;
`;
const EnterButton = styled.button`
  flex-basis: 18%;
  height: 30px;
  background: var(--mainBlue);
  border: none;
  color: white;
  border-radius: 5px;
`;
const SpaceButton = styled.button`
  flex-basis: 49%;
  margin: 1px;
  height: 30px;
  background: white;
  border: 2px solid var(--mainBlue);
  color: var(--mainBlue);
  border-radius: 5px;
`;
styled.button`
  flex-basis: 19%;
  margin: 1px;
  height: 30px;
  background: var(--mainBlue);
  border: none;
  color: white;
  border-radius: 5px;
`;
const LetterButton = styled.button`
  flex-basis: 9.5%;
  margin: 1px;
  height: 30px;
  color: ${(props) => props.transition ? "white" : "var(--mainBlue)"};
  border: ${(props) => props.transition ? "none" : "2px solid var(--mainBlue)"};
  background: ${(props) => props.transition ? "var(--mainBlue)" : "white"};
  border-radius: 5px;
`;
function VirtualKeyboard() {
  const [toggleLetters, setToggleLetters] = reactExports.useState(false);
  const [toggleABCCase, setToggleABCCase] = reactExports.useState(false);
  const [toggleGreekCase, setToggleGreekCase] = reactExports.useState(false);
  const [toggleFn, setToggleFn] = reactExports.useState(0);
  const [toggleNumpad, setToggleNumpad] = reactExports.useState(0);
  const callback = Recoil_index_20(focusedMathField);
  const returncallback = Recoil_index_20(focusedMathFieldReturn);
  const setPalletRef = Recoil_index_24(palletRef);
  const containerRef = reactExports.useRef(null);
  useToast();
  reactExports.useEffect(() => {
    setPalletRef({ ...containerRef });
    setToggleFn(0);
    setToggleNumpad(0);
  }, [toggleLetters, setPalletRef]);
  const handleToggleLetters = () => {
    setToggleLetters(!toggleLetters);
  };
  const handleToggleABCCase = () => {
    setToggleABCCase(!toggleABCCase);
  };
  const handleToggleGreekCase = () => {
    setToggleGreekCase(!toggleGreekCase);
  };
  const handleFnToggle = (val) => {
    setToggleFn(val);
  };
  let sectionUpperABC = /* @__PURE__ */ jsx(Panel, { tabIndex: "0", ref: containerRef, children: /* @__PURE__ */ jsxs(LettersSection, { children: [
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write Q"), children: "Q" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write W"), children: "W" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write E"), children: "E" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write R"), children: "R" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write T"), children: "T" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write Y"), children: "Y" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write U"), children: "U" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write I"), children: "I" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write O"), children: "O" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write P"), children: "P" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write A"), children: "A" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write S"), children: "S" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write D"), children: "D" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write F"), children: "F" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write G"), children: "G" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write H"), children: "H" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write J"), children: "J" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write K"), children: "K" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write L"), children: "L" }),
    /* @__PURE__ */ jsx(White15Button, { onClick: handleToggleABCCase, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowUp }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write Z"), children: "Z" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write X"), children: "X" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write C"), children: "C" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write V"), children: "V" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write B"), children: "B" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write N"), children: "N" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write M"), children: "M" }),
    /* @__PURE__ */ jsx(White15Button, { onClick: () => callback("keystroke Backspace"), children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBackspace }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write ,"), children: "," }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write '"), children: "'" }),
    /* @__PURE__ */ jsx(SpaceButton, { onClick: () => callback("write \\ "), children: " " }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => callback("keystroke Left"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\leftarrow\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => callback("keystroke Right"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rightarrow\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => returncallback(), children: "Enter" })
  ] }) });
  let sectionLowerABC = /* @__PURE__ */ jsx(Panel, { tabIndex: "0", ref: containerRef, children: /* @__PURE__ */ jsxs(LettersSection, { children: [
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write q"), children: "q" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write w"), children: "w" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write e"), children: "e" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write r"), children: "r" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write t"), children: "t" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write y"), children: "y" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write u"), children: "u" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write i"), children: "i" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write o"), children: "o" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write p"), children: "p" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write a"), children: "a" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write s"), children: "s" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write d"), children: "d" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write f"), children: "f" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write g"), children: "g" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write h"), children: "h" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write j"), children: "j" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write k"), children: "k" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write l"), children: "l" }),
    /* @__PURE__ */ jsx(White15Button, { lowercase: true, onClick: handleToggleABCCase, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowUp }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write z"), children: "z" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write x"), children: "x" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write c"), children: "c" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write v"), children: "v" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write b"), children: "b" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write n"), children: "n" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write m"), children: "m" }),
    /* @__PURE__ */ jsx(White15Button, { onClick: () => callback("keystroke Backspace"), children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBackspace }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write ,"), children: "," }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write '"), children: "'" }),
    /* @__PURE__ */ jsx(SpaceButton, { onClick: () => callback("write \\ "), children: " " }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => callback("keystroke Left"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\leftarrow\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => callback("keystroke Right"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rightarrow\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => returncallback(), children: "Enter" })
  ] }) });
  let sectionSymbols1 = /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd {"), children: `{` }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd }"), children: `}` }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write ,"), children: "," }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write :"), children: ":" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\vert"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\vert\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\subset"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\subset\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\subseteq"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\subseteq\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\neq"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\neq\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\in"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\in\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\infty"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\infty\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd ("), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\((\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd )"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\()\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd ["), children: "[" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd ]"), children: "]" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\emptyset"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\emptyset\\)" }) })
  ] });
  let sectionSymbols2 = /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          callback("write \\vec{}");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\vec{a}\\)` })
      }
    ),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd \\langle"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\langle\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd \\rangle"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\rangle\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\cdot"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\cdot\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\times"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\times\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd \\overline"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\overline{a}\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\perp"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\perp\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\parallel"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\parallel\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\angle"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\angle\\)` }) }),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          callback("write {}^\\circ");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\({a}^\\circ\\)` })
      }
    ),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\exists"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\exists\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\forall"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\forall\\)` }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write %"), children: "%" }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write $"), children: "$" }),
    /* @__PURE__ */ jsx(DeleteButton, { onClick: () => callback("keystroke Backspace"), children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBackspace }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd _"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(a_b\\)" }) }),
    /* @__PURE__ */ jsx(CursorButton, { onClick: () => callback("keystroke Left"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\leftarrow\\)" }) }),
    /* @__PURE__ */ jsx(CursorButton, { onClick: () => callback("keystroke Right"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rightarrow\\)" }) }),
    /* @__PURE__ */ jsx(EnterButton, { onClick: () => returncallback(), children: "Enter" })
  ] });
  let sectionTrig1 = /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("type sin("), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\sin\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("type cos("), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\cos\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("type tan("), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\tan\\)" }) }),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write \\sin^{-1}");
          callback("type (");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\sin^{-1}\\)` })
      }
    ),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write \\cos^{-1}");
          callback("type (");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\cos^{-1}\\)` })
      }
    ),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write \\tan^{-1}");
          callback("type (");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\tan^{-1}\\)` })
      }
    ),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("type ln("), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\ln\\)" }) }),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write \\log_{}");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\log_b\\)" })
      }
    ),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("write \\log_{10}"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\log_{10}\\)` }) }),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write e^{}");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(e^{a}\\)` })
      }
    ),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write 10^{}");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(10^{a}\\)` })
      }
    ),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write \\sqrt[]{}");
          callback("keystroke Left");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\sqrt[b]{a}\\)` })
      }
    )
  ] });
  /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("cmd \\csc"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\csc\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("cmd \\sec"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\sec\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("cmd \\cot"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\cot\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("write \\csc^{-1}"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\csc^{-1}\\)` }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("write \\sec^{-1}"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\sec^{-1}\\)` }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("write \\cot^{-1}"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\cot^{-1}\\)` }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("cmd \\csch"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\csch\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("cmd \\coth"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\coth\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("cmd \\sech"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\sech\\)" }) })
  ] });
  /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => callback("write \\frac{\\partial}{\\partial{x}}"),
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\frac{\\partial}{\\partial x}\\)` })
      }
    ),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("write \\int"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\int\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("write \\frac{d}{dx}"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\frac{d}{dx}\\)` }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("write \\log_{}"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\log_ab\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("cmd \\ln"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\ln\\)" }) }),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write e^{}");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(e^{x}\\)` })
      }
    ),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write 10^{}");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(10^{x}\\)` })
      }
    )
  ] });
  let sectionFx = /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("write \\frac{d}{dx}"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\frac{d}{dx}\\)` }) }),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write \\int_{}^{}");
          callback("keystroke Left");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\int_{a}^{b}\\)` })
      }
    ),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("type nPr("), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\operatorname{nPr}\\)` }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("type nCr("), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\operatorname{nCr}\\)` }) }),
    /* @__PURE__ */ jsx(Button33, { onClick: () => callback("write !"), children: "!" }),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write \\lfloor");
          callback("write \\rfloor");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\lfloor{a}\\rfloor\\)` })
      }
    ),
    /* @__PURE__ */ jsx(
      Button33,
      {
        onClick: () => {
          callback("write \\lceil");
          callback("write \\rceil");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\lceil{a}\\rceil\\)` })
      }
    ),
    /* @__PURE__ */ jsx(Button33, { transition: true, onClick: () => callback("keystroke Backspace"), children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBackspace }) }),
    /* @__PURE__ */ jsx(Button33, { transition: true, onClick: () => callback("keystroke Left"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\leftarrow\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { transition: true, onClick: () => callback("keystroke Right"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rightarrow\\)" }) }),
    /* @__PURE__ */ jsx(Button33, { transition: true, onClick: () => returncallback(), children: "Enter" })
  ] });
  /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\alpha"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\alpha\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\beta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\beta\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\gamma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\gamma\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\delta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\delta\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\epsilon"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\epsilon\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\zeta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\zeta\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\eta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\eta\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\theta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\theta\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\kappa"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\kappa\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\lambda"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\lambda\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\mu"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\mu\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\nu"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\nu\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\xi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\xi\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\pi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\pi\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\rho"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rho\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\sigma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\sigma\\)" }) })
  ] });
  /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\tau"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\tau\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\phi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\phi\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\psi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\psi\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\omega"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\omega\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Gamma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Gamma\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Delta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Delta\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Theta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Theta\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Lambda"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Lambda\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Xi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Xi\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Pi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Pi\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Sigma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Sigma\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Phi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Phi\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Psi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Psi\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Upsilon"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Upsilon\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\Omega"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Omega\\)" }) })
  ] });
  let sectionUpperGreek = /* @__PURE__ */ jsx(Panel, { tabIndex: "0", ref: containerRef, children: /* @__PURE__ */ jsxs(LettersSection, { children: [
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Phi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Phi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Sigma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Sigma\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write E"), children: "E" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write P"), children: "P" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write T"), children: "T" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write Y"), children: "Y" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Theta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Theta\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write I"), children: "I" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write O"), children: "O" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Pi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Pi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write A"), children: "A" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Sigma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Sigma\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Delta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Delta\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Phi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Phi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Gamma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Gamma\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write H"), children: "H" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Xi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Xi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write K"), children: "K" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Lambda"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Lambda\\)" }) }),
    /* @__PURE__ */ jsx(White15Button, { onClick: handleToggleGreekCase, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowUp }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write Z"), children: "Z" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write X"), children: "X" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Psi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Psi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\Omega"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\Delta\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write B"), children: "B" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write N"), children: "N" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write M"), children: "M" }),
    /* @__PURE__ */ jsx(White15Button, { onClick: () => callback("keystroke Backspace"), children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBackspace }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write ,"), children: "," }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write '"), children: "'" }),
    /* @__PURE__ */ jsx(SpaceButton, { onClick: () => callback("write \\ "), children: " " }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => callback("keystroke Left"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\leftarrow\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => callback("keystroke Right"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rightarrow\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => returncallback(), children: "Enter" })
  ] }) });
  let sectionLowerGreek = /* @__PURE__ */ jsx(Panel, { tabIndex: "0", ref: containerRef, children: /* @__PURE__ */ jsxs(LettersSection, { children: [
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\phi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\phi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\varsigma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\varsigma\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\epsilon"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\epsilon\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\rho"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rho\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\tau"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\tau\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\upsilon"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\upsilon\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\theta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\theta\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\iota"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\iota\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write o"), children: "o" }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\pi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\pi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\alpha"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\alpha\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\sigma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\sigma\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\delta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\delta\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\varphi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\varphi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\gamma"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\gamma\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\eta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\eta\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\xi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\xi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\kappa"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\kappa\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\lambda"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\lambda\\)" }) }),
    /* @__PURE__ */ jsx(White15Button, { lowercase: true, onClick: handleToggleGreekCase, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faArrowUp }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\zeta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\zeta\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\chi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\chi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\psi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\psi\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\omega"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\omega\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\beta"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\beta\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\nu"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\nu\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write \\mu"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\mu\\)" }) }),
    /* @__PURE__ */ jsx(White15Button, { onClick: () => callback("keystroke Backspace"), children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBackspace }) }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write ,"), children: "," }),
    /* @__PURE__ */ jsx(LetterButton, { onClick: () => callback("write '"), children: "'" }),
    /* @__PURE__ */ jsx(SpaceButton, { onClick: () => callback("write \\ "), children: " " }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => callback("keystroke Left"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\leftarrow\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => callback("keystroke Right"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rightarrow\\)" }) }),
    /* @__PURE__ */ jsx(LetterButton, { transition: true, onClick: () => returncallback(), children: "Enter" })
  ] }) });
  let sectionXYZ = /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write x"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(x\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write y"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(y\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write \\pi"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\pi\\)" }) }),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          callback("write e");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(e\\)` })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          callback("type ^2");
          callback("keystroke Right");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(a^2\\)" })
      }
    ),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd ^"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(a^b\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("type sqrt"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: `\\(\\sqrt{a}\\)` }) }),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          callback("cmd |");
          callback("cmd |");
          callback("keystroke Left");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(|a|\\)" })
      }
    ),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write <"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(<\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write >"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(>\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("type <="), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\leq\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("type >="), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\geq\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write ,"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(,\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd ("), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\((\\)" }) }),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => {
          callback("cmd )");
        },
        children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\()\\)" })
      }
    )
  ] });
  let section123 = /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 7"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(7\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 8"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(8\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 9"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(9\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("type *"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\times\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd /"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\div\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 4"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(4\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 5"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(5\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 6"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(6\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write +"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(+\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("cmd -"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(-\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 1"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(1\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 2"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(2\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 3"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(3\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write ="), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(=\\)" }) }),
    /* @__PURE__ */ jsx(DeleteButton, { onClick: () => callback("keystroke Backspace"), children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBackspace }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write 0"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(0\\)" }) }),
    /* @__PURE__ */ jsx(Button, { onClick: () => callback("write ."), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(.\\)" }) }),
    /* @__PURE__ */ jsx(CursorButton, { onClick: () => callback("keystroke Left"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\leftarrow\\)" }) }),
    /* @__PURE__ */ jsx(CursorButton, { onClick: () => callback("keystroke Right"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rightarrow\\)" }) }),
    /* @__PURE__ */ jsx(EnterButton, { onClick: () => returncallback(), children: "Enter" })
  ] });
  /* @__PURE__ */ jsxs(Section, { style: { marginTop: "57px" }, children: [
    /* @__PURE__ */ jsx(CursorButton, { onClick: () => callback("keystroke Left"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\leftarrow\\)" }) }),
    /* @__PURE__ */ jsx(CursorButton, { onClick: () => callback("keystroke Right"), children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { dynamic: true, children: "\\(\\rightarrow\\)" }) }),
    /* @__PURE__ */ jsx(DeleteButton, { onClick: () => callback("keystroke Backspace"), children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faBackspace }) }),
    /* @__PURE__ */ jsx(EnterButton, { onClick: () => returncallback(), children: "Enter" }),
    /* @__PURE__ */ jsx(EnterButton, { onClick: handleToggleLetters, children: "ABC" })
  ] });
  return /* @__PURE__ */ jsxs(Panel, { tabIndex: "0", ref: containerRef, className: "keyboard", children: [
    /* @__PURE__ */ jsxs(ContainerSection, { children: [
      /* @__PURE__ */ jsx(ToggleButtonSection, { children: /* @__PURE__ */ jsxs(ToggleButtonGroup, { onClick: handleFnToggle, children: [
        /* @__PURE__ */ jsx(ToggleButton, { value: "123" }),
        /* @__PURE__ */ jsx(ToggleButton, { value: "f(x)" }),
        /* @__PURE__ */ jsx(ToggleButton, { value: "ABC" }),
        /* @__PURE__ */ jsx(ToggleButton, { value: "αβγ" }),
        /* @__PURE__ */ jsx(ToggleButton, { value: "$%∞" })
      ] }) }),
      toggleFn === 0 ? /* @__PURE__ */ jsxs(SubSection, { children: [
        sectionXYZ,
        section123
      ] }) : toggleFn === 1 ? /* @__PURE__ */ jsxs(SubSection, { children: [
        sectionTrig1,
        sectionFx
      ] }) : toggleFn === 2 ? toggleABCCase ? sectionUpperABC : sectionLowerABC : toggleFn === 3 ? toggleGreekCase ? sectionUpperGreek : sectionLowerGreek : toggleFn === 4 ? /* @__PURE__ */ jsxs(SubSection, { children: [
        sectionSymbols1,
        sectionSymbols2
      ] }) : null
    ] }),
    /* @__PURE__ */ jsx(ContainerSection, {})
  ] });
}
export {
  VirtualKeyboard as default
};
