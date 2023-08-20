// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Container,
  Form,
  FloatingLabel,
  InputGroup,
  Modal,
  Image,
} from "react-bootstrap";
import "../assets/css/main.css";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import photo from "../assets/image/photo.png";
import edit from "../assets/image/edit.svg";
import map from "../assets/image/map-pin.png";

export default function EditProfileCompany() {
  const [showModal, setShowModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState(photo);
  const [editedData, setEditedData] = useState({
    companyName: "",
    field: "",
    province: "",
    city: "",
    shortDescription: "",
    email: "",
    companyEmail: "",
    phoneNumber: "",
    linkedIn: "",
  });

  const handleEditPhoto = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePhotoChange = (e) => {
    const newPhotoFile = e.target.files[0];
    if (newPhotoFile) {
      const newPhotoUrl = URL.createObjectURL(newPhotoFile);
      setNewPhoto(newPhotoUrl);
    }
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Edited Data:", editedData);
  };
  return (
    <>
      <Navbar />
      <div className="purple-block"></div>
      <Container className="container-card-perusahaan">
        <Row>
          <Col lg={4}>
            <Card style={{ width: "100%" }}>
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <div className="edit-utility d-flex align-items-center mt-3">
                  <Image src={edit} style={{ width: "1rem" }} />
                  <Button
                    variant="secondary"
                    className="edit-button-perusahaan bg-transparent border-0 text-secondary"
                    onClick={handleEditPhoto}
                  >
                    Edit
                  </Button>
                </div>
                <div className="rounded-circle image-container-perusahaan ">
                  <Card.Img src={newPhoto} />
                </div>
              </Card.Body>
              <Card.Body className="d-flex flex-column align-items-start mx-2">
                <Card.Title className="mt-3">
                  <h4>PT. Martabat Jaya Abadi</h4>
                </Card.Title>
                <Card.Title className="mt-1">
                  <h6>Financial</h6>
                </Card.Title>
                <Card.Text className="d-flex">
                  <Row>
                    <Col lg={1}>
                      <Image
                        src={map}
                        style={{ width: "1rem", height: "1rem" }}
                      />
                    </Col>
                    <Col>
                      <p className="ms-2">Purwokerto, Jawa Tengah</p>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <div className="d-grid gap-2 mt-2">
              <Button id="button-simpan-perusahaan" size="lg">
                Simpan
              </Button>
              <Button id="button-batal-perusahaan" size="lg">
                Batal
              </Button>
            </div>
          </Col>
          <Col lg={8}>
            <Card className="card-edit-company" style={{ width: "100%" }}>
              <Card.Body className="card-edit-company d-flex flex-column  justify-content-start">
                <Card.Title>Data Diri</Card.Title>
                <hr />
                <Form>
                  <Form.Group className="mb-3" controlId="nama-perusahaan">
                    <Form.Label className="ms-2">Company Name</Form.Label>
                    <FloatingLabel
                      controlId="floatingNamaPerusahaan"
                      label="Masukkan Nama Perusahaan"
                      className="mb-2"
                    >
                      <Form.Control type="text" placeholder="PT. Peworld" />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="bidang-perusahaan">
                    <Form.Label className="ms-2">Bidang</Form.Label>
                    <FloatingLabel
                      controlId="floatingBidangPerusahaan"
                      label="Masukkan bidang perusahaan ex: Financial"
                      className="mb-2"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Financial / Law / etc"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="provinsi-perusahaan">
                    <Form.Label className="ms-2">Province</Form.Label>
                    <FloatingLabel
                      controlId="floatingProvinsi"
                      label="Provinsi"
                    >
                      <Form.Select aria-label="select-provinsi">
                        <option>Choose Province</option>
                        <option value="1">Jawa Barat</option>
                        <option value="2">Jawa Tengah</option>
                        <option value="3">Jawa Timur</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="kota-perusahaan">
                    <Form.Label className="ms-2">City</Form.Label>
                    <FloatingLabel controlId="floatingCity" label="City">
                      <Form.Select aria-label="select-city">
                        <option>Choose City</option>
                        <option value="1">Bandung</option>
                        <option value="2">Yogyakarta</option>
                        <option value="3">Surabaya</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="desc-perusahaan">
                    <Form.Label className="ms-2">Short Description</Form.Label>
                    <FloatingLabel
                      controlId="floatingDescPerusahaan"
                      label="Give a short description about your company"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="short-description"
                        style={{ height: "150px" }}
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email-recruiter">
                    <Form.Label className="ms-2">Email</Form.Label>
                    <FloatingLabel
                      controlId="floatingEmailRecruiter"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email-perusahaan">
                    <Form.Label className="ms-2">Company Email</Form.Label>
                    <FloatingLabel
                      controlId="floatingEmailPerusahaan"
                      label="Company Email address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="nomor-telepon">
                    <Form.Label className="ms-2">Phone Number</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">+62</InputGroup.Text>
                      <Form.Control
                        placeholder=""
                        aria-label="nomor-telepon"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="linkedIn">
                    <Form.Label className="ms-2">Bidang</Form.Label>
                    <FloatingLabel
                      controlId="floatingLinkedIn"
                      label="linkedin.com/in/xxx"
                      className="mb-2"
                    >
                      <Form.Control type="text" placeholder="Your linkedIn" />
                    </FloatingLabel>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
      {/* Modal for editing photo */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" onChange={handlePhotoChange} />
        </Modal.Body>
      </Modal>
    </>
  );
}
