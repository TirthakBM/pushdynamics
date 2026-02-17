import React from 'react'
import Image from "next/image";
import reCAPTCHA from '@assets/images/reCAPTCHA.png'
import Link from 'next/link';
import Input from '@components/Input';
import GreenButton from '@components/GreenButton';

export default function Signup() {
    return (
        <div className="signup_page">
            <div className="container p-0 for_container">
                <div className="main_signup">
                    <div className="left_signup">
                        <h1 className="signup_tt mobile_none">Already have an account?</h1>
                        <h1 className="signup_tt desktop_none">Have an account?</h1>
                        {/* <button className="btn green_btn">Login</button> */}
                        {/* <Link className="btn green_btn" href="/login">Login</Link> */}
                        <GreenButton href="/login">Login</GreenButton>
                    </div>
                    <div className="right_signup">
                        <div className="sign_form">

                            <h1 className="form_tt">Sign Up</h1>

                            <div className="input_sectiont">
                                <div className="per_input">
                                    <p className="input_tt">Username</p>
                                    {/* <input type="text" placeholder="" className="input_css" /> */}
                                    <Input
                                        type="text"
                                        placeholder=""
                                    />

                                </div>

                                <div className="per_input">
                                    <p className="input_tt">Email</p>
                                    {/* <input type="text" placeholder="" className="input_css" /> */}
                                    <Input
                                        type="text"
                                        placeholder=""
                                    />
                                </div>

                                <div className="per_input">
                                    <p className="input_tt">Password (at least 8 characters)</p>
                                    {/* <input type="password" placeholder="" className="input_css" /> */}
                                    <Input
                                        type="password"
                                        placeholder=""
                                    />

                                </div>

                                {/* <img src="./image/reCAPTCHA.png" style="height: 76px;" alt="" className="img-fluid"> */}
                                <Image src={reCAPTCHA} alt="" className="img-fluid" style={{ height: 76 }} />

                                <div className="c-checkbox">
                                    <div className="c-div">
                                        <label
                                            className="d-flex justify-content-center justify-content-lg-start"
                                        >
                                            <input type="checkbox" id="terms" name="terms" />
                                            <label htmlFor="terms"></label>
                                        </label>
                                    </div>
                                    <div className="c-text">
                                        <p className="login_strong">
                                            I agree with the
                                            <span className="green_terms"> Terms & Conditions</span> and
                                            <span className="green_terms"> Privacy Policy</span>
                                        </p>
                                    </div>
                                </div>

                                {/* <button className="btn green_btn for_width_hundred_desktop for_width_hundred" data-bs-toggle="modal" data-bs-target="#exampleModal22">Create An Account</button> */}
                                <GreenButton  className="for_width_hundred_desktop for_width_hundred" data-bs-toggle="modal" data-bs-target="#exampleModal22">Create An Account</GreenButton>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal22" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal_width">
                    <div className="modal-content remove_modal_css">

                        <div className="modal-body custom_modal">

                            <div className="in_modal">
                                <h1 className="modal_tt">Thank you for registering</h1>
                                <p className="modal_pp">Almost there! Just check your inbox or junk to verify your account.</p>
                                <button className="btn green_btn" data-bs-dismiss="modal">Close</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}
