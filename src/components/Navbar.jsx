import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate , Link} from 'react-router-dom';



function NavScrollExample() {

  const navigate = useNavigate()

const HandleClick = ()=>{

  navigate('login')

}

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">BabyShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
            {/* <Nav.Link href="#action2">About Us</Nav.Link> */}
            {/* <Nav.Link href="#action2">Testimonial</Nav.Link> */}
            <Nav.Link href="#action2">Contact Us</Nav.Link>     
          </Nav>
          <Form className="d-flex" style={{ marginLeft: '-30px' }}>
            <Form.Control
              type="search"
              placeholder="Search Products"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Button onClick={HandleClick} variant="outline-primary">Login</Button>{' '}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;