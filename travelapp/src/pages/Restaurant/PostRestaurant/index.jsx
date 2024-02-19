import { Input, Button, Image, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Header from "../../../components/Header";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../utils/axiosinstance.js";

import "./postres.css";

const PostRestaurant = () => {
  const navigate = useNavigate([]);

  const { id } = useParams();
  console.log(id);

  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    location: "",
    image: "",
    about: "",
  });

  const fetchRestaurant = async () => {
    const response = await axios.get(`/restaurant/${id}`);
    console.log(response.data);

    const { name, type, location, image, about } = response.data;

    setRestaurant(response.data);
  };

  useEffect(() => {
    fetchRestaurant();
    if (id) {
      fetchRestaurant();
    }
  }, []);

  const onChange = (e, key) => {
    let value = e.target.value;
    if (key === "type") {
      value = parseFloat(value);
    }
    setRestaurant({ ...restaurant, [key]: value });
  };

  const onUploadChange = (info) => {
    if (info.file.status === "done") {
      setRestaurant({ ...restaurant, image: info.file.response.url });
    }
  };

  const postRestaurant = async () => {
    try {
      await axios.post(`/restaurant/${id}`, restaurant);
      navigate("/restaurant");
    } catch (e) {}
  };

  const editRestaurant = async () => {
    try {
      await axios.patch(`/restaurant/${id}`, restaurant);
      navigate("/restaurant");
    } catch (e) {}
  };
  console.log(restaurant);

  return (
    <div className="post-restaurant">
      <Header text={id ? "EDIT RESTAURANT" : "ADD RESTAURANT"} />
      <div className="restaurant-form">
        <div className="restaurant-form-L">
          <div className="restaurant-input">
            <label>Name</label>
            <Input
              value={restaurant.name}
              onChange={(e) => onChange(e, "name")}
            />
          </div>
          <div className="restaurant-input">
            <label>Type</label>
            <Input
              value={restaurant.type}
              onChange={(e) => onChange(e, "type")}
            />
          </div>
          <div className="restaurant-input">
            <label>Location</label>
            <Input.TextArea
              value={restaurant.location}
              rows={6}
              onChange={(e) => onChange(e, "location")}
            />
          </div>
        </div>
        <div className="restaurant-form-R">
          <div className="restaurant-input">
            <label>About</label>
            <Input.TextArea
              value={restaurant.description}
              rows={6}
              onChange={(e) => onChange(e, "description")}
            />
          </div>

          <div className="restaurant-input">
            <label>Image</label>
            <Upload
              name="file"
              action="http://localhost:3000/upload"
              onChange={onUploadChange}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <Image
              className="upload-image"
              width={100}
              src={restaurant.image}
            />
          </div>
          <div className="restaurant-input btn-display">
            <Button
              size="large"
              type="primary"
              onClick={id ? editRestaurant : postRestaurant}
              style={{ width: "fit-content" }}
            >
              {id ? "UPLOAD" : "ADD"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostRestaurant;
