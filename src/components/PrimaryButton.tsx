import { Button } from "react-bootstrap";
import type { ButtonProps } from "../interfaces";

const PrimaryButton = ({ text, type, disabled }: ButtonProps) => {
  return (
    <Button
      type={type}
      className="bg-color-primary border-0 py-3"
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
