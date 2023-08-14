import s from "./particule/style.module.css";

import { Card, Avatar, Carousel } from "antd";

import ImgMestre2 from "../../assets/mestreRailson.jpg";
import Eddu from "../../assets/eddu.jpg";
import Kuben from "../../assets/kuben.jpg";
const { Meta } = Card;

const AboutUs = () => {
  return (
    <div style={{marginTop: "50px"}}>
      <h2 style={{textAlign: "start"}}>Acerca del grupo</h2>
      <Carousel autoplay autoplaySpeed={20000}>
        <Card className={s.cardAbout} title="Mestre Railson">
          <Meta
            className={s.cardItem}
            avatar={
              <Avatar
                src={ImgMestre2}
                className={s.avatarItem}
                style={{ margin: "0 auto" }}
              />
            }
            description="
            Railson do Carmo Domingues, o Mestre Railson, nasceu em Arraial
            d'Ajuda/Ba em 1967, iniciou na capoeira aos 11 anos de idade com o
            Mestre Estrela em Porto Seguro/Ba. Quando o Mestre Estrela parou de dar
            aula, Mestre Railson continuou sua busca pela capoeira, e foi em uma
            viagem de férias à Belo Horizonte, em 1986, que conheceu o Mestre Mão
            Branca, se identificou com o seu trabalho e a partir daí passou a fazer
            parte do seu grupo, recebendo todas as graduações até ser formado Mestre
            em 1995"
          />
        </Card>
        <Card className={s.cardAbout} title="Contra mestre Eddu">
          <Meta
            className={s.cardItem}
            avatar={<Avatar src={Eddu} className={s.avatarItem} />}
            description="
            Railson do Carmo Domingues, o Mestre Railson, nasceu em Arraial
            d'Ajuda/Ba em 1967, iniciou na capoeira aos 11 anos de idade com o
            Mestre Estrela em Porto Seguro/Ba. Quando o Mestre Estrela parou de dar
            aula, Mestre Railson continuou sua busca pela capoeira, e foi em uma
            viagem de férias à Belo Horizonte, em 1986, que conheceu o Mestre Mão
            Branca, se identificou com o seu trabalho e a partir daí passou a fazer
            parte do seu grupo, recebendo todas as graduações até ser formado Mestre
            em 1995"
          />
        </Card>
        <Card className={s.cardAbout} title="Instructor Kuben">
          <Meta
            className={s.cardItem}
            avatar={<Avatar src={Kuben} className={s.avatarItem} />}
            description="
            Railson do Carmo Domingues, o Mestre Railson, nasceu em Arraial
            d'Ajuda/Ba em 1967, iniciou na capoeira aos 11 anos de idade com o
            Mestre Estrela em Porto Seguro/Ba. Quando o Mestre Estrela parou de dar
            aula, Mestre Railson continuou sua busca pela capoeira, e foi em uma
            viagem de férias à Belo Horizonte, em 1986, que conheceu o Mestre Mão
            Branca, se identificou com o seu trabalho e a partir daí passou a fazer
            parte do seu grupo, recebendo todas as graduações até ser formado Mestre
            em 1995"
          />
        </Card>
      </Carousel>
    </div>
  );
};

export default AboutUs;
