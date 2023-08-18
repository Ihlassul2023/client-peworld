import React from "react";

import { Card, Container, Button } from "react-bootstrap";

import fakePhoto from "../../assets/image/photo.png";
import "./card.css";

const Cards = () => {
  return (
    <Container>
      <Card className="border-0 rounded-0">
        <div className="p-3 d-flex justify-content-between">
          <div className="d-flex">
            <img
              src={fakePhoto}
              alt="photo profile"
              className="rounded-circle"
              style={{ width: 80, height: 80 }}
            />
            <div className="ms-3">
              <h5 className="text-black">Louis Tomlinson</h5>
              <p className="mb-1">Web developer</p>
              <div className="d-flex">
                <box-icon name="map"></box-icon>
                <p className="ps-1">London, UK</p>
              </div>
              <div className="d-flex gap-2">
                <Button variant="warning" className="btn-sm px-3 text-white">
                  Next JS
                </Button>
                <Button variant="warning" className="btn-sm px-3 text-white">
                  React JS
                </Button>
                <Button variant="warning" className="btn-sm px-3 text-white">
                  Node
                </Button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Button className="btn-sm px-3 border-0 py-2 rounded-0 custom-button">
              Lihat Profile
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Cards;
