export interface LoginInterface {
  email: string;
  password: string;
}

export interface SignUpInterface extends LoginInterface {
  first_name: string;
  last_name: string;
  password_confirmation: string;
  profile_image: File;
  user_name: string;
}

export interface AuthLayoutProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export interface FormProps {
  inputs: Array<InputField>;
  submitData: (data: SignUpInterface) => void;
  loading: boolean;
  error: string;
  btnText: string;
}

export interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface InputField {
  label?: string;
  type: string;
  placeholder?: string;
  name: string;
  row?: boolean;
}

export interface NavItemProps {
  icon: string;
  text: string;
  path: string;
}

export interface ProductType {
  id: number;
  name: string;
  price: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface ProductInfoProps {
  label: string;
  value: string;
}

export interface ItemFormData {
  name: string;
  price: string;
  image: File | string;
}

export interface ItemFormProps {
  submitData: (data: ItemFormData) => void;
  loading: boolean;
  error: string | null;
}
