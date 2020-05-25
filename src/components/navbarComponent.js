import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import { FcCollaboration } from 'react-icons/fc';

function Navbarcomponent() {
  return (
    <Navbar fixed="top" style={{backgroundColor:'#1A1A1D'}} collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand  href="#home"><h3>COLLAB.IO  <FcCollaboration/></h3></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="justify-content-end" style={{ width: "100%" }}>
      <Nav.Link href="#deets">Profile</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Sign out
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Navbarcomponent;
