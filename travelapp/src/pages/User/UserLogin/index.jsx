import { Input, Button } from "antd";
import { useState } from "react";
import axios from "axios";
import Info from "../../../components/Info";
import { useNavigate, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./userlogin.css";

const UserLogin = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({ username: "", password: "" });

  const onChange = (e, key) => {
    setCred({ ...cred, [key]: e.target.value });
  };

  const UserLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", credone);

      const { token, userId, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);
      navigate("/");
    } catch (e) {
      toast.error("Login failed. Please check your credentials.");
    }
  };
  const onClick = () => {
    UserLogin();
  };

  return (
    <div className="main">
      <ToastContainer position="top-center" />
      <div>
        <div className="login">
          <div className="top">
            <h1>Log In</h1>
            <Button className="admin" href="/admin/login" type="primary">
              Admin
            </Button>
          </div>
          <label>email</label>
          <Input onChange={(e) => onChange(e, "email")} />
          <label>password</label>
          <Input.Password onChange={(e) => onChange(e, "password")} />
          <div className="login-btn">
            <Button onClick={UserLogin} type="primary">
              Submit
            </Button>
          </div>
          <p
            style={{
              fontSize: "smaller",
              textDecoration: "underline",
              color: "black",
              cursor: "pointer",
            }}
          >
            <NavLink to="/signup">Don't have an account ?</NavLink>
          </p>
        </div>
        <Info />
      </div>
    </div>
  );
};

export default UserLogin;
