import { Button } from "react-bootstrap";
import type { ButtonProps } from "../interfaces";

const PrimaryButton = ({ text, type, disabled, onClick }: ButtonProps) => {
  return (
    <Button
      type={type}
      className={`${
        text === "Delete" ? "bg-danger" : "bg-color-primary"
      } border-0 py-2 `}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
