import React from 'react';
import './About.css';
import shp4 from '../images/shp4.png'
import shp5 from '../images/shp5.png'
import backgroundImage from '../images/banner.jpg';
import Footer from '../components/footer';


const About = () => {
  return (
    <div className='main-top-about-data' >
   <div className="container-fluid main-section-about">
  <div className="text-center slide d-flex justify-content-center align-items-center">
    <div className="carousel-caption mb-5">
      <h1 className="carousel-title text-white mb-3">
      رَبُّ ٱلْمَشْرِقَيْنِ وَرَبُّ ٱلْمَغْرِبَيْنِ 
      </h1>
      <h6 className="carousel-subtitle text-white mb-3">
      ˹He is˺ Lord of the two easts and the two wests.
      </h6>
      <p className="carousel-verse text-white">
        "Surah Al-Rahmaan Verse 55:17"
      </p>
      <a className="thm-btn btn btn-primary brd-rd40" href="#" title="Read More">
        Read More
      </a>
    </div>
  </div>
</div>

 
 <img src={shp5} className='img-fluid' alt='Background Image 2' />
 <img src={shp4} className='img-fluid ' alt='Background Image 1 ' />
  <div className="container-fluid  main-container-about ">
    <div className='container mt-3 '>
      <div className='row '>
        <div className="col-6">
          <h6 className="text-light fw-bold mb-3">About</h6>
          <h2 className="text-warning fw-bold mb-3">Our Center</h2>
          <hr className='sec-title-inner-about' />
          <p className='text-white  fw-bold mb-3 '>
            Faizan ul-Quran is a Non-Profit Organization and does not promote any sect. All of our courses and teaching materials are free and are based upon Quran and Hadeeth. We are here to spread the true message of Islam.
          </p>
          <div className='mt-5'>
            <a className="thm-btn" href="#" title="Read More">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img src={shp5} className='img-fluid' alt='Background Image 2' />
  

<Footer/>

    </div>
  );
}

export default About;
