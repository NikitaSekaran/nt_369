import { ToastAndroid } from "react-native";

export const isValidPassword = value => {
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  /* 
    (?=.*\d) ensures that the string contains at least one digit.
    (?=.*[a-z]) ensures that the string contains at least one lowercase letter.
    (?=.*[A-Z]) ensures that the string contains at least one uppercase letter.
    (?=.*[!@#$%^&*]) ensures that the string contains at least one special character. Feel free to modify this character set to include other special characters if needed.
    .{8,} ensures that the string is at least 8 characters long. You can modify the minimum length as per your requirements.
  */
  return !!passwordRegex.test(value);
};

export const isValidEmail = value => {
  const emailRegex = /\S+@\S+\.\S+/;
  return !!emailRegex.test(value);
};

export const showToast = (message) => {
    ToastAndroid.show(message, 2000);
}