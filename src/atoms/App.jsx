import s from "./particule/style.module.css";
import Logo from "../assets/logo.png";
import Matriz from "../assets/matriz.jpg";
import LogoCircle from "../assets/logoCircular.png";
import { Layout, Menu, Row, Col, Image, Card, Avatar } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

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
              <h1
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  fontWeight: "800",
                  fontSize: "2.25rem",
                  lineHeight: "2.5rem",
                }}
              >
                <span>Cristopher Saldaña</span>
                <span style={{ color: "#4f46e5" }}>@kuben_capoeira</span>
              </h1>
            </div>
            <div className={s.main_principal}>
              <p>
                Monitor de la escuela de Capoeira Sul da Bahia Chile, con mas de
                10 años de experiencia. lorem*30
              </p>
            </div>
            <div>
              {/*               <Card
                title=" Mestre Railson - Presidente fundador da
                Associação de  Capoeira Sul da Bahia"
                bordered={true}
                cover={<img src={LogoCircle}></img>}
              >
 Em
                2005 recebeu sua segunda graduação de mestre e em 2015 sua
                terceira graduação de mestre. Fundou em 1995 a Associação de
                Capoeira Sul da Bahia com matriz no Arraial d'Ajuda e atualmente
                com filiais em 18 países. Viaja pelo mundo divulgando a
                capoeira, ministrando cursos e realizando eventos.
              </Card> */}
              <Card className={s.cardAbout}
              >
                <Meta
                  avatar={<Avatar size={64} src={LogoCircle} />}
                  title="Grupo Capoeira Sul da Bahia - San Bernardo, Chile"
                  description="Railson do Carmo Domingues, o Mestre Railson, nasceu em Arraial
                  d'Ajuda/Ba em 1967, iniciou na capoeira aos 11 anos de idade com
                  o Mestre Estrela em Porto Seguro/Ba. Quando o Mestre Estrela
                  parou de dar aula, Mestre Railson continuou sua busca pela
                  capoeira, e foi em uma viagem de férias à Belo Horizonte, em
                  1986, que conheceu o Mestre Mão Branca, se identificou com o seu
                  trabalho e a partir daí passou a fazer parte do seu grupo,
                  recebendo todas as graduações até ser formado Mestre em 1995. Railson do Carmo Domingues, o Mestre Railson, nasceu em Arraial
                  d'Ajuda/Ba em 1967, iniciou na capoeira aos 11 anos de idade com
                  o Mestre Estrela em Porto Seguro/Ba. Quando o Mestre Estrela
                  parou de dar aula, Mestre Railson continuou sua busca pela
                  capoeira, e foi em uma viagem de férias à Belo Horizonte, em
                  1986, que conheceu o Mestre Mão Branca, se identificou com o seu
                  trabalho e a partir daí passou a fazer parte do seu grupo,
                  recebendo todas as graduações até ser formado Mestre em 1995."
                />
              </Card>
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
