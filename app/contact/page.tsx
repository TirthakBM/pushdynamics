import React from 'react'
import reCAPTCHA from '@assets/images/reCAPTCHA.png'
import Image from 'next/image'
import phoneicon from '@assets/images/phne_ico.svg'
import envelopeicon from '@assets/images/envelope-solid.svg'
import mapmarker from '@assets/images/map-marker-alt-solid.svg'
import Input from '@components/Input'
import Link from 'next/link'
export default function Contact() {
    return (
        <div className="contact_us">
            <div className="container px-0">
                <div className="black_div">
                    <div className="inner_box">
                        <div className="ib_box">
                            <div className="ib_content_bx">
                                <div className="ib_upper_bx">
                                    <h4>Contact Us</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi diam fermentum aliquam porttitor rutrum
                                    </p>
                                </div>
                                <div className="ib_lwr_box">
                                    <div className="ico_box">
                                        {/* <img src="./image/phne_ico.svg" alt=""> */}
                                        <Image src={phoneicon} alt="" />
                                        <a href="">+44 (0)123 456 7890</a>
                                    </div>
                                    <div className="ico_box">
                                        {/* <img src="./image/envelope-solid.svg" alt=""> */}
                                        <Image src={envelopeicon} alt="" />
                                        <a>+44 (0)123 456 7890</a>
                                    </div>
                                    <div className="ico_box">
                                        {/* <img src="./image/map-marker-alt-solid.svg" alt=""> */}
                                        <Image src={mapmarker} alt="" />
                                        <a>+44 (0)123 456 7890</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ib_box2">
                            <div className="forms_box">
                                <div className="feilds_box">
                                    <div className="form-group name_form">
                                        <div className="lable_forget">
                                            <label htmlFor="exampleInputEmail1" className="full_namee">Full Name</label>
                                        </div>
                                        {/* <input type="email" className="form-control inpi_boxx  " value="" required="" placeholder="Email" name="email"> */}
                                        <Input
                                            type="email"
                                            className="form-control inpi_boxx  " value="" required placeholder="Email" name="email"
                                        />
                                    </div>
                                    <div className="form-group name_form">
                                        <div className="lable_forget">
                                            <label htmlFor="exampleInputEmail1" className="full_namee">Email</label>
                                        </div>
                                        {/* <input type="email" className="form-control inpi_boxx  " value="" required="" placeholder="Email" name="email"> */}
                                        <Input
                                            type="email"
                                            className="form-control inpi_boxx  " value="" required placeholder="Email" name="email"
                                        />
                                    </div>
                                    <div className="form-group name_form">
                                        <div className="lable_forget">
                                            <label htmlFor="exampleInputEmail1" className="full_namee">Phone</label>
                                        </div>
                                        {/* <input type="email" className="form-control inpi_boxx  " value="" required="" placeholder="Email" name="email"> */}
                                        <Input
                                            type="email"
                                            className="form-control inpi_boxx  " value="" required placeholder="Email" name="email"
                                        />
                                    </div>
                                </div>
                                <div className="name_form">
                                    <p className="full_namee">Have additional comments?</p>
                                    <textarea className="form-control inpi_boxx" placeholder="First and third pages only" id="floatingTextarea" style={{
                                        borderRadius: "20px",
                                        border: "2px solid var(--New-Primary-Green, #7CD85A)",
                                        height: "121px",
                                    }}></textarea>
                                </div>
                                <div className="captcha_tick">
                                    <div className="custom-control custom_checkbox">
                                        <input type="checkbox" className="form-check-input  tick_box" id="customCheck1" />
                                        <label className="custom-control-label terms_line" htmlFor="terms">By ticking this box, you agree to the <a href="#" className="odd">Terms &amp; Conditions</a> &
                                            <a href="#" className="odd">Privacy Policy</a></label>
                                    </div>
                                    {/* <img src="./image/reCAPTCHA.png" alt=""> */}
                                    <Image src={reCAPTCHA} alt="" />
                                </div>
                                <Link className=" cart_summary" href="#">View Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
