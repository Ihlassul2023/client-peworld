import { Stack, Container, Row, Col } from "react-bootstrap";
import logoWhite from "../assets/image/logoWhite.png";
import "../assets/css/main.css";

const Footer = () => {
  return (
    <footer
      className="primaryContainer-footer px-5 py-5 mt-5"
      style={{ width: "100%" }}
    >
      <Container className="content">
        <Row>
          <Col>
            <img src={logoWhite} alt="Logo" className="custom-image-footer" />
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6}>
            <p className="text-white mt-4">
              Peworld menyederhanakan proses prekrutan. mengobrol secara
              langsung dengan kandidat yang telah terverifikasi, memastikan
              pengalaman perekrutan yang sederhana, cepat dan efektif.
            </p>
          </Col>
        </Row>
        <hr className="footerLine mt-5 mb-4" />

        <Stack className="footer-stack" direction="horizontal" gap={5}>
          <h6 className="text-white me-auto">
            2020 Pewworld. All right reserved
          </h6>
          <h6 id="footer-phone" className="text-white">
            Telepon
          </h6>
          <h6 id="footer-email" className="text-white">
            Email
          </h6>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
