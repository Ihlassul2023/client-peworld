// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// <<<<<<< HEAD:src/component/Navbar/index.jsx
// import "./style.css";
// import logoPurple from "../../assets/image/logoPurple.png";
// import mail from "../../assets/image/mail1.png";
// import bell from "../../assets/image/bell1.png";
// import avatar from "../../assets/image/avatar.png";
// =======
import { useNavigate } from "react-router";
import "../assets/css/main.css";
import logoPurple from "../assets/image/logoPurple.png";
import mail from "../assets/image/mail1.png";
import bell from "../assets/image/bell1.png";
import avatar from "../assets/image/avatar.png";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoPurple}
            alt=""
            className=""
            style={{ width: "100px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={handleLogout}>
              <p>Logout</p>
            </Nav.Link>
            {localStorage.getItem("token_recruiter") && (
              <Nav.Link onClick={() => navigate("/home")}>
                <p>Home</p>
              </Nav.Link>
            )}
            <Nav.Link href="#home">
              <img
                src={bell}
                alt=""
                className="bell"
                style={{ width: "23px" }}
              />
            </Nav.Link>
            <Nav.Link href="#link">
              {localStorage.getItem("id_recruiter") ? (
                <img
                  onClick={() => navigate("/chat")}
                  src={mail}
                  alt="chat"
                  className="mail"
                  style={{ width: "25px" }}
                />
              ) : (
                <img
                  onClick={() => navigate("/chat-worker")}
                  src={mail}
                  alt="chat"
                  className="mail"
                  style={{ width: "25px" }}
                />
              )}
            </Nav.Link>
            <Nav.Link>
              {localStorage.getItem("photo_worker") ? (
                <img
                  src={localStorage.getItem("photo_worker")}
                  alt="photo"
                  className="profile rounded-circle"
                  style={{ width: "25px", height: "25px" }}
                  onClick={() => {
                    localStorage.getItem("token_worker") &&
                      navigate("/editProfileWorker");
                    localStorage.getItem("token_recruiter") &&
                      navigate("/editProfileRecruiter");
                  }}
                />
              ) : (
                <img
                  src={localStorage.getItem("photo_recruiter")}
                  alt="photo"
                  className="profile rounded-circle"
                  style={{ width: "25px", height: "25px" }}
                  onClick={() => {
                    localStorage.getItem("token_worker") &&
                      navigate("/editProfileWorker");
                    localStorage.getItem("token_recruiter") &&
                      navigate("/editProfileRecruiter");
                  }}
                />
              )}
              <p className="ham-text">
                {localStorage.getItem("name_worker") ||
                  localStorage.getItem("name_recruiter")}
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
