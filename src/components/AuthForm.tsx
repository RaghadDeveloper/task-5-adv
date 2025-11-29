import Form from "react-bootstrap/Form";
import type { FormProps } from "../interfaces";
import { Col, Row } from "react-bootstrap";
import { useState, type FormEvent } from "react";
import PrimaryButton from "./PrimaryButton";
import { BsCloudUpload } from "react-icons/bs";

const AuthForm = ({
  inputs,
  submitData,
  loading,
  error,
  btnText,
}: FormProps) => {
  const [data, setData] = useState<Record<string, string | File>>({});
  const [preview, setPreview] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitData(data);
  };

  return (
    <Form
      className="d-flex flex-column w-100 gap-3 w-476"
      onSubmit={handleSubmit}
    >
      <Row className="p-0 g-2">
        {inputs.map((input) =>
          input.row ? (
            input.type === "file" ? (
              <Row className="p-0 m-0" key={input.name}>
                <Form.Group controlId="image" className="mb-3 h-100">
                  <Form.Label>Image</Form.Label>

                  <Form.Control
                    type="file"
                    id="file-upload"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setData({ ...data, image: file ?? "" });

                      if (file) {
                        const url = URL.createObjectURL(file);
                        setPreview(url);
                      }
                    }}
                    disabled={loading}
                  />

                  <div
                    className="custom-file-upload sign-up-img"
                    onClick={() =>
                      document.getElementById("file-upload")?.click()
                    }
                  >
                    {preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        className="preview-img"
                      />
                    ) : (
                      <>
                        <i
                          className="bi bi-upload"
                          style={{ fontSize: "2rem" }}
                        ></i>
                        <BsCloudUpload />
                      </>
                    )}
                  </div>
                </Form.Group>
              </Row>
            ) : (
              <Row className="p-0 m-0 g-2" key={input.name}>
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
            )
          ) : (
            <Form.Group
              as={Col}
              controlId={input.name}
              key={input.name}
              className="align-self-end"
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
