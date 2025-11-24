export interface LoginInterface {
  email: string;
  password: string;
}

export interface AuthLayoutProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export interface FormProps {
  inputs: Array<InputField>;
  submitData: (data: LoginInterface) => void;
  loading: boolean;
  error: string;
  btnText: string;
}

export interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}

export interface InputField {
  label: string;
  type: string;
  placeholder: string;
  name: string;
}
