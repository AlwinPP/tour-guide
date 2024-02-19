import { Input, Button } from "antd";
import { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./admin-login.css";

const AdmLogin = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", password: "" });

  const onChange = (e, key) => {
    setCred({ ...cred, [key]: e.target.value });
  };

  const loginAdmin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/login",
        credtwo
      );
      const { token, userId, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);

      navigate("/admin");
    } catch (e) {
      console.log(e);
      toast.error("Login failed. Please check your credentials.");
    }
  };
  const onClick = () => {
    loginAdmin();
  };

  return (
    <div className="admin-main">
      <ToastContainer position="top-center" />
      <div
        className="login"
        style={{ backgroundColor: " orange", color: "black" }}
      >
        <h1>Admin Login</h1>
        <label>email</label>
        <Input onChange={(e) => onChange(e, "email")} />
        <label>password</label>
        <Input.Password onChange={(e) => onChange(e, "password")} />
        <div className="login-btn">
          <Button onClick={loginAdmin} type="primary">
            Submit
          </Button>
        </div>
        <p
          style={{
            fontSize: "medium",
            textDecoration: "underline",
            color: "black",
            cursor: "pointer",
          }}
        >
          <NavLink to="/login">User Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default AdmLogin;
