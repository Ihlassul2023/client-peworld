import React from "react";

import Footer from "../component/Footer";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Col,
  ListGroup,
  Card,
} from "react-bootstrap";
import logoPurple from "../assets/image/logoPurple.png";
import imgLanding1 from "../assets/image/imgLanding1.png";
import imgLanding2 from "../assets/image/imgLanding2.png";
import imgLanding3 from "../assets/image/imgLanding3.png";

// import img profile for users testimonials
import userTesti1 from "../assets/image/photo.png";
import userTesti2 from "../assets/image/profile2.png";
import userTesti3 from "../assets/image/profile3.png";
import userTesti4 from "../assets/image/profile4.png";
import userTesti5 from "../assets/image/profile5.png";
import userTesti6 from "../assets/image/profile6.png";

import "../assets/css/main.css";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* navigationbar start */}
      <Navbar expand="lg" className="bg-body-tertiary py-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logoPurple}
              alt=""
              className=""
              style={{ width: "100px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              <Button
                onClick={() => navigate("/loginRecruiter")}
                className="custom-btn-outline btn-sm px-3 py-2"
              >
                Masuk Untuk Perekrut
              </Button>
              <Button
                onClick={() => navigate("/loginWorker")}
                className="custom-btn btn-sm px-3 py-2"
              >
                Masuk Untuk Pekerja
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* navigationbar end // Header */}

      {/* Header */}

      <header>
        <Container className="mt-5">
          <Row style={{}}>
            <Col md="6">
              <div className="h-100 d-flex align-items-center">
                <div className="">
                  <h1 className="text-black">
                    Talenta terbaik negri untuk perubahan revolusi 4.0
                  </h1>
                  <p className="mt-3">
                    Peworld menyederhanakan proses prekrutan. mengobrol secara
                    langsung dengan kandidat yang telah terverifikasi,
                    memastikan pengalaman perekrutan yang sederhana, cepat dan
                    efektif.
                  </p>
                  <Button className="mt-3 custom-btn btn-sm py-2 px-3">
                    Mulai Dari Sekarang
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div>
                <img src={imgLanding1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="mt-5">
        <Container>
          <Row>
            <Col md="6">
              <div>
                <img src={imgLanding2} alt="" style={{ width: "88%" }} />
              </div>
            </Col>
            <Col md="6">
              <div>
                <h1 className="text-black mt-5">
                  Kenapa harus mencari tallent di peworld
                </h1>
                <div className="mt-4">
                  <ListGroup>
                    <ListGroup.Item className="border-0 bg-transparent">
                      <div className="d-flex gap-3 text-black fw-light">
                        <box-icon
                          type="solid"
                          color="#5e50a1"
                          name="check-circle"
                        ></box-icon>
                        User talah terverifikasi.
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 bg-transparent">
                      <div className="d-flex gap-3 text-black fw-light">
                        <box-icon
                          type="solid"
                          color="#5e50a1"
                          name="check-circle"
                        ></box-icon>
                        Cepat dalam pencarian talent.
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 bg-transparent">
                      <div className="d-flex gap-3 text-black fw-light">
                        <box-icon
                          type="solid"
                          color="#5e50a1"
                          name="check-circle"
                        ></box-icon>
                        Dapat mengobrol secara langsung dengan menggunakan fitur
                        chat.
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mt-5">
        <Container>
          <Row>
            <Col md="6">
              <div>
                <h1 className="text-black mt-5">Skill Talent</h1>
                <p>
                  Anda dapat menemukan talent-talent yang mempunyai berbagai
                  skill dengan menggunakan fitur search filter secara langsung.
                </p>
                <div className="mt-4">
                  <div className="d-flex gap-4">
                    <ListGroup>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-light">
                          <box-icon
                            type="solid"
                            color="#FBB017"
                            name="check-circle"
                          ></box-icon>
                          Java
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-light">
                          <box-icon
                            type="solid"
                            color="#FBB017"
                            name="check-circle"
                          ></box-icon>
                          Kotlin
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-light">
                          <box-icon
                            type="solid"
                            color="#FBB017"
                            name="check-circle"
                          ></box-icon>
                          PHP
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-light">
                          <box-icon
                            type="solid"
                            color="#FBB017"
                            name="check-circle"
                          ></box-icon>
                          Javascript
                        </div>
                      </ListGroup.Item>
                    </ListGroup>

                    <ListGroup>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-light">
                          <box-icon
                            type="solid"
                            color="#FBB017"
                            name="check-circle"
                          ></box-icon>
                          Golang
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-light">
                          <box-icon
                            type="solid"
                            color="#FBB017"
                            name="check-circle"
                          ></box-icon>
                          C++
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-light">
                          <box-icon
                            type="solid"
                            color="#FBB017"
                            name="check-circle"
                          ></box-icon>
                          Ruby
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        <div className="d-flex gap-3 text-black fw-light">
                          <box-icon
                            type="solid"
                            color="#FBB017"
                            name="check-circle"
                          ></box-icon>
                          10+ Bahasa lainnya
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div>
                <img src={imgLanding3} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* their opinion aabout peworld */}
      <div className="mt-5">
        <div className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <Container>
              <h1 className="text-center text-black fw-bold mb-4">
                Their Opinion about peworld
              </h1>
              <div className="carousel-item active">
                <Row>
                  <Col md="6" lg="4">
                    <Card className="shadow border-0 p-4 m-3">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={userTesti1}
                          alt=""
                          className="rounded-circle border border-4 border-warning"
                          style={{ width: 100 }}
                        />
                        <h4 className="mt-3 text-black">Louis Tomlinson</h4>
                        <p>Frontend Web Developer</p>
                        <p className="text-black fw-light">
                          platform ini memungkinkan tim rekrutmen saya untuk
                          menyaring kandidat, meningkatkan efisiensi
                          perekrutandan menghemat waktu yang tek terhitung
                          jumlahnya.
                        </p>
                      </div>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                  <Col md="6" lg="4">
                    <Card className="shadow border-0 p-4 m-3">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={userTesti1}
                          alt=""
                          className="rounded-circle border border-4 border-warning"
                          style={{ width: 100 }}
                        />
                        <h4 className="mt-3 text-black">Bobby Holland</h4>
                        <p>Android Developer</p>
                        <p className="text-black fw-light">
                          platform ini memungkinkan tim rekrutmen saya untuk
                          menyaring kandidat, meningkatkan efisiensi
                          perekrutandan menghemat waktu yang tek terhitung
                          jumlahnya.
                        </p>
                      </div>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                  <Col md="6" lg="4">
                    <Card className="shadow border-0 p-4 m-3">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={userTesti3}
                          alt=""
                          className="rounded-circle border border-4 border-warning"
                          style={{ width: 100 }}
                        />
                        <h4 className="mt-3 text-black">James McAllister</h4>
                        <p>Fullstack Web Developer</p>
                        <p className="text-black fw-light">
                          platform ini memungkinkan tim rekrutmen saya untuk
                          menyaring kandidat, meningkatkan efisiensi
                          perekrutandan menghemat waktu yang tek terhitung
                          jumlahnya.
                        </p>
                      </div>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="carousel-item">
                <Row>
                  <Col md="6" lg="4">
                    <Card className="shadow border-0 p-4 m-3">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={userTesti4}
                          alt=""
                          className="rounded-circle border border-4 border-warning"
                          style={{ width: 100 }}
                        />
                        <h4 className="mt-3 text-black">Normov Abrahamov</h4>
                        <p>Mobile Developer</p>
                        <p className="text-black fw-light">
                          platform ini memungkinkan tim rekrutmen saya untuk
                          menyaring kandidat, meningkatkan efisiensi
                          perekrutandan menghemat waktu yang tek terhitung
                          jumlahnya.
                        </p>
                      </div>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                  <Col md="6" lg="4">
                    <Card className="shadow border-0 p-4 m-3">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={userTesti5}
                          alt=""
                          className="rounded-circle border border-4 border-warning"
                          style={{ width: 100 }}
                        />
                        <h4 className="mt-3 text-black">Nial Horan</h4>
                        <p>Fullstack Developer</p>
                        <p className="text-black fw-light">
                          platform ini memungkinkan tim rekrutmen saya untuk
                          menyaring kandidat, meningkatkan efisiensi
                          perekrutandan menghemat waktu yang tek terhitung
                          jumlahnya.
                        </p>
                      </div>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                  <Col md="6" lg="4">
                    <Card className="shadow border-0 p-4 m-3">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src={userTesti6}
                          alt=""
                          className="rounded-circle border border-4 border-warning"
                          style={{ width: 100 }}
                        />
                        <h4 className="mt-3 text-black">Harry Styles</h4>
                        <p>Web Developer</p>
                        <p className="text-black fw-light">
                          platform ini memungkinkan tim rekrutmen saya untuk
                          menyaring kandidat, meningkatkan efisiensi
                          perekrutandan menghemat waktu yang tek terhitung
                          jumlahnya.
                        </p>
                      </div>
                      <Card.Body></Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden mt-5">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Start now section */}

      <div className="" style={{ marginTop: 120 }}>
        <Container>
          <Card className="p-5 border-0 custom-startnow-card">
            <div className="d-flex justify-content-between">
              <h3 className="mb-0 text-white">
                Ayo cari talent <br /> sekarang juga !
              </h3>

              <div className="d-flex align-items-center">
                <Button className="btn btn-sm py-2 px-3 button-startnow-button">
                  Mulai Sekarang
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
