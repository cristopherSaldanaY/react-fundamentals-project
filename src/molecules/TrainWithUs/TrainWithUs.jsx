import React from "react";
import { List, Card } from "antd";
import { trainees } from "../../data/data";
import { TrainContainer, TrainItem, TrainTitle } from "./StyledTrainWithUs";

const TrainWithUs = () => {
  return (
    <TrainContainer>
      <TrainTitle>Entrena con nosotros</TrainTitle>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={trainees}
        renderItem={(trainee) => (
          <List.Item>
            <Card
              title={trainee.name}
              style={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                margin: "8px",
              }}
            >
              <p>
                <TrainItem>Número:</TrainItem> {trainee.number}
              </p>
              <p>
                <TrainItem>Lugar de entrenamiento:</TrainItem>{" "}
                {trainee.location}
              </p>
              <p>
                <TrainItem>Horario:</TrainItem> {trainee.schedule}
              </p>
            </Card>
          </List.Item>
        )}
      />
    </TrainContainer>
  );
};

export default TrainWithUs;
