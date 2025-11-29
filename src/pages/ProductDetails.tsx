import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { ProductType } from "../interfaces";
import { Row } from "react-bootstrap";
import { formatDate } from "../utils/helpers";
import ProductInfo from "../components/ProductInfo";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType>();

  const imgSrc = product?.image_url || "/assets/images/DefautProductImg.png";

  useEffect(() => {
    axios
      .get(`https://dashboard-i552.onrender.com/api/items/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id, setProduct]);

  return (
    <section className="d-flex flex-column w-100 gap-4 mt-3">
      <span
        className="back-icon fs-3 text-dark rounded-circle border-dark border ratio ratio-1x1"
        onClick={() => navigate(-1)}
      >
        <MdOutlineKeyboardArrowLeft />
      </span>
      <h2 className="fw-bold mt-4">{product?.name}</h2>
      <img src={imgSrc} alt="product image" className="product-img mx-auto" />
      <Row className="d-flex justify-content-center align-items-center gap-5">
        <ProductInfo label="Price:" value={`${product?.price}$`} />
        <ProductInfo
          label="Added at:"
          value={formatDate(product?.created_at || "")}
        />
        <ProductInfo
          label="Updated at:"
          value={formatDate(product?.updated_at || "")}
        />
      </Row>
    </section>
  );
};

export default ProductDetails;
