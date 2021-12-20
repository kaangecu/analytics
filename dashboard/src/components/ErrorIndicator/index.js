import React from "react";
import PropTypes from "prop-types";

const ErrorIndicator = ({ message }) => {
  return (
    <div className="alert alert-dismissible alert-danger">
      <strong>{message}</strong>
    </div>
  );
};

export default ErrorIndicator;

ErrorIndicator.propTypes = {
  message:PropTypes.string.isRequired
}