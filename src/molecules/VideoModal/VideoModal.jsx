import React from "react";
import { Button, Modal } from "antd";

const VideoModal = ({ open, onOk, selectedVideo }) => {
  const handleOk = () => {
    const iframe = document.getElementById("videoIframe");
    if (iframe) {
      iframe.src = "";
    }

    iframe.src = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    onOk();
  };

  return (
    <Modal
      title={selectedVideo.snippet.title}
      closable={false}
      maskClosable={false}
      open={open}
      onCancel={onOk}
      width={1000}
      footer={[
        <Button key="ok" onClick={handleOk} type="primary">
          CERRAR
        </Button>,
      ]}
    >
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
          id="videoIframe"
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
          title={selectedVideo.snippet.title}
          style={{ border: "none" }}
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default VideoModal;
