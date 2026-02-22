"use client"
import Input from '@components/Input';
import GreenButton from '@components/GreenButton';
import { useState } from "react";
import { useAuth } from '@context/AuthContext';

export default function Signup() {
    const { register } = useAuth();

    const [data, setData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!data.userName || !data.email || !data.password || !data.confirmPassword) {
            alert("please fill the form")
        }
        
        if (data.password === data.confirmPassword) {
            await register(data.userName, data.email, data.password, data.confirmPassword)
        } else {
            alert("password and confirm password must be same")
        }
        

    }

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
                                        value={data.userName}
                                        onChange={(e) => setData({...data, userName: e.target.value})}
                                    />

                                </div>

                                <div className="per_input">
                                    <p className="input_tt">Email</p>
                                    {/* <input type="text" placeholder="" className="input_css" /> */}
                                    <Input
                                        type="text"
                                        placeholder=""
                                        value={data.email}
                                        onChange={(e) => setData({...data, email: e.target.value})}
                                    />
                                </div>

                                <div className="per_input">
                                    <p className="input_tt">Password (at least 8 characters)</p>
                                    {/* <input type="password" placeholder="" className="input_css" /> */}
                                    <Input
                                        type="password"
                                        placeholder=""
                                        value={data.password}
                                        onChange={(e) => setData({...data, password: e.target.value})}
                                    />

                                </div>

                                <div className="per_input">
                                    <p className="input_tt">Password (at least 8 characters)</p>
                                    {/* <input type="password" placeholder="" className="input_css" /> */}
                                    <Input
                                        type="password"
                                        placeholder=""
                                        value={data.confirmPassword}
                                        onChange={(e) => setData({...data, confirmPassword: e.target.value})}
                                    />

                                </div>

                                {/* <img src="./image/reCAPTCHA.png" style="height: 76px;" alt="" className="img-fluid"> */}
                                {/* <Image src={reCAPTCHA} alt="" className="img-fluid" style={{ height: 76 }} /> */}

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
                                <GreenButton onClick={handleSubmit} className="for_width_hundred_desktop for_width_hundred" data-bs-toggle="modal" data-bs-target="#exampleModal22">Create An Account</GreenButton>

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
