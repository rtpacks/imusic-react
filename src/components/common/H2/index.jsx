import React, { memo } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.h2`
  width: 96%;
  margin: 4px auto;
  margin-bottom: 0;
  padding: 0 4px;
  font-size: 26px;
  font-weight: 700;
  user-select: none;
`;

const H2 = memo(Wrapper);

export default H2;
