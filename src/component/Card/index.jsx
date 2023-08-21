import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSearchSort } from '../../redux/action/home';
import { ToastContainer } from 'react-toastify';
import ReactPaginate from 'react-paginate';

import {
  Card,
  Container,
  Button,
  FormControl,
  Dropdown,
  Form,
} from 'react-bootstrap';

import fakePhoto from '../../assets/image/photo.png';
import './card.css';
import './search.css'

const Cards = () => {
  const dispatch = useDispatch();
  const [selectedItemLabel, setSelectedItemLabel] = useState('Kategori');
  const [sortby, setSortby] = useState('name');
  const [sort, setSort] = useState('ASC');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [search, setSearch] = useState('');
  const [searchby, setSearchby] = useState('name');
  const { data } = useSelector(
    (state) => state.getSearchSort
  );

  const searchSort = () => {
    console.log('Current searchby:', searchby);
    dispatch(getSearchSort(search, searchby, limit, page, sort, sortby));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1)
    searchSort();
  };
  const handleSearchByChange = (selectedKey, event) => {
    setSearchby(selectedKey);
    setSelectedItemLabel(event.target.innerText);
  };
  const changePage = ({selected}) => {
    setPage(selected + 1)
  };

  useEffect(() => {
    searchSort();
  }, [page]);

  return (
    <>
      <Container className="my-4">
        <div>
          <Form onSubmit={handleSearchSubmit}>
            <div className="custom-searchbar w-100 d-flex flex-row justify-align-content-between">
              <FormControl
                onChange={handleSearchChange}
                className="py-3 border-0"
                placeholder="Search for any skill"
              />
              <Dropdown
                className="d-flex align-items-center me-2 border-start my-2"
                onSelect={handleSearchByChange}
              >
                <Dropdown.Toggle
                  id="dropdown"
                  className="bg-transparent border-0 text-black-50"
                >
                  {selectedItemLabel}
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-3">
                  <Dropdown.Item eventKey="name">
                    Sortir berdasarkan nama
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="skill_name">
                    Sortir berdasarkan skill
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                type="submit"
                className="my-2 me-2 px-3 custom-button-search"
              >
                Search
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <Container>
        <Card className="border-0 rounded-0">
          <div className="p-3 d-md-flex flex-column">
            {data?.data?.map((item) => {
              return (
                <>
                  <div className="d-flex justify-content-between my-3 flex-wrap">
                    <div className="d-flex">
                      <img
                        src={item.photo || fakePhoto}
                        alt="photo profile"
                        className="rounded-circle"
                        style={{ width: 80, height: 80 }}
                      />
                      <div className="ms-3">
                        <h5 className="text-black">{item.name}</h5>
                        <p className="mb-1">
                          {item.jobdesk || 'Jobdesk not found'}
                        </p>
                        <div className="d-flex">
                          <box-icon
                            name="map"
                            color="gray"
                            animation="tada"
                          ></box-icon>
                          <p className="ps-1">
                            {item.address || 'Address not found'}
                          </p>
                        </div>
                        <div className="d-flex gap-2 flew-wrap flex-grow-1">
                          {item.skill_name.split(',').map((skill) => {
                            return (
                              <>
                                <Button
                                  variant="warning"
                                  className="btn-sm px-3 text-white"
                                >
                                  {skill}
                                </Button>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="d-block d-md-flex align-items-md-center mt-3 mt-md-0">
                      <Button className="btn-sm px-3 border-0 py-2 rounded-0 custom-button d-block mx-auto">
                        Lihat Profile
                      </Button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <hr className="mx-3" />
        </Card>
        <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={data?.page.totalPage}//countPage
              onPageChange={changePage}//onChangePage
              containerClassName={"pagination justify-content-center gap-2 mt-5"}
              pageLinkClassName={"page-link"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              activeLinkClassName={"page-item active"}
              disabledLinkClassName={"page-item disabled"}
            />
        <ToastContainer/>
      </Container>
    </>
  );
};

export default Cards;
