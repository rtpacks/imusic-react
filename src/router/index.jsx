import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
const Main = lazy(() => import("@/pages/main"));
const Player = lazy(() => import("@/pages/player"));

const mainChildren = [
  {
    path: "recommend", // 推荐
    element: null,
  },
  {
    path: "hall", //Music Hall
    element: null,
  },
  {
    path: "video", // 视频
    element: null,
  },
  {
    path: "station", // 电台
    element: null,
  },
  {
    path: "love",
    element: null,
  },
  {
    path: "native",
    element: null,
  },
  {
    path: "lately",
    element: null,
  },
  {
    path: "purchased",
    element: null,
  },
  {
    path: "playlist",
    element: null, // 创建的歌单、收藏的歌单，用路由传递数据
  },
];

export default [
  {
    path: "/",
    exact: true,
    element: <Navigate to="/main" />,
  },
  {
    path: "/main",
    element: <Main />,
    children: mainChildren,
  },
  {
    path: "/player",
    element: <Player />,
  },
];
