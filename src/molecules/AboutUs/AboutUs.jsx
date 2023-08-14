import s from "./particule/style.module.css";

import { Card, Avatar, Carousel } from "antd";

import ImgMestre2 from "../../assets/mestreRailson.jpg";
import Eddu from "../../assets/eddu.jpg";
import Kuben from "../../assets/kuben.jpg";
const { Meta } = Card;

const AboutUs = () => {

  const groupMembers = [
    {
      name: "Mestre Railson",
      avatar: ImgMestre2,
      description: "Descripción de Mestre Railson...",
    },
    {
      name: "Contra mestre Eddu",
      avatar: Eddu,
      description: "Descripción de Contra mestre Eddu...",
    },
    {
      name: "Instructor Kuben",
      avatar: Kuben,
      description: "Descripción de Instructor Kuben...",
    },
  ];



  return (
    <div style={{ marginTop: "50px" }}>
      <h2 style={{ textAlign: "start" }}>Acerca del grupo</h2>
      <Carousel autoplay autoplaySpeed={20000}>
        {groupMembers.map((member, index) => (
          <Card className={s.cardAbout} title={member.name} key={index}>
            <Meta
              className={s.cardItem}
              avatar={
                <Avatar
                  src={member.avatar}
                  className={s.avatarItem}
                />
              }
              description={member.description}
            />
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default AboutUs;
