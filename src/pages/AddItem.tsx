import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { ItemFormData } from "../interfaces";
import axios from "axios";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ItemForm from "../components/ItemForm";

const AddItem = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitData = (data: ItemFormData) => {
    setLoading(true);
    setError("");

    const formData = new FormData();
    for (const key in data) {
      const typedKey = key as keyof typeof data;
      formData.append(key, data[typedKey]);
    }
    console.log("formData", data);

    axios
      .post("https://dashboard-i552.onrender.com/api/items", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        navigate("/products");
      })
      .catch((err) => {
        setError(err?.response?.data?.message || "Add item failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="d-flex flex-column w-100 gap-4">
      <span
        className="back-icon fs-3 text-dark rounded-circle border-dark border ratio ratio-1x1"
        onClick={() => navigate(-1)}
      >
        <MdOutlineKeyboardArrowLeft />
      </span>
      <h2 className="fw-bold mt-4">ADD NEW ITEM</h2>
      <ItemForm submitData={submitData} loading={loading} error={error} />
    </section>
  );
};

export default AddItem;
