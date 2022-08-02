import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Main = lazy(() => import("@/pages/main"));
const Player = lazy(() => import("@/pages/player"));

import mainChildren from "./main";

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
