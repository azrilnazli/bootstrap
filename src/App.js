import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from "./routes/home";
import { BeakerIcon } from '@heroicons/react/solid';
import 'font-awesome/css/font-awesome.min.css';


export default function App() {
  return (
  
    <div className="bg-primary">
        <Navbar bg="primary" variant="dark">
            <Container className="h5">
              <Navbar.Brand className="text-warning"  href="#home"><i class="fa fa-spinner fa-spin"></i> React Flix</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/home" > <i class="fa fa-home"></i> Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/expenses"> <i class="fa fa-bolt"></i> Popular</Nav.Link>
                  <Nav.Link as={NavLink} to="/invoices"><i class="fa fa-user"></i> Originals</Nav.Link>
                  <Nav.Link as={NavLink} to="/invoices"><i class="fa fa-video"></i> Movies</Nav.Link>
                  <Nav.Link as={NavLink} to="/invoices"><i class="fa fa-tv"></i> TV Series</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Container className="me-auto bg-light rounded p-5 mt-0">
        <Row>
          <Col><Outlet /></Col>
        </Row>
      </Container>  
      <Container className="me-auto bg-primary rounded p-0 mt-5">
        <Row>
          <Col></Col>
        </Row>
      </Container>  
    </div>
  );
}