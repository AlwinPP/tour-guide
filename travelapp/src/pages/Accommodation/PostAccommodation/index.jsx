import { Input, Button, Image, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Header from "../../../components/Header";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../utils/axiosinstance.js";

import "./postacc.css";

const PostAccommodation = () => {
  const navigate = useNavigate([]);

  const { id } = useParams();
  console.log(id);

  const [accommodation, setAccommodation] = useState({
    name: "",
    type: "",
    location: "",
    image: "",
    price: "",
    about: "",
    department: "",
  });

  const fetchAccommodation = async () => {
    const response = await axios.get(`/accommodation/${id}`);
    console.log(response.data);

    const { name, type, location, image, price, about, department } =
      response.data;

    setAccommodation(response.data);
  };

  useEffect(() => {
    fetchAccommodation();
    if (id) {
      fetchAccommodation();
    }
  }, []);

  const onChange = (e, key) => {
    let value = e.target.value;
    if (key === "price") {
      value = parseFloat(value);
    }
    setAccommodation({ ...accommodation, [key]: value });
  };

  const onUploadChange = (info) => {
    if (info.file.status === "done") {
      setAccommodation({ ...accommodation, image: info.file.response.url });
    }
  };

  const postAccommodation = async () => {
    try {
      await axios.post(`/accommodation/${id}`, accommodation);
      navigate("/accommodation");
    } catch (e) {}
  };

  const editAccommodation = async () => {
    try {
      await axios.patch(`/accommodation/${id}`, accommodation);
      navigate("/accommodation");
    } catch (e) {}
  };
  console.log(accommodation);

  return (
    <div className="post-accommodation">
      <Header text={id ? "EDIT ACCOMMODATION" : "ADD ACCOMMODATION"} />
      <div className="accommodation-form">
        <div className="accommodation-form-L">
          <div className="accommodation-input">
            <label>Name</label>
            <Input
              value={accommodation.name}
              onChange={(e) => onChange(e, "name")}
            />
          </div>
          <div className="accommodation-input">
            <label>Type</label>
            <Input
              value={accommodation.type}
              onChange={(e) => onChange(e, "type")}
            />
          </div>
          <div className="accommodation-input">
            <label>Location</label>
            <Input.TextArea
              value={accommodation.location}
              rows={6}
              onChange={(e) => onChange(e, "location")}
            />
          </div>
          <div className="accommodation-input">
            <label>Price</label>
            <Input
              value={accommodation.price}
              type="number"
              onChange={(e) => onChange(e, "price")}
            />
          </div>
        </div>
        <div className="accommodation-form-R">
          <div className="accommodation-input">
            <label>About</label>
            <Input.TextArea
              value={accommodation.description}
              rows={6}
              onChange={(e) => onChange(e, "description")}
            />
          </div>

          <div className="accommodation-input">
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
              src={accommodation.image}
            />
          </div>
          <div className="accommodation-input btn-display">
            <Button
              size="large"
              type="primary"
              onClick={id ? editAccommodation : postAccommodation}
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
export default PostAccommodation;
