// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logoPurple from "../../assets/img/logoPurple.png";
import mail from "../../assets/img/mail1.png";
import bell from "../../assets/img/bell1.png";
import avatar from "../../assets/img/avatar.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-white px-5">
        <div className="container row">
          <Link className="navbar-brand col-lg-6" to="/">
            <img src={logoPurple} alt="Peworld" width={80} />
          </Link>
          <div className="col-lg-2">
            <a href="mailto:example@example.com">
              <img src={mail} className="mail me-5" alt="Mail" width={15} />
            </a>
            <Link to="/notifications">
              <img src={bell} className="bell me-5" alt="Bell" width={15} />
            </Link>
            <Link to="/profile">
              <img src={avatar} alt="Avatar" width={25} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
