import React from "react";
import "./search.css";
import { Container, FormControl, Button, Dropdown, Form } from "react-bootstrap";

const Search = (props) => {
  return (
    <Container className="my-4">
      <div>
      <Form onSubmit={props.searchsubmit}>
        <div className="custom-searchbar w-100 d-flex flex-row justify-align-content-between">
          <FormControl
            onChange={props.searchchange}
            className="py-3 border-0"
            placeholder="Search for any skill"
          />
          <Dropdown className="d-flex align-items-center me-2 border-start my-2" onSelect={props.searchbychange}>
            <Dropdown.Toggle
              id="dropdown"
              className="bg-transparent border-0 text-black-50"
            >
              {props.selectedtoggle}
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
          <Button type="submit" className="my-2 me-2 px-3 custom-button-search">
            Search
          </Button>
        </div>
      </Form>
      </div>
    </Container>
  );
};

export default Search;