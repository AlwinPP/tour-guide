import "./navbar.css";
import { Container, Row, Button } from "reactstrap";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <Container>
        <Row>
          <div className="nav_wrapper">
            {/*======logo======*/}
            <div className="logo">
              <img src="/logo.png" alt="" />
            </div>
            {/*======logo end======*/} {/*=====menu======*/}
            <div className="navigation"></div>
            <div className="menu ">
              <a href="/">Home</a>
              <a href="/package">Tour</a>
              <a href="/accommodation">Accommodation</a>
              <a href="/restaurant">Restaurant</a>
            </div>
            {/*=====menu end=====*/}
            {/*=======btn======*/}
            <div className="nav-right">
              <div className="nav-btn">
                <Button className="secondary__btn">
                  <a href="/login">Login</a>
                </Button>
                <Button className="primary__btn">
                  <a href="/signup">Signup</a>
                </Button>
              </div>
              <span className="mobile_menu">
                <i class="fa-solid fa-bars"></i>
              </span>
            </div>
            {/*=======btn end======*/}
          </div>
        </Row>
      </Container>
    </navbar>
  );
};

export default Navbar;
