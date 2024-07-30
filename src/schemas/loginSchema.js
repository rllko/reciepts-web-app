import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid e-mail").required("Email is required"),
    password: yup.string().min(6, "Password must have at least 6 characters")
    .matches(passwordRules, "Password must contain at least 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit")
    .required("Password is required"),
})

