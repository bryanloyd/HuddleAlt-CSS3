import React from "react";
import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import facebook from "../images/facebook-square-brands.svg";
import twitter from "../images/twitter-square-brands.svg";
import instagram from "../images/instagram-square-brands.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" width="200px" className="footer-logo" />
      <section className="footer-section-one">
        <img src={location} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <img src={phone} alt="" />
        <p>+1-543-123-4567</p>
        <img src={email} alt="" />
        <p>example@huddle.com</p>
      </section>
      <section className="footer-section-two">
        <div>
          <p>About Us</p>
          <p>What We Do</p>
          <p>FAQ</p>
        </div>
        <div>
          <p>Career</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
      </section>
      <section className="footer-social">
        <div>
          <img src={facebook} alt="" width="32px" />
        </div>
        <div>
          <img src={twitter} alt="" width="32px" />
        </div>
        <div>
          <img src={instagram} alt="" width="32px" />
        </div>
      </section>
      <p className="footer-ipps">
        &copy; Copyright 2021 Huddle. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
