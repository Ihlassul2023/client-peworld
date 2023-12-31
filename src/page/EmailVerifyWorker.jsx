import React, { useState, useEffect } from "react";

import ImgVerify from "../assets/image/email-verify.svg";
import { Button, Container } from "react-bootstrap";
import "../assets/css/main.css";
import { useParams } from "react-router-dom";
import ModalVerify from "../component/ModalVerify";
import axios from "axios";

const EmailVerifyWorker = () => {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  let url = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    verify();
  }, []);
  const verify = async () => {
    try {
      await axios.get(`${url}/verify-worker/${id}`);
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
                <ModalVerify show={modalShow} onHide={() => setModalShow(false)} />
              </div>
            </div>
          </Container>
        )}
      </main>
    </>
  );
};

export default EmailVerifyWorker;
