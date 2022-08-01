import React, { memo } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

import INav from "@/components/content/INav";
import IHeader from "@/components/content/IHeader";
import IContent from "@/components/content/IContent";

import "./style.less";

const Main = memo(() => {
  return (
    <Layout className="w main" style={{ maxWidth: "1100px" }}>
      <Sider width="216px" className="bg-white">
        <INav></INav>
      </Sider>

      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <IHeader></IHeader>
        </Header>

        <Content className="scroll">
          <IContent></IContent>
          <Outlet></Outlet>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
});

export default Main;
