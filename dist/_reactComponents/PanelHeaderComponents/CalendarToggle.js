import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faCalendarTimes,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import React, {useRef} from "react";
import styled from "styled-components";
import {doenetMainBlue} from "./theme.js";
const Button = styled.button`
  height: 24px;
  border: 2px solid;
  border-color: ${(props) => props.color};
  border-radius: 5px;
  color: var(--canvas);
  background-color: ${(props) => props.color};
`;
export default function CalendarButton(props) {
  const icon = props.checked ? faCalendarPlus : faCalendarTimes;
  const color = props.checked ? doenetMainBlue : "var(--mainGray)";
  const buttonRef = useRef(null);
  return /* @__PURE__ */ React.createElement(Button, {
    color,
    ref: buttonRef,
    onClick: (e) => {
      props.onClick(e);
    }
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon
  }));
}
