import React, { memo } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import IconFont from "../IconFont";

const h = "38px";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  height: ${h};
  line-height: ${h};
  margin: 0 auto;
  padding: 0 8px;
  color: ${(props) => props.color || "#666"};

  user-select: none;

  & .left {
    max-width: 300px;
    font-size: 18px;
    font-weight: 600;
  }

  & .center {
    flex: 1;
  }

  & .right {
    height: ${h};
    font-size: 13px;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.activeColor || "#FF6160"};
    }
  }
`;

const NavHeader = memo((props) => {
  const theme = useTheme();
  const { title = "为你推荐", render = () => {}, icon = "icon-arrow3" } = props;
  return (
    <Flex activeColor={theme.activeColor} color={theme.color}>
      <div className="left">{title}</div>

      <div className="right">{render?.()}</div>

      <div className="right">
        更多
        <IconFont
          type={icon}
          fontSize="13px"
          style={{
            color: "inherit",
          }}
        />
      </div>
    </Flex>
  );
});

export default NavHeader;
