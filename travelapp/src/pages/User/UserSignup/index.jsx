import { Input, Button } from "antd";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Info from "../../../components/Info";

import "./usersignup.css";

const UserSignUp = () => {
  const navigate = useNavigate();

  const [cred, setCred] = useState({ username: "", email: "", password: "" });

  const onChange = (e, key) => {
    setCred({ ...cred, [key]: e.target.value });
  };
  const onSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signup", cred);

      navigate("/login");
    } catch (e) {
      toast.error("Username or email already exists");
    }
  };
  return (
    <div className="main">
      <ToastContainer position="top-center" />
      <div>
        <div className="login">
          <h1>Sign Up</h1>
          <label>username</label>
          <Input onChange={(e) => onChange(e, "username")} />
          <label>email</label>
          <Input onChange={(e) => onChange(e, "email")} />
          <label>password</label>
          <Input.Password onChange={(e) => onChange(e, "password")} />
          <div className="login-btn">
            <Button onClick={onSubmit} type="primary">
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
            <NavLink to="/login">Have an account ?</NavLink>
          </p>
        </div>
        <Info />
      </div>
    </div>
  );
};

export default UserSignUp;
