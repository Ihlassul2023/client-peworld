// eslint-disable-next-line no-unused-vars
import React from "react";
import edit from "../assets/image/edit.svg";
import photo from "../assets/image/photo.png";
import map from "../assets/image/map-pin.png";
import tokopedia from "../assets/image/tokopedia.png";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const EditProfileWorker = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="wrapProfile d-flex justify-content-center">
          <div className="background"></div>
          <div className="wrapCardEdit">
            <div className="cardEditProfile  rounded  mb-2  p-2">
              <div className="photo mb-4 d-flex flex-column align-items-center gap-2">
                <div className="photoUser">
                  <img src={photo} alt="photo" />
                </div>
                <div className="edit d-flex align-items-center justify-content-center gap-2">
                  <img src={edit} alt="edit" width="10px" height="10px" />
                  <p className="mb-0">Edit</p>
                </div>
              </div>
              <div className="nameUser">
                <h3 className="text-dark">Louis Tomlinson</h3>
                <p className="text-dark">Web developer</p>
                <div className="location d-flex align-items-center gap-2">
                  <img src={map} alt="map" />
                  <p className="mb-0">Purwokerto,Jawa tengah</p>
                </div>
              </div>
            </div>
            <div className="btnGrup d-flex flex-column gap-2">
              <button className="w-100 h-25 rounded btnUserSave">Simpan</button>
              <button className="w-100 h-25 rounded  btnUserCancel">Batal</button>
            </div>
          </div>
          <div className="wrapMainEdit">
            <div className="mainEditProfile d-flex flex-column gap-2  p-2">
              <div className="bio rounded">
                <h3 className="text-dark">Data Diri</h3>
                <hr />
                <form>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="name">Nama Lengkap</label>
                    <input type="text" id="name" placeholder="Masukan nama lengkap" />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="jobDesk">Job desk</label>
                    <input type="text" id="jobDesk" placeholder="Masukan Job desk" />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="domisili">Domisili</label>
                    <input type="text" id="domisili" placeholder="Masukan Domisili" />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="workPlace">Tempat kerja</label>
                    <input type="text" id="workPlace" placeholder="Masukan tempat kerja" />
                  </div>
                  <div className="input mb-3 d-flex flex-column ">
                    <label htmlFor="description">Deskripsi singkat</label>
                    <textarea type="text" id="description" cols="30" rows="10" placeholder="Tuliskan deskripsi singkat" />
                  </div>
                </form>
              </div>
              <div className="skill rounded">
                <h3 className="text-dark">Skill</h3>
                <hr />
                <form className="d-flex gap-2 mt-3">
                  <input className="bg-light w-100 border-1 p-2" placeholder="Javascript, Html, css" type="text" />
                  <button className="bg-warning text-light p-2">Simpan</button>
                </form>
              </div>
              <div className="experience">
                <h3 className="text-dark">Pengalaman kerja</h3>
                <hr />
                <div className="workExperience">
                  <div>
                    <div></div>
                    <div className="detailExperience">
                      <img src={tokopedia} alt="tokopedia" />
                      <div className="div">
                        <p className="text-dark">Web developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="d-flex flex-column gap-2 mt-3">
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="position">Posisi</label>
                    <input type="text" id="position" className="bg-light border-1 p-2" placeholder="web developer" />
                  </div>
                  <div className="d-flex gap-3">
                    <div className="input w-25 d-flex flex-column">
                      <label htmlFor="office">Nama perusahaan</label>
                      <input type="text" id="office" className="bg-light border-1 p-2" placeholder="PT.Harus bisa" />
                    </div>
                    <div className="input w-25 d-flex flex-column">
                      <label htmlFor="from">Dari Bulan/Tahun</label>
                      <input type="text" id="from" className="bg-light border-1 p-2" placeholder="Januari 2018" />
                    </div>
                    <div className="input w-25 d-flex flex-column">
                      <label htmlFor="to">Sampai Bulan/Tahun</label>
                      <input type="text" id="to" className="bg-light border-1 p-2" placeholder="Januari 2019" />
                    </div>
                  </div>
                  <div className="input d-flex flex-column w-100">
                    <label htmlFor="description">Deskripsi singkat</label>
                    <textarea type="text" id="description" cols="30" rows="10" placeholder="Deskripsikan pekerjaan anda" />
                  </div>
                  <button className="text-warning bg-light border p-2 border-warning">Tambah pengalaman kerja</button>
                </form>
              </div>
              <div className="portofolio"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EditProfileWorker;
