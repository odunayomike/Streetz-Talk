import React from "react";
import img1 from "../../../assets/images/modern01.jpg";
import img2 from "../../../assets/images/streetz.jpg";
import img3 from "../../../assets/images/modern02.jpg";
import img4 from "../../../assets/images/modern03.jpg";

const Main = ({ gredient }) => {
  return (
    <>
      <section
        id="streetztrends"
        className={`row_am modern_ui_section ${gredient && "gredient-bg"}`}
      >
        {gredient && (
          <div className="modernui_section_bg modernui-gredient">
            {" "}
            <img src="assets/images/section-bg.png" alt="image" />{" "}
          </div>
        )}
        <div id="streetztalk" className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ui_text">
                <div
                  className="section_title"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="100"
                >
                  <h2>
                    Streetz news. Streetz gists. <span>Streetz food</span>
                  </h2>
                  <p>
                    Individuals, entrepreneurs and local creators living in
                    communities want to connect with conversations, people and
                    discover businesses within their local communities. Streetz
                    talk is enabling people discover their communities like
                    never before, making communities more connected and
                    accessible to people it matters to.
                    <br />
                    <br />
                    We are solving for how information is shared and discovered
                    within local communities in real time.
                  </p>
                </div>
                <ul className="design_block">
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <h4>See Local Trends</h4>
                    <p>
                      See what people in your streetz are talking about
                      with Streetz trend.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <h4>Join Street Corners</h4>
                    <p>
                      Create private conversations in Streetz corners accessible
                      to only those who live in the location. Get people to
                      request access to comment on your private post
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <h4>Trending Conversations</h4>
                    <p>
                      You can follow communities you have interest in but not
                      physically present in. Get to see all the public posts in
                      these locations under Trendy Conversations
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="ui_images"
                data-aos="fade-in"
                data-aos-duration="1500"
              >
                <div className="left_img">
                  <img
                    className="moving_position_animatin"
                    src={img1}
                    alt="image"
                  />
                </div>
                <div className="right_img">
                  <img
                    className="moving_position_animatin"
                    src={img2}
                    alt="image"
                  />
                  <img
                    className="moving_position_animatin"
                    src={img3}
                    alt="image"
                  />
                  <img
                    className="moving_position_animatin"
                    src={img4}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
