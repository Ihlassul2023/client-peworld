import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
  getContactChat,
  getChatMessage,
  chatRecruiter,
} from '../redux/action/chatHire';

import NavigationBar from '../component/Navbar';
import Footer from '../component/Footer';
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
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import fakeImage from '../assets/image/photo.png';
import fakeImage2 from '../assets/image/profile5.png';

const ChatRecruiter = () => {
  const [activeChatroom, setActiveChatroom] = useState('');
  const dispatch = useDispatch();
  const { data: contactChatData } = useSelector(
    (state) => state.getContactChat
  );
  const { data: chatMessageData } = useSelector(
    (state) => state.getChatMessage
  );
  const [codeChat, setCodeChat] = useState('');
  const [getUser2, setGetUser2] = useState('')
  const [inputData, setInputData] = useState({
    user_1: `${localStorage.getItem('id_recruiter')}`,
    user_2: '',
    message: '',
  });

  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessageData?.data]);

  const getMyContact = () => {
    dispatch(getContactChat());
  };

  const getMyChat = () => {
    dispatch(getChatMessage(codeChat));
  };
  console.log('ini active', activeChatroom);

  const postRecruiterMessage = () => {
    // e.preventDefault()
    let bodyFormData = new FormData();
    bodyFormData.append('user_1', inputData.user_1);
    bodyFormData.append('user_2', inputData.user_2);
    bodyFormData.append('message', inputData.message);
    console.log(bodyFormData);
    dispatch(chatRecruiter(bodyFormData))
      .then(() => {
        setTimeout(() => {
          getMyChat();
        }, 1000);
      })
      .catch((error) => {
        console.error('Error posting message:', error);
      });
  };

  const handleGetUser = (id) => {
    setInputData({
      ...inputData,
      user_2: id,
    });
    const user2ChangeEvent = {
      target: {
        name: 'user_2',
        value: id,
      },
    };
    onChangeChat(user2ChangeEvent);
  }

  const onChangeChat = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  console.log(inputData);

  useEffect(() => {
    getMyContact();
  }, []);

  useEffect(() => {
    if (codeChat) {
      getMyChat();
    }
  }, [codeChat]);

  const handleChatroomClick = (chatroom, index) => {
    setCodeChat(chatroom);
    setActiveChatroom(index);
  };
  console.log('chatMessageData?.data[0]?.id:', chatMessageData?.data[0]?.id);

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
              <Card className="py-2 px-3 border-0" style={{ height: '80vh' }}>
                <Nav className="border-bottom">
                  <div
                    className="d-flex align-items-center "
                    style={{ height: '50px' }}
                  >
                    <h5 className="mb-0 text-black">Messages</h5>
                  </div>
                </Nav>
                <div
                  className="py-3 position-relative"
                  data-mdb-perfect-scrollbar="true"
                >
                  {contactChatData &&
                    contactChatData.map((chatroom, index) => {
                      return (
                        <div
                          key={index}
                          className={`d-flex align-items-center p-1 mb-2 rounded-2  ${
                            activeChatroom === index ? 'bg-warning' : 'bg-white'
                          }`}
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            handleChatroomClick(chatroom.chat_code, index)
                          }
                        >
                          <div>
                            <img
                              src={chatroom?.photo || fakeImage}
                              alt=""
                              style={{ width: 38, borderRadius: '75%' }}
                            />
                          </div>
                          <div className="ms-2">
                            <h6
                              className={`mb-0 text-black ${
                                chatroom === activeChatroom ? 'text-white' : ''
                              }`}
                            >
                              {chatroom.name}
                            </h6>
                            <p
                              className={`mb-0 ${
                                chatroom === activeChatroom ? 'text-white' : ''
                              } fw-light`}
                            >
                              {chatroom.position || 'Worker Talent'}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </Card>
            </DropdownButton>
            <Col id="left-side-chat" md="5" lg="4">
              <Card className="py-2 px-3 border-0" style={{ height: '80vh' }}>
                <Nav className="border-bottom">
                  <div
                    className="d-flex align-items-center "
                    style={{ height: '50px' }}
                  >
                    <h5 className="mb-0 text-black">Message</h5>
                  </div>
                </Nav>
                <div
                  className="py-3 position-relative"
                  data-mdb-perfect-scrollbar="true"
                >
                  {contactChatData &&
                    contactChatData?.map((chatroom, index) => {
                      return (
                        <div
                          key={index}
                          className={`d-flex align-items-center p-1 mb-2 rounded-2  ${
                            activeChatroom === index ? 'bg-warning' : 'bg-white'
                          }`}
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            handleChatroomClick(chatroom.chat_code, index)
                          }
                        >
                          <div>
                            <img
                              src={chatroom?.photo || fakeImage}
                              alt=""
                              style={{ width: 38, borderRadius: '75%' }}
                            />
                          </div>
                          <div className="ms-2">
                            <h6
                              className={`mb-0 text-black ${
                                chatroom === activeChatroom ? 'text-white' : ''
                              }`}
                            >
                              {chatroom.name}
                            </h6>
                            <p
                              className={`mb-0 ${
                                chatroom === activeChatroom ? 'text-white' : ''
                              } fw-light`}
                            >
                              {chatroom.position || 'Worker Talent'}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </Card>
            </Col>
            <Col id="right-side-chat" md="7" lg="8">
              <Card className="py-2 px-3 border-0" style={{ height: '80vh' }}>
                <div className="border-bottom">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ height: '50px' }}
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <img
                          src={
                            (chatMessageData &&
                              chatMessageData?.profile?.photo) ||
                            fakeImage
                          }
                          alt=""
                          style={{ width: 38, borderRadius: '75%' }}
                        />
                        <p>{chatMessageData?.profile?.name}</p>
                      </div>
                    </div>
                    <Link to="#" style={{ textDecoration: 'none' }}>
                      <h6
                        style={{
                          color: 'var(--text-fifth)',
                          fontWeight: 'bold',
                        }}
                        className="text-bold"
                      >
                        Detail
                      </h6>
                    </Link>
                  </div>
                </div>

                <div
                  className="py-3 position-relative"
                  data-mdb-perfect-scrollbar="true"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '700px',
                    overflowY: 'auto',
                  }}
                  ref={chatContainerRef} 
                >
                  {chatMessageData?.data?.map((chat, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          justifyContent:
                            chat.user_id == localStorage.getItem('id_recruiter')
                              ? 'flex-end'
                              : 'flex-start',
                          marginBottom: '10px',
                          width: '100%',
                        }}
                      >
                        <p
                          style={{
                            backgroundColor:
                              chat.user_id ==
                              localStorage.getItem('id_recruiter')
                                ? '#5E50A1'
                                : 'gray',
                            padding: '5px',
                            color: 'white',
                            borderRadius: '10px',
                          }}
                        >
                          {chat.message}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <Form onClick={()=>handleGetUser(chatMessageData?.profile?.id)}>
                  <div className="d-flex align-items-end h-100">
                    <InputGroup className="mb-3 gap-2" style={{ bottom: 0 }}>
                      <Form.Control
                        placeholder="Messages"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className="rounded-5"
                        name="message"
                        onChange={onChangeChat}
                        defaultValue={inputData.message}
                      />
                      <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                          width: 40,
                          height: 40,
                          cursor: 'pointer',
                          backgroundColor: 'var(--primary-color',
                        }}
                        onClick={() => postRecruiterMessage()}
                      >
                        <box-icon name="paper-plane" color="white"></box-icon>
                      </div>
                    </InputGroup>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default ChatRecruiter;
