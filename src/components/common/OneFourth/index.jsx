import React, { memo } from "react";

import Image from "../Image";
import Ellipsis from "../Ellipsis";
import { css } from "@emotion/react";

const outer = {
  position: "relative",
  // overflow: "hidden",
  width: "22%",
  cursor: "pointer",
  userSelect: "none",
};

const transform = css`
  transition: all 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const OneFourth = memo((props) => {
  const { img, alt, title } = props;
  return (
    <div style={outer}>
      <div css={transform}>
        <Image img={img} alt={alt} />
      </div>

      <div
        style={{
          width: "97%",
          margin: "0 auto",
          marginTop: "4px",
        }}
      >
        <Ellipsis clamp={2}>{title}</Ellipsis>
      </div>
    </div>
  );
});

export default OneFourth;
