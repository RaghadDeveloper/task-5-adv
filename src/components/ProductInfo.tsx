import { Col } from "react-bootstrap";
import type { ProductInfoProps } from "../interfaces";

const ProductInfo = ({ label, value }: ProductInfoProps) => {
  return (
    <Col className="d-flex justify-content-center align-items-center gap-3 mx-5">
      <h3 className="fw-bolder fs-1 text-nowrap">{label}</h3>
      <p className="fs-4 text-gray-medium m-0">{value}</p>
    </Col>
  );
};

export default ProductInfo;
