import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl, FormGroup, Button } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <Navbar className="navbar">
              <Navbar.Header>
                <Navbar.Brand>
                  <a className="navbar-name" href="/"><img className="logo" src= {require("./logo.jpg")} alt='logo' /></a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav pullRight>
                <NavItem eventKey={1} href="/All">
                  All Lots
                </NavItem>
                <NavItem eventKey={2} href="/Login">
                  Login
                </NavItem>
                <NavItem eventKey={3} href="/Register">
                  Register
                </NavItem>
                <NavItem eventKey={3} href="/Invoice">
                  Invoice
                </NavItem>
              </Nav>
              <Navbar.Form pullRight>
                <FormGroup>
                  <FormControl type="text" placeholder="Search Lots" />
                </FormGroup>{' '}
                {/* Made this into a link to the single lot for the demo AKW */}
                <a href="/lot"><Button type="submit">Search</Button></a>
              </Navbar.Form>
            </Navbar>
        );
    }
}

export default Header;