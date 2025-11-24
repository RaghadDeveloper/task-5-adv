import type { InputField } from "../interfaces";

export const signUpInputs: Array<InputField> = [
  {
    label: "Name",
    type: "text",
    placeholder: "First Name",
    name: "first_name",
  },
  {
    type: "text",
    placeholder: "Last Name",
    name: "last_name",
  },
  {
    label: "Email",
    type: "text",
    placeholder: "Enter your email",
    name: "email",
    row: true,
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    name: "password",
  },
  {
    type: "password",
    placeholder: "Re-enter your password",
    name: "password_confirmation",
  },
  {
    label: "Profile Image",
    type: "file",
    name: "profile_image",
    row: true,
  },
];
