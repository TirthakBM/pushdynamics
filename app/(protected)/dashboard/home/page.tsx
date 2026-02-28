"use client";


import GreenButton from "@components/GreenButton";
import Input from "@components/Input";
import { useAuth } from "@context/AuthContext"
import api from "@lib/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const { user, loading, logout } = useAuth();

  const [userData, setUserData] = useState<any>({
    id: '',
    name: '',
    email: '',
    address: '',
    addressL2: '',
    country: '',
    city: '',
    postal_code: '',
    password: '',
    confirmPassword: '',
  });
  const [heading, setHeading] = useState("My Account");

  const my_account_db = (value: string) => {
    setHeading(value);
  };

  const fetchUserData = async (userEmail:string) => {
    if (!user?.email) return;

    try {
        const res = await api.get("/auth/get-user-details", {
            params: { email: userEmail },
        });

        setUserData({
            id: res.data.userObject.id,
            name: res.data.userObject.name,
            email: res.data.userObject.email,
            address: res.data.userObject.address,
            addressL2: res.data.userObject.addressL2,
            country: res.data.userObject.country,
            city: res.data.userObject.city,
            postal_code: res.data.userObject.postal_code,
        })
        
    } catch (error) {
        console.log("Error fetching user data:", error);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userData);
    try {

        const res = await api.post("/auth/update-user-details", {
            name: userData.name,
            email: userData.email,
            address1: userData.address,
            address2: userData.addressL2,
            city: userData.city,
            country: userData.country,
            zipCode: userData.postal_code,
            newPassword: userData.password,
            cnfNewPass: userData.confirmPassword
        });

        console.log(res);
        
        
    } catch (error) {
        console.log("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    if (!loading && user?.email) {
        fetchUserData(user?.email);
    }
  }, [loading, user]);
  
 
  if (loading) {
    return <><h1 style={{color: "#FFFF"}}>loading....</h1></>
  }

  return (
    (!user?.emailVerified) ? (
        <><h1 style={{color: "#FFFF"}}>Email is not verified</h1></>
     ) : (
        <section className="s1_db_section">
            <div className="s1_db">
                <div className="s1_db_inner">
                    <h1 className="heading_s1" id="heding_myac">{heading}</h1>
                    <p className="para_s1">From your account dashboard you can vier your recent orders, manage your billing addressed and
                        edit your password and account details.</p>
                </div>
            </div>
            <div className="for_form">
                <div className="for_form_1 " id="nav-tab" role="tablist">
                    <div className="div_for_btn1 ">
                        {/* <!--<img className="img-fluid img_form mobile_none " src="./image/bw_ac_db.svg" alt="">--> */}
                            <button className="btn btn_form active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                                type="button" role="tab" aria-controls="nav-home" aria-selected="true" onClick={() => {my_account_db('My Account')}}>
                                <svg className="mobile_none" xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57"
                                    fill="none">
                                    <path
                                        d="M46.376 0.5H9.626C4.31 0.5 0 4.81 0 10.126V46.876C0 52.19 4.31 56.5 9.626 56.5H46.376C51.69 56.5 56 52.19 56 46.876V10.126C56 4.81 51.69 0.5 46.376 0.5ZM28 10.304C33.99 10.304 38.866 15.178 38.866 21.168C38.866 27.158 33.99 32.034 28 32.034C22.01 32.034 17.134 27.16 17.134 21.17C17.134 15.18 22.01 10.304 28 10.304ZM42.42 46.694C42.388 46.694 42.358 46.696 42.326 46.696C41.374 46.696 40.58 45.95 40.532 44.988C40.378 42.006 37.918 39.67 34.932 39.67H21.068C18.082 39.67 15.622 42.006 15.468 44.988C15.418 45.98 14.58 46.744 13.58 46.694C12.586 46.642 11.822 45.796 11.874 44.804C12.126 39.908 16.164 36.072 21.068 36.072H34.932C39.836 36.072 43.874 39.906 44.126 44.804C44.178 45.796 43.414 46.642 42.42 46.694Z"
                                        fill="#D0D0D0" />
                                </svg>
                                My Account
                            </button>
                    </div>
                    <div className="div_for_btn2">
                        {/* <!--<img src="./image/order_db.svg" alt="" className="img-fluid img_form2 mobile_none">--> */}
                            <button className="btn btn_form" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                type="button" role="tab" aria-controls="nav-profile" aria-selected="false"
                                onClick={() => {my_account_db('Order History')}}>
                                <svg className="mobile_none" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
                                    fill="none">
                                    <path
                                        d="M56.2516 42.3008V44.1008C56.2516 45.882 55.5391 47.5883 54.2828 48.8633L48.8641 54.2633C47.6078 55.5383 45.9016 56.2508 44.1203 56.2508H42.3203V46.632C42.3203 44.232 44.2703 42.3008 46.6516 42.3008H56.2516Z"
                                        fill="#D0D0D0" />
                                    <path
                                        d="M49.2919 3.75977H10.7081C6.86438 3.75977 3.75 6.87602 3.75 10.7179V49.2829C3.75 53.1266 6.86438 56.241 10.7081 56.241H39.5062V46.6316C39.5062 42.6923 42.7106 39.4879 46.65 39.4879H56.25V10.7179C56.25 6.87602 53.1356 3.75977 49.2919 3.75977ZM27.9094 43.0935H14.3962C13.4644 43.0935 12.7087 42.3379 12.7087 41.406C12.7087 40.4741 13.4644 39.7185 14.3962 39.7185H27.9094C28.8413 39.7185 29.5969 40.4741 29.5969 41.406C29.5969 42.3379 28.8413 43.0935 27.9094 43.0935ZM45.6038 31.6879H14.3962C13.4644 31.6879 12.7087 30.9323 12.7087 30.0004C12.7087 29.0685 13.4644 28.3129 14.3962 28.3129H45.6056C46.5375 28.3129 47.2931 29.0685 47.2931 30.0004C47.2931 30.9323 46.5356 31.6879 45.6038 31.6879ZM45.6038 20.2804H14.3962C13.4644 20.2804 12.7087 19.5248 12.7087 18.5929C12.7087 17.661 13.4644 16.9054 14.3962 16.9054H45.6056C46.5375 16.9054 47.2931 17.661 47.2931 18.5929C47.2931 19.5248 46.5356 20.2804 45.6038 20.2804Z"
                                        fill="#D0D0D0" />
                                </svg>
                                Order History
                            </button>
                    </div>
                    <div className="div_for_btn3">
                        {/* <!--<img src="./image/sign_out_db.png" alt="" className="img-fluid img_form mobile_none">--> */}
                            <button className="btn btn_form" onClick={async (e)=>{e.preventDefault(); await logout()}}>
                                <svg className="mobile_none" xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61"
                                    fill="none">
                                    <g clipPath="url(#clip0_3607_13286)">
                                        <path
                                            d="M37.5 33C36.1175 33 35 34.12 35 35.5V45.5C35 46.8775 33.88 48 32.5 48H25V10.5C25 8.365 23.64 6.4575 21.595 5.7475L20.855 5.5H32.5C33.88 5.5 35 6.6225 35 8V15.5C35 16.88 36.1175 18 37.5 18C38.8825 18 40 16.88 40 15.5V8C40 3.865 36.635 0.5 32.5 0.5H5.625C5.53 0.5 5.45 0.5425 5.3575 0.555C5.2375 0.545 5.1225 0.5 5 0.5C2.2425 0.5 0 2.7425 0 5.5V50.5C0 52.635 1.36 54.5425 3.405 55.2525L18.45 60.2675C18.96 60.425 19.4675 60.5 20 60.5C22.7575 60.5 25 58.2575 25 55.5V53H32.5C36.635 53 40 49.635 40 45.5V35.5C40 34.12 38.8825 33 37.5 33Z"
                                            fill="#D0D0D0" />
                                        <path
                                            d="M59.2675 23.733L49.2675 13.733C48.5525 13.018 47.4775 12.803 46.5425 13.1905C45.61 13.578 45 14.4905 45 15.5005V23.0005H35C33.62 23.0005 32.5 24.1205 32.5 25.5005C32.5 26.8805 33.62 28.0005 35 28.0005H45V35.5005C45 36.5105 45.61 37.423 46.5425 37.8105C47.4775 38.198 48.5525 37.983 49.2675 37.268L59.2675 27.268C60.245 26.2905 60.245 24.7105 59.2675 23.733Z"
                                            fill="#D0D0D0" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3607_13286">
                                            <rect width="60" height="60" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Sign Out
                            </button>
                    </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                        tabIndex={0}>
                        <div className="for_form_2">
                            <div className="for_btn_db">
                                <div className="db_1_inner">
                                    <div className="inside_div">
                                        <div className="div_for_border_db for_dotted">
                                            <h3 className="heading_tp">Personal Details</h3>
                                        </div>
                                        <div className="div_for_input_db">
                                            <p className="para_of_input_db">Name</p>
                                            <Input type="text" placeholder="Name" className="input_db" value={userData.name || ""} onChange={(e) => setUserData({...userData, name: e.target.value})} />
                                        </div>
                                        <div className="div_for_input_db">
                                            <p className="para_of_input_db">Email</p>
                                            <Input type="text" placeholder="Email" className="input_db" value={userData.email || ""} onChange={(e) => setUserData({...userData, email: e.target.value})} />
                                        </div>
                                        <div className="div_for_input_db">
                                            <p className="para_of_input_db">New Password</p>
                                            <Input type="text" placeholder="Password" className="input_db" onChange={(e) => setUserData({...userData, password: e.target.value})} />
                                        </div>
                                        <div className="div_for_input_db">
                                            <p className="para_of_input_db">Confirm Password</p>
                                            <Input type="text" placeholder="Confirm Password" className="input_db" onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})} />
                                        </div>
                                    </div>
                                    <div className="inside_div">
                                        <div className="div_for_border_db for_dotted">
                                            <h3 className="heading_tp">Address</h3>
                                        </div>
                                        <div className="div_for_input_db">
                                            <p className="para_of_input_db">Address Line 1</p>
                                            <Input type="text" placeholder="Address Line 1" className="input_db" value={userData.address || ""} onChange={(e) => setUserData({...userData, address: e.target.value})} />
                                        </div>
                                        <div className="div_for_input_db">
                                            <p className="para_of_input_db">Address Line 2</p>
                                            <Input type="text" placeholder="Address Line 2" className="input_db" value={userData.addressL2 || ""} onChange={(e) => setUserData({...userData, addressL2: e.target.value})} />
                                        </div>
                                        <div className="div_for_input_db">
                                            <p className="para_of_input_db">City</p>
                                            <Input type="text" placeholder="City" className="input_db" value={userData.city || ""} onChange={(e) => setUserData({...userData, city: e.target.value})} />
                                        </div>
                                        <div className="div_for_input_db">
                                            <p className="para_of_input_db">Country</p>
                                            <Input type="text" placeholder="Country" className="input_db" value={userData.country || ""} onChange={(e) => setUserData({...userData, country: e.target.value})} />
                                        </div>
                                        <div className="div_for_input_db">
                                            <p className="para_of_input_db">Postcode / Zip</p>
                                            <Input type="text" placeholder="Postcode / Zip" className="input_db" value={userData.postal_code || ""} onChange={(e) => setUserData({...userData, postal_code: e.target.value})} />
                                        </div>
                                    </div>
                                </div>
                                <GreenButton onClick={handleSubmit} className="btn btn_for_save_db w-100 m-0">Save Changes</GreenButton>
                            </div></div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex={0}>
                        <p className="for_swipe desktop_none">Swipe left and right to view the table.</p>
                        <div className="for_form_2">
                            <div className="for_btn_db">
                                <div className="db_1_inner">
                                    <div className="inside_div inside_div_for_table table-responsive">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr className="head_1">
                                                    <th scope="col">
                                                        <p className="head_2">Order</p>
                                                    </th>
                                                    <th scope="col">
                                                        <p className="head_2">Qty</p>
                                                    </th>
                                                    <th scope="col">
                                                        <p className="head_2">Date</p>
                                                    </th>
                                                    <th scope="col">
                                                        <p className="head_2">Total</p>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="head_1">
                                                    <td scope="row">
                                                        <p className="data_db1">#12345</p>
                                                    </td>
                                                    <td>
                                                        <p className="data_db">x1</p>
                                                    </td>
                                                    <td className="data_db">
                                                        <p className="data_db">01/01/2023</p>
                                                    </td>
                                                    <td className="data_db">
                                                        <p className="data_db">£1,839.00</p>
                                                    </td>
                                                </tr>
                                                <tr className="head_1">
                                                    <td scope="row">
                                                        <p className="data_db1">#12345</p>
                                                    </td>
                                                    <td>
                                                        <p className="data_db">x1</p>
                                                    </td>
                                                    <td className="data_db">
                                                        <p className="data_db">01/01/2023</p>
                                                    </td>
                                                    <td className="data_db">
                                                        <p className="data_db">£1,839.00</p>
                                                    </td>
                                                </tr>
                                                <tr className="head_1">
                                                    <td scope="row">
                                                        <p className="data_db1">#12345</p>
                                                    </td>
                                                    <td>
                                                        <p className="data_db">x1</p>
                                                    </td>
                                                    <td className="data_db">
                                                        <p className="data_db">01/01/2023</p>
                                                    </td>
                                                    <td className="data_db">
                                                        <p className="data_db">£1,839.00</p>
                                                    </td>
                                                </tr>
                                                <tr className="head_1">
                                                    <td scope="row">
                                                        <p className="data_db1">#12345</p>
                                                    </td>
                                                    <td>
                                                        <p className="data_db">x1</p>
                                                    </td>
                                                    <td className="data_db">
                                                        <p className="data_db">01/01/2023</p>
                                                    </td>
                                                    <td className="data_db">
                                                        <p className="data_db">£1,839.00</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div></div>
                    </div>
                </div>
            </div>
        </section>
    )
    
  )
}
