import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carouselhome.css'; 
import shp1 from '../images/shp1.png'
import bismil from '../images/resources/ayat-txt2-1.png'
import bismila from '../images/resources/ayat-txt2-2.png'
import bismi from '../images/resources/bsml-txt.png'
import ayat from '../images/resources/ayat-txt.png'


function Carouselhome() {
  return (
    <div className="container-fluid">
      <div className="text-center">
        <Carousel indicators={true} controls={true} interval={5000} className=''>
          <Carousel.Item className='main-section-home py-2'>
            <Carousel.Caption className="mb-3 ">

              <h4><img src={bismi} className='img-fluid'></img></h4>
              <h1 className="carousel-title mb-3">
              <h2>وَٱلسَّمَآءَ رَفَعَهَا وَوَضَعَ ٱلْمِيزَانَ</h2>
                
              </h1>
              <h6 className="carousel-subtitle mb-1">
              As for the sky, He raised it ˹high˺, and set the balance ˹of justice˺
              </h6>
              <p className="carousel-verse">
                "Surah Al-Rahmaan Vesre 55:7"
              </p>
              <a className="thm-btn brd-rd40" href="#" title="Read More">
                Read More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='main-section-home-banner-2 py-2'>
            <Carousel.Caption className="mb-3">
            <h4><img src={bismi} className='img-fluid'></img></h4>
              
              <h2 className='carousel-title mb-3'>
              فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ
              
              </h2>
                
             
              <h6 className="carousel-subtitle mb-2">
              Then which of your Lord’s favours will you ˹humans and jinn˺ both deny?1
              </h6>
              <p className="carousel-verse">
                "Surah Al-Rahmaan Vesre 55:13"
              </p>
              <a className="thm-btn brd-rd40" href="#" title="Read More">
                Read More
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div> <img src={shp1} className='img-fluid'></img> </div>
    </div>
  );
}

export default Carouselhome;
