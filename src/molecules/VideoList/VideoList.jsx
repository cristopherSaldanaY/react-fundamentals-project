import React from "react";
import s from "./particule/style.module.css";
import { Row, Col } from "antd";
import VideoListItem from "./../VideoListItem/VideoListItem";

const VideoList = ({videos, onClickItem}) => {
  return (
    <Row glutter={16}>
      {videos.map((video) => (
        <VideoListItem onClick={onClickItem} video={video} />
      ))}
    </Row>
  );
};

export default VideoList;
