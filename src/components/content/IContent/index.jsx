import React, { memo } from "react";
import styled from "@emotion/styled";

import Card from "../../common/Card";

import style from "./style.module.less";

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 14px 0;
`;

const IContent = memo(() => {
  return (
    <div className={style.scroll}>
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
    </div>
  );
});

export default IContent;
