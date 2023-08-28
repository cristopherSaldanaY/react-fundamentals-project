import React from "react";
import { List, Card } from "antd";
import { trainees} from "../../data/data"

const TrainWithUs = () => {
  return (
    <div style={{marginTop: "50px"}}>
      <h2 style={{textAlign: "start"}}>Entrena con nosotros</h2>
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
