import React from 'react'
import Image from "next/image";
import footerlogo from '@assets/images/footer-logo.png'

import mastercardimg from '@assets/images/master-card-img.svg'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container p-mo">
        <div className="col">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="footer-logo">
                <a href="#">
                  {/* <img src="./image/footer-logo.png" alt="" className="img-fluid footer-img-logo"> */}

                  <Image src={footerlogo} alt="" className="img-fluid footer-img-logo" />
                </a>
                <br />
                {/* <img src="./image/master-card-img.svg" alt="" className="img-fluid footer-img-mcard"> */}
                <Image src={mastercardimg} alt="" className="img-fluid footer-img-mcard" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 p-0">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-0 order-lg-0 order-1">
                  <div className="footer-menu">
                    <h5>Support</h5>
                    <ul>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                  <div className="footer-menu footer-menu-two">
                    <h5>Services</h5>
                    <div>
                      <ul>
                        <li>
                          <a href="#">Social Media </a>
                        </li>
                        <li>
                          <a href="#">Email Marketing</a>
                        </li>
                        <li>
                          <a href="#">Web Design & Development</a>
                        </li>
                      </ul>
                      <ul className="ppc-box">
                        <li>
                          <a href="#">PPC</a>
                        </li>
                        <li>
                          <a href="#">ORM</a>
                        </li>
                        <li>
                          <a href="#">SEO</a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 order-lg-1 order-1">
                  <div className="footer-menu footer-menu-three">
                    <h5>Contact us</h5>
                    <p>
                      info@Pushdynamics.com<br />
                      123 Main Street,<br />
                      New York,  <br />
                      10030
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-p">
            <p>Copyright © 2024 Push Dynamics</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
