import React from "react";
import img1 from "../../../assets/images/streetzconversation.png";
import img2 from "../../../assets/images/streetztrend.png";
import img3 from "../../../assets/images/streetzcorner.png";
import img4 from "../../../assets/images/streetzlocations.png";
import img5 from "../../../assets/images/features_frame.png";
import frame from "../../../assets/images/mobile_frame_svg.svg";

const Main = ({ video }) => {
  return (
    <>
      {video ? (
        <section
          className="row_am features_section video-features"
          id="features"
        >
          <div className="container">
            ~
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <h2>
                <span>Get onboard</span> with streetz talk
              </h2>
              <p>
                Find out what’s happening around you in real time. Share fun and
                useful information, make your streets come alive. <br /> Become
                a Streetz influencer.
              </p>
            </div>
            <div className="feature_detail">
              <div className="left_data feature_box">
                <div
                  className="data_block"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="icon">
                    <img src="assets/images/secure.jpg" alt="image" />
                  </div>
                  <div className="text">
                    <h4>Streetz conversations</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting indus ideas.
                    </p>
                  </div>
                </div>
                <div
                  className="data_block"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="icon">
                    <img src="assets/images/abt_functional.png" alt="image" />
                  </div>
                  <div className="text">
                    <h4>Fully functional</h4>
                    <p>
                      Simply dummy text of the printing and typesetting indus
                      lorem Ipsum is dummy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right_data feature_box">
                <div
                  className="data_block"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div className="icon">
                    <img src="assets/images/communication.png" alt="image" />
                  </div>
                  <div className="text">
                    <h4>Live chat</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and type
                      setting indus ideas.
                    </p>
                  </div>
                </div>
                <div
                  className="data_block"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div className="icon">
                    <img src="assets/images/abt_support.png" alt="image" />
                  </div>
                  <div className="text">
                    <h4>24-7 Support</h4>
                    <p>
                      Simply dummy text of the printing and typesetting indus
                      lorem Ipsum is dummy.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="feature_img"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <img src="assets/images/features_frame.png" alt="image" />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="row_am features_section" id="features">
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <h2>
                Its <span>all happening</span> on streetz talk
              </h2>
              <p>
                Find out what’s happening around you in real time. Share fun and
                useful information, make your streets come alive. <br /> Become
                a Streetz influencer
              </p>
            </div>
            <div className="feature_detail">
              <div className="left_data feature_box">
                <div
                  className="data_block"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="icon">
                    <img src={img1} alt="image" />
                  </div>
                  <div className="text">
                    <h4>Streetz conversations</h4>
                    <p>
                      Participate in Streets conversations specific to your
                      communities. Tag conversations public or private.
                    </p>
                  </div>
                </div>
                <div
                  className="data_block"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="icon">
                    <img src={img2} alt="image" />
                  </div>
                  <div className="text">
                    <h4>Streetz trend</h4>
                    <p>
                      See what's trending in your immediate community and
                      streets. Get to know what people are talking
                      about in real time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="right_data feature_box">
                <div
                  className="data_block"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div className="icon">
                    <img src={img3} alt="image" />
                  </div>
                  <div className="text">
                    <h4>Streetz corner</h4>
                    <p>
                      Create Streetz Corners for different conversations; street
                      food, bad roads, light, security, water,
                      food, employment etc.
                    </p>
                  </div>
                </div>
                <div
                  className="data_block"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div className="icon">
                    <img src={img4} alt="image" />
                  </div>
                  <div className="text">
                    <h4>Setup Secondary Locations</h4>
                    <p>
                      Follow two extra locations to see what's happening in
                      these location of interest. See what's trending
                      in these locations
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="feature_img feature_img22"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="100"
              >
                <img src={img5} alt="image" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Main;
