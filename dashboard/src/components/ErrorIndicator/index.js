import React from "react";

const ErrorIndicator = ({ message }) => {
  return (
    <div class="alert alert-dismissible alert-danger">
      <strong>{message}</strong>
    </div>
  );
};

export default ErrorIndicator;
