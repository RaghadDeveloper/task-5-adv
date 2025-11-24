import type { InputField } from "../interfaces";

export const loginInputs: Array<InputField> = [
  {
    label: "Email",
    type: "text",
    placeholder: "Enter your email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
  },
];
