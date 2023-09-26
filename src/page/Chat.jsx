import React from "react";

import NavigationBar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  Card,
  Col,
  Container,
  Nav,
  Row,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import fakeImage from "../assets/image/photo.png";
import fakeImage2 from "../assets/image/profile5.png";

const Chat = () => {
  return (
    <>
      <NavigationBar />
      <div className="mt-5">
        <Container>
          <Row>
            <Col md="6" lg="4">
              <Card className="py-2 px-3 border-0" style={{ height: "80vh" }}>
                <Nav className="border-bottom">
                  <div
                    className="d-flex align-items-center "
                    style={{ height: "50px" }}
                  >
                    <h5 className="mb-0 text-black">Messages</h5>
                  </div>
                </Nav>
                <div
                  className="py-3 position-relative"
                  data-mdb-perfect-scrollbar="true"
                >
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div
                      className="d-flex align-items-center bg-warning p-1 mb-2"
                      style={{ cursor: "pointer" }}
                    >
                      <div>
                        <img src={fakeImage} alt="" style={{ width: 38 }} />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0 text-black">Luis</h6>
                        <p className="mb-0 text-white fw-light">
                          Fulltime Frontend Developer
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div
                      className="d-flex align-items-center p-1"
                      style={{ cursor: "pointer" }}
                    >
                      <div>
                        <img src={fakeImage2} alt="" style={{ width: 38 }} />
                      </div>
                      <div className="ms-2">
                        <h6 className="mb-0 text-black">Rizky</h6>
                        <p className="mb-0 fw-light">
                          Fulltime Frontend Developer
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col md="6" lg="8">
              <Card className="py-2 px-3 border-0" style={{ height: "80vh" }}>
                <div className="border-bottom">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ height: "50px" }}
                  >
                    <div className="d-flex align-items-center">
                      <div>
                        <img src={fakeImage} alt="" style={{ width: 38 }} />
                      </div>
                      <h6 className="ms-2 mb-0 text-black">Luis</h6>
                    </div>
                    <h6 className="mb-0">Fulltime Frontend Developer</h6>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <h6 className="text-black">Detail Profile</h6>
                    </Link>
                  </div>
                </div>

                <div className="py-3">
                  <div>
                    <p>hello dah selesai belum ?</p>
                  </div>
                  <div></div>
                </div>

                <div className="d-flex align-items-end h-100">
                  <InputGroup className="mb-3 gap-2" style={{ bottom: 0 }}>
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className="rounded-5"
                    />
                    <div
                      className="bg-warning rounded-circle d-flex justify-content-center align-items-center"
                      style={{ width: 40, height: 40, cursor: "pointer" }}
                    >
                      <box-icon name="paper-plane" color="white"></box-icon>
                    </div>
                  </InputGroup>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Chat;
