import Router from './Router';
import './App.scss'
import 'antd/dist/reset.css';
import { Layout, theme } from 'antd';
import Sidebar from './containers/Sidebar';
import { useState } from 'react';
import Navigationbar from './containers/Navigationbar';
import SvgSprite from './utils/SvgSpriteLoader';
import svgFile from "./assets/images/svg/svg-sprite.svg";

function App() {

  const { Header, Footer, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const { token: { colorBgContainer }, } = theme.useToken();

  return (
    <>
      <SvgSprite url={svgFile} />
      <Layout className='aleo_app_layout'>

        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Sidebar />
        </Sider>

        <Layout className="site-layout">
          {/* Header  */}
          <Header style={{ padding: 0, }} >
            <Navigationbar />
          </Header>

          {/* Content */}
          <Content style={{ padding: '24px 16px', height: "83vh", minHeight: "83vh", maxHeight: "83vh", background: "transparent", overflow: "scroll", }} >
            <Router />
          </Content>

          {/* Footer  */}
          <Footer style={{ textAlign: 'center', }}>
            ALEO ©2023 Created by  EUTROPIADEVS
          </Footer>
        </Layout>

      </Layout>
    </>
  );
}

export default App;