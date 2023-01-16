import React from "react";

export enum ErrorType {
  ALERT = "alert-box",
}
const ErrorFormMessage = ({
  errorText,
  errorType,
}: {
  errorText: string | undefined;
  errorType?: ErrorType;
}) => {
  return (
    <>
      {errorText ? (
        <div
          className={`error-box ${
            errorType == ErrorType.ALERT ? ErrorType.ALERT : ""
          }`}
        >
          {errorText}
        </div>
      ) : null}
    </>
  );
};

export default ErrorFormMessage;
