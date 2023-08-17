// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import "./style.css";
import logoPurple from "../../assets/image/logoPurple.png";
import mail from "../../assets/image/mail1.png";
import bell from "../../assets/image/bell1.png";
import avatar from "../../assets/image/avatar.png";

const NavBar = () => {
  return (
    <Container>
      <Row>
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
          <Col lg={11} md={10}>
            <Navbar.Brand href="#home" className="nav-left">
              <img src={logoPurple} alt="" className="icon-left" style={{ width: "100px" }} />
            </Navbar.Brand>
          </Col>
          <Col lg={1} md={2}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-right" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="d-flex align-items-start me-3 ">
                <Nav.Link href="#bell">
                  <img src={bell} alt="" className="bell" style={{ width: "23px" }} />
                  <p className="ham-text">Notifications</p>
                </Nav.Link>
                <Nav.Link href="#mail">
                  <img src={mail} alt="" className="mail" style={{ width: "25px" }} />
                  <p className="ham-text">Mails</p>
                </Nav.Link>
                <Nav.Link href="#profile">
                  <img src={avatar} alt="" className="profile" style={{ width: "25px" }} />
                  <p className="ham-text">Profile</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
};

export default NavBar;
