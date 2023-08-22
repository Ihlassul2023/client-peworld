import React, { useState, useEffect } from "react";

import ImgVerify from "../assets/image/email-verify.svg";
import { Container, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../assets/css/main.css";
import axios from "axios";

const EmailVerify = () => {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    verify();
  }, []);
  const verify = async () => {
    try {
      await axios.get(`http://localhost:4000/verify-company/${id}`);
      setModalShow(true);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main>
        {show && (
          <Container>
            <div className="mt-5 d-flex justify-content-center">
              <div className="text-center">
                <img src={ImgVerify} alt="" style={{ maxWidth: 340 }} />
                <p className="mt-3 mb-2 text-danger text-start">Account has been set up</p>
                <h2 className="text-black"></h2>
                <p className="fw-light text-black">Account activated successfully, please login</p>
                <Modal show={modalShow} onHide={() => setModalShow(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                  {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
                  <Modal.Body>
                    <div className="p-3 text-center">
                      <box-icon type="solid" name="message-rounded-check" size="lg" color="#5e50a1"></box-icon>
                      <h4 className="text-black">Account Activated</h4>
                      <p className="fw-light text-black">Thank you, your email has been verified. Please click the button bellow to login to your account</p>
                      <Button onClick={() => navigate("/loginWorker")} className="custom-btn btn-sm py-2 px-3">
                        Please Login
                      </Button>
                    </div>
                  </Modal.Body>
                  {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
                </Modal>
              </div>
            </div>
          </Container>
        )}
      </main>
    </>
  );
};

export default EmailVerify;
