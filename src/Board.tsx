import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* width: 400px; */
  /* height: 400px; */
`;

const Circle = styled.circle`
  fill: none;
  stroke: #b9b9b9;
  stroke-width: 1;
  stroke-miterlimit: 1;
`;

const Line = styled.line`
  stroke: #b9b9b9;
  stroke-width: 1;
`;

const SvgComponent = (): React.JSX.Element => {
  return (
    <svg viewBox="0 0 300 300">
      <Circle id="holder" cx="150" cy="150" r="50" />
      <Line x1="150" y1="0" x2="150" y2="300" />
      <Line x1="0" y1="150" x2="300" y2="150" />
    </svg>
  );
};

export default function Board(): React.JSX.Element {
  return (
    <Container>
      <SvgComponent />
    </Container>
  );
}
