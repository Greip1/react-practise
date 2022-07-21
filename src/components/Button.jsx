/* eslint-disable react/no-typos */
import propTypes from 'prop-types';

function Button({ color, text, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: 'steelblue',
};
Button.PropTypes = {
  text: propTypes.string,
  color: propTypes.string,
  onClick: propTypes.func,
};
export default Button;
