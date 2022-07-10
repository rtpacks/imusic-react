import React, { memo } from "react";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

import INav from "./components/content/INav"
import IHeader from "./components/content/IHeader";
import "./App.css";

const App = memo(() => {
  return (
    <div className="screen">
      {/* <Nav/> */}

      <Layout className="w" style={{ maxWidth: "1100px" }}>
        <Sider width="216px" className="bg-white">
          <INav></INav>
        </Sider>

        <Layout>
          <Header style={{ backgroundColor: "white" }}>
            <IHeader></IHeader>
          </Header>
          
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
});

export default App;
