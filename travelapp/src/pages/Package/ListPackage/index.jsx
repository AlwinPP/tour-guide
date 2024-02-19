import Header from "../../../components/Header";
import { Table, Button } from "antd";
import Card from "../../../components/Card";
import { useEffect, useState } from "react";
import axios from "../../utils/axiosinstance.js";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./listpack.css";

const ListTravelPackage = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate([]);

  const getTravelPackage = async () => {
    const response = await axios.get("/package");
    setItems(response.data);
  };

  useEffect(() => {
    getTravelPackage();
  }, []);

  const onDeleteTravelPackage = async (id) => {
    try {
      await axios.delete(`/package/${id}`);
      toast.success("Item deleted successfully");
      getTravelPackage();
    } catch (e) {
      toast.errorI(e.message);
    }
  };

  const onEditTravelPackage = (id) => {
    navigate(`/edit-package/${id}`);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (id) => <p style={{ color: "blue" }}>{id}</p>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (data) => <img className="table-img" src={data} />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "About",
      dataIndex: "about",
      key: "about",
    },

    {
      title: "Edit",
      dataIndex: "_id",
      key: "edit",
      render: (id) => (
        <EditOutlined
          onClick={() => onEditTravelPackage(id)}
          style={{ fontSize: "16px", color: "blue", cursor: "pointer" }}
        />
      ),
    },
    {
      title: "Delete",
      dataIndex: "_id",
      key: "delete",
      render: (id) => (
        <DeleteOutlined
          onClick={() => onDeleteTravelPackage(id)}
          style={{ fontSize: "16px", color: "#08c", cursor: "pointer" }}
        />
      ),
    },
  ];
  return (
    <div className="list-package">
      <ToastContainer />
      <Header text="TravelPackage" />
      <div className="add-package">
        <Button
          onClick={() => navigate("/add-package")}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          ADD
        </Button>
      </div>
      <div className="table-div">
        <Table columns={columns} dataSource={items} />
      </div>
    </div>
  );
};
export default ListTravelPackage;
