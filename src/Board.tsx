import React from "react";
import styled from "styled-components";
import Bg from "./bg.svg";

const Circle = styled.circle`
  fill: none;
  stroke: #b9b9b9;
  stroke-width: 0.5;
  stroke-miterlimit: 0.5;
`;

const Line = styled.line`
  stroke: #b9b9b9;
  stroke-width: 0.5;
`;

const BgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

const SvgComponent = (): React.JSX.Element => {
  return (
    <svg viewBox="0 0 300 300">
      <Circle id="holder" cx="150" cy="150" r="40" />
      <Line x1="150" y1="0" x2="150" y2="300" />
      <Line x1="0" y1="150" x2="300" y2="150" />
    </svg>
  );
};

export default function Board(): React.JSX.Element {
  return <Bg />;
}
