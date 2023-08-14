import { Card, Col } from "antd";

const { Meta } = Card;

const VideoListItem = ({ video, onClickItem }) => {
  const { title, thumbnails } = video.snippet;
  const imageUrl = thumbnails?.high?.url || thumbnails?.default?.url;

  const handleItemClick = () => {
    onClickItem(video);
  };

  return (
    <Col key={video.id.videoId} xs={24} sm={12} md={8} lg={6} xl={4} onClick={handleItemClick}>
      <Card hoverable cover={<img alt={title} src={imageUrl} />}>
        <Meta title={title} />
      </Card>
    </Col>
  );
};

export default VideoListItem;
