import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import line from "../../assets/images/anim_line.png";
import blueapp from "../../assets/images/appstore_blue.png";
import blue from "../../assets/images/googleplay_blue.png";
import logo from "../../assets/images/footer_logo.png";
import top from "../../assets/images/go_top.png";

const Main = ({ footer }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "https://streetztalk.xyz/api/subscribe.php";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage({ type: "success", text: data.message });
      } else {
        const data = await response.json();
        setMessage({ type: "error", text: data.error });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred while processing your request.",
      });
    }
  };
  return (
    <>
      <section className="newsletter_section">
        <div className="container">
          <div className="newsletter_box">
            <div
              className="section_title"
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <h2>Streetz Vibes</h2>
              <p>Be the first to recieve all latest post in your inbox</p>
            </div>
            <form
              onSubmit={handleSubmit}
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-delay="100"
              method="POST"
            >
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn">
                  SUBMIT
                </button>
              </div>
            </form>
            {message && (
              <div
                className={
                  message.type === "success"
                    ? "success-message"
                    : "error-message"
                }
              >
                {message.text}
              </div>
            )}
          </div>
        </div>
      </section>

      {footer.f1 && (
        <footer>
          <div className="top_footer" id="contact">
            {/* <div className="anim_line dark_bg">
              <span>
                <img src={line} alt="anim_line" />
              </span>
              <span>
                <img src={line} alt="anim_line" />
              </span>
              <span>
                <img src={line} alt="anim_line" />
              </span>
              <span>
                <img src={line} alt="anim_line" />
              </span>
              <span>
                <img src={line} alt="anim_line" />
              </span>
              <span>
                <img src={line} alt="anim_line" />
              </span>
              <span>
                <img src={line} alt="anim_line" />
              </span>
              <span>
                <img src={line} alt="anim_line" />
              </span>
              <span>
                <img src={line} alt="anim_line" />
              </span>
            </div> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="abt_side">
                    <div className="logo">
                      {" "}
                      {/* <img src={logo} alt="image" /> */}
                    </div>
                    <ul>
                      <li>
                        <Link to="#">socials@streetztalk.xyz</Link>
                      </li>
                      <li>
                        <Link to="#">+447927647558</Link>
                      </li>
                    </ul>
                    <ul className="social_media">
                      <li>
                        <Link to="#">
                          <i className="icofont-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Useful Links</h3>
                    <ul>
                      <li>
                        <Link to="/#">Home</Link>
                      </li>
                      <li>
                        <Link to="/#streetztalk">Streetz Talk</Link>
                      </li>
                      <li>
                        <Link to="/#streetztrends">Streetz Trends</Link>
                      </li>
                      <li>
                        <Link to="/#features">Streetz Corner</Link>
                      </li>
                      <li>
                        <Link to="/#getstarted">Get Onboard</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Help & Suport</h3>
                    <ul>
                      <li>
                        <Link to="/#">Site Terms & Policies</Link>
                      </li>
                      <li>
                        <Link to="/#">community Standards</Link>
                      </li>
                      <li>
                        <Link to="/#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/#">Terms & conditions</Link>
                      </li>
                      <li>
                        <Link to="/#">Cookie policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="try_out">
                    <h3>Get Streetz Talk</h3>
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
              </div>
            </div>
          </div>
          <div className="bottom_footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>© Copyrights 2023. All rights reserved.</p>
                </div>
                {/* <div className="col-md-6">
                  <p className="developer_text">
                    Design & developed by{" "}
                    <Link
                      to="https://themeforest.net/user/kalanidhithemes"
                      target="blank"
                    >
                      Kalanidhi Themes
                    </Link>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="go_top">
            <span>
              <img src={top} alt="image" />
            </span>
          </div>
        </footer>
      )}

      {footer.f2 && (
        <footer>
          <div className="top_footer top_footer-dark" id="contact">
            <div className="container">
              <span className="banner_shape1">
                {" "}
                {/* <img
                  src="assets/images/banner-shape-one1.png"
                  alt="image"
                />{" "} */}
              </span>
              <span className="banner_shape2">
                {" "}
                <img
                  src="assets/images/banner-shape2two.png"
                  alt="image"
                />{" "}
              </span>
              <span className="banner_shape3">
                {" "}
                <img
                  src="assets/images/banner-shapethree3.png"
                  alt="image"
                />{" "}
              </span>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="abt_side">
                    <div className="logo">
                      {" "}
                      <img src="assets/images/footer_logo.png" alt="image" />
                    </div>
                    <ul>
                      <li>
                        <Link to="#">socials@streetztalk.xyz</Link>
                      </li>
                      <li>
                        <Link to="#">+1-900-123 4567</Link>
                      </li>
                    </ul>
                    <ul className="social_media">
                      <li>
                        <Link to="#">
                          <i className="icofont-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Useful Links</h3>
                    <ul>
                      <li>
                        <Link to="/#">Home</Link>
                      </li>
                      <li>
                        <Link to="/#streetztalk">Streetz Talk</Link>
                      </li>
                      <li>
                        <Link to="/#streetztrends">Streetz Trends</Link>
                      </li>
                      <li>
                        <Link to="/#features">Streetz Corner</Link>
                      </li>
                      <li>
                        <Link to="/#getstarted">Get Onboard</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Help & Suport</h3>
                    <ul>
                      <li>
                        <Link to="/#">Site Terms & Policies</Link>
                      </li>
                      <li>
                        <Link to="/#">community Standards</Link>
                      </li>
                      <li>
                        <Link to="/#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/#">Terms & conditions</Link>
                      </li>
                      <li>
                        <Link to="/#">Cookie policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="try_out">
                    <h3>Let’s Try Out</h3>
                    <ul className="app_btn">
                      <li>
                        <Link to="#">
                          <img
                            src="assets/images/appstore_blue.png"
                            alt="image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src="assets/images/googleplay_blue.png"
                            alt="image"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_footer bottom_footer-dark">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>© Copyrights 2023. All rights reserved.</p>
                </div>
                {/* <div className="col-md-6">
                  <p className="developer_text">
                    Design & developed by{" "}
                    <Link
                      to="https://themeforest.net/user/kalanidhithemes"
                      target="blank"
                    >
                      Kalanidhi Themes
                    </Link>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="go_top">
            <span>
              <img src="assets/images/go_top.png" alt="image" />
            </span>
          </div>
        </footer>
      )}

      {footer.f3 && (
        <footer className="gredient-footer">
          <div className="footer_bg">
            {" "}
            {/* <img src="assets/images/section-bg.png" alt="image" />{" "} */}
          </div>
          <div className="top_footer" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="abt_side">
                    <div className="logo">
                      {" "}
                      {/* <img
                        src="assets/images/footer_logo-one.png"
                        alt="image"
                      /> */}
                    </div>
                    <ul>
                      <li>
                        <Link to="#">socials@streetztalk.xyz</Link>
                      </li>
                      <li>
                        <Link to="#">+1-900-123 4567</Link>
                      </li>
                    </ul>
                    <ul className="social_media">
                      <li>
                        <Link to="#">
                          <i className="icofont-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Useful Links</h3>
                    <ul>
                      <li>
                        <Link to="/#">Home</Link>
                      </li>
                      <li>
                        <Link to="/#streetztalk">Streetz Talk</Link>
                      </li>
                      <li>
                        <Link to="/#streetztrends">Streetz Trends</Link>
                      </li>
                      <li>
                        <Link to="/#features">Streetz Corner</Link>
                      </li>
                      <li>
                        <Link to="/#getstarted">Get Onboard</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Help & Suport</h3>
                    <ul>
                      <li>
                        <Link to="/#">Site Terms & Policies</Link>
                      </li>
                      <li>
                        <Link to="/#">community Standards</Link>
                      </li>
                      <li>
                        <Link to="/#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/#">Terms & conditions</Link>
                      </li>
                      <li>
                        <Link to="/#">Cookie policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 col-12">
                  <div className="try_out">
                    <h3>Let’s Try Out</h3>
                    <ul className="app_btn">
                      <li>
                        <Link to="#">
                          <img
                            src="assets/images/appstore_blue.png"
                            alt="image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src="assets/images/googleplay_blue.png"
                            alt="image"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>© Copyrights 2023. All rights reserved.</p>
                </div>
                {/* <div className="col-md-6">
                  <p className="developer_text">
                    Design & developed by{" "}
                    <Link
                      to="https://themeforest.net/user/kalanidhithemes"
                      target="blank"
                    >
                      Kalanidhi Themes
                    </Link>
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="go_top">
            <span>
              <img src="assets/images/go_top-one.png" alt="image" />
            </span>
          </div>
        </footer>
      )}

      {footer.f4 && (
        <footer className="video-footer-two">
          <div className="top_footer" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="abt_side">
                    <div className="logo">
                      {" "}
                      <img src="assets/images/footer_logo.png" alt="image" />
                    </div>
                    <ul>
                      <li>
                        <Link to="#">socials@streetztalk.xyz</Link>
                      </li>
                      <li>
                        <Link to="#">+1-900-123 4567</Link>
                      </li>
                    </ul>
                    <ul className="social_media">
                      <li>
                        <Link to="#">
                          <i className="icofont-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Useful Links</h3>
                    <ul>
                      <li>
                        <Link to="/#">Home</Link>
                      </li>
                      <li>
                        <Link to="/#streetztalk">Streetz Talk</Link>
                      </li>
                      <li>
                        <Link to="/#streetztrends">Streetz Trends</Link>
                      </li>
                      <li>
                        <Link to="/#features">Streetz Corner</Link>
                      </li>
                      <li>
                        <Link to="/#getstarted">Get Onboard</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Help & Suport</h3>
                    <ul>
                      <li>
                        <Link to="/#">Site Terms & Policies</Link>
                      </li>
                      <li>
                        <Link to="/#">community Standards</Link>
                      </li>
                      <li>
                        <Link to="/#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/#">Terms & conditions</Link>
                      </li>
                      <li>
                        <Link to="/#">Cookie policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 col-12">
                  <div className="try_out">
                    <h3>Let’s Try Out</h3>
                    <ul className="app_btn">
                      <li>
                        <Link to="#">
                          <img
                            src="assets/images/appstore_blue.png"
                            alt="image"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img
                            src="assets/images/googleplay_blue.png"
                            alt="image"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>© Copyrights 2023. All rights reserved.</p>
                </div>
                {/* <div className="col-md-6">
                  <p className="developer_text">
                    Design & developed by{" "}
                    <Link
                      to="https://themeforest.net/user/kalanidhithemes"
                      target="blank"
                    >
                      Kalanidhi Themes
                    </Link>
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="go_top">
            <span>
              <img src="assets/images/go_top-one.png" alt="image" />
            </span>
          </div>
        </footer>
      )}

      {footer.f5 && (
        <footer>
          <div className="top_footer footer-wave" id="contact">
            <div className="container">
              <span className="banner_shape1">
                {" "}
                <img src="assets/images/banner-shape1.png" alt="image" />{" "}
              </span>
              <span className="banner_shape2">
                {" "}
                <img src="assets/images/banner-shape2.png" alt="image" />{" "}
              </span>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="abt_side">
                    <div className="logo">
                      {" "}
                      <img src="assets/images/footer_logo.png" alt="image" />
                    </div>
                    <ul>
                      <li>
                        <Link to="#">support@example.com</Link>
                      </li>
                      <li>
                        <Link to="#">+1-900-123 4567</Link>
                      </li>
                    </ul>
                    <ul className="social_media">
                      <li>
                        <Link to="#">
                          <i className="icofont-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Useful Links</h3>
                    <ul>
                      <li>
                        <Link to="/#">Home</Link>
                      </li>
                      <li>
                        <Link to="/#streetztalk">Streetz Talk</Link>
                      </li>
                      <li>
                        <Link to="/#streetztrends">Streetz Trends</Link>
                      </li>
                      <li>
                        <Link to="/#features">Streetz Corner</Link>
                      </li>
                      <li>
                        <Link to="/#getstarted">Get Onboard</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="links">
                    <h3>Help & Suport</h3>
                    <ul>
                      <li>
                        <Link to="/#">Site Terms & Policies</Link>
                      </li>
                      <li>
                        <Link to="/#">community Standards</Link>
                      </li>
                      <li>
                        <Link to="/#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/#">Terms & conditions</Link>
                      </li>
                      <li>
                        <Link to="/#">Cookie policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="try_out">
                    <h3>Let’s Try Out</h3>
                    <ul className="app_btn">
                      <li>
                        <Link to="#">
                          <img
                            src="assets/images/appstore_blue.png"
                            alt="image"
                          />
                        </Link>
                      </li>
                      <li>
                        <a href="https://play.google.com/store/apps/details?id=com.nbstreetztalk">
                          <img
                            src="assets/images/googleplay_blue.png"
                            alt="image"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>© Copyrights 2023. All rights reserved.</p>
                </div>
                {/* <div className="col-md-6">
                  <p className="developer_text">
                    Design & developed by{" "}
                    <Link
                      to="https://themeforest.net/user/kalanidhithemes"
                      target="blank"
                    >
                      Kalanidhi Themes
                    </Link>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="go_top">
            <span>
              <img src="assets/images/go_top.png" alt="image" />
            </span>
          </div>
        </footer>
      )}
    </>
  );
};

export default Main;
