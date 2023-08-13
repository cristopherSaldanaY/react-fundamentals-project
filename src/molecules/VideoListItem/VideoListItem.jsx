import React from "react";
import s from "./particule/style.module.css";
import { Card, Typography, Col } from "antd";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const VideoListItem = ({ video, onClickItem }) => {

  const handleItemClick = () => {
    onClickItem(video)
  }

  const imageUrl = video.snippet.thumbnails.high
  ? video.snippet.thumbnails.high.url
  : video.snippet.thumbnails.default.url;


  return (
    <Col key={video.id.videoId} xs={24} md={11} lg={7} xl={4} span={6} onClick={handleItemClick} >
      <Card
        hoverable
        cover={
          <img
            alt={video.snippet.title}
            src={imageUrl}
          />
        }
      >
        <Meta title={video.snippet.title} />
      </Card>
    </Col>
  );
};

export default VideoListItem;
