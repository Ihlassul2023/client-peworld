import React, { useEffect, useState } from "react";

import { Container, Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap";

import { Spinner } from "react-bootstrap";
import edit from "../assets/image/edit.svg";
import photo from "../assets/image/photo.png";
import map from "../assets/image/map-pin.png";
import tokopedia from "../assets/image/tokopedia.png";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import cloud from "../assets/image/cloud.png";
import upload1 from "../assets/image/upload1.png";
import upload2 from "../assets/image/upload2.png";
import porto from "../assets/image/fakePorto4.png";
import close from "../assets/image/close.png";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileWorker, getMyProfile } from "../redux/action/worker";
import { postSkillAction, getSkillAction } from "../redux/action/skill";
import { getExperienceAction, getExperienceById, postExperience, updateExperience, deleteExperience } from "../redux/action/experience";
import { getPortofolioAction, getPortofolioById, postPortofolio, updatePortofolio, deletePortofolio } from "../redux/action/portofolio";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditProfileWorker = () => {
  const dispatch = useDispatch();
  const { myProfileWorker, getSkill, getExperience, getDetailExperience, getPortofolio, getDetailPortofolio } = useSelector((state) => state);
  const [dataWorker, setDataWorker] = useState({
    name: "",
    jobdesk: "",
    address: "",
    office: "",
    description: "",
    photo_url: "",
  });
  const [skillWorker, setSkillWorker] = useState({
    skill_name: "",
  });

  const [experienceWorker, setExperienceWorker] = useState({
    position: "",
    company_name: "",
    from_month: "",
    to_month: "",
    description: "",
  });
  const [portofolioWorker, setPortofolioWorker] = useState({
    name: "",
    link_repo: "",
    type: "",
    photo_url: "",
  });
  useEffect(() => {
    getProfile();
    getMySkill();
    getMyExperience();
    getMyPortofolio();
  }, []);
  useEffect(() => {
    myProfileWorker.data && !myProfileWorker.isLoading && setDataWorker({ ...dataWorker, ...myProfileWorker?.data[0] });
    !getSkill.isLoading && setSkillWorker({ ...skillWorker, ...getSkill.data });
    !getDetailExperience.isLoading && setExperienceWorker({ ...experienceWorker, ...getDetailExperience.data });
    !getDetailPortofolio.isLoading && setPortofolioWorker({ ...portofolioWorker, ...getDetailPortofolio.data });
  }, [myProfileWorker.isLoading, getSkill.isLoading, getDetailExperience.isLoading, getDetailPortofolio.isLoading]);

  //profile worker
  const [photoProfile, setPhotoProfile] = useState(null);
  const getProfile = () => {
    dispatch(getMyProfile());
  };
  const handleInputProfile = (e) => {
    const { value, name } = e.target;
    setDataWorker({ ...dataWorker, [name]: value });
  };
  const handleInputPhotoProfile = (e) => {
    setPhotoProfile(e.target.files[0]);
    setDataWorker({
      ...dataWorker,
      photo_url: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("name", dataWorker.name);
    bodyFormData.append("jobdesk", dataWorker.jobdesk);
    bodyFormData.append("office", dataWorker.office);
    bodyFormData.append("description", dataWorker.description);
    bodyFormData.append("address", dataWorker.address);
    bodyFormData.append("photo", photoProfile);
    dispatch(updateProfileWorker(bodyFormData));
  };

  //skill worker
  const getMySkill = () => {
    dispatch(getSkillAction());
  };
  const handleSubmitSkill = (e) => {
    e.preventDefault();
    dispatch(postSkillAction(skillWorker));
  };
  const handleInputSkill = (e) => {
    const { name, value } = e.target;
    setSkillWorker({ ...skillWorker, [name]: value });
  };

  //experience worker
  const getMyExperience = () => {
    dispatch(getExperienceAction());
  };
  const getExperienceId = (id) => {
    dispatch(getExperienceById(id));
  };
  const handleInputExperience = (e) => {
    const { name, value } = e.target;
    setExperienceWorker({ ...experienceWorker, [name]: value });
  };
  const deleteMyExperience = (id) => {
    dispatch(deleteExperience(id));
  };
  const handleSubmitExperience = (e) => {
    e.preventDefault();
    console.log(experienceWorker);
    let id = localStorage.getItem("idExperience");
    id ? dispatch(updateExperience(id, experienceWorker)) : dispatch(postExperience(experienceWorker));
  };

  //portofolio worker
  const [photoPortofolio, setPhotoPortofolio] = useState(null);
  const getMyPortofolio = () => {
    dispatch(getPortofolioAction());
  };
  const getPortofolioId = (id) => {
    dispatch(getPortofolioById(id));
  };
  const deleteMyPortofolio = (id) => {
    dispatch(deletePortofolio(id));
  };
  const handleInputPortofolio = (e) => {
    const { value, name } = e.target;
    setPortofolioWorker({ ...portofolioWorker, [name]: value });
  };
  const handleInputPhotoPortofolio = (e) => {
    setPhotoPortofolio(e.target.files[0]);
    setPortofolioWorker({
      ...portofolioWorker,
      photo_url: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleSubmitPortofolio = (e) => {
    e.preventDefault();
    console.log(portofolioWorker);
    let bodyFormData = new FormData();
    bodyFormData.append("name", portofolioWorker.name);
    bodyFormData.append("link_repo", portofolioWorker.link_repo);
    bodyFormData.append("type", portofolioWorker.type);
    bodyFormData.append("photo", photoPortofolio);
    let id = localStorage.getItem("idPortofolio");
    id ? dispatch(updatePortofolio(id, bodyFormData)) : dispatch(postPortofolio(bodyFormData));
  };

  return (
    <>
      <Navbar />
      <>
        <div className="background"></div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="bg-white rounded p-4 shadow-lg">
                <div className="d-flex flex-column align-items-center gap-2">
                  {/* photo profile */}
                  <div>
                    <img src={dataWorker.photo_url || dataWorker.photo} alt="photo" className="rounded-circle" style={{ width: 120, height: 120 }} />
                  </div>
                  {/* edit profile */}
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <box-icon type="solid" name="pencil" color="gray" animation="tada"></box-icon>
                    <label htmlFor="photo" className="mb-0 pointer-cursor">
                      Edit
                    </label>
                    <input className="d-none" type="file" onChange={handleInputPhotoProfile} name="photo_user" id="photo" />
                  </div>
                </div>
                {/* identitas */}
                <div className="d-flex flex-column gap-2 mt-3">
                  <h3 className="text-dark mb-0 fw-semibold">{dataWorker.name}</h3>
                  <p className="text-gray mb-0">{dataWorker.jobdesk}</p>
                  <div className="d-flex align-items-center gap-2">
                    <box-icon type="solid" size="sm" name="map" color="gray"></box-icon>
                    <p className="mb-0 text-gray">{dataWorker.address}</p>
                  </div>
                  <p className="text-gray">{dataWorker.office}</p>
                </div>
              </div>
              {/* button submit */}
              <div className="py-4">
                <Button onClick={handleSubmitProfile} className="custom-btn d-block w-100 py-3 mb-2">
                  Simpan
                </Button>
                <Button onClick={() => getProfile()} className="custom-btn-outline d-block w-100 py-3">
                  Batal
                </Button>
              </div>
            </div>

            {/* right collumn */}
            <div className="col-lg-8">
              {/* form data diri */}
              <div className="bg-white rounded p-3 shadow-lg mb-3">
                <h4 className="text-dark">Data Diri</h4>
                <hr />
                {/* form identity */}
                <div>
                  <Form>
                    <Form.Group className="mb-3" htmlFor="name">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control type="text" name="name" value={dataWorker.name} onChange={(e) => handleInputProfile(e)} id="name" className="py-3" placeholder="Masukan nama lengkap" />
                    </Form.Group>
                    <Form.Group className="mb-3" htmlFor="jobDesk">
                      <Form.Label>Job Desk</Form.Label>
                      <Form.Control type="text" name="jobdesk" value={dataWorker.jobdesk} onChange={(e) => handleInputProfile(e)} id="jobDesk" className="py-3" placeholder="Masukan Job Desk" />
                    </Form.Group>
                    <Form.Group className="mb-3" htmlFor="address">
                      <Form.Label>Domisili</Form.Label>
                      <Form.Control type="text" name="address" value={dataWorker.address} onChange={(e) => handleInputProfile(e)} id="domisili" className="py-3" placeholder="Masukan Domisili" />
                    </Form.Group>
                    <Form.Group className="mb-3" htmlFor="workPlace">
                      <Form.Label>Tempat Kerja</Form.Label>
                      <Form.Control type="text" name="office" value={dataWorker.office} onChange={(e) => handleInputProfile(e)} id="workPlace" className="py-3" placeholder="Masukkan Tempat Kerja" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Deskripsi singkat</Form.Label>
                      <FloatingLabel htmlFor="description" label="Tuliskan deskripsi singkat">
                        <Form.Control as="textarea" value={dataWorker.description} onChange={(e) => handleInputProfile(e)} name="description" id="description" style={{ height: "100px" }} />
                      </FloatingLabel>
                    </Form.Group>
                  </Form>
                </div>
              </div>

              {/* form data skill */}
              <div className="skill bg-white rounded p-3 shadow-lg mb-3">
                <h3 className="text-dark">Skill</h3>
                <hr />
                <form onSubmit={handleSubmitSkill} className="d-flex gap-2 mt-3">
                  <input value={skillWorker.skill_name} name="skill_name" onChange={(e) => handleInputSkill(e)} className="bg-light w-100 border-1 p-2" placeholder="Javascript, Html, css" type="text" />
                  <button className="bg-warning border-0 text-light p-2">Simpan</button>
                </form>
              </div>
              {/* <div className="bg-white rounded p-3 shadow-lg mb-3">
                <h4 className="text-dark">Skill</h4>
                <hr />
                <Form onSubmit={handleSubmitSkill}>
                  <Form.Group className="mb-3 d-flex gap-2" htmlFor="skill">
                    <Form.Control type="text" name="skill_name" id="skill" value={skillWorker.skill_name} onChange={(e) => handleInputSkill(e)} className="py-3 w-100" placeholder="Javascript, Html, css" />
                    <Button variant="warning" className="px-4 text-white fw-semibold">
                      Simpan
                    </Button>
                  </Form.Group>
                </Form>
              </div> */}

              {/* Work Experience */}
              <div className="bg-white rounded p-3 shadow-lg mb-3">
                <h4 className="text-dark">Pengalaman Kerja</h4>
                <hr />
                {/* showing  work experience */}
                {getExperience.data?.data.map((experience, index) => (
                  <div className="d-flex justify-content-between mb-3" key={index}>
                    <div className="d-flex gap-3">
                      <img style={{ height: "70px", width: "70px" }} src={tokopedia} alt="tokopedia" />
                      <div>
                        <h4 className="text-dark">{experience.position}</h4>
                        <p className="mb-0">{experience.company_name}</p>
                        <p className="mb-0">
                          {experience.from_month} - {experience.to_month}
                        </p>
                        <p className="pb-0 text-dark">{experience.description}</p>
                      </div>
                      {/* <div className="">
                      </div> */}
                    </div>
                    <div className="d-flex flex-sm-column flex-lg-row gap-2">
                      <div>
                        <Button onClick={() => getExperienceId(experience.id)} variant="warning" className="d-flex justify-content-center align-items-center">
                          <box-icon type="solid" name="edit" color="white" size="sm"></box-icon>
                        </Button>
                      </div>
                      <div>
                        <Button onClick={() => deleteMyExperience(experience.id)} variant="danger" className="d-flex justify-content-center align-items-center">
                          <box-icon type="solid" name="trash-alt" color="white" size="sm"></box-icon>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* form for input experience */}
                <div className="mt-3">
                  <form onSubmit={handleSubmitExperience}>
                    <Form.Group className="mb-3" htmlFor="position">
                      <div className="d-flex justify-content-between">
                        <Form.Label>Posisi</Form.Label>
                        {localStorage.getItem("idExperience") && (
                          <img
                            onClick={() => {
                              localStorage.removeItem("idExperience");
                              setExperienceWorker({ position: "", company_name: "", from_month: "", to_month: "", description: "" });
                            }}
                            style={{ height: "20px", width: "20px", cursor: "pointer" }}
                            src={close}
                            alt="close"
                          />
                        )}
                      </div>
                      <Form.Control type="text" name="position" value={experienceWorker.position} onChange={(e) => handleInputExperience(e)} id="position" className="py-3" placeholder="Web Developer" />
                    </Form.Group>
                    {/* form for company name and date */}
                    <Row>
                      <Col md="6" sm="12">
                        <Form.Group className="mb-3" htmlFor="office">
                          <Form.Label>Nama Perusahaan</Form.Label>
                          <Form.Control type="text" name="company_name" value={experienceWorker.company_name} onChange={(e) => handleInputExperience(e)} id="office" className="py-3" placeholder="PT. Tokopedia" />
                        </Form.Group>
                      </Col>
                      <Col md="3" sm="12">
                        <Form.Group className="mb-3" htmlFor="from">
                          <Form.Label className="">Dari Bln/Thn</Form.Label>
                          <Form.Control type="text" name="from_month" value={experienceWorker.from_month} onChange={(e) => handleInputExperience(e)} id="from" className="py-3" placeholder="Januari 2021" />
                        </Form.Group>
                      </Col>
                      <Col md="3" sm="12">
                        <Form.Group className="mb-3" htmlFor="to">
                          <Form.Label>Sampai Bln/Thn</Form.Label>
                          <Form.Control type="text" name="to_month" value={experienceWorker.to_month} onChange={(e) => handleInputExperience(e)} id="to" className="py-3" placeholder="Januari 2022" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group>
                      <Form.Label>Deskripsi singkat</Form.Label>
                      <FloatingLabel htmlFor="description" label="Deskripsi pekerjaan anda">
                        <Form.Control as="textarea" value={experienceWorker.description} onChange={(e) => handleInputExperience(e)} name="description" id="description" style={{ height: "100px" }} />
                      </FloatingLabel>
                    </Form.Group>
                    <hr />
                    <Button type="submit" variant="outline-warning" className="w-100 py-3">
                      Tambah pengalaman kerja
                    </Button>
                  </form>
                </div>
              </div>

              {/* portfolio */}
              <div className="bg-white rounded p-3 shadow-lg mb-3">
                <h4 className="text-dark">Portofolio</h4>
                <hr />
                {/* section for showing your portfolio */}
                {getPortofolio.data?.data.map((portofolio, index) => (
                  <div className="d-md-flex mb-3" key={index}>
                    <div className="d-flex gap-3">
                      {portofolio.photo !== "undefined" ? (
                        <img style={{ height: "100px", width: "100px", objectFit: "cover" }} src={portofolio.photo} alt="porto1" />
                      ) : (
                        <img style={{ height: "100px", width: "100px", objectFit: "cover" }} src={porto} alt="porto2" />
                      )}
                      <div>
                        <h6 className="text-dark">{portofolio.name}</h6>
                        <p className="mb-0">{portofolio.link_repo}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-2 justify-content-center ms-sm-auto py-2">
                      <div>
                        <Button onClick={() => getPortofolioId(portofolio.id)} variant="warning" className="d-flex justify-content-center align-items-center">
                          <box-icon type="solid" name="edit" color="white" size="sm"></box-icon>
                        </Button>
                      </div>
                      <div>
                        <Button onClick={() => deleteMyPortofolio(portofolio.id)} variant="danger" className="d-flex justify-content-center align-items-center">
                          <box-icon type="solid" name="trash-alt" color="white" size="sm"></box-icon>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <hr />
                {/* form for input portfolio */}
                <form onSubmit={handleSubmitPortofolio}>
                  <Form.Group className="mb-3" htmlFor="application">
                    <div className="d-flex justify-content-between">
                      <Form.Label>Nama Aplikasi</Form.Label>
                      {localStorage.getItem("idPortofolio") && (
                        <img
                          onClick={() => {
                            localStorage.removeItem("idPortofolio");
                            setPortofolioWorker({ name: "", type: "", link_repo: "", photo_url: "" });
                            setPhotoPortofolio(null);
                          }}
                          style={{ height: "20px", width: "20px", cursor: "pointer" }}
                          src={close}
                          alt="close"
                        />
                      )}
                    </div>
                    <Form.Control type="text" name="name" value={portofolioWorker.name} onChange={(e) => handleInputPortofolio(e)} id="application" className="py-3" placeholder="Masukkan Nama Aplikasi" />
                  </Form.Group>
                  <Form.Group className="mb-3" htmlFor="repository">
                    <Form.Label>Link Repository</Form.Label>
                    <Form.Control type="text" name="link_repo" value={portofolioWorker.link_repo} onChange={(e) => handleInputPortofolio(e)} id="repository" className="py-3" placeholder="Masukkan Link Repository" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Type Portofilio</Form.Label>
                    <div className="d-flex">
                      <div className="input d-flex gap-2 me-3 ">
                        <input type="radio" name="type" value={"Aplikasi Mobile"} checked={portofolioWorker.type === "Aplikasi Mobile"} onChange={(e) => handleInputPortofolio(e)} id="mobile" className="bg-light border-1 p-2" />
                        <label className="text-dark" htmlFor="mobile">
                          Aplikasi Mobile
                        </label>
                      </div>
                      <div className="input d-flex gap-2">
                        <input type="radio" name="type" value={"Aplikasi Website"} checked={portofolioWorker.type === "Aplikasi Website"} onChange={(e) => handleInputPortofolio(e)} id="website" className="bg-light border-1 p-2" />
                        <label className="text-dark" htmlFor="website">
                          Aplikasi Website
                        </label>
                      </div>
                    </div>
                  </Form.Group>
                  <div className="input d-flex flex-column w-100 mb-3">
                    <label htmlFor="description">Upload gambar</label>
                    <label
                      htmlFor="file"
                      style={{
                        height: "300px",
                        borderStyle: "dashed",
                        backgroundImage: `${portofolioWorker.photo_url}`,
                      }}
                      className="d-flex flex-column rounded w-100 justify-content-center border-dash align-items-center "
                    >
                      <img style={{ height: "120px", width: "200px", objectFit: "cover" }} src={portofolioWorker.photo_url || cloud} alt="cloud" />
                      <p>Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
                      <p>Atau cari untuk mengupload file dari direktorimu.</p>
                      <div className="d-flex gap-3">
                        <div className="d-flex align-items-center gap-1">
                          <img style={{ height: "30px", width: "30px" }} src={upload1} alt="upload" />
                          <p style={{ fontSize: "10px", marginBottom: "0" }}>High-Res Image PNG, JPG or GIF </p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <img style={{ height: "30px", width: "30px" }} src={upload2} alt="upload" />
                          <p style={{ fontSize: "10px", marginBottom: "0" }}>Size 1080x1920 or 600x800</p>
                        </div>
                      </div>
                      <input type="file" onChange={handleInputPhotoPortofolio} className="d-none" id="file" />
                    </label>
                  </div>
                  <Button type="submit" variant="outline-warning" className="w-100 py-3">
                    Tambah Portofolio
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* <main>
        <div className="wrapProfile d-flex justify-content-center">
          <div className="background"></div>
          {myProfileWorker.isLoading ? (
            <Spinner animation="border" role="status" size="lg" variant="light">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <div className="wrapCardEdit">
              <div className="cardEditProfile  rounded  mb-2  p-2">
                <div className="photo mb-4 d-flex flex-column align-items-center gap-2">
                  <div className="photoUser">
                    <img
                      src={dataWorker.photo_url || dataWorker.photo}
                      alt="photo"
                      className="rounded-circle"
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div className="edit d-flex align-items-center justify-content-center gap-2">
                    <img src={edit} alt="edit" width="10px" height="10px" />
                    <label htmlFor="photo" className="mb-0 pointer-event">
                      Edit
                    </label>
                    <input
                      className="d-none"
                      type="file"
                      onChange={handleInputPhotoProfile}
                      name="photo_user"
                      id="photo"
                    />
                  </div>
                </div>
                <div className="nameUser">
                  <h3 className="text-dark">{dataWorker.name}</h3>
                  <p className="text-dark">{dataWorker.jobdesk}</p>
                  <div className="location d-flex align-items-center gap-2">
                    <img
                      style={{ height: "15px", width: "15px" }}
                      src={map}
                      alt="map"
                    />
                    <p className="mb-0">{dataWorker.address}</p>
                  </div>
                  <p className="text-dark">{dataWorker.office}</p>
                </div>
              </div>
              <div className="btnGrup d-flex flex-column gap-2">
                <button
                  onClick={handleSubmitProfile}
                  className="w-100 h-25 p-2 rounded border-0 btnUserSave"
                >
                  Simpan
                </button>
                <button
                  onClick={() => getProfile()}
                  className="w-100 h-25 p-2 rounded  btnUserCancel"
                >
                  Batal
                </button>
              </div>
            </div>
          )}
          <div className="wrapMainEdit">
            <div className="mainEditProfile d-flex flex-column gap-2  p-2">
              <div className="bio rounded">
                <h3 className="text-dark">Data Diri</h3>
                <hr />
                <form>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={dataWorker.name}
                      onChange={(e) => handleInputProfile(e)}
                      id="name"
                      placeholder="Masukan nama lengkap"
                    />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="jobDesk">Job desk</label>
                    <input
                      type="text"
                      name="jobdesk"
                      value={dataWorker.jobdesk}
                      onChange={(e) => handleInputProfile(e)}
                      id="jobDesk"
                      placeholder="Masukan Job desk"
                    />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="domisili">Domisili</label>
                    <input
                      type="text"
                      name="address"
                      value={dataWorker.address}
                      onChange={(e) => handleInputProfile(e)}
                      id="domisili"
                      placeholder="Masukan Domisili"
                    />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="workPlace">Tempat kerja</label>
                    <input
                      type="text"
                      name="office"
                      value={dataWorker.office}
                      onChange={(e) => handleInputProfile(e)}
                      id="workPlace"
                      placeholder="Masukan tempat kerja"
                    />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="description">Deskripsi singkat</label>
                    <textarea
                      type="text"
                      value={dataWorker.description}
                      onChange={(e) => handleInputProfile(e)}
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      placeholder="Tuliskan deskripsi singkat"
                    />
                  </div>
                </form>
              </div>
              <div className="skill rounded">
                <h3 className="text-dark">Skill</h3>
                <hr />
                <form
                  onSubmit={handleSubmitSkill}
                  className="d-flex gap-2 mt-3"
                >
                  <input
                    value={skillWorker.skill_name}
                    name="skill_name"
                    onChange={(e) => handleInputSkill(e)}
                    className="bg-light w-100 border-1 p-2"
                    placeholder="Javascript, Html, css"
                    type="text"
                  />
                  <button className="bg-warning border-0 text-light p-2">
                    Simpan
                  </button>
                </form>
              </div>
              <div className="experience">
                <h3 className="text-dark">Pengalaman kerja</h3>
                <hr />
                {getExperience.isLoading ? (
                  <Spinner
                    animation="border"
                    role="status"
                    size="lg"
                    variant="light"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  getExperience.data?.data.map((experience, index) => (
                    <div key={index} className="workExperience mb-3">
                      <div>
                        <div className="d-flex justify-content-end gap-2">
                          <button
                            onClick={() => getExperienceId(experience.id)}
                            className="bg-warning rounded p-2 text-light border-0"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteMyExperience(experience.id)}
                            className="bg-danger rounded p-2 text-light border-0"
                          >
                            X
                          </button>
                        </div>
                        <div className="detailExperience d-flex gap-3">
                          <img style={{ height: "50px", width: "50px" }} src={tokopedia} alt="tokopedia" />
                          <div className="div">
                            <h3 className="text-dark">{experience.position}</h3>
                            <p>{experience.company_name}</p>
                            <p>
                              {experience.from_month} - {experience.to_month}
                            </p>
                            <p className="text-dark">
                              {experience.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <form
                  onSubmit={handleSubmitExperience}
                  className="d-flex flex-column gap-2 mt-3"
                >
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="position">Posisi</label>
                    <input
                      type="text"
                      name="position"
                      value={experienceWorker.position}
                      onChange={(e) => handleInputExperience(e)}
                      id="position"
                      className="bg-light border-1 p-2"
                      placeholder="web developer"
                    />
                  </div>
                  <div className="workInformation d-flex gap-3">
                    <div className="input  d-flex flex-column">
                      <label htmlFor="office">Nama perusahaan</label>
                      <input
                        type="text"
                        name="company_name"
                        value={experienceWorker.company_name}
                        onChange={(e) => handleInputExperience(e)}
                        id="office"
                        className="bg-light border-1 p-2"
                        placeholder="PT.Harus bisa"
                      />
                    </div>
                    <div className="input  d-flex flex-column">
                      <label htmlFor="from">Dari Bulan/Tahun</label>
                      <input
                        type="text"
                        name="from_month"
                        value={experienceWorker.from_month}
                        onChange={(e) => handleInputExperience(e)}
                        id="from"
                        className="bg-light border-1 p-2"
                        placeholder="Januari 2018"
                      />
                    </div>
                    <div className="input  d-flex flex-column">
                      <label htmlFor="to">Sampai Bulan/Tahun</label>
                      <input
                        type="text"
                        name="to_month"
                        value={experienceWorker.to_month}
                        onChange={(e) => handleInputExperience(e)}
                        id="to"
                        className="bg-light border-1 p-2"
                        placeholder="Januari 2019"
                      />
                    </div>
                  </div>
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="description">Deskripsi singkat</label>
                    <textarea
                      type="text"
                      name="description"
                      value={experienceWorker.description}
                      onChange={(e) => handleInputExperience(e)}
                      id="description"
                      cols="30"
                      rows="10"
                      placeholder="Deskripsikan pekerjaan anda"
                    />
                  </div>
                  <button className="text-warning bg-light border p-2 border-warning">
                    Tambah pengalaman kerja
                  </button>
                </form>
              </div>
              <div className="portofolio">
                <h3 className="text-dark">Portofolio</h3>
                {getPortofolio.isLoading ? (
                  <Spinner
                    animation="border"
                    role="status"
                    size="lg"
                    variant="light"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  getPortofolio.data?.data.map((portofolio, index) => (
                    <div
                      key={index}
                      className="portofolioWorker d-flex justify-content-between mb-3"
                    >
                      <div className="informationPortfolio d-flex gap-2">
                        {portofolio.photo ? (
                          <img
                            style={{ height: "100px", width: "150px" }}
                            src={portofolio.photo}
                            alt="porto"
                          />
                        ) : (
                          <img
                            style={{ height: "100px", width: "150px" }}
                            src={porto}
                            alt="porto"
                          />
                        )}
                        <div className="text">
                          <p>{portofolio.name}</p>
                          <p>{portofolio.link_repo}</p>
                        </div>
                      </div>
                      <div className="d-flex gap-2 h-25">
                        <button
                          onClick={() => getPortofolioId(portofolio.id)}
                          className="bg-warning rounded p-2 text-light border-0 "
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteMyPortofolio(portofolio.id)}
                          className="bg-danger rounded p-2 text-light border-0"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))
                )}
                <hr />
                <form
                  onSubmit={handleSubmitPortofolio}
                  className="d-flex flex-column gap-2 mt-3"
                >
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="aplication">Nama aplikasi</label>
                    <input
                      type="text"
                      name="name"
                      value={portofolioWorker.name}
                      onChange={(e) => handleInputPortofolio(e)}
                      id="aplication"
                      className="bg-light border-1 p-2"
                      placeholder="Masukan nama Aplikasi"
                    />
                  </div>
                  <div className="input d-flex flex-column">
                    <label htmlFor="repository">Link repository</label>
                    <input
                      type="text"
                      name="link_repo"
                      value={portofolioWorker.link_repo}
                      onChange={(e) => handleInputPortofolio(e)}
                      id="repository"
                      className="bg-light border-1 p-2"
                      placeholder="Masukan Link repository"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <p>Type portofolio</p>
                    <div className="d-flex">
                      <div className="input d-flex gap-2 me-3 ">
                        <input
                          type="radio"
                          name="type"
                          value={"Aplikasi Mobile"}
                          checked={portofolioWorker.type === "Aplikasi Mobile"}
                          onChange={(e) => handleInputPortofolio(e)}
                          id="mobile"
                          className="bg-light border-1 p-2"
                        />
                        <label className="text-dark" htmlFor="mobile">
                          Aplikasi Mobile
                        </label>
                      </div>
                      <div className="input d-flex gap-2">
                        <input
                          type="radio"
                          name="type"
                          value={"Aplikasi Website"}
                          checked={portofolioWorker.type === "Aplikasi Website"}
                          onChange={(e) => handleInputPortofolio(e)}
                          id="website"
                          className="bg-light border-1 p-2"
                        />
                        <label className="text-dark" htmlFor="website">
                          Aplikasi Website
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="description">Upload gambar</label>
                    <label
                      htmlFor="file"
                      style={{
                        height: "300px",
                        borderStyle: "dashed",
                        backgroundImage: `${portofolioWorker.photo_url}`,
                      }}
                      className="d-flex flex-column rounded w-100 justify-content-center border-dash align-items-center "
                    >
                      <img
                        style={{ height: "100px", width: "100px" }}
                        src={portofolioWorker.photo_url || cloud}
                        alt="cloud"
                      />
                      <p>Drag & Drop untuk Upload Gambar Aplikasi Mobile</p>
                      <p>Atau cari untuk mengupload file dari direktorimu.</p>
                      <div className="d-flex gap-3">
                        <div className="d-flex align-items-center gap-1">
                          <img
                            style={{ height: "30px", width: "30px" }}
                            src={upload1}
                            alt="upload"
                          />
                          <p style={{ fontSize: "10px", marginBottom: "0" }}>
                            High-Res Image PNG, JPG or GIF{" "}
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <img
                            style={{ height: "30px", width: "30px" }}
                            src={upload2}
                            alt="upload"
                          />
                          <p style={{ fontSize: "10px", marginBottom: "0" }}>
                            Size 1080x1920 or 600x800
                          </p>
                        </div>
                      </div>
                      <input
                        type="file"
                        onChange={handleInputPhotoPortofolio}
                        className="d-none"
                        id="file"
                      />
                    </label>
                  </div>
                  <button className="text-warning bg-light border p-2 border-warning">
                    Tambah Portofolio
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main> */}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default EditProfileWorker;
