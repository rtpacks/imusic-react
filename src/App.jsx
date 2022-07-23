import React, { memo } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./router";

import "./App.css";

const App = memo(() => {
  return <div className="screen">{useRoutes(routes)}</div>;
});

export default App;