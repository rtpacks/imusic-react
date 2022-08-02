import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "@/components/common/Logo";
import Slide from "@/components/common/Slide";

import { routes } from "@/router/main";

import style from "./style.module.less";

const INav = memo(() => {
  let [list, setList] = useState([]);

  // 发送网络请求得到创建的歌单和收藏的歌单

  const navigateTo = useNavigate();

  const onClick = useCallback((e) => {
    // 为了优化
    const { keyPath: path } = e;
    if (path.length === 1) {
      navigateTo(path[0], { replace: false });
      return;
    }
    navigateTo(`${path[1]}/${path[0]}`, { replace: false });
  }, []);

  return (
    <div className={style["i-nav"]}>
      <Logo
        height="90px"
        logoClick={(e) => {
          console.log("Logo");
        }}
      ></Logo>
      {/* 注意：使用calc一定要有父高度，可以写成百分比但是一定要有父高度 */}
      <Slide
        height="calc(100% - 90px)"
        list={list}
        onClick={onClick}
        routes={routes}
      ></Slide>
    </div>
  );
});

export default INav;
