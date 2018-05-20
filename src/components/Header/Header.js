import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl, FormGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <Navbar className="navbar">
              <Navbar.Header>
                <Navbar.Brand>
                  <LinkContainer to="/" className="navbar-name">
                    <a className="navbar-name"><img className="logo" src= {require("./logo.jpg")} alt='logo' /></a>
                  </LinkContainer>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav pullRight>
                <LinkContainer to="/All">
                  <NavItem eventKey={1}>
                    All Lots
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/Login">
                  <NavItem eventKey={2}>
                    Login
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/Register">
                  <NavItem eventKey={3}>
                    Register
                  </NavItem>
                </LinkContainer>
                <LinkContainer to="/Invoice">
                  <NavItem eventKey={3}>
                    Invoice
                  </NavItem>
                </LinkContainer>
              </Nav>
              <Navbar.Form pullRight>
                <FormGroup>
                  <FormControl type="text" placeholder="Search Lots" />
                </FormGroup>{' '}
                {/* Made this into a link to the single lot for the demo AKW */}
                <LinkContainer to="/lot">
                  <Button type="submit">Search</Button>
                </LinkContainer>
              </Navbar.Form>
            </Navbar>
        );
    }
}

export default Header;