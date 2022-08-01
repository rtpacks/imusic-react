import React, { memo } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

import INav from "@/components/content/INav";
import IHeader from "@/components/content/IHeader";
import IContent from "@/components/content/IContent";

import "./style.css";

const Main = memo(() => {
  return (
    <Layout className="w" style={{ maxWidth: "1100px" }}>
      <Sider width="216px" className="bg-white">
        <INav></INav>
      </Sider>

      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <IHeader></IHeader>
        </Header>

        <Content>
          <IContent></IContent>
          <Outlet></Outlet>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
});

export default Main;
