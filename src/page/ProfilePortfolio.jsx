import React, { useEffect, useState } from "react";

import NavigationBar from "../component/Navbar";
import Footer from "../component/Footer";

import "../assets/css/main.css";
import { Col, Container, Row, Card, Button, Spinner } from "react-bootstrap";
import CardPortfolio from "../component/CardPortfolio/CardPortfolio";

import fakePhotoProfile from "../assets/image/photo.png";
import { getWorkerDetail } from "../redux/action/worker";
import { getExperienceForRecruitAction } from "../redux/action/experience";
import { getPortofolioForRecruitAction } from "../redux/action/portofolio";
import { getSkillForRecruitAction } from "../redux/action/skill";
import { Link } from "react-router-dom";
// import image
import fakePorto1 from "../assets/image/fakePorto1.png";
import fakePorto2 from "../assets/image/fakePorto2.png";
import fakePorto3 from "../assets/image/fakePorto3.png";
import fakePorto4 from "../assets/image/fakePorto4.png";
import fakePorto5 from "../assets/image/fakePorto5.png";
import fakePorto6 from "../assets/image/fakePorto6.png";

import tokoPediaImg from "../assets/image/tokopedia.png";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import fakePhoto from "../assets/image/photo.png";

const ProfilePortfolio = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileWorker, setProfileWorker] = useState({});
  const { detail_worker, getExperienceForRecruit, getPortofolioForRecruit, getSkillForRecruit } = useSelector((state) => state);
  // const dataPhoto = [
  //   {
  //     id: 1,
  //     image: fakePorto1,
  //     title: "Remainder app",
  //   },
  //   {
  //     id: 2,
  //     image: fakePorto2,
  //     title: "Social media app",
  //   },
  //   {
  //     id: 3,
  //     image: fakePorto3,
  //     title: "Project management web",
  //   },
  //   {
  //     id: 4,
  //     image: fakePorto4,
  //     title: "Remainder app",
  //   },
  //   {
  //     id: 5,
  //     image: fakePorto5,
  //     title: "Social media app",
  //   },
  //   {
  //     id: 6,
  //     image: fakePorto6,
  //     title: "Project management web",
  //   },
  // ];
  useEffect(() => {
    workerDetail();
    experienceWorker();
    portofolioWorker();
    skillWorker();
  }, []);
  console.log(detail_worker?.data);
  useEffect(() => {
    !detail_worker.isLoading && detail_worker.data && setProfileWorker({ ...profileWorker, ...detail_worker?.data });
  }, [detail_worker.isLoading]);
  const workerDetail = () => {
    dispatch(getWorkerDetail(id));
  };
  const experienceWorker = () => {
    dispatch(getExperienceForRecruitAction(id));
  };
  const portofolioWorker = () => {
    dispatch(getPortofolioForRecruitAction(id));
  };
  const skillWorker = () => {
    dispatch(getSkillForRecruitAction(id));
  };

  return (
    <>
      <header>
        <NavigationBar />
        <div className="back-background"></div>
      </header>
      <main className="mt-5">
        <Container>
          <Row className="">
            <Col md="4">
              {detail_worker.isLoading ? (
                <Spinner animation="border" role="status" size="lg" variant="light">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <Card className="p-3 pt-5 border-0">
                  <div className="d-flex justify-content-center">
                    <img src={profileWorker.photo || fakePhoto} alt="photo" className="rounded-circle" style={{ width: 100, height: 100 }} />
                  </div>
                  <div className="mt-4">
                    <h5 className="text-black">{profileWorker.name}</h5>
                    <p className="fw-medium fs-6 mb-2 text-black">{profileWorker.jobdesk}</p>
                    <div className="d-flex">
                      <box-icon name="map" animation="tada" color="gray"></box-icon>
                      <p className="ms-2">{profileWorker.address}</p>
                    </div>
                    <p>{profileWorker.office}</p>
                    <p>{profileWorker.description}</p>
                  </div>

                  <div className="mt-5">
                    <h5>Skill</h5>
                    <div className="d-flex flex-wrap gap-3">
                      {getSkillForRecruit.isLoading ? (
                        <Spinner animation="border" role="status" size="lg" variant="light">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      ) : (
                        getSkillForRecruit.data?.skill_name.split(",").map((skill, id) => (
                          <button key={id} className="btn btn-sm btn-warning text-white px-3">
                            {skill}
                          </button>
                        ))
                      )}
                    </div>
                    <div className="mt-5">
                      <div className="d-flex">
                        <box-icon name="envelope" color="gray" animation="tada"></box-icon>
                        <p className="ms-3">Louistommo@gmail.com</p>
                      </div>
                      <div className="d-flex">
                        <box-icon name="instagram" type="logo" color="gray" animation="tada"></box-icon>
                        <p className="ms-3">@Louist91</p>
                      </div>
                      <div className="d-flex">
                        <box-icon type="logo" name="github" color="gray" animation="tada"></box-icon>
                        <p className="ms-3">@Louistommo</p>
                      </div>
                      <div className="d-flex">
                        <box-icon name="gitlab" type="logo" color="gray" animation="tada"></box-icon>
                        <p className="ms-3">@Louistommo91</p>
                      </div>
                    </div>
                  </div>
                  <Link to={`/Hire/${id}`} className="py-2 mt-3 custom-button text-decoration-none text-center text-light">
                    Hire
                  </Link>
                </Card>
              )}
            </Col>
            <Col md="8">
              <Card className="border-0 p-3">
                <div>
                  <h4 className="text-black fw-semibold custom-line">Portofolio</h4>
                </div>
                {getPortofolioForRecruit.isLoading ? (
                  <Spinner animation="border" role="status" size="lg" variant="light">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <div className="mt-4">
                    <Row className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                      {getPortofolioForRecruit?.data?.map((item, index) => (
                        <CardPortfolio image={item.photo} title={item.name} key={item.id} />
                      ))}
                    </Row>
                  </div>
                )}

                <div>
                  <h4 className="text-black fw-semibold custom-line">Pengalaman Kerja</h4>
                  {getExperienceForRecruit.isLoading ? (
                    <Spinner animation="border" role="status" size="lg" variant="light">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    getExperienceForRecruit?.data?.map((experience) => (
                      <div key={experience.id} className="mt-4 mb-3">
                        <div className="d-flex flex-row pe-0 pe-md-5">
                          <div>
                            <img src={tokoPediaImg} alt="image" style={{ width: 80, height: 80 }} />
                          </div>
                          <div className="ms-3 mt-2">
                            <h5 className="text-black mb-0">{experience.position}</h5>
                            <p className="fw-light mb-0 text-black">{experience.company_name}</p>
                            <p className="fw-lighter">
                              {experience.frommonth} - {experience.tomonth} <span className="ms-2">6 months</span>
                            </p>
                            <p className="fw-normal text-black ">{experience.description}</p>
                            <hr />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePortfolio;
