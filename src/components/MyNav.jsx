import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../img/netflix_logo.png";
import avatar from "../img/avatar.png";
import kids from "../img/kids_icon.png";
import { Search, Bell } from "react-bootstrap-icons";

const MyNav = () => (
  <Navbar expand="lg" variant="dark" className="px-4">
    <Container fluid>
      <Navbar.Brand href="#">
        <img src={logo} alt="Netflix Logo" width="148px" />
      </Navbar.Brand>

      <Navbar.Collapse id="mainNav">
        <Nav className="me-auto mb-2 mb-lg-0">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#" active>
            TV Shows
          </Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div
        id="right-icons"
        className="d-flex gap-3 align-items-center text-light"
      >
        <Search className="iconSearch" size={20}></Search>
        <span className="pointer">KIDS</span>
        <Bell className="iconBell" size={20}></Bell>
        <div className="dropdown">
          <NavDropdown
            title={<img src={avatar} alt="User Avatar" width="48px" />}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item className="text-light" href="#">
              <img src={kids} alt="User Avatar" width="48px" /> Kids
            </NavDropdown.Item>
            <NavDropdown.Item className="text-light" href="#">
              Manage Profiles
            </NavDropdown.Item>

            <hr className="dropdown-divider" />

            <NavDropdown.Item className="text-light" href="#">
              Edit Profile
            </NavDropdown.Item>
            <NavDropdown.Item className="text-light" href="#">
              Account
            </NavDropdown.Item>
            <NavDropdown.Item className="text-light" href="#">
              Help Center
            </NavDropdown.Item>

            <hr className="dropdown-divider" />

            <NavDropdown.Item className="text-light" href="#">
              Sign out of NETFLIX
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <Navbar.Toggle />
      </div>
    </Container>
  </Navbar>
);
export default MyNav;
