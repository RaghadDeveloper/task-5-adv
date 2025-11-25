import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import PrimaryButton from "./PrimaryButton";
import type { ItemFormData, ItemFormProps } from "../interfaces";

const ItemForm = ({ submitData, loading, error }: ItemFormProps) => {
  const [data, setData] = useState<ItemFormData>({} as ItemFormData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("data form", data);
    submitData(data);
  };

  return (
    <Form className="row-gap-5" onSubmit={handleSubmit}>
      <Row>
        <Col md={6} className="d-flex flex-column gap-5">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the product name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              disabled={loading}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the product price"
              onChange={(e) => setData({ ...data, price: e.target.value })}
              disabled={loading}
              required
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="image" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                setData({ ...data, image: target.files?.[0] ?? "" });
              }}
              disabled={loading}
              required
            />
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
