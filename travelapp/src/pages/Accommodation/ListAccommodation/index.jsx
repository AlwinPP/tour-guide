import Header from "../../../components/Header";
import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import axios from "../../utils/axiosinstance.js";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./listacc.css";

const ListAccommodation = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate([]);

  const getAccommodation = async () => {
    const response = await axios.get("/accommodation");
    setItems(response.data);
  };

  useEffect(() => {
    getAccommodation();
  }, []);

  const onDeleteAccommodation = async (id) => {
    try {
      await axios.delete(`/accommodation/${id}`);
      toast.success("Item deleted successfully");
      getAccommodation();
    } catch (e) {
      toast.errorI(e.message);
    }
  };

  const onEditAccommodation = (id) => {
    navigate(`/edit-accommodation/${id}`);
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
          onClick={() => onEditAccommodation(id)}
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
          onClick={() => onDeleteAccommodation(id)}
          style={{ fontSize: "16px", color: "#08c", cursor: "pointer" }}
        />
      ),
    },
  ];
  return (
    <div className="list-accommodation">
      <ToastContainer />
      <Header text="Accommodation" />
      <div className="add-accommodation">
        <Button
          onClick={() => navigate("/add-accommodation")}
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
export default ListAccommodation;
