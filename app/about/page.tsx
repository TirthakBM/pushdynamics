import React from 'react'
import line55 from '@assets/images/Line 55.png'
import linemob from '@assets/images/line_mob.png'
import ico1 from '@assets/images/ico_1.png'
import ico2 from '@assets/images/ico_2.png'
import ico3 from '@assets/images/ico_3.png'
import Image from 'next/image'
export default function About() {
    return (
        <div>


            <section className="about_us">
                <div className="ab_title_box">
                    <p>ABOUT US</p>
                    <h4>Why Choose us?</h4>
                    <h3 className="commonn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum nunc eget molestie duis nunc
                        iaculis morbi vestibulum. Massa volutpat nisi, ultrices aenean pellentesque ornare ornare vel. Viverra et lobortis
                        a scelerisque vitae. Turpis non venenatis vel sed. Urna id.</h3>
                </div>
            </section>
            <section className="awarde_s">
                <div className="container-fluid px-0">
                    <div className="facts_fig">
                        <div className="ff_top">
                            <h4>FACTS AND FIGURES</h4>
                            <h3 className="commonn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum nunc eget molestie duis nunc
                                iaculis morbi vestibulum. Massa volutpat nisi, ultrices aenean pellentesque ornare ornare vel. Viverra et
                                lobortis a scelerisque vitae. Turpis non venenatis vel sed. Urna id.</h3>
                        </div>
                        <div className="four_cards">
                            <div className="card_1">
                                <div className="card_inner_1">
                                    <hr className="g_line" />
                                    <h4>20+ digital marketing experts</h4>
                                </div>
                            </div>
                            <div className="card_2">
                                <div className="card_inner_1">
                                    <hr className="g_line" />
                                    <h4>20+ digital marketing experts</h4>
                                </div>
                            </div>
                            <div className="card_3">
                                <div className="card_inner_1">
                                    <hr className="g_line" />
                                    <h4>20+ digital marketing experts</h4>
                                </div>
                            </div>
                            <div className="card_4">
                                <div className="card_inner_1">
                                    <hr className="g_line" />
                                    <h4>20+ digital marketing experts</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="email_section">
                <div className="emial">
                    <div className="emial-box">
                        <h4>Newsletter Signup</h4>
                        <p>EXPERT MARKETING</p>
                    </div>
                    <p className="email_context">
                        Amet nulla ipsum vestibulum egestas. Duis massa ipsum sollicitudin in aliquet sed in ultricies amet. Luctus
                        ultrices dui neque enim. Sed amet, sem proin metus adipiscing. Volutpat, sed maecenas viverra tincidunt donec
                        interdum facilisi aliquam. Non gravida pellentesque sagittis nisi, proin ac. Ac eget convallis sed cras. Ac amet,
                        sit mattis pharetra, dolor a morbi parturient. Ut lorem enim pretium, nunc hac. Pellentesque aliquam posuere
                        platea enim amet egestas.
                        <br /><br />
                        Tempor vestibulum, risus, enim faucibus congue dictumst ultricies scelerisque pretium. Facilisis ut ullamcorper
                        sagittis sollicitudin. Sed arcu id aliquam, ultrices et pharetra diam, quam. Gravida porttitor vitae dictum
                        feugiat potenti adipiscing nunc. Facilisi at facilisis faucibus ornare. Posuere dolor sed a sagittis egestas. Ac
                        morbi dolor vitae, consequat viverra nibh et sed risus. Ultricies mi id montes, vitae. Luctus adipiscing sed
                        sapien, malesuada nulla vel. Eu tincidunt praesent congue nibh vulputate faucibus. Consequat duis etiam tempus
                        dolor cras nunc. Molestie vitae turpis maecenas pharetra accumsan eu volutpat elit sit.
                    </p>
                </div>

            </section>

            <section className="img_boxa">
                <div className="img_box">
                    <div className="container-fluid px-0">
                        <div className="servi_tt">
                            <h4 className="bo_wt">SERVICES</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo velit mi diam sed viverra aenean. Ut et
                                velit molestie consectetur pharetra, platea convallis. Eleifend porttitor viverra sed lectus ipsum vitae ipsum
                                blandit.</p>
                        </div>
                        {/* <img src="./image/Line 55.png" alt="" className="img-fluid d-lg-block d-md-block d-none"> */}

                        <Image src={line55} alt="" className="iimg-fluid d-lg-block d-md-block d-none" />
                        {/* <img src="./image/line_mob.png" alt="" className="img-fluid d-lg-none d-md-none d-block"> */}
                        <Image src={linemob} alt="" className="iimg-fluid d-lg-block d-md-block d-none" />



                        <div className="serv_img_bs">
                            <div className="serv_rw_1">
                                <div className="serv_c1 js_hv">
                                    <a className=" card_btn" href="#">Social Media</a>
                                    <div className="serv_gree">
                                        <div className="dotted_box">
                                            <h4>Progrssive SEO</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare volutpat blandit scelerisque et cursus tristique hendrerit hendrerit. Nunc urna at quis eu enim egestas.</p>
                                            <a className=" cart_black2" href="#">View Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="serv_c2 js_hv">
                                    <a className=" card_btn" href="#">Social Media</a>
                                    <div className="serv_gree">
                                        <div className="dotted_box">
                                            <h4>Progrssive SEO</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare volutpat blandit scelerisque et cursus tristique hendrerit hendrerit. Nunc urna at quis eu enim egestas.</p>
                                            <a className=" cart_black2" href="#">View Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="serv_c3 js_hv">
                                    <a className=" card_btn" href="#">Web Design and Development</a>
                                    <div className="serv_gree">
                                        <div className="dotted_box">
                                            <h4>Progrssive SEO</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare volutpat blandit scelerisque et cursus tristique hendrerit hendrerit. Nunc urna at quis eu enim egestas.</p>
                                            <a className=" cart_black2" href="#">View Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="serv_rw_1">
                                <div className="serv_c4 js_hv">
                                    <a className=" card_btn" href="#">Social Media</a>
                                    <div className="serv_gree">
                                        <div className="dotted_box">
                                            <h4>Progrssive SEO</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare volutpat blandit scelerisque et cursus tristique hendrerit hendrerit. Nunc urna at quis eu enim egestas.</p>
                                            <a className=" cart_black2" href="#">View Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="serv_c5 js_hv">
                                    <a className=" card_btn" href="#">Social Media</a>
                                    <div className="serv_gree">
                                        <div className="dotted_box">
                                            <h4>Progrssive SEO</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare volutpat blandit scelerisque et cursus tristique hendrerit hendrerit. Nunc urna at quis eu enim egestas.</p>
                                            <a className=" cart_black2" href="#">View Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="serv_c4 js_hv">
                                    <a className=" card_btn" href="#">Social Media</a>
                                    <div className="serv_gree">
                                        <div className="dotted_box">
                                            <h4>Progrssive SEO</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare volutpat blandit scelerisque et cursus tristique hendrerit hendrerit. Nunc urna at quis eu enim egestas.</p>
                                            <a className=" cart_black2" href="#">View Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="black_boxa">
                <div className="black_box">
                    <div className="container black_cont px-0">
                        <div className="black_inn">
                            <div className="bl_top">
                                <h4 className="bo_wt">Experience Rapid growth with us</h4>
                            </div>
                            <div className="three_box">
                                <div className="box_r">
                                    {/* <img src="./image/ico_1.png" alt=""> */}
                                    <Image src={ico1} alt="" />
                                    <h4>experts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo vitae massa integer lorem aliquam turpis
                                        fusce. Est arcu mi massa vitae proin.</p>
                                </div>
                                <div className="box_r">
                                    {/* <img src="./image/ico_2.png" alt=""> */}
                                    <Image src={ico2} alt="" />
                                    <h4>Collaboration</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo vitae massa integer lorem aliquam turpis
                                        fusce. Est arcu mi massa vitae proin.</p>
                                </div>
                                <div className="box_r">
                                    {/* <img src="./image/ico_3.png" alt=""> */}
                                    <Image src={ico3} alt="" />
                                    <h4>Growth</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo vitae massa integer lorem aliquam turpis
                                        fusce. Est arcu mi massa vitae proin.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gree_box">
                            <div className="inner_g">
                                <div className="left_g_text">
                                    <h4>we are here to help</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus dignissim dictumst leo at fusce euismod ut eleifend. Lectus blandit amet mi in.
                                    </p>
                                </div>
                                <a className=" cart_black" href="#">View Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
