import Header from "../../../components/Header";
import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import axios from "../../utils/axiosinstance.js";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./listres.css";

const ListRestaurant = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate([]);

  const getRestaurant = async () => {
    const response = await axios.get("/restaurant");
    setItems(response.data);
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  const onDeleteRestaurant = async (id) => {
    try {
      await axios.delete(`/restaurant/${id}`);
      toast.success("Item deleted successfully");
      getRestaurant();
    } catch (e) {
      toast.errorI(e.message);
    }
  };

  const onEditRestaurant = (id) => {
    navigate(`/edit-restaurant/${id}`);
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
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (data) => <img className="table-img" src={data} />,
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
          onClick={() => onEditRestaurant(id)}
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
          onClick={() => onDeleteRestaurant(id)}
          style={{ fontSize: "16px", color: "#08c", cursor: "pointer" }}
        />
      ),
    },
  ];
  return (
    <div className="list-restaurant">
      <ToastContainer />
      <Header text="Restaurant" />
      <div className="add-restaurant">
        <Button
          onClick={() => navigate("/add-restaurant")}
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
export default ListRestaurant;
