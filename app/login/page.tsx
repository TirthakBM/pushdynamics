import React from 'react'
import Link from "next/link";
import Input from '@components/Input';
import GreenButton from '@components/GreenButton';

export default function Login() {
    return (
        <div className="login_page">
            <div className="container p-0 for_container">
                <div className="main_login">
                    <div className="left_login">
                        <h1 className="signup_tt mobile_none">DON’t have an account?</h1>
                        <h1 className="signup_tt desktop_none">DON’t have an account?</h1>
                        {/* <button className="btn green_btn">Sign Up</button> */}
                        {/* <Link className="btn green_btn" href="/signup">Sign Up</Link> */}
                        <GreenButton href="/signup">Sign Up</GreenButton>
                        
                    </div>
                    <div className="right_signup">
                        <div className="login_form">

                            <h1 className="form_tt">Welcome Back</h1>

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
                                    <p className="input_tt">Password</p>
                                    {/* <input type="password" placeholder="" className="input_css" /> */}
                                    <Input
                                        type="password"
                                        placeholder=""
                                    />
                                </div>

                                <div className="c-checkbox custom_margin">
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
                                            Remember me

                                        </p>
                                    </div>
                                </div>

                                {/* <button className="btn green_btn for_width_hundred_desktop for_width_hundred" >Sign in</button> */}
                                <GreenButton href="/signup" className="for_width_hundred_desktop for_width_hundred">Sign Up</GreenButton>


                                <p className=" btn forget_password_tt" data-bs-toggle="modal" data-bs-target="#exampleModal">Forgot Password?</p>

                                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal_width">
                                        <div className="modal-content remove_modal_css">

                                            <div className="modal-body custom_modal2">

                                                <div className="in_modal2">
                                                    <div className="in_second_modal">
                                                        <h1 className="modal_tt">Forgot your password?</h1>
                                                        <p className="modal_pp">Lorem ipsum dolor sit amet consectetur. Sit nec ipsum sit blandit.</p>
                                                    </div>
                                                    <div className="lastin_modal">
                                                        <div className="per_input">
                                                            <p className="input_tt">Full Name</p>
                                                            {/* <input type="text" placeholder="" className="input_css" /> */}
                                                            <Input
                                                                type="text"
                                                                placeholder=""
                                                            />
                                                        </div>
                                                        <button className="btn green_btn for_width_hundred_desktop" data-bs-dismiss="modal">Submit</button>
                                                    </div>


                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
