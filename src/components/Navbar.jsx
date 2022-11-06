import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Contato from "./Contato";
import logo from "../assets/logo.svg";
import styles from './Navbar.module.css'
function NavScrollExample() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Navbar className={styles.navbar} expand="lg">
            <Container fluid className={styles.navbar} >
              <Navbar.Brand href="#">
                <img
                  src={logo}
                  alt="Logo do site guia da cidade."
                  style={{ width: "70px" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav 
                  className="m-auto"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/" className="ml-5">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="#paraondeir" className="ml-5">
                    Para onde ir
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contato" className="ml-5">
                    Contate-nos
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default NavScrollExample;
