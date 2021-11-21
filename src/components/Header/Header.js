import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt , faClinicMedical} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../hooks/useAuth';

 

const signUp = <FontAwesomeIcon icon={faSignInAlt} />
const medic = <FontAwesomeIcon icon={faClinicMedical} />

const Header = () => {
  const {user,logOut} = useAuth()
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={HashLink} to="/" className="fs-1"> <span id="logo-color">{medic}</span> Medi Care </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link as={HashLink} to="/">Home</Nav.Link>
      <Nav.Link as= {HashLink} to="/#services">Services</Nav.Link>
      <Nav.Link as= {HashLink} to="/#doctors">Doctor</Nav.Link>
      <Nav.Link as= {HashLink} to="/#doctors">Appointment</Nav.Link>
      <Nav.Link as= {HashLink} to="/contact">Contact</Nav.Link>
     
    </Nav>

    {
      user.email? <Nav><button   onClick={logOut}  className="header-button">Sign out {signUp}</button></Nav> :
      <Nav>
        <Nav.Link as={HashLink} to="/login" >Login</Nav.Link>
        <Nav.Link as={HashLink} to="/register" className="header-button">Sign up {signUp}</Nav.Link>
      </Nav>
    }
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;