import React, { memo, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "antd";
import { Spin } from "antd";
const { Header, Footer, Sider, Content } = Layout;

import { KeepAlive, useActivate } from "react-activation";

import INav from "@/components/content/INav";
import IHeader from "@/components/content/IHeader";
import IFooter from "@/components/content/IFooter";

import "./style.less";

const EnhancedSpin = memo((props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 200,
        right: 0,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin {...props} />
    </div>
  );
});

const Main = memo(() => {
  useEffect(() => {
    console.log("挂载");
    return () => {
      console.log("卸载");
    };
  }, []);
  return (
    // 应该避免内联对象
    <Layout className="w main" style={{ maxWidth: "1100px" }}>
      <Sider width="216px" className="bg-white">
        <INav></INav>
      </Sider>

      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <IHeader></IHeader>
        </Header>

        <Content className="scroll">
          <React.Suspense fallback={<EnhancedSpin size="large" />}>
            {/* 渲染子页面 */}
            <Outlet></Outlet>
          </React.Suspense>
        </Content>
        <Footer>
          <IFooter></IFooter>
        </Footer>
      </Layout>
    </Layout>
  );
});

export default Main;
