import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ItemForm from "../components/ItemForm";
import type { ItemFormData, ProductType } from "../interfaces";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const EditItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://dashboard-i552.onrender.com/api/items/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setItem(res.data))
      .catch(() => navigate("/products"));
  }, [id, navigate]);

  const submitData = (data: ItemFormData) => {
    setLoading(true);
    setError("");

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("_method", "PUT");

    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    axios
      .post(`https://dashboard-i552.onrender.com/api/items/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => navigate(`/products/${id}`))
      .catch((err) =>
        setError(err?.response?.data?.message || "Update failed.")
      )
      .finally(() => setLoading(false));
  };

  if (!item) return <p>Loading...</p>;

  return (
    <section className="d-flex flex-column w-100 gap-4">
      <span
        className="back-icon fs-3 text-dark rounded-circle border-dark border ratio ratio-1x1"
        onClick={() => navigate(-1)}
      >
        <MdOutlineKeyboardArrowLeft />
      </span>
      <h2 className="fw-bold mt-4">EDIT ITEM</h2>
      <ItemForm
        initialData={{
          name: item.name,
          price: item.price,
          image: item.image_url,
        }}
        submitData={submitData}
        loading={loading}
        error={error}
      />
    </section>
  );
};

export default EditItem;
