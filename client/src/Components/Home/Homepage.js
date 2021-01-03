import React from 'react';
import './Homepage.styles.css';
import logo from '../../Assets/afrilearn_logo.png';
import icon1 from '../img/icon/icon1.svg';
import icon2 from '../img/icon/icon2.svg';
import icon3 from '../img/icon/icon3.svg';
import course1 from '../img/gallery/featured4.png';
import course2 from '../img/gallery/featured5.png';
import course3 from '../img/gallery/featured6.png';
import about1 from '../img/gallery/about2.png';
import about2 from '../img/gallery/about3.png';
import rightIcon from '../img/icon/right-icon.svg'
import aboutSvg from '../img/icon/about.svg'
import topic1 from '../img/gallery/topic1.png';
import topic2 from '../img/gallery/topic2.png';
import topic3 from '../img/gallery/topic3.png';
import topic4 from '../img/gallery/topic4.png';
import topic5 from '../img/gallery/topic5.png';
import topic6 from '../img/gallery/topic6.png';
import topic7 from '../img/gallery/topic7.png';
import topic8 from '../img/gallery/topic8.png';



const Homepage = () => {
    return (
      <div>
        <header>
          <div className="header-area header-transparent afri-bg">
            <div className="main-header ">
              <div className="header-bottom  header-sticky">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2">
                      <div className="logo">
                        <a href="#">
                          <img src={logo} alt="afri-logo" />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-10">
                      <div className="menu-wrapper d-flex align-items-center justify-content-end">
                        <div className="main-menu d-none d-lg-block">
                          <nav>
                            <ul id="navigation">
                              <li className="active">
                                <a href="#">Home</a>
                              </li>
                              <li>
                                <a href="#">Courses</a>
                              </li>
                              <li>
                                <a href="#">About</a>
                              </li>
                              <li>
                                <a href="#">Contact</a>
                              </li>
                              <li className="button-header margin-left ">
                                <a href="#" className="btn">
                                  Join
                                </a>
                              </li>
                              <li className="button-header">
                                <a href="#" className="btn btn3">
                                  Log in
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="slider-area ">
          <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="hero__caption">
                      <h1 data-animation="fadeInLeft" data-delay="0.2s">
                        Online learning
                        <br /> platform
                      </h1>
                      <p data-animation="fadeInLeft" data-delay="0.4s">
                        Build skills with courses, certificates, and degrees
                        online from world-class universities and teachers
                      </p>
                      <a
                        href="#"
                        className="btn hero-btn text-white"
                        data-animation="fadeInLeft"
                        data-delay="0.7s"
                      >
                        Join for Free
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="services-area">
          <div className="container">
            <div className="row justify-content-sm-center">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-30">
                  <div className="features-icon">
                    <img src={icon1} alt="icon-3" />
                  </div>
                  <div className="features-caption">
                    <h3>60+ Waec courses</h3>
                    <p>
                      unlimited waec past question for token amount of money.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-30">
                  <div className="features-icon">
                    <img src={icon2} alt="icon-1" />
                  </div>
                  <div className="features-caption">
                    <h3>Expert instructors</h3>
                    <p>
                      Learn from the top industry experts who are gurus already
                      in their field.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="single-services mb-30">
                  <div className="features-icon">
                    <img src={icon3} alt="icon-2" />
                  </div>
                  <div className="features-caption">
                    <h3>Life time access</h3>
                    <p>
                      Lifetime access to all the courses you enroll for after
                      purchase!.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="section-tittle text-center mb-55">
            <h2>Our featured courses</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="properties__card">
                  <div className="properties__img overlay1 card-img">
                    <a href="#">
                      <img src={course1} alt="first-course" />
                    </a>
                  </div>
                  <div className="properties__caption card-body p-3">
                    <p>Waec Question</p>
                    <h3>
                      <a href="#">Waec past question 2017</a>
                    </h3>
                    <p>
                      lorem ipsum dolor atic ahejsj dahaajd ajdjdhuw jajdjid
                      jsshywhsh jsjshsyeh sie sgse shey.
                    </p>
                    <div className="properties__footer d-flex justify-content-between align-items-center">
                      <div className="restaurant-name">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p>
                          <span>(4.5)</span> based on 120
                        </p>
                      </div>
                      <div className="price">
                        <span>N7000</span>
                      </div>
                    </div>
                    <a href="#" className="border-btn border-btn2">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="properties__card">
                  <div className="properties__img overlay1 card-img">
                    <a href="#">
                      <img src={course2} alt="first-course" />
                    </a>
                  </div>
                  <div className="properties__caption card-body p-3">
                    <p>Waec Question</p>
                    <h3>
                      <a href="#">Waec past question 2017</a>
                    </h3>
                    <p>
                      lorem ipsum dolor atic ahejsj dahaajd ajdjdhuw jajdjid
                      jsshywhsh jsjshsyeh sie sgse shey.
                    </p>
                    <div className="properties__footer d-flex justify-content-between align-items-center">
                      <div className="restaurant-name">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p>
                          <span>(4.5)</span> based on 120
                        </p>
                      </div>
                      <div className="price">
                        <span>N7000</span>
                      </div>
                    </div>
                    <a href="#" className="border-btn border-btn2">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="properties__card">
                  <div className="properties__img overlay1 card-img">
                    <a href="#">
                      <img src={course3} alt="first-course" />
                    </a>
                  </div>
                  <div className="properties__caption card-body p-3">
                    <p>Waec Question</p>
                    <h3>
                      <a href="#">Waec past question 2017</a>
                    </h3>
                    <p>
                      lorem ipsum dolor atic ahejsj dahaajd ajdjdhuw jajdjid
                      jsshywhsh jsjshsyeh sie sgse shey.
                    </p>
                    <div className="properties__footer d-flex justify-content-between align-items-center">
                      <div className="restaurant-name">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p>
                          <span>(4.5)</span> based on 120
                        </p>
                      </div>
                      <div className="price">
                        <span>N7000</span>
                      </div>
                    </div>
                    <a href="#" className="border-btn border-btn2">
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about-area1 fix pt-10">
          <div className="support-wrapper align-items-center">
            <div className="left-content1">
              <div className="about-icon">
                <img src={aboutSvg} alt="about-svg" />
              </div>
              <div className="section-tittle section-tittle2 mb-55">
                <div className="front-text">
                  <h2 className="">
                    Learn new skills online with top educators
                  </h2>
                  <p>
                    The automated process all your website tasks. Discover tools
                    and techniques to engage effectively with vulnerable
                    children and young people.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src={rightIcon} alt="right-icon" />
                </div>
                <div className="features-caption">
                  <p>
                    Techniques to engage effectively with vulnerable children
                    and young people.
                  </p>
                </div>
              </div>
              <div className="single-features">
                <div className="features-icon">
                  <img src={rightIcon} alt="right-icon1" />
                </div>
                <div className="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together.
                  </p>
                </div>
              </div>

              <div className="single-features">
                <div className="features-icon">
                  <img src={rightIcon} alt="right-icon2" />
                </div>
                <div className="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together. Online learning is as easy and natural.
                  </p>
                </div>
              </div>
            </div>
            <div className="right-content1">
              <div className="right-img">
                <img src={about1} alt="about-img" />

                <div className="video-icon">
                  <a
                    className="popup-video btn-icon"
                    href="https://www.youtube.com/watch?v=up68UAfH0d0"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="topic-area section-padding40">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8">
                <div class="section-tittle text-center mb-55">
                  <h2>Explore top subjects</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-6 mb-5">
                <div class="single-topic text-center mb-30">
                  <div class="topic-img">
                    <img src={topic1} alt="topic1" />
                    <div class="topic-content-box">
                      <div class="topic-content">
                        <h3>
                          <a href="#">Mathematics</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single-topic text-center mb-30">
                  <div class="topic-img">
                    <img src={topic2} alt="topic2" />
                    <div class="topic-content-box">
                      <div class="topic-content">
                        <h3>
                          <a href="#">English</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single-topic text-center mb-30">
                  <div class="topic-img">
                    <img src={topic3} alt="topic3" />
                    <div class="topic-content-box">
                      <div class="topic-content">
                        <h3>
                          <a href="#">System Design</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single-topic text-center mb-30">
                  <div class="topic-img">
                    <img src={topic4} alt="topic4" />
                    <div class="topic-content-box">
                      <div class="topic-content">
                        <h3>
                          <a href="#">Economics</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single-topic text-center mb-30">
                  <div class="topic-img">
                    <img src={topic5} alt="topic5" />
                    <div class="topic-content-box">
                      <div class="topic-content">
                        <h3>
                          <a href="#">Algorithm</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single-topic text-center mb-30">
                  <div class="topic-img">
                    <img src={topic6} alt="topic6" />
                    <div class="topic-content-box">
                      <div class="topic-content">
                        <h3>
                          <a href="#">Flow Chart</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single-topic text-center mb-30">
                  <div class="topic-img">
                    <img src={topic7} alt="topic7" />
                    <div class="topic-content-box">
                      <div class="topic-content">
                        <h3>
                          <a href="#">Biology</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="single-topic text-center mb-30">
                  <div class="topic-img">
                    <img src={topic8} alt="topic8" />
                    <div class="topic-content-box">
                      <div class="topic-content">
                        <h3>
                          <a href="#">Web Tech</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-12">
                <div class="section-tittle text-center mt-5">
                  <a href="#" class="border-btn">
                    View More Subjects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="about-area3 fix mb-5">
          <div class="support-wrapper align-items-center">
            <div class="right-content3">
              <div class="right-img">
                <img src={about2} alt="about2" />
              </div>
            </div>
            <div class="left-content3">
              <div class="section-tittle section-tittle2 mb-20">
                <div class="front-text">
                  <h2 class="">Learner outcomes on courses you will take</h2>
                </div>
              </div>
              <div class="single-features">
                <div class="features-icon">
                  <img src={rightIcon} alt="right-icon" />
                </div>
                <div class="features-caption">
                  <p>
                    Techniques to engage effectively with vulnerable children
                    and young people.
                  </p>
                </div>
              </div>
              <div class="single-features">
                <div class="features-icon">
                  <img src={rightIcon} alt="right-icon2" />
                </div>
                <div class="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together.
                  </p>
                </div>
              </div>
              <div class="single-features">
                <div class="features-icon">
                  <img src={rightIcon} alt="right-icon3" />
                </div>
                <div class="features-caption">
                  <p>
                    Join millions of people from around the world learning
                    together. Online learning is as easy and natural.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="about-area2 fix pb-padding mt-5">
          <div class="support-wrapper align-items-center">
            <div class="right-content2">
              <div class="right-img">
                <img src={about1} alt="about-3" />
              </div>
            </div>
            <div class="left-content2">
              <div class="section-tittle section-tittle2 mb-20">
                <div class="front-text">
                  <h2 class="">
                    Take the next step toward your personal and professional
                    goals with us.
                  </h2>
                  <p>
                    learn from top industry experts. Discover tools and
                    techniques to engage effectively with vulnerable children
                    and young people.
                  </p>
                  <a href="#" class="btn">
                    Join now for Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div class="footer-wrappper footer-bg">
            <div class="footer-area footer-padding">
              <div class="container">
                <div class="row justify-content-between">
                  <div class="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                    <div class="single-footer-caption mb-50">
                      <div class="single-footer-caption mb-30">
                        <div class="footer-logo mb-25">
                          <a href="index.html">
                            <img src={logo} alt="" />
                          </a>
                        </div>
                        <div class="footer-tittle">
                          <div class="footer-pera">
                            <p>
                              Build skills with courses, certificates, and degrees online from world-class universities and teachers
                            </p>
                          </div>
                        </div>
                        <div class="footer-social">
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i class="fab fa-pinterest-p"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                    <div class="single-footer-caption mb-50">
                      <div class="footer-tittle">
                        <h4>Our solutions</h4>
                        <ul>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                    <div class="single-footer-caption mb-50">
                      <div class="footer-tittle">
                        <h4>Support</h4>
                        <ul>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <div class="single-footer-caption mb-50">
                      <div class="footer-tittle">
                        <h4>Quick Links</h4>
                        <ul>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                          <li>
                            <a href="#">lorem ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Homepage;