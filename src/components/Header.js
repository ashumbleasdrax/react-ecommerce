import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Header = () => {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#">The Book Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">My orders</Nav.Link>
        <Nav.Link href="#">Cart</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
};
export default Header;
