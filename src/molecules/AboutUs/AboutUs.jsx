import s from "./particule/style.module.css";
import { Card, Avatar, Carousel } from "antd";
import { members } from "../../data/data"
const { Meta } = Card;

const AboutUs = () => {

  return (
    <div style={{ marginTop: "50px" }}>
      <h2 style={{ textAlign: "start" }}>Acerca del grupo</h2>
      <Carousel autoplay autoplaySpeed={20000}>
        {members.map((member, index) => (
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
