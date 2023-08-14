import React from "react";
import { List, Card } from "antd";
import s from "./particule/style.module.css"

const TrainWithUs = () => {
  const trainees = [
    {
      name: "Eduardo Concha",
      number: "+56988597650",
      location: "Dojo Old School - América 1109, San Bernardo",
      schedule: "Martes, Miércoles, 19:00 - 20:30 y Sabado 17:00",
    }
  ];
  return (
    <div>
      <h2>Entrena con nosotros</h2>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={trainees}
        renderItem={(trainee) => (
          <List.Item>
            <Card
              title={trainee.name}
              style={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra
                margin: "8px", // Margen alrededor de la tarjeta
              }}
            >
              <p><span style={{color: "black", fontWeight: "600"}}>Número:</span> {trainee.number}</p>
              <p><span style={{color: "black", fontWeight: "600"}}>Lugar de entrenamiento:</span> {trainee.location}</p>
              <p><span style={{color: "black", fontWeight: "600"}}>Horario:</span> {trainee.schedule}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TrainWithUs;
