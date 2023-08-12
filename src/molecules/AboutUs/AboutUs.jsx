import React from "react";
import s from "./particule/style.module.css";
import LogoCircle from "../../assets/logoCircular.png";
import { Card, Avatar } from "antd";
const { Meta } = Card;

const AboutUs = () => {
  return (
    <Card className={s.cardAbout}>
      <Meta
        avatar={<Avatar size={64} src={LogoCircle} />}
        title="Grupo Capoeira Sul da Bahia - San Bernardo, Chile"
        description="Railson do Carmo Domingues, o Mestre Railson, nasceu em Arraial
      d'Ajuda/Ba em 1967, iniciou na capoeira aos 11 anos de idade com
      o Mestre Estrela em Porto Seguro/Ba. Quando o Mestre Estrela
      parou de dar aula, Mestre Railson continuou sua busca pela
      capoeira, e foi em uma viagem de férias à Belo Horizonte, em
      1986, que conheceu o Mestre Mão Branca, se identificou com o seu
      trabalho e a partir daí passou a fazer parte do seu grupo,
      recebendo todas as graduações até ser formado Mestre em 1995"
      />
    </Card>
  );
};

export default AboutUs;
