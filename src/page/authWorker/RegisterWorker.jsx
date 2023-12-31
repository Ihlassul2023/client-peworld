import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action/worker";
import { ToastContainer } from "react-toastify";

import bannerPhoto from "../../assets/image/bannerPhoto.png";
import Logo1 from "../../assets/image/logo1.png";
import "../../assets/css/main.css";

const RegisterWorker = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.registerWorker);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const [show, setShow] = useState(false);
  useEffect(() => {
    !isLoading && data && setShow(true);
  }, [isLoading]);
  const postDataRegister = async (e) => {
    e.preventDefault();
    dispatch(register(form, navigate));
  };

  const onChangeRegister = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("Register Worker", form);
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="p-3 text-center">
            <box-icon
              type="solid"
              name="message-rounded-check"
              size="lg"
              color="#5e50a1"
            ></box-icon>
            <h4 className="text-black">You're all set!</h4>
            <p className="fw-light text-black">
              Please check your email account for verification
            </p>
            <Button
              onClick={() => setShow(false)}
              className="custom-btn btn-sm py-2 px-3"
            >
              OK
            </Button>
          </div>
        </Modal.Body>
      </Modal>
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
                      alt="Logo Peworld"
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
                Selamat datand di peworld, aplikasi web untuk show off CV talent
                berbakat.
              </p>

              <Form onSubmit={postDataRegister}>
                <Form.Group className="mb-3">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={onChangeRegister}
                    value={form.name}
                    className="py-3"
                    placeholder="Masukan nama panjang"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={onChangeRegister}
                    value={form.email}
                    className="py-3"
                    placeholder="Masukan alamat email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>No handphone</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    onChange={onChangeRegister}
                    value={form.phone}
                    className="py-3"
                    placeholder="Masukkan no handphone"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={onChangeRegister}
                    value={form.password}
                    className="py-3"
                    placeholder="Masukan kata sandi"
                  />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Konfirmasi kata sandi</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirm_password"
                    onChange={onChangeRegister}
                    value={form.confirm_password}
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
                    to="/loginWorker"
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
      <ToastContainer />
    </div>
  );
};

export default RegisterWorker;
