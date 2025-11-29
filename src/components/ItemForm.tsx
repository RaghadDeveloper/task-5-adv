import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import PrimaryButton from "./PrimaryButton";
import type { ItemFormData, ItemFormProps } from "../interfaces";
import { BsCloudUpload } from "react-icons/bs";

const ItemForm = ({
  initialData,
  submitData,
  loading,
  error,
}: ItemFormProps) => {
  const [data, setData] = useState<ItemFormData>({
    name: initialData?.name ?? "",
    price: initialData?.price ?? "",
    image: "",
  });
  const [preview, setPreview] = useState<string | null>(
    initialData?.image ?? null
  );

  console.log("initialData", initialData);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitData(data);
  };

  return (
    <Form className="row-gap-5" onSubmit={handleSubmit}>
      <Row>
        <Col md={6} className="d-flex flex-column gap-5">
          <Form.Group className="mb-5" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={data.name}
              placeholder="Enter the product name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              disabled={loading}
              required={!initialData}
            />
          </Form.Group>

          <Form.Group className="" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              value={data.price}
              placeholder="Enter the product price"
              onChange={(e) => setData({ ...data, price: e.target.value })}
              disabled={loading}
              required={!initialData}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
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
              className="custom-file-upload"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              {preview ? (
                <img src={preview} alt="preview" className="preview-img" />
              ) : (
                <>
                  <i className="bi bi-upload" style={{ fontSize: "2rem" }}></i>
                  <BsCloudUpload />
                </>
              )}
            </div>
          </Form.Group>
        </Col>
      </Row>
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="w-100 d-flex justify-content-center mt-5">
        <PrimaryButton type="submit" text="Save" disabled={loading} />
      </div>
    </Form>
  );
};

export default ItemForm;
