import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <Navbar className="navbar">
              <Navbar.Header>
                <Navbar.Brand>
                  <a className="navbar-name" href="#home">Mo Mowin, Mo Money</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  All Lots
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Login
                </NavItem>
                <NavItem eventKey={3} href="#">
                  Register
                </NavItem>
              </Nav>
            </Navbar>
        );
    }
}

export default Header;