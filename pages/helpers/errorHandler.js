export const errorNameHandler = (error) => {
  switch (error?.type) {
    case "pattern":
      return "Only characters are allowed";
    case "minLength":
      return "Minimum should be 6";
    case "maxLength":
      return "Maximun should be 10";
    case "required":
      return "This field is required";
    default:
      return "";
  }
};
export const emailValidator = (error) => {
  switch (error?.type) {
    case "pattern":
      return "Enter a valid email";
    case "required":
      return "This field is required";
    default:
      return "";
  }
};
export const lkPhoneNumberValidator = (error) => {
  switch (error?.type) {
    case "pattern":
      return "Enter a valid Srilankan phone number";
    case "required":
      return "This field is required";
    default:
      return "";
  }
};
