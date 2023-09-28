import React, { useState } from "react";

import NavigationBar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  Card,
  Col,
  Container,
  Nav,
  Row,
  Button,
  InputGroup,
  Form,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import fakeImage from "../assets/image/photo.png";
import fakeImage2 from "../assets/image/profile5.png";

const ChatWorker = () => {
  const [chatrooms, setChatrooms] = useState([
    {
      id: 1,
      name: "PT SoftHouse",
      position: "Fulltime Frontend Developer",
      isActive: true,
      messages: [
        {
          id: 1,
          text: "Membuat fitur dan maintenance untuk dashboard admin dan posisi remote",
          isSentByUser: false,
        },
        {
          id: 2,
          text: "Membuat fitur dan maintenance untuk dashboard admin dan siang, saya tertarik",
          isSentByUser: true,
        },
        {
          id: 3,
          text: "Akan saya hubungi besok untuk interview",
          isSentByUser: false,
        },
      ],
    },
    {
      id: 2,
      name: "PT Sea",
      position: "Fulltime Frontend Developer",
      isActive: false,
      messages: [
        {
          id: 1,
          text: "Halo Perkenalkan saya Dandy",
          isSentByUser: false,
        },
        {
          id: 2,
          text: "Halo salam kenal, perkenalkan saya Randy",
          isSentByUser: true,
        },
      ],
    },
  ]);

  const [activeChatroom, setActiveChatroom] = useState(chatrooms[0]);

  return (
    <>
      <NavigationBar />
      <div className="mt-5">
        <Container>
          <Row>
            <DropdownButton
              id="dropdown-messages"
              title="Messages"
              className="d-md-none" // Hanya tampil pada layar < md
            >
              <Card className="py-2 px-3 border-0" style={{ height: "80vh" }}>
                <Nav className="border-bottom">
                  <div
                    className="d-flex align-items-center "
                    style={{ height: "50px" }}
                  >
                    <h5 className="mb-0 text-black">Messages</h5>
                  </div>
                </Nav>
                <div
                  className="py-3 position-relative"
                  data-mdb-perfect-scrollbar="true"
                >
                  {chatrooms.map((chatroom) => (
                    <div
                      key={chatroom.id}
                      className={`d-flex align-items-center p-1 mb-2 rounded-2  ${
                        chatroom === activeChatroom ? "bg-warning" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveChatroom(chatroom)}
                    >
                      <div>
                        <img src={fakeImage} alt="" style={{ width: 38 }} />
                      </div>
                      <div className="ms-2">
                        <h6
                          className={`mb-0 text-black ${
                            chatroom === activeChatroom ? "text-white" : ""
                          }`}
                        >
                          {chatroom.name}
                        </h6>
                        <p
                          className={`mb-0 ${
                            chatroom === activeChatroom ? "text-white" : ""
                          } fw-light`}
                        >
                          {chatroom.position}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </DropdownButton>
            <Col id="left-side-chat" md="5" lg="4">
              <Card className="py-2 px-3 border-0" style={{ height: "80vh" }}>
                <Nav className="border-bottom">
                  <div
                    className="d-flex align-items-center "
                    style={{ height: "50px" }}
                  >
                    <h5 className="mb-0 text-black">Messages</h5>
                  </div>
                </Nav>
                <div
                  className="py-3 position-relative"
                  data-mdb-perfect-scrollbar="true"
                >
                  {chatrooms.map((chatroom) => (
                    <div
                      key={chatroom.id}
                      className={`d-flex align-items-center p-1 mb-2 rounded-2  ${
                        chatroom === activeChatroom ? "bg-warning" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveChatroom(chatroom)}
                    >
                      <div>
                        <img src={fakeImage} alt="" style={{ width: 38 }} />
                      </div>
                      <div className="ms-2">
                        <h6
                          className={`mb-0 text-black ${
                            chatroom === activeChatroom ? "text-white" : ""
                          }`}
                        >
                          {chatroom.name}
                        </h6>
                        <p
                          className={`mb-0 ${
                            chatroom === activeChatroom ? "text-white" : ""
                          } fw-light`}
                        >
                          {chatroom.position}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col id="right-side-chat" md="7" lg="8">
              <Card className="py-2 px-3 border-0" style={{ height: "80vh" }}>
                <div className="border-bottom">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ height: "50px" }}
                  >
                    <div className="d-flex align-items-center">
                      <div>
                        <img src={fakeImage} alt="" style={{ width: 38 }} />
                      </div>
                      <h6 className="ms-2 mb-0 text-black">
                        {activeChatroom.name}
                      </h6>
                    </div>
                    <h6 className="d-none d-lg-block mb-0">
                      {activeChatroom.position}
                    </h6>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <h6
                        style={{
                          color: "var(--text-fifth)",
                          fontWeight: "bold",
                        }}
                        className="text-bold"
                      >
                        Detail Profile
                      </h6>
                    </Link>
                  </div>
                </div>

                <div
                  className="py-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: activeChatroom.messages.slice(-1)[0]
                      .isSentByUser
                      ? "flex-end"
                      : "flex-start",
                  }}
                >
                  {activeChatroom.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`message-container ${
                        message.isSentByUser
                          ? "user-message text-end"
                          : "other-message text-start"
                      }`}
                      style={{
                        display: "flex",
                        justifyContent: message.isSentByUser
                          ? "flex-end"
                          : "flex-start",
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    >
                      <p
                        className={`message-container ${
                          message.isSentByUser
                            ? "user-message "
                            : "other-message"
                        }`}
                        style={{
                          backgroundColor: message.isSentByUser
                            ? "var(--primary-color)"
                            : "var(--secondary-color)",
                          color: "#ffffff",
                        }}
                      >
                        {message.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-end h-100">
                  <InputGroup className="mb-3 gap-2" style={{ bottom: 0 }}>
                    <Form.Control
                      placeholder="Messages"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className="rounded-5"
                    />
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: 40,
                        height: 40,
                        cursor: "pointer",
                        backgroundColor: "var(--primary-color",
                      }}
                    >
                      <box-icon name="paper-plane" color="white"></box-icon>
                    </div>
                  </InputGroup>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ChatWorker;
