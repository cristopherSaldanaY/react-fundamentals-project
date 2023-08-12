import s from "./particule/style.module.css";
import Logo from "../assets/logo.png";
import Matriz from "../assets/matriz.jpg";
import LogoCircle from "../assets/logoCircular.png";
import { Layout, Menu, Row, Col, Image, Card, Avatar, Typography } from "antd";
import VideoList from "./../molecules/VideoList/VideoList";
import { YoutubeAPI } from "./../api/youtube-api";
import { useEffect, useState } from "react";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /*         const videoData = await YoutubeAPI.fetchVideos();
        setVideos(videoData); */
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

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
              <Card className={s.cardAbout}>
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
        <div>
          <div>
            {selectedVideo && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                  title={selectedVideo.snippet.title}
                  style={{ border: "none" }}
                  allowFullScreen
                ></iframe>
                <h2>{selectedVideo.snippet.title}</h2>
              </div>
            )}
          </div>
          <Title level={2}>Últimos videos publicados</Title>
          <VideoList videos={videos} />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Dev Cristopher Saldaña ©2023
      </Footer>
    </Layout>
  );
}

export default App;
