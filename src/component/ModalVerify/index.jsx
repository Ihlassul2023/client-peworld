import React from "react";
import { Modal, Button } from "react-bootstrap";

import "../../assets/css/main.css";

const ModalVerify = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="p-3 text-center">
            <box-icon
              type="solid"
              name="message-rounded-check"
              size="lg"
              color="#5e50a1"
            ></box-icon>
            <h4 className="text-black">Account Activated</h4>
            <p className="fw-light text-black">
              Thank you, your email has been verified. Please click the button
              bellow to login to your account
            </p>
            <Button className="custom-btn btn-sm py-2 px-3">
              Please Login
            </Button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ModalVerify;
