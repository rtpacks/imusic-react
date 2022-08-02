import React, { memo } from "react";
import styled from "@emotion/styled";

import Image from "../Image";
import Ellipsis from "../Ellipsis";

const Wrapper = styled.div`
  position: "relative";
  width: ${(props) => props.width || "25%"};
  margin: 4px 0;
  margin-bottom: 6px;
  padding: 0 1.3%;
  cursor: "pointer";
  user-select: "none" !important;
`;

const TranslateY = styled.div`
  transition: all 0.3s;
  &:hover {
    transform: translateY(${(props) => props.y || "-8px"});
  }
`;

const Margin = styled.div`
  width: ${(props) => props.width || "100%"};
  margin-top: ${(props) => props.top || "0px"};
  margin-bottom: ${(props) => props.bottom || "0px"};
  margin-left: ${(props) => props.left || "auto"};
  margin-right: ${(props) => props.right || "auto"};
`;

const Card = memo((props) => {
  const { width, img, alt, title } = props;
  return (
    <Wrapper width={width}>
      <TranslateY>
        <Image img={img} alt={alt} />
      </TranslateY>

      <Margin {...props} width="97%" top="4px">
        <Ellipsis clamp={2}>{title}</Ellipsis>
      </Margin>
    </Wrapper>
  );
});

const createWidthCard = (width) => (props) =>
  <Card {...(props || {})} width={width} />;

const Card33 = createWidthCard("33.33%");
const Card50 = createWidthCard("50%");

export { Card33, Card50 };
export default Card;
