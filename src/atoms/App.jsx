import { Layout, Menu, Row, Col, Typography } from "antd";
import { useEffect, useState } from "react";
import s from "./particule/style.module.css";
import Logo from "../assets/logo.png";
import Matriz from "../assets/matriz.jpg";
import VideoList from "./../molecules/VideoList/VideoList";
import { YoutubeAPI } from "./../api/youtube-api";
import AboutUs from "./../molecules/AboutUs/AboutUs";
import TrainWithUs from "./../molecules/TrainWithUs/TrainWithUs";
import VideoModal from "../molecules/VideoModal/VideoModal";
import { items } from "../data/data";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState("about");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("youtubeVideos");
        if (storedData) {
          setVideos(JSON.parse(storedData));
        } else {
          const videoData = await YoutubeAPI.fetchVideos();
          setVideos(videoData);
          localStorage.setItem("youtubeVideos", JSON.stringify(videoData));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleMenuClick = (e) => {
    setActiveMenuItem(e.key);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
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
              className={s.nav_menu}
              theme="light"
              mode="horizontal"
              selectedKeys={[activeMenuItem]}
              onClick={handleMenuClick}
              items={items}
            ></Menu>
          </Col>
        </Row>
      </Header>
      <Content className={s.contentStyle}>
        <Row>
          <Col lg={13}>
            <div className={s.main_principal}>
              <h1 className={s.title_style}>
                <span>Cristopher Saldaña</span>
                <span style={{ color: "#4f46e5" }}>@kuben_capoeira</span>
              </h1>
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
          <Title level={2}>Últimos videos publicados</Title>
          <VideoList videos={videos} onClickItem={handleVideoClick} />
          <div id="selectedVideo">
            {selectedVideo && (
              <VideoModal
                open={isModalOpen}
                onOk={handleModalClose}
                selectedVideo={selectedVideo}
              />
            )}
          </div>
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
