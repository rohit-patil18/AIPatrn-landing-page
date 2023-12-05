import { PropTypes } from "prop-types";
import redirect from "./assets/icons/arrow_down_right_icon.svg";

function GoToLink({ text }) {
  return (
    <div className="py-3 text-xl flex justify-between items-center border-b border-gray-200">
      <p>{text}</p>
      <img src={redirect} alt={`go to ${text} section`} />
    </div>
  );
}

export default GoToLink;

GoToLink.propTypes = {
  text: PropTypes.string,
};
