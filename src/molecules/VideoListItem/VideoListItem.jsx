import React from "react";
import s from "./particule/style.module.css";
import { Card, Typography, Col } from "antd";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const VideoListItem = ({ video, onClick }) => {
  const handleVideo = () => {
    onClick(video);
  };

  return (
    <Col key={video.id.videoId} span={6}>
      <Card
        hoverable
        cover={
          <img
            alt={video.snippet.title}
            src={video.snippet.thumbnails.default.url}
          />
        }
        onClick={() => handleVideo}
      >
        <Meta title={video.snippet.title} />
      </Card>
    </Col>
  );
};

export default VideoListItem;
