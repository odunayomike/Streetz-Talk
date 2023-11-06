import OwlCarousel from "react-owl-carousel";
import React from "react";
import img1 from "../../../assets/images/screen-1.png";
import img2 from "../../../assets/images/screen-2.png";
import img3 from "../../../assets/images/screen-3.png";
import img4 from "../../../assets/images/screen-4.png";
import img5 from "../../../assets/images/screen-5.png";
import screen from "../../../assets/images/screen.jpg";
import screen2 from "../../../assets/images/screen2.jpg";
import screen3 from "../../../assets/images/screen3.jpg";
import screen4 from "../../../assets/images/screen4.png";
import screen5 from "../../../assets/images/screen5.png";
import screen6 from "../../../assets/images/screen6.png";

const Main = () => {
  const screen_slider = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <>
      <section className="row_am interface_section">
        <div className="container-fluid">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <h2>
              Join <span>Streetz Talk</span>
            </h2>
            <p>
              Find out what’s happening around you in real time. Share and make
              your streets come to live.
              <br />
            </p>
          </div>
          <div className="screen_slider">
            <OwlCarousel
              id="screen_slider"
              {...screen_slider}
              className="owl-carousel owl-theme owl-loaded owl-drag"
            >
              <div className="item">
                <div className="screen_frame_img">
                  <img src={screen} alt="image" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img src={screen2} alt="image" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img src={screen3} alt="image" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img src={screen4} alt="image" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img src={screen5} alt="image" />
                </div>
              </div>
              <div className="item">
                <div className="screen_frame_img">
                  <img src={screen6} alt="image" />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
