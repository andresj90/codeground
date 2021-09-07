import {Navbar,Container,Nav} from 'react-bootstrap'
import {
    Link,
  } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><Link to="/">CodeGround</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="#features"> <Link to="/about">About</Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
  )
};


export {NavigationBar}