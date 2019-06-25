import React, { Fragment, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Jim Groome</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink
                href='https://github.com/jimgroome'
                rel='noopener noreferrer'
                target='_blank'
              >
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='mailto:hello@jimgroo.me'
                rel='noopener noreferrer'
                target='_blank'
              >
                Email
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
