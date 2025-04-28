import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {
  FaHome,
  FaSearch,
  FaTags,
  FaQuestionCircle,
  FaSignOutAlt,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";

function NavbarPage() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="py-3" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbbFkbxmm68be0_zk2B_wrYa9YmWXeoo7kA&s"
              alt="logo"
              style={{ height: "50px", width: "80% !important" }}
              className="logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#other" className="mx-2 nav-hover">
              Other <FaChevronDown />
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="#home" className="mx-2 nav-hover">
                <FaHome /> SwiggyCorporate
              </Nav.Link>
              <Nav.Link href="#features" className="mx-2 nav-hover">
                <FaSearch /> Search
              </Nav.Link>
              <Nav.Link href="#offers" className="mx-2 nav-hover offer-link">
                <FaTags /> Offers
              </Nav.Link>
              <Nav.Link href="#help" className="mx-2 nav-hover">
                <FaQuestionCircle /> Help
              </Nav.Link>
              <Nav.Link href="#signin" className="mx-2 nav-hover">
                <FaSignOutAlt /> SignIn
              </Nav.Link>
              <Nav.Link href="#cart" className="mx-2 nav-hover">
                <FaShoppingCart /> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarPage;
