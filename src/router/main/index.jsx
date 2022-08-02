import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Recom = lazy(() => import("@/pages/main/children/recom"));
const Hall = lazy(() => import("@/pages/main/children/hall"));
const Lately = lazy(() => import("@/pages/main/children/lately"));
const Love = lazy(() => import("@/pages/main/children/love"));
const Native = lazy(() => import("@/pages/main/children/native"));
const Playlist = lazy(() => import("@/pages/main/children/playlist"));
const Purchased = lazy(() => import("@/pages/main/children/purchased"));
const Station = lazy(() => import("@/pages/main/children/station"));
const Video = lazy(() => import("@/pages/main/children/video"));

const prefix = "/main";

const paths = [
  "recom",
  "hall",
  "lately",
  "love",
  "native",
  "playlist",
  "purchased",
  "station",
  "video",
];

const kv = [
  ["推荐", "recom"],
  ["音乐馆", "hall"],
  ["最近播放", "lately"],
  ["我喜欢", "love"],
  ["本地和下载", "native"],
  ["歌单", "playlist"], // 创建的歌单或收藏的歌单
  ["已购音乐", "purchased"],
  ["电台", "station"],
  ["视频", "video"],
].map((route, idx) => {
  return [route[0], `${prefix}/${route[1]}`]; // 完整路由
  // return `/main/${paths[idx]}`;
});

export const routes = new Map(kv);

const mainChildren = [
  {
    path: "/main",
    exact: true,
    element: <Navigate to="/main/recom" />,
  },
  {
    path: "recom", // 推荐
    element: <Recom />,
  },
  {
    path: "hall", //Music Hall
    element: <Hall />,
  },
  {
    path: "lately",
    element: <Lately />,
  },
  {
    path: "love",
    element: <Love />,
  },
  {
    path: "native",
    element: <Native />,
  },
  {
    path: "playlist",
    element: <Playlist />, // 创建的歌单、收藏的歌单，用路由传递数据
  },
  {
    path: "purchased",
    element: <Purchased />,
  },
  {
    path: "station", // 电台
    element: <Station />,
  },
  {
    path: "video", // 视频
    element: <Video />,
  },
];

export default mainChildren;
