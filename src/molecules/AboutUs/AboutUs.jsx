import React from "react";
import s from "./particule/style.module.css";

import { Card, Avatar, Row, Carousel } from "antd";

import ImgMestre2 from "../../assets/mestreRailson.jpg";
import Eddu from "../../assets/eddu.jpg";
import Kuben from "../../assets/kuben.jpg"
const { Meta } = Card;

const AboutUs = () => {
  return (
    <Carousel autoplay autoplaySpeed={20000}>
      <Card className={s.cardAbout} title="Mestre Railson">
        <Meta
          avatar={
            <Avatar
              src={ImgMestre2}
              style={{ width: "200px", height: "200px" }}
            />
          } // Aquí puedes usar la imagen más pequeña
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
          avatar={
            <Avatar src={Eddu} style={{ width: "200px", height: "200px" }} />
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
      <Card className={s.cardAbout} title="Instructor Kuben">
        <Meta
          avatar={
            <Avatar src={Kuben} style={{ width: "200px", height: "200px" }} />
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
    </Carousel>

    /*     <Card
      hoverable
      style={{
        width: "100%",
        height: "100%"
      }}
      cover={
        <img
          alt="example"
          src={ImgMestre}
        />
      }
    >
      <Meta
        title="Europe Street beat"
        description="Railson do Carmo Domingues, o Mestre Railson, nasceu em Arraial d'Ajuda/Ba
      em 1967, iniciou na capoeira aos 11 anos de idade com o Mestre Estrela em
      Porto Seguro/Ba. Quando o Mestre Estrela parou de dar aula, Mestre Railson
      continuou sua busca pela capoeira, e foi em uma viagem de férias à Belo
      Horizonte, em 1986, que conheceu o Mestre Mão Branca, se identificou com o
      seu trabalho e a partir daí passou a fazer parte do seu grupo, recebendo
      todas as graduações até ser formado Mestre em 1995"
      />
    </Card> */
  );
};

export default AboutUs;
