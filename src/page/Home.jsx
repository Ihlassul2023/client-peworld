import React, { useState, useEffect } from "react";
import { Container, Navbar, NavbarBrand, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSearchSort } from "../redux/action/home";
import { ToastContainer } from "react-toastify";
import ReactPaginate from "react-paginate";
import fakePhoto from "../assets/image/photo.png";

import NavigationBar from "../component/Navbar";
import Search from "../component/Search";
import Cards from "../component/Card";
import Footer from "../component/Footer";

import "../assets/css/main.css";

const Home = () => {
  const dispatch = useDispatch();
  const [selectedItemLabel, setSelectedItemLabel] = useState("Kategori");
  const [sortby, setSortby] = useState("name");
  const [sort, setSort] = useState("ASC");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");
  const [searchby, setSearchby] = useState("name");
  const { data } = useSelector((state) => state.getSearchSort);

  const searchSort = () => {
    console.log("Current searchby:", searchby);
    dispatch(getSearchSort(search, searchby, limit, page, sort, sortby));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    searchSort();
  };
  const handleSearchByChange = (selectedKey, event) => {
    setSearchby(selectedKey);
    setSelectedItemLabel(event.target.innerText);
  };
  const changePage = ({ selected }) => {
    setPage(selected + 1);
  };

  useEffect(() => {
    searchSort();
  }, [page]);

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
      <Search searchsubmit={handleSearchSubmit} searchchange={handleSearchChange} searchbychange={handleSearchByChange} selectedtoggle={selectedItemLabel} />

      {/* Card */}
      <div>
        {data?.data?.map((item) => {
          return <Cards id={item.id} image={item.photo || fakePhoto} name={item.name} jobdesk={item.jobdesk || "Jobdesk not found"} address={item.address || "Address not found"} skill={item.skill_name.split(",")} />;
        })}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={data?.page.totalPage} //countPage
        onPageChange={changePage} //onChangePage
        containerClassName={"pagination justify-content-center gap-2 mt-5"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        activeLinkClassName={"page-item active"}
        disabledLinkClassName={"page-item disabled"}
      />
      <ToastContainer />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
