import React, { memo } from "react";

const OneFourth = memo((props) => {
  return (
    <div
      style={{
        width: "24%",
        height: "150px",
        overflow: "hidden",
        cursor: "pointer",
        ...(props.style || {}),
      }}
    >
      <div
        style={{
          width: "100%",
          height: "88%",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="https://img0.baidu.com/it/u=2663888674,2564213533&fm=253&fmt=auto&app=138&f=JPEG?w=355&h=500"
          alt="Hello World"
        />
      </div>
      <div style={{ userSelect: "none" }}>{props.title}</div>
    </div>
  );
});

export default OneFourth;
