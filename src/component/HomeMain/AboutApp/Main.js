import { Link } from "react-router-dom";
import React from "react";
import frame from "../../../assets/images/about-frame.jpg";
import screen from "../../../assets/images/about-screen.jpg";
import img1 from "../../../assets/images/download.png";
import img2 from "../../../assets/images/followers.png";
import img3 from "../../../assets/images/reviews.png";
import img4 from "../../../assets/images/countries.png";

const Main = ({ video, dark }) => {
  return (
    <>
      <section id="streetztrends" className="row_am about_app_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about_img"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="frame_img">
                  <img
                    className="moving_position_animatin myaboutappimage"
                    src={frame}
                    alt="image"
                  />
                </div>
                <div className="screen_img">
                  <img className="moving_animation" src={screen} alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_text">
                <div
                  className="section_title"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="100"
                >
                  <h2>
                    Get started on <span>Streetz Talk.</span>
                  </h2>
                  <p>
                    Streetz talk is a public space for conversations within
                    communities. It allows people to share, explore and be part
                    of conversations trending within their local communities.
                  </p>
                </div>
                {dark ? (
                  <ul className="list">
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <i className="icofont-verification-check"></i> Simply
                      dummy text of the printing and
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <i className="icofont-verification-check"></i> Typesetting
                      industry lorem Ipsum has been the
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <i className="icofont-verification-check"></i> Industrys
                      standard dummy text
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <i className="icofont-verification-check"></i> Simply
                      dummy text of the printing and
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1500">
                      <i className="icofont-verification-check"></i> Typesetting
                      industry lorem Ipsum has been the
                    </li>
                  </ul>
                ) : (
                  <ul
                    className="app_statstic"
                    id="counter"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    <li>
                      <div className="icon">
                        {video ? (
                          <img
                            src="assets/images/download-one.png"
                            alt="image"
                          />
                        ) : (
                          <img src={img1} alt="image" />
                        )}
                      </div>
                      <div className="text">
                        <p>
                          <span className="counter-value" data-count="2">
                            0
                          </span>
                          <span>k+</span>
                        </p>
                        <p>Download</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {video ? (
                          <img
                            src="assets/images/followers-one.png"
                            alt="image"
                          />
                        ) : (
                          <img src={img2} alt="image" />
                        )}
                      </div>
                      <div className="text">
                        <p>
                          <span className="counter-value" data-count="1">
                            0{"1"}
                          </span>
                          <span>k+</span>
                        </p>
                        <p>Followers</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {video ? (
                          <img
                            src="assets/images/reviews-one.png"
                            alt="image"
                          />
                        ) : (
                          <img src={img3} alt="image" />
                        )}
                      </div>
                      <div className="text">
                        <p>
                          <span className="counter-value" data-count="200">
                            1500
                          </span>
                          <span>+</span>
                        </p>
                        <p>Reviews</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {video ? (
                          <img
                            src="assets/images/countries-one.png"
                            alt="image"
                          />
                        ) : (
                          <img src={img4} alt="image" />
                        )}
                      </div>
                      <div className="text">
                        <p>
                          <span className="counter-value" data-count="5">
                            0
                          </span>
                          <span>+</span>
                        </p>
                        <p>Countries</p>
                      </div>
                    </li>
                  </ul>
                )}
                <a
                  href="https://play.google.com/store/apps/details?id=com.nbstreetztalk"
                  className="btn puprple_btn"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                  target="_blank"
                >
                  DOWNLOAD APP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
