import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const HPVideo = styled.video`
  width: 100%;
  margin-left: 20vw;
  //transform: scale(1.3);
  object-fit: cover;
  object-position: 25% 25%;
  @media (max-width: 780px) {
    height: 240px;
  }
  @media (max-width: 450px) {
    height: 180px;
  }
`;

export default function HomeIntroVideo() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <HPVideo
        // height='420px'
        fluid="false"
        // src='/media/homepagevideo2.mp4'
        loop
        muted
        playsInline
        alt="Demonstration video on making DoenetML content"
        ref={videoEl}
        controls
        zIndex="1"
      >
        <source src="/platnet_orbits_smooth.webm" type="video/webm" />
      </HPVideo>
    </div>
  );
}
