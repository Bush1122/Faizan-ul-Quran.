import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPray, faBook, faHandsHelping, faKaaba } from '@fortawesome/free-solid-svg-icons';
import  './cardhome.css'

const Homeicons = () => {
  return (
    <div className='container py-4 '>
    <Row>
      <Col md={3} className='mb-3'>
        <Card className="card-hover text-center">
          <Card.Body>
            <div className="icon-wrapper icon-circle">
              <FontAwesomeIcon icon={faPray} className="fa-icon " />
            </div>
            <Card.Title>Courses</Card.Title>
            <Card.Text>
              Details on courses in order for students to select as per their desire
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className='mb-3'>
        <Card className="card-hover text-center">
          <Card.Body>
            <div className="icon-wrapper icon-circle">
              <FontAwesomeIcon icon={faBook} className="fa-icon" />
            </div>
            <Card.Title className='p-2'>Books & Lectures</Card.Title>
            <Card.Text>
              Material on main topics of Islam. Essential for every Muslim
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className='mb-3'>
        <Card className="card-hover text-center">
          <Card.Body>
            <div className="icon-wrapper icon-circle">
              <FontAwesomeIcon icon={faHandsHelping} className="fa-icon" />
            </div>
            <Card.Title>Charity</Card.Title>
            <Card.Text>
              Help people come out of poverty through charity and vocational trainings
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="card-hover text-center">
          <Card.Body>
            <div className="icon-wrapper icon-circle">
              <FontAwesomeIcon icon={faKaaba} className="fa-icon" />
            </div>
            <Card.Title>Ruqya</Card.Title>
            <Card.Text>
              Spiritual treatment from QURAN. An Islamic way to health.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>



    
    </div>
  );
};

export default Homeicons;
