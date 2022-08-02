import React, { memo } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 98%;
  margin: 0 auto;
  padding: 10px 0;
  user-select: none;
  &::after {
    display: block;
    flex: 1;
    height: 0;
    content: "";
  }
`;

const Flex = memo(Wrapper);

export default Flex;
