import axios from "axios";
import type { ProductType } from "../interfaces";
import PrimaryButton from "./PrimaryButton";
import { useEffect, useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [imgSrc, setImgSrc] = useState(product.image_url);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    axios
      .delete(`https://dashboard-i552.onrender.com/api/items/${product.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(product.image_url).catch(() => {
      setImgSrc("/assets/images/DefautProductImg.png");
    });
  }, [product]);

  return (
    <>
      <div className="position-relative product-card rounded-4 d-flex align-items-center overflow-hidden">
        <img src={imgSrc} alt="product image" className="h-100 mx-auto" />
        <div className="overly position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-4 p-3">
          <h5 className="text-center mt-3 fs-3">{product.name}</h5>
          <div className="d-flex gap-2">
            <PrimaryButton text="Edit" type="button" />
            <PrimaryButton
              text="Delete"
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
            />
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <>
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-blur bg-opacity-50 z-1 overflow-hidden" />
          <div className="bg-white position-absolute top-50 start-50 z-2 translate-middle p-5 rounded-4 d-flex flex-column align-items-center gap-4">
            <p className="fw-bold fs-4">
              Are you sure you want to delete the product?
            </p>
            <div className="d-flex gap-5">
              <PrimaryButton text="Yes" type="button" onClick={handleDelete} />
              <PrimaryButton
                text="No"
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
