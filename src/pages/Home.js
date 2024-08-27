import React from 'react';
import Carouselhome from '../components/Carouselhome';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPray, faBook, faHandsHelping, faKaaba } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import shp5 from '../images/shp6.png';
import shp4 from '../images/shp5.png';
import Homeicons from '../components/Homeicons';
import Footer from '../components/footer';

function Home() {
  return (
    < div className='home-background-main'>
      <div> 
        <section id="home">
        <Carouselhome />   
      </section>
      </div>
      <img src={shp5} className='img-fluid' alt='Background Image 2' />
      
      
      <div className="container-fluid homeicons-background">
        <Homeicons/>
    </div>
     
      <Footer/>
    </div>
  );
}

export default Home;
