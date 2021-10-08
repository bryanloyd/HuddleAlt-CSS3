import React from "react";
import together from "../images/illustration-grow-together.svg";

const Together = () => {
  return (
    <div className="together">
      <div>
        <img src={together} alt="" />
      </div>

      <div>
        <h5>Grow Together</h5>
        <p>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
    </div>
  );
};

export default Together;
