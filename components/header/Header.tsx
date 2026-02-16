import Image from "next/image";
import Link from "next/link";
import logo from "@assets/images/logo.svg";
import logoMo from "@assets/images/logo-mo.svg";
import X from "@assets/images/X.svg";

import abou_mob from "@assets/images/abou_mob.png"

export default function Header() {
  return (
    <header className="header-top  fixed-top" id="header-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container p-mo">
          <div className="nav-logo-btn">
            <Link className="navbar-brand" href="#">
            <Image src={logo} alt=""
              className="image-fluid logo-brand d-none d-lg-block d-md-block" />
            <Image src={logoMo} alt=""
              className="image-fluid logo-brand d-block d-lg-none d-md-none" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="#">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                Services
                </Link>
                <ul className="dropdown-menu document-drop" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">Social Media</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item active" href="#">Email Marketing</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">Web Design &<br /> Development</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">ORM</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">PPC</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">SEO</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Sign up</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle drop-currency" href="#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                GBP £
                </Link>
                <ul className="dropdown-menu cuur-drop" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">Gbp</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item active" href="#">Usd</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">Gbp</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link cart-btn" href="#">View Cart</Link>
              </li>
            </ul>
          </div>
          <div className="shopping-cart">
            <div className="shopping-cart-main">
              <div className="shopping-cart-main-box">
                <h2>SEO - Platinum Package</h2>
                <div className="shopping-bx">
                  <div className="product-info">
                    <p>x 1</p>
                    <p>1 Month</p>
                    <h6>£689.00</h6>

                  </div>

                  <div className="x-Image">
                    <Image src={X} alt="" className="image-fluid" />
                  </div>
                </div>
                <div className="shopping-bx">
                  <div className="product-info">
                    <p>x 1</p>
                    <p>1 Month</p>
                    <h6>£689.00</h6>
                  </div>
                  <div className="x-Image">
                    <Image src={X} alt="" className="image-fluid" />
                  </div>
                </div>
                <div className="shopping-bx">
                  <div className="product-info">
                    <p>x 1</p>
                    <p>1 Month</p>
                    <h6>£689.00</h6>
                  </div>
                  <div className="x-Image">
                    <Image src={X} alt="" className="image-fluid" />
                  </div>
                </div>

              </div>
              <div className="shopping-cart-total">
                <h5>Subtotal</h5>
                <h4>£11,468.00</h4>
              </div>
              <div className="shopping-cart-btn">
                <Link href="checkout.html" className="btn w-100 btn-green-border">Continue Shopping</Link>
                <Link href="checkout.html" className="btn w-100 btn-green">checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}