import { Row } from "antd";
import VideoListItem from "./../VideoListItem/VideoListItem";
import s from "./particule/style.module.css";

const VideoList = ({ videos, onClickItem }) => {
  const handleVideoItemClick = (video) => {
    onClickItem(video);
  };

  return (
    <Row gutter={16} style={{ gap: "10px" }}>
      {videos.map((video) => (
        <VideoListItem
          key={video.etag}
          onClickItem={() => handleVideoItemClick(video)}
          video={video}
        />
      ))}
    </Row>
  );
};

export default VideoList;
