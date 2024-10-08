import { Link } from 'react-router-dom'
import React , {useState ,useEffect} from 'react'
import Pricing from '../HomeMain/Pricing/Main'
import Bredcrumb from '../Bredcrumb/Main'
import BGImg from "../../assets/images/bread_crumb_bg.png"
import BGImg1 from "../../assets/images/bread_crumb_bg_one.png"
import BGImg2 from "../../assets/images/bread_crumb_bg_two.png"


const Main = ({brdcum}) => {
    const[activeFaq, setActiveFaq] = useState({a : true})
    
  return (
    <>
        {brdcum.b1 && 
        <Bredcrumb 
        no={1}
        title="Our Pricing & Plans" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Our Pricing & Plans" 
        bgimg={BGImg}/>}

        {brdcum.b2 && 
        <Bredcrumb 
        no={2}
        title="Our Pricing & Plans" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Our Pricing & Plans" 
        bgimg={BGImg1}/>}

        {brdcum.b5 && 
        <Bredcrumb 
        no={5}
        title="Our Pricing & Plans" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Our Pricing & Plans" 
        bgimg={BGImg}/>}


        {brdcum.b3 && 
        <Bredcrumb 
        no={3}
        title="Our Pricing & Plans" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Our Pricing & Plans" />}

        {brdcum.b4 && 
        <Bredcrumb 
        no={4}
        title="Our Pricing & Plans" 
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting"
        tag="Our Pricing & Plans" 
        bgimg={BGImg2}/>}

        <Pricing/>
        <section className="row_am faq_section">
            <div className="container">
                <div className="faq_panel">
                    <div className="accordion" id="accordionExample">
                        <div className="card" data-aos="fade-up" >
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button type="button" className={`btn btn-link ${activeFaq.a && "active"}`} onClick= {() => setActiveFaq(activeFaq.a ? {a : false} : {a : true})} data-toggle="collapse" data-target="#collapseOne">
                                    {activeFaq.a ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}
                                    How can i pay ?</button>
                                </h2>
                            </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                                    industrys standard dummy text ever since the when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                                    leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card" data-aos="fade-up" >
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                            <button type="button" className={`btn btn-link collapsed ${activeFaq.b && "active"}`} onClick= {() => setActiveFaq(activeFaq.b ? {b : false} : {b : true})} data-toggle="collapse"
                                data-target="#collapseTwo">{activeFaq.b ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>} How to setup account ?</button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                                    industrys standard dummy text ever since the when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                                    leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>

                <div className="card" data-aos="fade-up" >
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                    <button type="button" className={`btn btn-link collapsed ${activeFaq.c && "active"}`} onClick= {() => setActiveFaq(activeFaq.c ? {c : false} : {c : true})} data-toggle="collapse"
                        data-target="#collapseThree">{activeFaq.c ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}What is process to get refund
                        ?</button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                        industrys standard dummy text ever since the when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                        leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                </div>

                <div className="card" data-aos="fade-up" >
                <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                    <button type="button" className={`btn btn-link collapsed ${activeFaq.d && "active"}`} onClick= {() => setActiveFaq(activeFaq.d ? {d : false} : {d : true})} data-toggle="collapse"
                        data-target="#collapseFour">{activeFaq.d ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}What is process to get refund ?
                    </button>
                    </h2>
                </div>

                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div className="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                        industrys standard dummy text ever since the when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                        leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                </div>

                <div className="card" data-aos="fade-up" >
                <div className="card-header" id="headingFive">
                    <h2 className="mb-0">
                    <button type="button" className={`btn btn-link collapsed ${activeFaq.e && "active"}`} onClick= {() => setActiveFaq(activeFaq.e ? {e : false} : {e : true})} data-toggle="collapse"
                        data-target="#collapseFive">{activeFaq.e ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}Can i get code bug support for customization ?
                    </button>
                    </h2>
                </div>

                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                    <div className="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                        industrys standard dummy text ever since the when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                        leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                </div>

                <div className="card" data-aos="fade-up" >
                <div className="card-header" id="headingSix">
                    <h2 className="mb-0">
                    <button type="button" className={`btn btn-link collapsed ${activeFaq.f && "active"}`} onClick= {() => setActiveFaq(activeFaq.f ? {f : false} : {f : true})} data-toggle="collapse"
                        data-target="#collapseSix">{activeFaq.f ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}Lorem Ipsum is simply dummy text of the printing and typesetting ?
                    </button>
                    </h2>
                </div>

                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                    <div className="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                        industrys standard dummy text ever since the when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                        leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                </div>

                <div className="card" data-aos="fade-up" >
                    <div className="card-header" id="headingSeven">
                        <h2 className="mb-0">
                        <button type="button" className={`btn btn-link collapsed ${activeFaq.g && "active"}`} onClick= {() => setActiveFaq(activeFaq.g ? {g : false} : {g : true})} data-toggle="collapse"
                            data-target="#collapseSeven">{activeFaq.g ? <i className="icon_faq icofont-minus"></i>  : <i className="icon_faq icofont-plus"></i>}Lorem Ipsum is simply dummy text of the printing and typesetting ?
                        </button>
                        </h2>
                    </div>
                    <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                        <div className="card-body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the
                            industrys standard dummy text ever since the when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five cen turies but also the
                            leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="row_am free_app_section review_freeapp" id="getstarted">
            <div className="container">
                <div className="free_app_inner aos-init" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100"> 
                    <div className="anim_line dark_bg">
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                        <span><img src="assets/images/anim_line.png" alt="anim_line" /></span>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="free_text">
                                <div className="section_title">
                                    <h2>Let’s download free from apple and play store</h2>
                                    <p>Instant free download from apple and play store orem Ipsum is simply dummy text of the printing.
                                    and typese tting indus orem Ipsum has beenthe standard</p>
                                </div>
                                <ul className="app_btn">
                                <li>
                                    <Link to="#">
                                    <img src="assets/images/appstore_blue.png" alt="image" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                    <img src="assets/images/googleplay_blue.png" alt="image" />
                                    </Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="free_img">
                                <img src="assets/images/download-screen01.png" alt="image" />
                                <img className="mobile_mockup" src="assets/images/download-screen02.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main