import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import bannerPhoto from "../../assets/images/bannerPhoto.png";
import Logo1 from "../../assets/images/logo1.png";
import "../../assets/css/main.css";

const RegisterRecruiter = () => {
  return (
    <div>
      <Container className="py-3">
        <Row className="">
          <Col md="6" className="">
            <Card className="border-0">
              <div className="bannerPhoto">
                <img src={bannerPhoto} alt="" />
              </div>
              <div className="card-img-overlay">
                <div className="ps-4 mt-3">
                  <img src={Logo1} alt="" className="" style={{ width: 100 }} />
                </div>
                <div className="h-75 d-flex align-items-center">
                  <div className="ms-4">
                    <h2 className="text-white w-75">
                      Temukan developer berbakat & terbaik di berbagai bidang
                      keahlian
                    </h2>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col md="6">
            <div className="mt-3 mt-md-5 ps-0 ps-md-4">
              <h3>Halo, Pewpeople</h3>
              <p className="text-desc fw-lighter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    className="py-3"
                    placeholder="Masukan nama panjang"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="py-3"
                    placeholder="Masukan alamat email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Perusahaan</Form.Label>
                  <Form.Control
                    type="text"
                    className="py-3"
                    placeholder="Masukan nama perusahaan"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jabatan</Form.Label>
                  <Form.Control
                    type="text"
                    className="py-3"
                    placeholder="Posisi di perusahaan Anda"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>No handphone</Form.Label>
                  <Form.Control
                    type="number"
                    className="py-3"
                    placeholder="Masukkan no handphone"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    className="py-3"
                    placeholder="Masukan kata sandi"
                  />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Konfirmasi kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    className="py-3"
                    placeholder="Masukan konfirmasi kata sandi"
                  />
                </Form.Group>

                <div>
                  <Button
                    type="submit"
                    variant="warning"
                    className="d-block w-100 py-3 text-white fw-bold"
                  >
                    Daftar
                  </Button>
                </div>
              </Form>
              <div className="d-flex justify-content-center mt-3">
                <p>
                  Anda sudah punya akun?{" "}
                  <Link
                    to=""
                    className="text-warning"
                    style={{ textDecoration: "none" }}
                  >
                    Masuk disini
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterRecruiter;
