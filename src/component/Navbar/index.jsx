// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./style.css";
import logoPurple from "../../assets/image/logoPurple.png";
import mail from "../../assets/image/mail1.png";
import bell from "../../assets/image/bell1.png";
import avatar from "../../assets/image/avatar.png";
import { useNavigate } from "react-router";

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
          <img src={logoPurple} alt="" className="" style={{ width: "100px" }} />
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
              <img src={bell} alt="" className="bell" style={{ width: "23px" }} />
            </Nav.Link>
            <Nav.Link href="#link">
              <img onClick={() => navigate("/chat")} src={mail} alt="" className="mail" style={{ width: "25px" }} />
            </Nav.Link>
            <Nav.Link>
              <img
                src={localStorage.getItem("photo_worker") || localStorage.getItem("photo_recruiter")}
                alt="photo"
                className="profile rounded-circle"
                style={{ width: "25px", height: "25px" }}
                onClick={() => {
                  localStorage.getItem("token_worker") && navigate("/editProfileWorker");
                  localStorage.getItem("token_recruiter") && navigate("/editProfileRecruiter");
                }}
              />
              <p className="ham-text">{localStorage.getItem("name_worker") || localStorage.getItem("name_recruiter")}</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
