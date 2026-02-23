import React from 'react'
import tick from '@assets/images/service_tick.svg'
import Image from 'next/image'
import reCAPTCHA from '@assets/images/reCAPTCHA.png'
import crd_image from '@assets/images/crd_image.png'
import greencrd_icon from '@assets/images/greencrd_icon.svg'
import green_tic from '@assets/images/green_tic.svg'
import sm_s5 from '@assets/images/sm_s5.png'
import Input from '@components/Input'
export default function EM() {
    return (

        <section className="service_section">
            <div className="ser_s1">
                <div className="ser_s1_inner">
                    <div className="ser_s1_content">
                        <h6 className="ser_s1_pre_title">PACKAGE AND PRICING</h6>
                        <h1 className="ser_s1_title">Email Marketing</h1>
                        <p className="ser_s1_subtitle">
                            Lorem ipsum dolor sit amet consectetur. Posuere tortor amet sem neque sit. Facilisis.
                        </p>
                        <button className="btn btn_global_m mo_mx_auto">View Pricing</button>
                    </div>
                </div>
            </div>
            <div className="ser_s2">
                <div className="container">
                    <div className="ser_s2_frame">
                        <div className="ser_s2_left">
                            <h6 className="ser_s2_pre_title">What is Email Marketing?</h6>
                            <h1 className="ser_s2_title">
                                Get your business found online
                            </h1>
                            <div className="ser_s2_bar"></div>
                            <p className="ser_s2_subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper nunc hendrerit eget sed iaculis felis, quis viverra. Quisque donec purus ac amet fusce duis tellus facilisis pharetra. Imperdiet pellentesque nisl in tellus. Consectetur magnis at aliquet sed elementum. Pellentesque volutpat a vitae risus nunc et pharetra leo. Tristique sem mi porttitor morbi vel enim proin. Nisl ac neque, id euismod.
                            </p>
                        </div>
                        <div className="ser_s2_right">
                            <h6 className="ser_s2_pre_title">Why is Email Marketing Important?</h6>
                            <h1 className="ser_s2_title">
                                Reach interested customers fast
                            </h1>
                            <div className="ser_s2_bar"></div>
                            <p className="ser_s2_subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper nunc hendrerit eget sed iaculis felis, quis viverra. Quisque donec purus ac amet fusce duis tellus facilisis pharetra. Imperdiet pellentesque nisl in tellus. Consectetur magnis at aliquet sed elementum. Pellentesque volutpat a vitae risus nunc et pharetra leo. Tristique sem mi porttitor morbi vel enim proin. Nisl ac neque, id euismod.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background_socio">


                <div className="sec2_socio">

                    <div>
                        <h1 className="title_tt">How Does it work</h1>
                        <p className="title_pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo velit mi diam sed viverra aenean. Ut et velit molestie consectetur pharetra, platea convallis. Eleifend porttitor viverra sed lectus ipsum vitae ipsum blandit.</p>

                    </div>

                    <div className="container custom_padding">
                        <div className="socio_crd_div">

                            <div className="socio_crd">
                                {/* <img src="./image/crd_image.png" alt="" className="img-fluid crd_image"> */}
                                <Image src={crd_image} alt="" className="img-fluid crd_image" />
                                <div className="crd_content">
                                    <h1 className="crd_tt">CREATION</h1>
                                    <p className="crd_pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit arcu aliquam vitae.</p>

                                </div>
                            </div>

                            <div className="socio_crd">
                                {/* <img src="./image/crd_image2.png" alt="" className="img-fluid crd_image"> */}
                                <Image src={crd_image} alt="" className="img-fluid crd_image" />
                                <div className="crd_content">
                                    <h1 className="crd_tt">CREATION</h1>
                                    <p className="crd_pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit arcu aliquam vitae.</p>

                                </div>
                            </div>

                            <div className="socio_crd">
                                {/* <img src="./image/crd_image3.png" alt="" className="img-fluid crd_image"> */}
                                <Image src={crd_image} alt="" className="img-fluid crd_image" />
                                <div className="crd_content">
                                    <h1 className="crd_tt">CREATION</h1>
                                    <p className="crd_pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit arcu aliquam vitae.</p>

                                </div>
                            </div>

                            <div className="socio_crd">
                                {/* <img src="./image/crd_image4.png" alt="" className="img-fluid crd_image"> */}
                                <Image src={crd_image} alt="" className="img-fluid crd_image" />
                                <div className="crd_content">
                                    <h1 className="crd_tt">CREATION</h1>
                                    <p className="crd_pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit arcu aliquam vitae.</p>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="background_socio3">
                <div className="socio_sec3">

                    <div className="container custom_padding2">
                        <div className="main_sec3_socio">

                            <div className="first_div_sec3">
                                <div className="leftsec3">
                                    <p className="left_socio_pp">Included Features</p>
                                    <h1 className="left_socio_tt">Digital agency that helps you succeed</h1>
                                </div>
                                <p className="socio_sec3_pp">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper nunc hendrerit eget sed iaculis felis, quis viverra. Quisque donec purus ac amet fusce duis tellus facilisis pharetra. Imperdiet pellentesque nisl in tellus. Consectetur magnis at aliquet sed elementum.
                                </p>
                            </div>

                            <div className="second_div_sec3">
                                <div className="green_crd">
                                    <Image src={greencrd_icon} alt="" className="img-fluid" />
                                    {/* <img src="./image/greencrd_icon.svg" alt="" className="img-fluid"> */}
                                    <div>
                                        <h1 className="green_crd_tt">Monthly Statistics</h1>
                                        <p className="green_crd_pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi.</p>
                                    </div>

                                </div>
                                <div className="green_crd">
                                    <Image src={greencrd_icon} alt="" className="img-fluid" />
                                    {/* <img src="./image/greencrd_icon.svg" alt="" className="img-fluid"> */}
                                    <div>
                                        <h1 className="green_crd_tt">Weekly Posts</h1>
                                        <p className="green_crd_pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi.</p>
                                    </div>

                                </div>
                                <div className="green_crd">
                                    <Image src={greencrd_icon} alt="" className="img-fluid" />
                                    {/* <img src="./image/greencrd_icon.svg" alt="" className="img-fluid"> */}
                                    <div>
                                        <h1 className="green_crd_tt">Included Ad Spend</h1>
                                        <p className="green_crd_pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>





                </div>

            </div>
            <div className="ser_s5">
                <div className="container">
                    <div className="ser_s5_frame">
                        <div className="ser_s5_left">
                            <Image src={sm_s5} alt="" className="img-fluid ser_s5_left_mobo" />
                            {/* <img src="./image/sm_s5.png" alt="" className="img-fluid ser_s5_left_mobo"> */}
                        </div>
                        <div className="ser_s5_right">
                            <div className="ser_s5_content">
                                <div className="for_pad">

                                    <h5 className="ser_s5_pre_title">Why Push Dynamics?</h5>
                                    <h1 className="ser_s5_title">
                                        state of art bespoke services
                                    </h1>
                                    <p className="ser_s5_subtitle">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper nunc hendrerit eget sed iaculis felis, quis viverra. Quisque donec purus ac amet fusce duis tellus facilisis pharetra..
                                    </p>

                                </div>
                                <div className="ser_s5_inner_content">
                                    <div className="ser_s5_inner_row">
                                        <Image src={green_tic} alt="" className="img-fluid" style={{ height: 24, width: 24 }} />
                                        {/* <img src="./image/green_tic.svg" alt="" className="img-fluid" style={{ height: 24, width: 24 }}> */}
                                        <p className="ser_s5_inner_content_subtitle">Strategy experience and analytical expertise combine.</p>
                                    </div>
                                    <div className="ser_s5_inner_row">
                                        <Image src={green_tic} alt="" className="img-fluid" style={{ height: 24, width: 24 }} />
                                        {/* <img src="./image/green_tic.svg" alt="" className="img-fluid" style={{ height: 24, width: 24 }}> */}
                                        <p className="ser_s5_inner_content_subtitle">Strategy experience and analytical expertise combine.</p>
                                    </div>
                                    <div className="ser_s5_inner_row">
                                        <Image src={green_tic} alt="" className="img-fluid" style={{ height: 24, width: 24 }} />
                                        {/* <img src="./image/green_tic.svg" alt="" className="img-fluid" style={{ height: 24, width: 24 }}> */}
                                        <p className="ser_s5_inner_content_subtitle">Strategy experience and analytical expertise combine.</p>
                                    </div>
                                </div>
                                <button className="btn btn_global_m">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blk">
                <div className="social_s6">
                    <div className="social_c6 container">
                        <div className="social_s6titlebar">
                            <h2 className="social_s6title">Simple, transparent Pricing</h2>
                            <p className="social_s6subtitle">No contracts. No Surprise fees.</p>
                        </div>
                        <div className="social_s6line mobile_none"></div>
                        <div className="social_tablebar w-100">
                            <div className="tab_btnbar">
                                <div className="nav-tabs-container position-relative">
                                    <ul className="nav nav-pills service_tabbar" id="pills-tab" role="tablist">
                                        <li className="nav-item col mb-0" role="presentation">
                                            <button className="active service_tabbtn w-100" id="pills-one-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-one" type="button" role="tab" aria-controls="pills-one"
                                                aria-selected="true">1&nbsp;Month</button>
                                        </li>
                                        <li className="nav-item col mb-0" role="presentation">
                                            <button className="service_tabbtn w-100" id="pills-three-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-three" type="button" role="tab" aria-controls="pills-three"
                                                aria-selected="false">3&nbsp;Months</button>
                                        </li>
                                        <li className="nav-item col mb-0" role="presentation">
                                            <button className="service_tabbtn w-100" id="pills-six-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-six" type="button" role="tab" aria-controls="pills-six"
                                                aria-selected="false">6&nbsp;Months</button>
                                        </li>
                                        <li className="nav-item col mb-0" role="presentation">
                                            <button className="service_tabbtn w-100" id="pills-twelve-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-twelve" type="button" role="tab" aria-controls="pills-twelve"
                                                aria-selected="false">12&nbsp;Months</button>
                                        </li>
                                    </ul>
                                    <div className="progress-line">
                                        <div className="progress-arrow"></div>
                                    </div>
                                </div>
                            </div>
                            <p className="social_swipetext desktop_none">Swipe left and right to view table</p>
                            <div className="tab_contentbar tab-content">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active service_contentmain" id="pills-one" role="tabpanel"
                                        aria-labelledby="pills-one-tab">
                                        <div className="service_tabcontent table-responsive">
                                            <table className="table table-borderless mb-0 service_table">
                                                <thead className="service_table_header">
                                                    <tr className="align-middle">
                                                        <th scope="col" className="text-center">
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Bronze</p>
                                                                <p className="social_tableamt">£120</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Silver</p>
                                                                <p className="social_tableamt">£264</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Gold</p>
                                                                <p className="social_tableamt">£547</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="service_table_body">
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">A/B testing </p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                            {/* <Image src={tick} className="img-fluid" alt="" /> */}
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Advanced link tracking</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Automated emails (limited to monthly email send volume)</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">3000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">7000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Deliverability support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Campaign Tags</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Countdown timer</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Custom fields</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Customizable template library</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Drag-and-drop builder</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Design & spam testing</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Dynamic content</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Email section locking</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Email support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Written and designed posts</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Mobile optimization tools</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Monthly email send limit</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">3000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">7000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Multiple users</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Optimal Time zone sending</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Phone support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Real-time reporting analytics</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">RSS (straightforward syndication)</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Send time optimization</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Signup forms</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Transactional emails</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Two Factor Authentication</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Worldview reporting</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade service_contentmain" id="pills-three" role="tabpanel"
                                        aria-labelledby="pills-three-tab">
                                        <div className="service_tabcontent table-responsive">
                                            <table className="table table-borderless mb-0 service_table">
                                                <thead className="service_table_header">
                                                    <tr className="align-middle">
                                                        <th scope="col" className="text-center">
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Bronze</p>
                                                                <p className="social_tableamt">£120</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Silver</p>
                                                                <p className="social_tableamt">£264</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Gold</p>
                                                                <p className="social_tableamt">£547</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="service_table_body">
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">A/B testing </p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Advanced link tracking</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Automated emails (limited to monthly email send volume)</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">3000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">7000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Deliverability support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Campaign Tags</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Countdown timer</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Custom fields</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Customizable template library</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Drag-and-drop builder</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Design & spam testing</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Dynamic content</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Email section locking</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Email support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Written and designed posts</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Mobile optimization tools</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Monthly email send limit</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">3000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">7000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Multiple users</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Optimal Time zone sending</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Phone support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Real-time reporting analytics</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">RSS (straightforward syndication)</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Send time optimization</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Signup forms</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Transactional emails</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Two Factor Authentication</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Worldview reporting</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade service_contentmain" id="pills-six" role="tabpanel"
                                        aria-labelledby="pills-six-tab">
                                        <div className="service_tabcontent table-responsive">
                                            <table className="table table-borderless mb-0 service_table">
                                                <thead className="service_table_header">
                                                    <tr className="align-middle">
                                                        <th scope="col" className="text-center">
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Bronze</p>
                                                                <p className="social_tableamt">£120</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Silver</p>
                                                                <p className="social_tableamt">£264</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Gold</p>
                                                                <p className="social_tableamt">£547</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="service_table_body">
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">A/B testing </p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Advanced link tracking</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Automated emails (limited to monthly email send volume)</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">3000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">7000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Deliverability support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Campaign Tags</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Countdown timer</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Custom fields</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Customizable template library</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Drag-and-drop builder</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Design & spam testing</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Dynamic content</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Email section locking</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Email support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Written and designed posts</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Mobile optimization tools</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Monthly email send limit</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">3000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">7000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Multiple users</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Optimal Time zone sending</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Phone support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Real-time reporting analytics</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">RSS (straightforward syndication)</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Send time optimization</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Signup forms</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Transactional emails</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Two Factor Authentication</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Worldview reporting</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade service_contentmain" id="pills-twelve" role="tabpanel"
                                        aria-labelledby="pills-twelve-tab">
                                        <div className="service_tabcontent table-responsive">
                                            <table className="table table-borderless mb-0 service_table">
                                                <thead className="service_table_header">
                                                    <tr className="align-middle">
                                                        <th scope="col" className="text-center">
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Bronze</p>
                                                                <p className="social_tableamt">£120</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Silver</p>
                                                                <p className="social_tableamt">£264</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                        <th scope="col" className="text-center">
                                                            <div className="social_tablehead">
                                                                <p className="social_tabletitle">Gold</p>
                                                                <p className="social_tableamt">£547</p>
                                                                <p className="social_tablesubtitle">+VAT</p>
                                                                <button type="button" className="btn social_tablebtn">Add To Cart</button>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="service_table_body">
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">A/B testing </p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Advanced link tracking</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Automated emails (limited to monthly email send volume)</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">3000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">7000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Deliverability support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Campaign Tags</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Countdown timer</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Custom fields</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Customizable template library</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Drag-and-drop builder</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Design & spam testing</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Dynamic content</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Email section locking</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Email support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Written and designed posts</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Mobile optimization tools</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Monthly email send limit</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">3000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">7000</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Multiple users</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <p className="service_bodytext">Unlimited</p>
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Optimal Time zone sending</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Phone support</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Real-time reporting analytics</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">RSS (straightforward syndication)</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Send time optimization</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Signup forms</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Transactional emails</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Two Factor Authentication</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                    <tr className="align-middle">
                                                        <td>
                                                            <p className="service_bodytitle">Worldview reporting</p>
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                        <td className="text-center">
                                                            <Image src={tick} className="img-fluid" alt="" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ser_s7">
                <div className="container">
                    <h1 className="ser_s7_title">Need a custom package?</h1>
                    <p className="ser_s7_subtitle">
                        Pick and choose what features you would like in your very own custom package <br />
                            Simply upload a document of your brief and our team will get back to you.
                    </p>
                    <div className="ser_s7_content_form">
                        <div className="ser_s7_form_elememt">
                            <p className="ser_s7_form_label">Username</p>
                            {/* <input type="text" className="form-control input_global_m"> */}
                            <Input
                                            type="text" className="form-control input_global_m"
                                        />
                        </div>
                        <div className="ser_s7_form_elememt">
                            <p className="ser_s7_form_label">Email</p>
                            <Input
                                            type="text" className="form-control input_global_m"
                                        />
                            {/* <input type="text" className="form-control input_global_m"> */}
                        </div>
                        <div className="ser_s7_form_elememt">
                            <p className="ser_s7_form_label">Phone</p>
                            <Input
                                            type="text" className="form-control input_global_m"
                                        />
                            {/* <input type="text" className="form-control input_global_m"> */}
                        </div>
                        <div className="ser_s7_form_elememt">
                            <p className="ser_s7_form_label">Upload Brief</p>
                            <Input
                                            type="text" className="form-control input_global_m"
                                        />
                            {/* <input type="text" className="form-control input_global_m"> */}
                        </div>
                        <div className="ser_s7_form_elememt">
                            <p className="ser_s7_form_label">Additional Information</p>
                            <textarea className="form-control textarea_global_m"></textarea>
                        </div>
                        <div className="ser_s7_form_elememt">
                            <p className="ser_s7_form_label">&nbsp;</p>
                            <div className="c-checkbox">
                                <div className="c-div">
                                    <label className="d-flex justify-content-center justify-content-lg-start">
                                        <input type="checkbox" id="terms" name="terms" />
                                            <label htmlFor="terms"></label>
                                    </label>
                                </div>
                                <div className="c-text">
                                    <p className="login_strong">By ticking this box, you agree to the <a href="">Terms & Conditions</a> & <a href="">Privacy Policy.</a></p>
                                </div>
                            </div>
                            {/* <img src="./image/reCAPTCHA.png" alt="" className="img-fluid"> */}
                            <Image src={reCAPTCHA} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <button className="btn btn_global_m">Submit Request</button>
                </div>
            </div>
        </section>
    )
}
