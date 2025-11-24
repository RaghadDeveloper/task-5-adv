import Form from "react-bootstrap/Form";
import type { FormProps } from "../interfaces";
import { Col, Row } from "react-bootstrap";
import { useState, type FormEvent } from "react";
import PrimaryButton from "./PrimaryButton";

const AuthForm = ({
  inputs,
  submitData,
  loading,
  error,
  btnText,
}: FormProps) => {
  const [data, setData] = useState<Record<string, string | File>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitData(data);
  };

  return (
    <Form
      className="d-flex flex-column w-100 gap-4 w-476"
      onSubmit={handleSubmit}
    >
      <Row className="p-0 g-3">
        {inputs.map((input) =>
          input.row ? (
            <Row className="p-0 m-0 g-3" key={input.name}>
              <Form.Group as={Col} controlId={input.name}>
                <Form.Label>{input.label}</Form.Label>
                <Form.Control
                  required
                  type={input.type}
                  placeholder={input.placeholder}
                  className="py-2"
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    const value =
                      input.type === "file"
                        ? target.files?.[0] ?? ""
                        : target.value;

                    setData((prev) => ({
                      ...prev,
                      [input.name]: value,
                    }));
                  }}
                  disabled={loading}
                />
              </Form.Group>
            </Row>
          ) : (
            <Form.Group
              as={Col}
              controlId={input.name}
              key={input.name}
              className="align-self-end w-full"
            >
              <Form.Label>{input.label}</Form.Label>
              <Form.Control
                required
                type={input.type}
                placeholder={input.placeholder}
                className="py-2"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  const value =
                    input.type === "file"
                      ? target.files?.[0] ?? ""
                      : target.value;

                  setData((prev) => ({
                    ...prev,
                    [input.name]: value,
                  }));
                }}
                disabled={loading}
              />
            </Form.Group>
          )
        )}
      </Row>
      {error && <p className="text-danger">{error}</p>}

      <PrimaryButton text={btnText} type="submit" disabled={loading} />
    </Form>
  );
};

export default AuthForm;
