import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

const logo = {
  width: " 16.25rem;",
  fontSize: "2.5rem;",
};

function NavControl() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className="navbar-dark sticky-top"
      variant="dark"
      style={{ backgroundColor: "#343a40" }}
    >
      <div className="container">
        <Navbar.Brand href="#home">
          <h1 style={logo}>Portfolio</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link href="#home" className="nav-li-a">
                Home
              </Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link href="#about" className="nav-li-a">
                About
              </Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link href="#skills" className="nav-li-a">
                Skills
              </Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link href="#projects" className="nav-li-a">
                Projects
              </Nav.Link>
            </Link>

            {/* <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link href="#contact" className="nav-li-a">Catch me</Nav.Link>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavControl;
