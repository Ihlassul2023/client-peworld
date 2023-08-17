import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logoPurple from "../../assets/image/logoPurple.png";
import mail from "../../assets/image/mail1.png";
import bell from "../../assets/image/bell1.png";
import avatar from "../../assets/image/avatar.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-white px-5">
        <div className="container row">
          <Link className="navbar-brand col-lg-6" to="/">
            <img className="w-25" src={logoPurple} alt="Peworld" width="80px" />
          </Link>
          <div className="col-lg-2">
            <a href="mailto:example@example.com">
              <img src={mail} className="mail me-5 w-25" alt="Mail" width="80px" />
            </a>
            <Link to="/notifications">
              <img src={bell} className="bell me-5 w-25" alt="Bell" width="80px" />
            </Link>
            <Link to="/profile">
              <img src={avatar} className="w-25" alt="Avatar" width="25px" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
