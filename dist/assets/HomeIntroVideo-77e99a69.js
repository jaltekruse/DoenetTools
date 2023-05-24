import { r as reactExports, j as jsx, s as styled } from "./PageViewer-d914b069.js";
const HPVideo = styled.video`
  height: 350px;
  @media (max-width: 780px) {
    height: 240px;
  }
  @media (max-width: 450px) {
    height: 180px;
  }
`;
function HomeIntroVideo() {
  const videoEl = reactExports.useRef(null);
  const attemptPlay = () => {
    videoEl && videoEl.current && videoEl.current.play().catch((error) => {
      console.error("Error attempting to play", error);
    });
  };
  reactExports.useEffect(() => {
    attemptPlay();
  }, []);
  return /* @__PURE__ */ jsx(
    HPVideo,
    {
      fluid: "false",
      muted: true,
      playsInline: true,
      alt: "Demonstration video on making DoenetML content",
      ref: videoEl,
      controls: true,
      children: /* @__PURE__ */ jsx("source", { src: "/homepagevideo.mp4", type: "video/mp4" })
    }
  );
}
export {
  HomeIntroVideo as default
};
