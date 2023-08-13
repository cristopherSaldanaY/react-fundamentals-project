import s from "./particule/style.module.css";
import Logo from "../assets/logo.png";
import Matriz from "../assets/matriz.jpg";
import { Layout, Menu, Row, Col, Card, Typography } from "antd";
import VideoList from "./../molecules/VideoList/VideoList";
import { YoutubeAPI } from "./../api/youtube-api";
import { useEffect, useState } from "react";
import AboutUs from "./../molecules/AboutUs/AboutUs";
import TrainWithUs from "./../molecules/TrainWithUs/TrainWithUs";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState("about");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("youtubeVideos");
        if (storedData) {
          console.log("busco en el localstorage");
          setVideos(JSON.parse(storedData));
        } else {
          console.log("busco en la api");
          const videoData = await YoutubeAPI.fetchVideos();
          setVideos(videoData);
          localStorage.setItem("youtubeVideos", JSON.stringify(videoData));
        }

        /*const videoData = await YoutubeAPI.fetchVideos();
        setVideos(videoData); */
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleVideoClick = (video) => {
    console.log(video.id.videoId)
    setSelectedVideo(video);
  };

  const handleMenuClick = (e) => {
    setActiveMenuItem(e.key);
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
              selectedKeys={[activeMenuItem]}
              onClick={handleMenuClick}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Menu.Item key="about">Acerca del grupo</Menu.Item>
              <Menu.Item key="train">Entrena con nosotros</Menu.Item>
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
                Instructor de capoeira
              </p>
            </div>
            <div>
              {activeMenuItem === "about" && <AboutUs />}
              {activeMenuItem === "train" && <TrainWithUs />}
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
          <VideoList videos={videos} onClickItem={handleVideoClick} />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Dev Cristopher Saldaña ©2023
      </Footer>
    </Layout>
  );
}

export default App;
