import React, { memo, useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./router";

import "./App.css";
const App = memo(() => {
  const elements = useRoutes(routes);
  return <div className="screen">{elements}</div>;
});

export default App;
