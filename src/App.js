import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import Home from './pages/Home'
import About from './pages/About';
import Courses from './pages/Courses';
import Services from './pages/Services';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" expand="lg" className="navbar-dark bg-black p-3">
          <Container>
            <Navbar.Brand as={Link} to="/"  className='text-warning fw-bold' >Faizan-ul-Quran
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/" className="text-white fw-bold  mx-3">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-white fw-bold mx-3">About</Nav.Link>
                <Nav.Link as={Link} to="/services" className="text-white fw-bold mx-3">Services</Nav.Link>
                <Nav.Link as={Link} to="/Courses" className="text-white fw-bold mx-3">Courses</Nav.Link>
              </Nav>
              <Form className="d-flex ms-auto">
              <a className="thm-btn brd-rd40" href="#" title="Read More">
              Contact Us
          </a>
                
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Define the Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;