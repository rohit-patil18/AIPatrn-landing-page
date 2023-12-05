// import React from "react";
import { PropTypes } from "prop-types";

function Card({ number = "01", children = "", className = "", bgImage = "" }) {
  return (
    <div
      className={`p-5 h-96 flex flex-col justify-between ${className}`}
      style={{
        background: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <span className="border border-gray-50 text-gray-50 py-1 px-3 rounded-full w-fit">{number}</span>
      {children}
    </div>
  );
}

export default Card;

Card.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  bgImage: PropTypes.string,
};
