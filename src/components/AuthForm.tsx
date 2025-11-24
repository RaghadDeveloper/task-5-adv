import Form from "react-bootstrap/Form";
import type { FormProps } from "../interfaces";
import { Col } from "react-bootstrap";
import { useState, type FormEvent } from "react";
import PrimaryButton from "./PrimaryButton";

const AuthForm = ({
  inputs,
  submitData,
  loading,
  error,
  btnText,
}: FormProps) => {
  const [data, setData] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitData(data);
  };

  return (
    <Form
      className="d-flex flex-column w-100 gap-4 w-476"
      onSubmit={handleSubmit}
    >
      {inputs.map((input) => (
        <Form.Group as={Col} controlId={input.name} key={input.name}>
          <Form.Label>{input.label}</Form.Label>
          <Form.Control
            required
            type={input.type}
            placeholder={input.placeholder}
            className="py-3"
            onChange={(e) =>
              setData((prev) => ({ ...prev, [input.name]: e.target.value }))
            }
          />
        </Form.Group>
      ))}
      {error && <p className="text-danger">{error}</p>}

      <PrimaryButton text={btnText} type="submit" disabled={loading} />
    </Form>
  );
};

export default AuthForm;
