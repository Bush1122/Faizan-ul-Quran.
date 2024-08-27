import React, { useState } from 'react';
import './courses.css';
import shp4 from '../images/shp4.png';
import shp5 from '../images/shp5.png';
import Quran from '../images/resources/quran.jpg';
import Itibah from '../images/resources/Itibah.jpg';
import hadeeth from '../images/resources/hadeeth.jpg';
import ArabicImage from '../images/resources/Arabic.jpg';
import ConversationImage from '../images/resources/conversation.jpg';
import Footer from '../components/footer';

const Courses = () => {
  const [showText, setShowText] = useState({ quran: false, hadeeth: false, itibah: false });

  const handleImageClick = (key) => {
    setShowText(prevState => ({
      ...prevState,
      [key]: !prevState[key],
      ...Object.fromEntries(
        Object.keys(prevState).filter(k => k !== key).map(k => [k, false])
      ) // Ensure only one section is visible at a time
    }));
  };

  return (
    <div className='main-top-about-data'>
    <div className='container-fluid  main-section-course'> 
    <div 
        className="text-center slide">
        <div className="carousel-caption mb-5 ">
          <h1 className="carousel-title mb-3 ">
          كُلُّ مَنْ عَلَيْهَا فَانٍۢ
          </h1>
          <h6 className="carousel-subtitle  mb-3">
          Every being on earth is bound to perish.
          </h6>
          <p className="carousel-verse">
            "Surah Al-Rahmaan Verse 55:26"
          </p>
          <a className="thm-btn brd-rd40" href="#" title="Read More">
            Read More
          </a>
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
            <div className=" col-12">
              <div className="suprt-sec">
                <div className="section-title">
                  <div className="section-title-inner">
                    <span className='text-white fw-bold mb-2 d-block text-center'>Our Focus,</span>
                    <h3 className='text-warning fw-bold mb-3 display-4 text-center'>Spreading the Word of Allah</h3>
                    <hr className='sec-title-inner' />
                  </div>
                </div>
                <p className='text-light mb-4 fw-bold text-center mt-2'>
                  Our focus is to share the core of Islam i.e. Quran, Hadeeth, and Itibah. As these are the core and if one strongly holds on to these, their deen and duniya both will be full of bliss.
                </p>

                <div className="team-wrap text-center remove-ext5">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-lg-4">
                      <div className="team-box position-relative" onClick={() => handleImageClick('quran')}>
                        <img
                          src={Quran}
                          alt="Quran"
                          className={`img-fluid rounded-circle ${showText.quran ? 'active' : ''}`}
                        />
                        <div className={`team-info  ${showText.quran ? 'active' : ''}`}>
                          <h4  className='text-warning mb-2 p-1 '>THE QURAN</h4>
                          <small className='mb-3 p-2 py-4 my-3 fw-bold'>
                            Start your day with the QURAN. Read at least 3 ayat every day and connect to Allah and HIS message. It takes hardly 1 minute.
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-4">
                      <div className="team-box position-relative" onClick={() => handleImageClick('itibah')}>
                        <img
                          src={Itibah}
                          alt="Itibah"
                          className={`img-fluid rounded-circle ${showText.itibah ? 'active' : ''}`}
                        />
                        <div className={`team-info ${showText.itibah ? 'active' : ''}`}>
                          <h4 className='text-warning mb-1 p-1'>ITIBAH</h4>
                          <p  className='mb-1 p-2 fw-bold'>
                            Learn the ways taught by our Prophet. Implement them in your daily life. <br /> They will guide you to the path of salvation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-4">
                      <div className="team-box position-relative" onClick={() => handleImageClick('hadeeth')}>
                        <img
                          src={hadeeth}
                          alt="Hadeeth"
                          className={`img-fluid rounded-circle ${showText.hadeeth ? 'active' : ''}`}
                        />
                        <div className={`team-info ${showText.hadeeth ? 'active' : ''}`}>
                          <h4 className='text-warning mb-1 p-1'>HADEETH</h4>
                          <p className='mb-1 p-3  py-2 fw-bold'>
                            End your day with one Hadeeth. Read one Hadeeth every night to learn worldly manners.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 py-4" id="current-container">
      <div className="evnt-pry-wrap mt-4 py-4">
        <div className="row">
          <div className="col-7">
            <div className="sec-title">
              <h3 className='text-white'>
                <span className='text-warning'>Current</span> Classes
              </h3>
              <hr className="sec-title-inner-course  mt-1 text-left" />
              <p className='text-light'>
                Learning Quranic Arabic is very easy. Spare only 1 hour
                a week for free classes and 5 minutes daily for QURAN
                Reading.
              </p>
              <div className="row mrg20">
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <div className="evnt-box">
                    <div className="evnt-thmb">
                      <a href="#" title="">
                        <img
                          src={ArabicImage}
                          alt="Learn Arabic without Grammar"
                        />
                      </a>
                    </div>
                    <div className="evnt-info">
                      <h4>
                        <a href="#" title="">
                          Learn Arabic without Grammar
                        </a>
                      </h4>
                      <ul className="pst-mta">
                        <li className="thm-clr">27/07/2023</li>
                        <li>9:15 PM to 10:15 PM</li>
                      </ul>
                      <p>
                        This course is for people who like to understand
                        the QURAN when they listen or read it. We teach
                        Quranic Arabic without Grammar, and people find it
                        very easy as they don't have to learn the
                        difficult terminologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <div className="evnt-box">
                    <div className="evnt-thmb">
                      <a href="#" title="">
                        <img
                          src={ConversationImage}
                          alt="Learn Conversational Arabic"
                        />
                      </a>
                    </div>
                    <div className="evnt-info mb-1 ">
                      <h4>
                        <a href="#" title="">
                          Learn Conversational Arabic
                        </a>
                      </h4>
                      <ul className="pst-mta mb-2">
                        <li className="thm-clr">10/10/2020</li>
                        <li>12:00 AM to 02:00 PM</li>
                      </ul>
                      <p className='p-1'> 
                        This course is for students who like to learn
                        conversational Arabic, as they might be moving to
                        Arabic countries, or have jobs where Arabic
                        speaking is a requirement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div className="col" >
         <h3 className='text-white'>
         <span className='text-warning fw-bold'>Current</span> Time </h3>
         <hr className="sec-title-inner-course text-left mt-1" />

         <div className='row mt-4 '>
          <div className='col-8'>
          <h3 className='text-warning fw-bold'> Course</h3> 
          </div>
          <div className='col'>
           <h6 className='fw-bold text-light'>Day</h6> 
          </div>
          <hr className='text-light'/>
         </div>

         <div className='row'>
          <div className='col-8'>
          <h6 className='text-warning fw-bold'> Conversational Arabic	</h6>  
          </div>
          <div className='col'>
          <h6 className='fw-bold text-light'>Monday</h6> 
          </div>
          <hr className='text-light'/>
         </div>

         <div className='row'>
          <div className='col-8'>
          <h6 className='text-warning fw-bold'>  Quranic Arabic without Grammer		</h6>  
        
          </div>
          <div className='col'>
          <h6 className='fw-bold text-light'>Sunday</h6> 
         
          </div>
          <hr className='text-light'/>
         </div>
         <div className='row'>
          <div className='col-8'>
          <h6 className='text-warning fw-bold'>  Median Arabic Reader			</h6> 
        
          </div>
          <div className='col'>
          <h6 className='fw-bold text-light'>Wednesday</h6> 
         
          </div>
          <hr className='text-light'/>
         </div>




         </div>



          
         
        </div>
      </div>
    </div>


      
<Footer/>
    </div>
  );
}

export default Courses;
