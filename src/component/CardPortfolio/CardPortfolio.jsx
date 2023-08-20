import React from "react";
import { Col, Card } from "react-bootstrap";

const CardPortfolio = (props) => {
  return (
    <>
      <Col key={props.id}>
        <Card className="border-0">
          <img src={props.image} alt={props.title} />
          <Card.Body>
            <p className="text-center fw-lighter text-black">{props.title}</p>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardPortfolio;
