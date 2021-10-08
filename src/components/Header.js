import React from "react";
import logo from "../images/logo.svg";
import mockups from "../images/illustration-mockups.svg";

const Header = () => {
  return (
    <div className="header">
      <section className="header-top">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <button>Try It Free</button>
        </div>
      </section>
      <section className="header-bottom">
        <div>
          <h4>Build The Community Your Fans Will Love</h4>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </p>
          <button>Get Started For Free</button>
        </div>
        <div>
          <img src={mockups} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Header;
