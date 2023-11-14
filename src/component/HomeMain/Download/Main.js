import { Link } from "react-router-dom";
import React, { useState } from "react";
import img from "../../../assets/images/anim_line.png";
import blueapp from "../../../assets/images/appstore_blue.png";
import blue from "../../../assets/images/googleplay_blue.png";
import screen from "../../../assets/images/screen111.jpg";
import screen1 from "../../../assets/images/download-screen02.jpg";

const Main = () => {
  const [animate, setanimate] = useState();

  const [purple, setpurple] = useState();
  window.addEventListener("scroll", function () {
    const element = document.getElementsByClassName("free_text");
    const position = element[0].getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      const elm = document.getElementsByClassName("purple_backdrop");
      elm[0].style.opacity = "1";
    } else {
      const elm = document.getElementsByClassName("purple_backdrop");
      elm[0].style.opacity = "0";
    }
  });

  return (
    <>
      <section
        className="row_am free_app_section review_freeapp"
        id="getstarted"
      >
        <div className="container">
          <div
            className={`free_app_inner aos-init ${animate && "aos-animate"}`}
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            {/* <div className="anim_line dark_bg">
                        <span><img src={img} alt="anim_line" /></span>
                        <span><img src={img} alt="anim_line" /></span>
                        <span><img src={img} alt="anim_line" /></span>
                        <span><img src={img} alt="anim_line" /></span>
                        <span><img src={img} alt="anim_line" /></span>
                        <span><img src={img} alt="anim_line" /></span>
                        <span><img src={img} alt="anim_line" /></span>
                        <span><img src={img} alt="anim_line" /></span>
                        <span><img src={img} alt="anim_line" /></span>
                    </div> */}
            <div className="row">
              <div className="col-md-6">
                <div className="free_text">
                  <div className="section_title">
                    <h2>
                      Download Streetz Talk on Apple and Google play store
                    </h2>
                    <p>
                      Instant free download on Apple and Google play store.
                      Onboard and get talking
                    </p>
                  </div>
                  <ul className="app_btn">
                    <li>
                      <Link to="#">
                        <img src={blueapp} alt="image" />
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nbstreetztalk"
                        target="_blank"
                      >
                        <img src={blue} alt="image" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="free_img">
                  <img src={screen} alt="image" />
                  <img className="mobile_mockup" src={screen1} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="purple_backdrop"></div>
    </>
  );
};

export default Main;
