import Router from './Router';
import './App.scss'
import 'antd/dist/reset.css';
import { Layout, theme } from 'antd';
import Sidebar from './containers/Sidebar';
import { useState } from 'react';
import Navigationbar from './containers/Navigationbar';
import SvgSprite from './utils/SvgSpriteLoader';
import svgFile from "./assets/images/svg/svg-sprite.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();


  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

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
          <Content style={{ padding: '26px 16px', height: "83vh", minHeight: "83vh", maxHeight: "83vh", background: "transparent", overflow: "scroll", }} >
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