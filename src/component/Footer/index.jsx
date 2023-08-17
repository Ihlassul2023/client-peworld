// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";
import logoWhite from "../../assets/image/logoWhite.png";

const Footer = () => {
  return (
    <>
      <footer className="primaryContainer px-5 py-5">
        <div className="content mx-5">
          <img src={logoWhite} alt="Logo" width={100} />
          <p className="text-white col-lg-4 col-md-6 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum nostrum voluptate, nobis nemo fuga.</p>
          <hr className="footerLine mt-5 mb-4" />
          <div className="row">
            <h6 className="text-white col-lg-9 col-md-9">2020 Pewworld. All right reserved</h6>
            <h6 className="text-white col-lg-2 col-md-1">Telepon</h6>
            <h6 className="text-white text-end col-lg-1 col-md-2">Email</h6>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
