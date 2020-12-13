import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, buttonAction }) {
  return (
    <div className="buttonContainer">
      <button type="button" onClick={buttonAction} className="Button">
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default Button;
