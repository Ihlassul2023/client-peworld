import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { updateProfileWorker, getMyProfile } from "../redux/action/worker";
import { postSkillAction, getSkillAction } from "../redux/action/skill";
import { getExperienceAction, getExperienceById, postExperience, updateExperience, deleteExperience } from "../redux/action/experience";
import { getPortofolioAction, getPortofolioById, postPortofolio, updatePortofolio, deletePortofolio } from "../redux/action/portofolio";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditProfileWorker = () => {
  const dispatch = useDispatch();
  // ,
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
    fromMonth: "",
    toMonth: "",
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
    setDataWorker({ ...dataWorker, photo_url: URL.createObjectURL(e.target.files[0]) });
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
    setPortofolioWorker({ ...portofolioWorker, photo_url: URL.createObjectURL(e.target.files[0]) });
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
      <main>
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
                    <img src={dataWorker.photo_url || dataWorker.photo} alt="photo" className="rounded-circle" style={{ width: 100, height: 100 }} />
                  </div>
                  <div className="edit d-flex align-items-center justify-content-center gap-2">
                    <img src={edit} alt="edit" width="10px" height="10px" />
                    <label htmlFor="photo" className="mb-0 pointer-event">
                      Edit
                    </label>
                    <input className="d-none" type="file" onChange={handleInputPhotoProfile} name="photo_user" id="photo" />
                  </div>
                </div>
                <div className="nameUser">
                  <h3 className="text-dark">{dataWorker.name}</h3>
                  <p className="text-dark">{dataWorker.jobdesk}</p>
                  <div className="location d-flex align-items-center gap-2">
                    <img style={{ height: "15px", width: "15px" }} src={map} alt="map" />
                    <p className="mb-0">{dataWorker.address}</p>
                  </div>
                  <p className="text-dark">{dataWorker.office}</p>
                </div>
              </div>
              <div className="btnGrup d-flex flex-column gap-2">
                <button onClick={handleSubmitProfile} className="w-100 h-25 p-2 rounded border-0 btnUserSave">
                  Simpan
                </button>
                <button onClick={() => getProfile()} className="w-100 h-25 p-2 rounded  btnUserCancel">
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
                    <input type="text" name="name" value={dataWorker.name} onChange={(e) => handleInputProfile(e)} id="name" placeholder="Masukan nama lengkap" />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="jobDesk">Job desk</label>
                    <input type="text" name="jobdesk" value={dataWorker.jobdesk} onChange={(e) => handleInputProfile(e)} id="jobDesk" placeholder="Masukan Job desk" />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="domisili">Domisili</label>
                    <input type="text" name="addres" value={dataWorker.address} onChange={(e) => handleInputProfile(e)} id="domisili" placeholder="Masukan Domisili" />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="workPlace">Tempat kerja</label>
                    <input type="text" name="office" value={dataWorker.office} onChange={(e) => handleInputProfile(e)} id="workPlace" placeholder="Masukan tempat kerja" />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="description">Deskripsi singkat</label>
                    <textarea type="text" value={dataWorker.description} onChange={(e) => handleInputProfile(e)} name="description" id="description" cols="30" rows="10" placeholder="Tuliskan deskripsi singkat" />
                  </div>
                </form>
              </div>
              <div className="skill rounded">
                <h3 className="text-dark">Skill</h3>
                <hr />
                <form onSubmit={handleSubmitSkill} className="d-flex gap-2 mt-3">
                  <input value={skillWorker.skill_name} name="skill_name" onChange={(e) => handleInputSkill(e)} className="bg-light w-100 border-1 p-2" placeholder="Javascript, Html, css" type="text" />
                  <button className="bg-warning border-0 text-light p-2">Simpan</button>
                </form>
              </div>
              <div className="experience">
                <h3 className="text-dark">Pengalaman kerja</h3>
                <hr />
                {getExperience.isLoading ? (
                  <Spinner animation="border" role="status" size="lg" variant="light">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  getExperience.data?.data.map((experience, index) => (
                    <div key={index} className="workExperience mb-3">
                      <div>
                        <div className="d-flex justify-content-end gap-2">
                          <button onClick={() => getExperienceId(experience.id)} className="bg-warning rounded p-2 text-light border-0">
                            Edit
                          </button>
                          <button onClick={() => deleteMyExperience(experience.id)} className="bg-danger rounded p-2 text-light border-0">
                            X
                          </button>
                        </div>
                        <div className="detailExperience d-flex gap-3">
                          <img style={{ height: "50px", width: "50px" }} src={tokopedia} alt="tokopedia" />
                          <div className="div">
                            <p className="text-dark">{experience.position}</p>
                            <p>{experience.company_name}</p>
                            <p>
                              {experience.frommonth} - {experience.tomonth} 6 months
                            </p>
                            <p className="text-dark">{experience.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <form onSubmit={handleSubmitExperience} className="d-flex flex-column gap-2 mt-3">
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="position">Posisi</label>
                    <input type="text" name="position" value={experienceWorker.position} onChange={(e) => handleInputExperience(e)} id="position" className="bg-light border-1 p-2" placeholder="web developer" />
                  </div>
                  <div className="workInformation d-flex gap-3">
                    <div className="input  d-flex flex-column">
                      <label htmlFor="office">Nama perusahaan</label>
                      <input type="text" name="company_name" value={experienceWorker.company_name} onChange={(e) => handleInputExperience(e)} id="office" className="bg-light border-1 p-2" placeholder="PT.Harus bisa" />
                    </div>
                    <div className="input  d-flex flex-column">
                      <label htmlFor="from">Dari Bulan/Tahun</label>
                      <input type="text" name="fromMonth" value={experienceWorker.fromMonth} onChange={(e) => handleInputExperience(e)} id="from" className="bg-light border-1 p-2" placeholder="Januari 2018" />
                    </div>
                    <div className="input  d-flex flex-column">
                      <label htmlFor="to">Sampai Bulan/Tahun</label>
                      <input type="text" name="toMonth" value={experienceWorker.toMonth} onChange={(e) => handleInputExperience(e)} id="to" className="bg-light border-1 p-2" placeholder="Januari 2019" />
                    </div>
                  </div>
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="description">Deskripsi singkat</label>
                    <textarea type="text" name="description" value={experienceWorker.description} onChange={(e) => handleInputExperience(e)} id="description" cols="30" rows="10" placeholder="Deskripsikan pekerjaan anda" />
                  </div>
                  <button className="text-warning bg-light border p-2 border-warning">Tambah pengalaman kerja</button>
                </form>
              </div>
              <div className="portofolio">
                <h3 className="text-dark">Portofolio</h3>
                {getPortofolio.isLoading ? (
                  <Spinner animation="border" role="status" size="lg" variant="light">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  getPortofolio.data?.data.map((portofolio, index) => (
                    <div key={index} className="portofolioWorker d-flex justify-content-between mb-3">
                      <div className="informationPortfolio d-flex gap-2">
                        <img style={{ height: "100px", width: "150px" }} src={portofolio.photo} alt="porto" />
                        <div className="text">
                          <p>{portofolio.name}</p>
                          <p>{portofolio.link_repo}</p>
                        </div>
                      </div>
                      <div className="d-flex gap-2 h-25">
                        <button onClick={() => getPortofolioId(portofolio.id)} className="bg-warning rounded p-2 text-light border-0 ">
                          Edit
                        </button>
                        <button onClick={() => deleteMyPortofolio(portofolio.id)} className="bg-danger rounded p-2 text-light border-0">
                          X
                        </button>
                      </div>
                    </div>
                  ))
                )}
                <hr />
                <form onSubmit={handleSubmitPortofolio} className="d-flex flex-column gap-2 mt-3">
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="aplication">Nama aplikasi</label>
                    <input type="text" name="name" value={portofolioWorker.name} onChange={(e) => handleInputPortofolio(e)} id="aplication" className="bg-light border-1 p-2" placeholder="Masukan nama Aplikasi" />
                  </div>
                  <div className="input d-flex flex-column">
                    <label htmlFor="repository">Link repository</label>
                    <input type="text" name="link_repo" value={portofolioWorker.link_repo} onChange={(e) => handleInputPortofolio(e)} id="repository" className="bg-light border-1 p-2" placeholder="Masukan Link repository" />
                  </div>
                  <div className="d-flex flex-column">
                    <p>Type portofolio</p>
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
                  </div>
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="description">Upload gambar</label>
                    <label
                      htmlFor="file"
                      style={{ height: "300px", borderStyle: "dashed", backgroundImage: `${portofolioWorker.photo_url}` }}
                      className="d-flex flex-column rounded w-100 justify-content-center border-dash align-items-center "
                    >
                      <img style={{ height: "100px", width: "100px" }} src={portofolioWorker.photo_url || cloud} alt="cloud" />
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
                  <button className="text-warning bg-light border p-2 border-warning">Tambah Portofolio</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default EditProfileWorker;
