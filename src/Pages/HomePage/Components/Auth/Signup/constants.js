export const initialState = [
  {
    value: "",
    error: false,
    placeholder: "Email",
    id: 1,
    type: "text",
    message: "Enter valid Email",
    checkError: (email) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    },
  },
  {
    value: "",
    error: false,
    placeholder: "Mobile Number",
    id: 2,
    type: "text",
    message: "Mobile number required and should be of 10 digit",
    checkError: (mobileNumber) => {
      console.log(mobileNumber.length === 10, mobileNumber);
      return mobileNumber.length === 10;
    }
  },
  {
    value: "",
    error: false,
    placeholder: "Password",
    id: 3,
    type: "password",
    message: "must be combination of length 8 of uppercase, number, symbol",
    checkError: (password) => {
      let regex =
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/\\]).{8,}$/;
      return regex.test(password);
    },
  },
  {
    value: "",
    error: false,
    placeholder: "Confirm Password",
    id: 4,
    type: "password",
    message: "Password should match",
    checkError: (password, confirmPassword) => password === confirmPassword,
  },
];
