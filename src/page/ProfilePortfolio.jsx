import React from "react";

import NavigationBar from "../component/Navbar";
import Footer from "../component/Footer";

import "../assets/css/main.css";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import CardPortfolio from "../component/CardPortfolio/CardPortfolio";

import fakePhotoProfile from "../assets/image/photo.png";

// import image
import fakePorto1 from "../assets/image/fakePorto1.png";
import fakePorto2 from "../assets/image/fakePorto2.png";
import fakePorto3 from "../assets/image/fakePorto3.png";
import fakePorto4 from "../assets/image/fakePorto4.png";
import fakePorto5 from "../assets/image/fakePorto5.png";
import fakePorto6 from "../assets/image/fakePorto6.png";

import tokoPediaImg from "../assets/image/tokopedia.png";

const ProfilePortfolio = () => {
  const dataPhoto = [
    {
      id: 1,
      image: fakePorto1,
      title: "Remainder app",
    },
    {
      id: 2,
      image: fakePorto2,
      title: "Social media app",
    },
    {
      id: 3,
      image: fakePorto3,
      title: "Project management web",
    },
    {
      id: 4,
      image: fakePorto4,
      title: "Remainder app",
    },
    {
      id: 5,
      image: fakePorto5,
      title: "Social media app",
    },
    {
      id: 6,
      image: fakePorto6,
      title: "Project management web",
    },
  ];

  return (
    <>
      <header>
        <NavigationBar />
        <div className="back-background"></div>
      </header>
      <main className="mt-5">
        <Container>
          <Row className="">
            <Col md="4">
              <Card className="p-3 pt-5 border-0">
                <div className="d-flex justify-content-center">
                  <img
                    src={fakePhotoProfile}
                    alt=""
                    className="rounded-circle"
                    style={{ width: 100, height: 100 }}
                  />
                </div>
                <div className="mt-4">
                  <h5 className="text-black">Louis Tomlinson</h5>
                  <p className="fw-medium fs-6 mb-2 text-black">
                    Web Developer
                  </p>
                  <div className="d-flex">
                    <box-icon
                      name="map"
                      animation="tada"
                      color="gray"
                    ></box-icon>
                    <p className="ms-2">London, UK</p>
                  </div>
                  <p>Freelancer</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>

                <div className="mt-5">
                  <h5>Skill</h5>
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
                  </div>
                  <div className="mt-5">
                    <div className="d-flex">
                      <box-icon
                        name="envelope"
                        color="gray"
                        animation="tada"
                      ></box-icon>
                      <p className="ms-3">Louistommo@gmail.com</p>
                    </div>
                    <div className="d-flex">
                      <box-icon
                        name="instagram"
                        type="logo"
                        color="gray"
                        animation="tada"
                      ></box-icon>
                      <p className="ms-3">@Louist91</p>
                    </div>
                    <div className="d-flex">
                      <box-icon
                        type="logo"
                        name="github"
                        color="gray"
                        animation="tada"
                      ></box-icon>
                      <p className="ms-3">@Louistommo</p>
                    </div>
                    <div className="d-flex">
                      <box-icon
                        name="gitlab"
                        type="logo"
                        color="gray"
                        animation="tada"
                      ></box-icon>
                      <p className="ms-3">@Louistommo91</p>
                    </div>
                  </div>
                </div>
                <Button className="py-2 mt-3 custom-button">Hire</Button>
              </Card>
            </Col>
            <Col md="8">
              <Card className="border-0 p-3">
                <div>
                  <h4 className="text-black fw-semibold custom-line">
                    Portofolio
                  </h4>
                </div>

                <div className="mt-4">
                  <Row className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                    {dataPhoto.map((item, index) => (
                      <CardPortfolio
                        image={item.image}
                        title={item.title}
                        key={item.id}
                      />
                    ))}
                  </Row>
                </div>

                <div>
                  <h4 className="text-black fw-semibold custom-line">
                    Pengalaman Kerja
                  </h4>

                  <div className="mt-4">
                    <div className="d-flex flex-row pe-0 pe-md-5">
                      <div>
                        <img
                          src={tokoPediaImg}
                          alt="image"
                          style={{ width: 80, height: 80 }}
                        />
                      </div>
                      <div className="ms-3 mt-2">
                        <h5 className="text-black mb-0">Enginner</h5>
                        <p className="fw-light mb-0 text-black">Tokopedia</p>
                        <p className="fw-lighter">
                          July 2019 - January 2020{" "}
                          <span className="ms-2">6 months</span>
                        </p>
                        <p className="fw-normal text-black ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum erat orci, mollis nec gravida sed,
                          ornare quis urna. Curabitur eu lacus fringilla,
                          vestibulum risus at.
                        </p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePortfolio;
