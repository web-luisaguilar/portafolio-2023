import React from "react";

const ErrorFormMessage = ({ errorText }: { errorText: string | undefined }) => {
  return <>{errorText ? <div className="error-box">{errorText}</div> : null}</>;
};

export default ErrorFormMessage;
