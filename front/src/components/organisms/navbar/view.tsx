import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FC } from "react";

export type NavProps = {
  title: string;
  link?: string;
  role: string;
  icon?: string;
};

export type NavItems = {
  links: ReadonlyArray<NavProps>;
  navbrand: NavProps;
};

const NavigationBar = styled(Navbar)`
  background-color: #393c7f;
`;

const NavBar: FC<NavItems> = ({ links, navbrand }) => {
  return (
    <>
      <NavigationBar>
        <Container fluid>
          <Navbar.Brand href="#home">{navbrand.title}</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {links.map((link) => (
                <Nav.Link href={link.link}>{link.title}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavigationBar>
    </>
  );
};

export { NavBar };
