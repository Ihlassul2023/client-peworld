import React from "react";
import "../assets/css/main.css";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

import NavigationBar from "../component/Navbar";
import Footer from "../component/Footer";

import fakePhotoProfile from "../assets/image/photo.png";

const Hire = () => {
  return (
    <>
      <NavigationBar />
      <main className="mt-5">
        <Container>
          <Row className="gap-5">
            <Col md="4">
              <Card className="px-3 py-4 border-0">
                <div className="d-flex justify-content-center">
                  <img
                    src={fakePhotoProfile}
                    alt=""
                    className="rounded-circle"
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <div className="mt-4">
                  <h5 className="text-black fw-bold">Louis Tomlinson</h5>
                  <p className="fw-medium fs-6 text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci.
                  </p>
                  <div className="d-flex">
                    <box-icon
                      name="map"
                      animation="tada"
                      color="gray"
                    ></box-icon>
                    <p className="ms-2">London, UK</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>

                <div className="mt-5">
                  <h5 className="text-black mb-3">Skill</h5>
                  <div className="d-flex flex-wrap gap-3">
                    <button className="btn btn-sm btn-warning text-white px-3">
                      Phyton
                    </button>
                    <button className="btn btn-sm btn-warning text-white px-3">
                      Laravel
                    </button>
                    <button className="btn btn-sm btn-warning text-white px-3">
                      Golang
                    </button>
                    <button className="btn btn-sm btn-warning text-white px-3">
                      Javascript
                    </button>
                    <button className="btn btn-sm btn-warning text-white px-3">
                      PHP
                    </button>
                    <button className="btn btn-sm btn-warning text-white px-3">
                      HTML
                    </button>
                    <button className="btn btn-sm btn-warning text-white px-3">
                      Kotlin
                    </button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="7">
              <div className="border-0 p-3">
                <div>
                  <h4 className="text-black fw-semibold">
                    Hubungi Louis Tomlinson
                  </h4>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                  <Form className="mt-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="fw-light">Untuk Posisi</Form.Label>
                      <Form.Control
                        type="text"
                        className="py-2"
                        placeholder="Fulltime Frontend Developer"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fw-light">Deskripsi</Form.Label>
                      <Form.Control
                        as="textarea"
                        aria-label="With textarea"
                        rows="6"
                      />
                    </Form.Group>
                    <div className="mt-4">
                      <Button
                        type="submit"
                        className="d-block w-100 py-2 bg-warning border-0"
                      >
                        Hire
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Hire;
