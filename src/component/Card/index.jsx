import React from "react";

import { Card, Container, Button } from "react-bootstrap";

import "./card.css";
import { useNavigate } from "react-router";

const Cards = (props) => {
  const navigate = useNavigate();
  // console.log(props.id);
  return (
    <>
      <Container>
        <Card className="border-0 rounded-0">
          <div className="p-3 d-md-flex justify-content-between" key={props.id}>
            <div className="d-flex">
              <img src={props.image} alt="photo profile" className="rounded-circle" style={{ width: 80, height: 80 }} />
              <div className="ms-3">
                <h5 className="text-black">{props.name}</h5>
                <p className="mb-1">{props.jobdesk}</p>
                <div className="d-flex">
                  <box-icon name="map" color="gray" animation="tada"></box-icon>
                  <p className="ps-1">{props.address}</p>
                </div>
                <div className="d-flex gap-2 flex-wrap flex-grow-1">
                  {props.skill.map((skill, index) => (
                    <Button variant="warning" className="btn-sm px-3 text-white" key={index}>
                      {skill}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-block d-md-flex align-items-md-center mt-3 mt-md-0">
              <Button onClick={() => navigate(`/profilePortfolio/${props.id}`)} className="btn-sm px-3 border-0 py-2 rounded-0 custom-button d-block mx-auto">
                Lihat Profile
              </Button>
            </div>
          </div>
          <hr className="mx-3" />
        </Card>
      </Container>
    </>
  );
};

export default Cards;
