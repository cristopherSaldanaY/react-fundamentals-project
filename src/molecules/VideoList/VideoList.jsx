import React from "react";
import s from "./particule/style.module.css";
import { Row, Col } from "antd";
import VideoListItem from "./../VideoListItem/VideoListItem";

const VideoList = ({videos, onClickItem}) => {

  const handleVideoItemClick  = (video) =>{
    onClickItem(video)
  }

  return (
    <Row glutter={16} style={{gap: "10px"}}>
      {videos.map((video) => (
        <VideoListItem key={video.etag} onClickItem={() => handleVideoItemClick(video)} video={video}  />
      ))}
    </Row>
  );
};

export default VideoList;
