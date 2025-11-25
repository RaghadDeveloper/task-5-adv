import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ProductType } from "../interfaces";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    axios
      .get("https://dashboard-i552.onrender.com/api/items", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className="w-100">
      <InputGroup className="mb-5 max-w-664 mx-auto ">
        <Form.Control
          placeholder="Search product by name "
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">
          <CiSearch />
        </InputGroup.Text>
      </InputGroup>

      <div className="d-flex justify-content-end mb-5">
        <PrimaryButton text="ADD NEW PRODUCT" type="button" />
      </div>

      <Row className="row-gap-5 align-items-center justify-content-center mb-5">
        {products.map((product) => (
          <Col sm={12} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
