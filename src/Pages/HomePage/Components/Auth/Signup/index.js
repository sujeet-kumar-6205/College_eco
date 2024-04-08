import React, { useState } from "react";
import { initialState } from "./constants";

function SignUp() {
  const [formState, handleFormState] = useState(initialState);

  const updateFormValue = (e, id) => {
    const updateState = formState.map((item) =>
      id === item.id ? { ...item, value: e.target.value } : item
    );

    handleFormState(updateState);
  };

  const handleSubmit = () => {
    const validationArray = formState.map(({ checkError, value, id }) => {
      let isValid;
      if (id === 4) isValid = checkError(formState[2].value, value);
      else isValid = checkError(value);
      return isValid;
    });

    const isValidDetails = validationArray.every((item) => Boolean(item));

    if (isValidDetails) {
      // call api
    } else {
      const updatedState = formState.map((item, index) => ({
        ...item,
        error: !validationArray[index],
      }));
      handleFormState(updatedState);
    }
  };

  const removeErrors = () => {
    const updatedState = formState.map((item) => ({ ...item, error: false }));
    handleFormState(updatedState);
  };

  const renderEachFiled = ({
    error,
    value,
    placeholder,
    id,
    type,
    message,
  }) => {
    return (
      <>
        <input
          key={id}
          onFocus={removeErrors}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={(e) => updateFormValue(e, id)}
          type={type}
        />
        {error && <p style={{ color: "red" }}>{message}</p>}
      </>
    );
  };
  return (
    <div className="signupContainer">
      {formState.map(renderEachFiled)}
      <button onClick={handleSubmit} className="signupButton">
        Register
      </button>
    </div>
  );
}

export default SignUp;
