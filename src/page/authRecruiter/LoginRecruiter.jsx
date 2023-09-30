import React, { useState, useEffect } from "react";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/recruiter";
import { ToastContainer } from "react-toastify";

import bannerPhoto from "../../assets/image/bannerPhoto.png";
import Logo1 from "../../assets/image/logo1.png";
import "../../assets/css/main.css";

const LoginRecruiter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const postDataLogin = async (e) => {
    e.preventDefault();
    dispatch(login(inputData, navigate));
  };

  const onChangeLogin = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log("Login Recruiter", inputData);
  };

  return (
    <div>
      <Container className="py-3">
        <Row className="">
          <Col md="6" className="">
            <Card className="border-0">
              <div className="bannerPhoto">
                <img src={bannerPhoto} alt="" srcSet="" />
              </div>
              <div className="card-img-overlay">
                <div className="ps-4 mt-3">
                  <Link to={"/"}>
                    <img
                      src={Logo1}
                      alt=""
                      className=""
                      style={{ width: 100 }}
                    />
                  </Link>
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
                Login sebagai Recruiter dan temukan talent yang cocok dengan
                perusahaan Anda.
              </p>

              <Form onSubmit={postDataLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={onChangeLogin}
                    value={inputData.email}
                    className="py-3"
                    placeholder="Masukan alamat email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={onChangeLogin}
                    value={inputData.password}
                    className="py-3"
                    placeholder="Masukan kata sandi"
                  />
                </Form.Group>
                <div className="text-end">
                  <Link
                    to=""
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    Lupa kata sandi?
                  </Link>
                </div>
                <div className="mt-3">
                  <Button
                    type="submit"
                    variant="warning"
                    className="d-block w-100 py-3 text-white fw-bold"
                  >
                    Masuk
                  </Button>
                </div>
              </Form>
              <div className="d-flex justify-content-center mt-3">
                <p>
                  Anda belum punya akun?{" "}
                  <Link
                    to="/registerRecruiter"
                    className="text-warning"
                    style={{ textDecoration: "none" }}
                  >
                    Daftar disini
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default LoginRecruiter;
