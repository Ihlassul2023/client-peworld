import React, { useState } from "react";
import { Container, Navbar, NavbarBrand, Card } from "react-bootstrap";

import NavigationBar from "../component/Navbar";
import Search from "../component/Search";
import Cards from "../component/Card";
import Footer from "../component/Footer";

import "../assets/css/main.css";

const Home = () => {
  return (
    <>
      <NavigationBar />

      <Navbar className="custom-bg-nav">
        <Container>
          <NavbarBrand>
            <h5 className="mb-0 text-white">Top Jobs</h5>
          </NavbarBrand>
        </Container>
      </Navbar>

      {/* search */}
      <Search />

      {/* Card */}
      <Cards />

      <Container>
        <div className="d-flex justify-content-center mt-4">
          <div>
            <nav aria-label="Page navigation example">
              <ul className="pagination gap-2">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
