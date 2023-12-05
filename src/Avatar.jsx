import { PropTypes } from "prop-types";

function Avatar({ className = "", bgImage = "" }) {
  return (
    <div
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
      className={`border border-white rounded-full w-10 h-10 absolute ${className}`}
    />
  );
}

export default Avatar;

Avatar.propTypes = {
  bgImage: PropTypes.string,
  className: PropTypes.string,
};
