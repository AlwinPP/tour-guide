import { Input, Button, Image, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Header from "../../../components/Header";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../utils/axiosinstance.js";

import "./postpack.css";

const PostPackage = () => {
  const navigate = useNavigate([]);

  const { id } = useParams();
  console.log(id);

  const [travelPackage, setPackage] = useState({
    title: "",
    city: "",
    duration: "",
    image: "",
    price: "",
    about: "",
  });

  const fetchPackage = async () => {
    const response = await axios.get(`/package/${id}`);
    console.log(response.data);

    const { title, city, duration, image, price, about } = response.data;

    setPackage(response.data);
  };

  useEffect(() => {
    fetchPackage();
    if (id) {
      fetchPackage();
    }
  }, []);
  const onChange = (e, key) => {
    let value = e.target.value;
    if (key === "price") {
      value = parseFloat(value);
    }
    setPackage({ ...travelPackage, [key]: value });
  };

  const onUploadChange = (info) => {
    if (info.file.status === "done") {
      setPackage({ ...travelPackage, image: info.file.response.url });
    }
  };

  const postPackage = async () => {
    try {
      await axios.post("ttp://localhost:3000/package", travelPackage);
      navigate("/package");
    } catch (e) {}
  };

  const editPackage = async () => {
    try {
      await axios.patch(`/package/${id}`, travelPackage);
      navigate("/package");
    } catch (e) {}
  };
  console.log(travelPackage);

  return (
    <div className="post-travelPackage">
      <Header text={id ? "EDIT PACKAGE" : "ADD PACKAGE"} />
      <div className="travelPackage-form">
        <div className="travelPackage-form-L">
          <div className="travelPackage-input">
            <label>Title</label>
            <Input
              value={travelPackage.title}
              onChange={(e) => onChange(e, "title")}
            />
          </div>
          <div className="travelPackage-input">
            <label>Duration</label>
            <Input
              value={travelPackage.duration}
              onChange={(e) => onChange(e, "duration")}
            />
          </div>
          <div className="travelPackage-input">
            <label>City</label>
            <Input
              value={travelPackage.city}
              onChange={(e) => onChange(e, "city")}
            />
          </div>
          <div className="travelPackage-input">
            <label>Price</label>
            <Input
              value={travelPackage.price}
              type="number"
              onChange={(e) => onChange(e, "price")}
            />
          </div>
        </div>
        <div className="travelPackage-form-R">
          <div className="travelPackage-input">
            <label>About</label>
            <Input.TextArea
              value={travelPackage.description}
              rows={6}
              onChange={(e) => onChange(e, "description")}
            />
          </div>

          <div className="travelPackage-input">
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
              src={travelPackage.image}
            />
          </div>
          <div className="travelPackage-input btn-display">
            <Button
              size="large"
              type="primary"
              onClick={id ? editPackage : postPackage}
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
export default PostPackage;
