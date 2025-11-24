import type { ProductType } from "../interfaces";
import PrimaryButton from "./PrimaryButton";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="position-relative product-card rounded-4 d-flex align-items-center overflow-hidden">
      <img src={product.image_url} alt="" className="h-100 mx-auto" />
      <div className="overly position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-4 p-3">
        <h5 className="text-center mt-3 fs-3">{product.name}</h5>
        <div className="d-flex gap-2">
          <PrimaryButton text="Edit" type="button" />
          <PrimaryButton text="Delete" type="button" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
