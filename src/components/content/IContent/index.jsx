import React, { memo } from "react";

import { ThemeProvider } from "@emotion/react";
import { isFunction } from "@/utils";

const theme = {
  color: "#666",
  activeColor: "#FF6160",
  userSelect: "none",
};

const IContent = memo((props) => {
  const { children = [] } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});

export default IContent;
