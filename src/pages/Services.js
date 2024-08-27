import React from 'react';
import './Service.css';
import shp4 from '../images/shp4.png';
import shp5 from '../images/shp5.png';
import { FaQuran, FaTools, FaMosque, FaHandsHelping } from 'react-icons/fa';
import Footer from '../components/footer';

const Service = () => {
  return (
    <div className='main-top-about-data'>
      <div className='container-fluid p-0  main-section-service'> 
        <div 
          className="text-center slide"
          
        >
          <div className="carousel-caption mb-5">
            <h1 className="carousel-title mb-3">يَطُوفُونَ بَيْنَهَا وَبَيْنَ حَمِيمٍ ءَانٍۢ</h1>
            <h6 className="carousel-subtitle mb-3">They will alternate between its flames and scalding water.</h6>
            <p className="carousel-verse">"Surah Al-Rahmaan Verse 55:44"</p>
            <a className="thm-btn brd-rd40" href="#" title="Read More">Read More</a>
          </div>
        </div>
      </div>
      
      <div className='container-fluid p-0'>
        <img src={shp5} className='img-fluid' alt='Background Image 2' />
        <img src={shp4} className='img-fluid' alt='Background Image 1' />
      </div>

      <div className="container mt-4">
        <div className="hr-container py-3">
          <h6 className='text-center text-white'>Spreading Goodness</h6>
          <h2 className='text-warning fw-bold mb-3 text-center'>Our Services</h2>
          <hr className='sec-title-inner' />
        </div>
      </div>

      <div className="container">
        <div className="row mt-2 py-4">
          <div className="col-lg-4 col-md-12 mt-4">
            <h1 className="text-white display-3 fw-bold">We're on a <span className="text-warning">Mission</span> To </h1>
            <h2 className="text-white mb-2 mt-3">spread ease and knowledge to a new build generation.</h2>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-4">
                <div className="serv-box">
                  <FaQuran className="icon" size="2x" />
                  <div className="serv-info">
                    <h4>Quran Learning</h4>
                    <p>Through non conventional methods. Focus on the language, thematic, and knowledge of QURAN.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-4">
                <div className="serv-box">
                  <FaTools className="icon" size="2x"/>
                  <div className="serv-info">
                    <h4>Vocational Training</h4>
                    <p>Provide vocational trainings to under-privileged kids in order for them to become an asset for society.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-4">
                <div className="serv-box">
                  <FaMosque className="icon" size="2x" />
                  <div className="serv-info py-2">
                    <h4>Masjid and Knowledge Centers</h4>
                    <p>Providing balanced education with deen and dunya morphed together to build character.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-4">
                <div className="serv-box">
                  <FaHandsHelping className="icon" size="2x"/>
                  <div className="serv-info p-2">
                    <h4>Assistance to Under-Privileged</h4>
                    <p>Teaching them to catch a fish to ensure they stand on their own feet and become a productive part of society.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid p-0'>
        <img src={shp5} className='img-fluid' alt='Background Image 2' />
        <img src={shp4} className='img-fluid' alt='Background Image 1' />
      </div>

  <div className="container-fluid service_main-section">
  <div className='container'>
  <div className="row justify-content-center">
    <div className="col-lg-6 col-md-8 col-sm-10 col-12">
      <div className="suprt-sec">
        <div className="section-title">
          <div className="section-title-inner">
            <span className='text-white fw-bold mb-2 d-block text-center'>Be part of this journey,</span>
            <h3 className='text-warning fw-bold mb-3 display-4 text-center'>Plant a Tree in Jannah.</h3>
            <hr className='sec-title-inner' />
          </div>
        </div>
        <p className='text-light mb-4 fw-bold text-center mt-2'>
          All our initiatives are FREE for under-privileged people. If you want to be part of an initiative that can bring happiness and ease into someone's life, you can donate as little as $1. However, we kindly request that your contribution be consistent.
        </p>
        <div className="suprt-prgrs">
          <div className="suprt-prg" id="suprt-prg1"></div>
          <div className="suprt-prg" id="suprt-prg2"></div>
          <div className="suprt-prg" id="suprt-prg3"></div>
        </div>
        <div className="text-center">
          <a className="thm-btn brd-rd40" href="#">Donate Now</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<Footer/>
    </div>
  );
}

export default Service;
