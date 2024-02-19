import "./searchbar.css";
import { CardColumns, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
  //   return <div className="column"></div>;
  return (
    <CardColumns>
      <div className="search_bar">
        <Form className="form">
          <FormGroup className="form_group form_group-fast ">
            <span>
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going" />
            </div>
          </FormGroup>
          <FormGroup className="form_group form_group-fast ">
            <span>
              <i class="fa-solid fa-map-location-dot"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance k/m" />
            </div>
          </FormGroup>
          <FormGroup className="form_group form_group-fast ">
            <span>
              <i class="fa-solid fa-people-group"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="" />
            </div>
          </FormGroup>
          <span className="search_icon" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </Form>
      </div>
    </CardColumns>
  );
};
export default SearchBar;
