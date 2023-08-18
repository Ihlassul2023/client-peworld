import React from "react";
import "./search.css";
import { Container, FormControl, Button, Dropdown } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="my-4">
      <div>
        <div className="custom-searchbar w-100 d-flex flex-row justify-align-content-between">
          <FormControl
            className="py-3 border-0"
            placeholder="Search for any skill"
          />
          <Dropdown className="d-flex align-items-center me-2 border-start my-2">
            <Dropdown.Toggle
              id="dropdown"
              className="bg-transparent border-0 text-black-50"
            >
              Kategori
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-3">
              <Dropdown.Item href="#/action-1">
                Sortir berdasarkannama
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Sortir berdasarkan Skill
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Sortif berdasarkan Lokasi
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Sortir berdasarkan freelance
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Sortir berdasarkan fulltime
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button className="my-2 me-2 px-3 custom-button-search">
            Search
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Search;
