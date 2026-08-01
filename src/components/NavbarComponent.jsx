import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Navbar.css'

import Logo from '../assets/LilBookLogo.png'
function NavbarComponent() {
  return (
    <Navbar 
      expand="lg" 
      className="modern-navbar"
      data-bs-theme="dark"
      sticky="top"
    >

      <Container>
        <Navbar.Brand 
          href="#home" 
          className="brand d-flex align-items-center gap-3"
        >
          <img 
            src={Logo} 
            width={45} 
            height={40} 
            alt="LilBooks Logo"
          />

          <span>
            Lil<span className="brand-highlight">Books</span>
          </span>

        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav">


          <Nav className="mx-auto nav-links">

            <Nav.Link href="#home">
              Home
            </Nav.Link>


            <NavDropdown 
              title="Books"
              id="books-dropdown"
            >

              <NavDropdown.Item href="#">
                Trending
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                Categories
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                Authors
              </NavDropdown.Item>

            </NavDropdown>


            <Nav.Link href="#">
              My Library
            </Nav.Link>


            <Nav.Link href="#">
              Profile
            </Nav.Link>


          </Nav>


          <Form className="search-container">

            <div className="search-box">

              <Form.Control
                type="search"
                placeholder="Search books..."
                className="search-input"
              />


              <Button 
                variant="light"
                className="search-btn"
              >
                Search
              </Button>

            </div>

          </Form>


        </Navbar.Collapse>


      </Container>

    </Navbar>
  );
}

export default NavbarComponent;