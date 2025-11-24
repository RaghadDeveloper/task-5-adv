import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import AuthLayout from "../components/AuthLayout";
import { useState } from "react";
import axios from "axios";
import { signUpInputs } from "../data/signup";
import type { SignUpInterface } from "../interfaces";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleData = (data: SignUpInterface) => {
    setLoading(true);
    setError("");

    const formData = new FormData();

    formData.append("user_name", `${data.first_name} ${data.last_name}`);
    for (const key in data) {
      const typedKey = key as keyof SignUpInterface;
      if (data[typedKey] !== undefined) {
        formData.append(key, data[typedKey]);
      }
    }

    axios
      .post("https://dashboard-i552.onrender.com/api/register", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
      })
      .catch((err) => {
        setError(
          err?.response?.data?.msg ||
            err?.response?.data?.message ||
            "Register failed."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <AuthLayout
      title="SIGN UP"
      subTitle="Fill in the following fields to create an account."
    >
      <AuthForm
        inputs={signUpInputs}
        submitData={handleData}
        loading={loading}
        error={error}
        btnText="SIGN UP"
      />
      <p className="mt-4 mb-0">
        Do you have an account?
        <Link to="/login" className="text-primary ms-1">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
