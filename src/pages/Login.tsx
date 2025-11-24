import { useState } from "react";
import AuthForm from "../components/AuthForm";
import { loginInputs } from "../data/login";
import type { LoginInterface } from "../interfaces";
import axios from "axios";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleData = (data: LoginInterface) => {
    setLoading(true);
    setError("");

    console.log(data);

    axios
      .post("https://dashboard-i552.onrender.com/api/login", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
      })
      .catch((err) => {
        setError(err?.response?.data?.msg || "Login failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthLayout
      title="SIGN IN"
      subTitle="Enter your credentials to access your account"
    >
      <AuthForm
        inputs={loginInputs}
        submitData={handleData}
        loading={loading}
        error={error}
        btnText="SIGN IN"
      />
      <p className="mt-4 mb-0">
        Don't have an account?
        <Link to="/singup" className="text-primary ms-1">
          Create one
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
