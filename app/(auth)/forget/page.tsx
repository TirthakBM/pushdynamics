import Input from '@components/Input'
import React from 'react'

export default function Forget() {
  return (
    <div className="login_page">
    <div className="container p-0 for_container">
        <div className="main_login">
            <div className="left_login">
                    <h1 className="signup_tt mobile_none">Changed
                        your mind?</h1>
                    <h1 className="signup_tt desktop_none">Changed
                        your mind?</h1>
                    <button className="btn green_btn">Cancel</button>
            </div>
            <div className="right_signup">
                <div className="login_form">

                    <h1 className="form_tt" style={{height: 'auto'}}>Reset your password</h1>

                    <div className="input_sectiont">
                        <div className="per_input">
                            <p className="input_tt">New Password</p>
                            {/* <input type="text" placeholder="" className="input_css"> */}
                            <Input
                                        type="text"
                                        placeholder=""
                                    />

                        </div>

                        <div className="per_input">
                            <p className="input_tt">Confirm New Password</p>
                            {/* <input type="password" placeholder="" className="input_css"> */}
                            <Input
                                        type="password"
                                        placeholder=""
                                    />

                        </div>

                        <button className="btn green_btn for_width_hundred_desktop for_width_hundred" >save changes</button>

                        

                        
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
  )
}
