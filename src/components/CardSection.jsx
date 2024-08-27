import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaBook, FaHandsHelping, FaSearchPlus, FaReadme } from 'react-icons/fa';
import './CardSection.css'; // Make sure to create this CSS file for custom styles

const CardSection = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Body>
              <div className="icon-wrapper">
                <FaBook className="card-icon" />
              </div>
              <Card.Title>Courses</Card.Title>
              <Card.Text>
                Details on courses in order for students to select as per their desire
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Body>
              <div className="icon-wrapper">
                <FaReadme className="card-icon" />
              </div>
              <Card.Title>Books & Lectures</Card.Title>
              <Card.Text>
                Material on main topics of Islam. Essential for every Muslim
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Body>
              <div className="icon-wrapper">
                <FaHandsHelping className="card-icon" />
              </div>
              <Card.Title>Charity</Card.Title>
              <Card.Text>
                Help people come out of poverty through charity and vocational trainings
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-hover">
            <Card.Body>
              <div className="icon-wrapper">
                <FaSearchPlus className="card-icon" />
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
}

export default CardSection;
