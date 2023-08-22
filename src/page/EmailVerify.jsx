import React, { useState } from "react";

import ImgVerify from "../assets/image/email-verify.svg";
import { Button, Container } from "react-bootstrap";
import "../assets/css/main.css";

import ModalVerify from "../component/ModalVerify";

const EmailVerify = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <main>
        <Container>
          <div className="mt-5 d-flex justify-content-center">
            <div className="text-center">
              <img src={ImgVerify} alt="" style={{ maxWidth: 340 }} />
              <p className="mt-3 mb-2 text-danger text-start">
                You're One Step Away
              </p>
              <h2 className="text-black">Verify your email address</h2>
              <p className="fw-light text-black">
                To complete your register and start using this App, <br />{" "}
                You'll need to verify your email address
              </p>
              <Button
                className="mt-3 btn-sm custom-btn px-4 py-2"
                onClick={() => setModalShow(true)}
              >
                Verify Your Email
              </Button>
              <ModalVerify
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default EmailVerify;
