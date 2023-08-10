import s from "./particule/style.module.css";
import Logo from "../assets/logo.png";
import Matriz from "../assets/matriz.jpg";
import { Layout, Menu, Row, Col } from "antd";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className={s.layout}>
      <Header className={s.headerStyle}>
        <Row gutter={2} style={{ height: "100%" }}>
          <Col xs={12} md={7} style={{ maxHeight: "100%" }}>
            <img src={Logo} alt="" className={s.logoImage} />
          </Col>
          <Col xs={12} md={15} style={{ height: "100%" }}>
            <Menu
              theme="light"
              mode="horizontal"
              className={s.menu}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Menu.Item key="1">Acerca del grupo</Menu.Item>
              <Menu.Item key="2">Entrena con nosotros</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content className={s.contentStyle}>
        <Row>
          <Col lg={13}>
            <div className={s.main_principal}>
              <h1>Cristopher Saldaña</h1>
              <h2>@kuben_capoeira</h2>
            </div>
            <div className={s.main_principal}>
              <p>
                Monitor de la escuela de Capoeira Sul da Bahia Chile, con mas de
                10 años de experiencia.
              </p>
            </div>

          </Col>
          <Col lg={11}>
            <div className={s.matrizContainer}>
              <img src={Matriz} alt="" className={s.matrizImage} />
            </div>
          </Col>
        </Row>
      </Content>
      <Footer className={s.footerStyle}>Footer</Footer>
    </Layout>
  );
}

export default App;
