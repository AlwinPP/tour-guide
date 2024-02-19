import Navbar from "../../components/Navbar";
import SearchBar from "../../components/Serachbar";
import axios from "axios";
import { Card, Button } from "antd";

import "./home.css";
import { useState } from "react";

const Home = () => {
  const { Meta } = Card;
  // const [package, setPackage] = useState([]);
  // const [accommodation, setAccommodation] = useState([]);
  // const [restaurant, setRestaurant] = useState([]);

  // const getTravelPackage = async () => {
  //   const response = await axios.get("/package");
  //   setPackage(response.data);
  // };
  // const getAccommodation = async () => {
  //   const response = await axios.get("/accommodation");
  //   setAccommodation(response.data);
  // };
  // const getRestaurant = async () => {
  //   const response = await axios.get("/restaurant");
  //   setRestaurant(response.data);
  // };
  // useEffect(() => {
  //   getTravelPackage();
  //   getAccommodation();
  //   getRestaurant();
  // }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="home1">
        <div className="flex">
          <div className="hero_content">
            <div className="hero_subtitle">
              <h1>
                <span className="highlight">KNOW BEFORE YOU GO</span>
              </h1>
              <img src="/world.png" alt="" />
            </div>
            <h1>
              Traveling opens the door to creating
              <span className="highlight">memories</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              sunt accusamus pariatur architecto ab obcaecati fuga enim, aperiam
              vel dolore, voluptate iure commodi culpa earum sequi tempora
              labore qui eum?
            </p>
          </div>
          {/* ----------------- */}
          <div className="img-flex">
            <div className="hero_img-box">
              <img src="/hero-img01.jpg" alt="" />
            </div>
            <div className="hero_img-box mgtop">
              <video src="/hero-video.mp4" alt="" controls />
            </div>
            <div className="hero_img-box mgtop1">
              <img src="/hero-img02.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* ----------------- */}
        <SearchBar />
        {/* ----------------- */}

        <div className="tour-feature">
          <div className="ser">
            <h5 className="service_subtitle">Explore</h5>
            <h2 className="service_title">Our Featured Tours</h2>
            <div className="card">
              {/* <Card
                hoverable
                key={item._id}
                style={{
                  width: 400,
                }}
                cover={
                  <img
                    height={250}
                    alt="example"
                    src={item.Image}
                    crossOrigin="anonymous"
                  />
                }
              >
                <Meta
                  title={<p style={{ textAlign: "center" }}>{item.title}</p>}
                  description={
                    <>
                      <p style={{ textAlign: "center" }}>{item.duration}</p>
                      <h1 style={{ textAlign: "center" }}>${item.price}</h1>
                      <div className="buy-button">
                        <Button
                          style={{
                            width: "100px",
                            height: "35px",
                            background: "#080808",
                            color: "#ffffff",
                          }}
                        >
                          Book Now
                        </Button>
                      </div>
                    </>
                  }
                />
              </Card> */}
            </div>
          </div>
          _
        </div>
        {/* ----------------- */}

        <div className="service">
          <div className="ser">
            <h5 className="service_subtitle">What we serve</h5>
            <h2 className="service_title">We offer our best services</h2>
          </div>
          <hr />

          <Card
            className="service_card"
            hoverable
            style={{ width: 250 }}
            cover={<img className="card_img" alt="" src="/weather.png" />}
          >
            <Meta
              title="Calculate Weather"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </Card>
          <hr />
          <Card
            className="service_card"
            hoverable
            style={{ width: 250 }}
            cover={<img className="card_img" alt="" src="/guide.png" />}
          >
            <Meta
              title="Best Tour Guide"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </Card>
          <hr />
          <Card
            className="service_card"
            hoverable
            style={{ width: 250 }}
            cover={<img className="card_img" alt="" src="/customization.png" />}
          >
            <Meta
              title="Customization"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </Card>
        </div>
        {/* ----------------- */}

        <div className="experience_content">
          <div className="ser">
            <h5 className="service_subtitle">Experience</h5>
            <h2 className="service_title">
              With our all experience
              <br />
              we will serve you
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Natus magni harum corporis accusantium cupiditate
            </p>
          </div>
        </div>
        {/* ----------------- */}
      </div>
    </div>
  );
};

export default Home;
