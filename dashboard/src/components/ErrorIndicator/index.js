import React from "react";

const ErrorIndicator = ({ message }) => {
  return (
    <div className="alert alert-dismissible alert-danger">
      <strong>{message}</strong>
    </div>
  );
};

export default ErrorIndicator;
