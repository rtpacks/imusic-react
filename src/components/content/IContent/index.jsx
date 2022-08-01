import React, { memo } from "react";
import styled from "@emotion/styled";

import NavHeader from "../../common/NavHeader";
import Card from "../../common/Card";
import { ThemeProvider } from "@emotion/react";

const H2 = styled.h2`
  width: 96%;
  margin: 4px auto;
  padding: 0 4px;
  font-size: 26px;
  font-weight: 700;
  user-select: none;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 14px 0;
  user-select: none;
`;

const theme = {
  color: "#666",
  activeColor: "#FF6160",
  userSelect: "none",
};

const IContent = memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <H2>推荐</H2>
      <NavHeader />
      <Flex>
        <Card
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />

        <Card
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />

        <Card
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />
        <Card
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />
      </Flex>
      <NavHeader />
      <Flex>
        <Card
          width="46%"
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />

        <Card
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />

        <Card
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />
      </Flex>
      <NavHeader />
      <Flex>
        <Card
          width="30%"
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />

        <Card
          width="30%"
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />

        <Card
          width="30%"
          img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F34%2Faf%2F78%2F34af7862028d2b7ff3ab92f7a936421e.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661918017&t=e9af07fd367371df48c6a696284f578a"
          title="今日你的温柔你的世界，和我一起回想以前时光"
        />
      </Flex>
    </ThemeProvider>
  );
});

export default IContent;
