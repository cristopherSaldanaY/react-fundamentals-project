import React from "react";
import s from "./particule/style.module.css";
import { Card, Typography, Col } from "antd";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const VideoListItem = ({ video, onClickItem }) => {

  const handleItemClick = () => {
    onClickItem(video)
  }


  return (
    <Col key={video.id.videoId} span={6} onClick={handleItemClick} style={{maxWidth: "24%"}}>
      <Card
        hoverable
        cover={
          <img
            alt={video.snippet.title}
            src={video.snippet.thumbnails.default.url}
          />
        }
      >
        <Meta title={video.snippet.title} />
      </Card>
    </Col>
  );
};

export default VideoListItem;
