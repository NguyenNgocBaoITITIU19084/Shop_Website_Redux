import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newletter"></img>
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-0">Facebook: DevShop</Link>
                <Link className="text-white py-2 mb-0">Instagram: DevShop</Link>
                <Link className="text-white py-2 mb-0">
                  Phone: (+84)933546078
                </Link>
              </div>
              <div className="social-icons d-flex align-items-center gap-15">
                <a href="#">
                  <BsFacebook className="text-white fs-4" />
                </a>
                <a href="#">
                  <BsInstagram className="text-white fs-4" />
                </a>
                <a href="#">
                  <BsYoutube className="text-white fs-4" />
                </a>
                <a href="#">
                  <BsLinkedin className="text-white fs-4" />
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-0">Privacy Policy</Link>
                <Link className="text-white py-2 mb-0">Refund Policy</Link>
                <Link className="text-white py-2 mb-0">Shipping Policy</Link>
                <Link className="text-white py-2 mb-0">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-0">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-0">About</Link>
                <Link className="text-white py-2 mb-0">FAQ</Link>
                <Link className="text-white py-2 mb-0">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-0">Laptops</Link>
                <Link className="text-white py-2 mb-0">Headphones</Link>
                <Link className="text-white py-2 mb-0">Tablets</Link>
                <Link className="text-white py-2 mb-0">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy: {new Date().getFullYear()}; Powered by DevShop
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
