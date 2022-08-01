import React, { memo } from "react";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 150px;
  border-radius: ${(p) => p.radius || "12px"};
  box-shadow: 0 0 4px 2px #ccc;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

const Image = memo((props) => {
  const { img, alt = "Hello" } = props;
  return (
    <Wrapper>
      <img src={img} alt={alt} />
    </Wrapper>
  );
});

export default Image;
