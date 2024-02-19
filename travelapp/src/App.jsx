import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdmLogin from "./pages/Admin/AdminLogin";
import UserLogin from "./pages/User/UserLogin";
import UserSignUp from "./pages/USER/UserSignup";

import PostAccommodation from "./pages/Accommodation/PostAccommodation";
import PostRestaurant from "./pages/Restaurant/PostRestaurant";
import PostPackage from "./pages/Package/PostPackage";
import ListAccommodation from "./pages/Accommodation/ListAccommodation";
import ListRestaurant from "./pages/Restaurant/ListRestaurant";
import ListTravelPackage from "./pages/Package/ListPackage";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/*login*/}
        <Route path="/admin/login" element={<AdmLogin />} />
        <Route path="/login" element={<UserLogin />} />

        {/*signup*/}
        <Route path="/signup" element={<UserSignUp />} />

        {/*post---------------------------*/}
        <Route path="/add-accommodation" element={<PostAccommodation />} />
        <Route path="/edit-accommodation/:id" element={<PostAccommodation />} />
        <Route path="/add-restaurant" element={<PostRestaurant />} />
        <Route path="/edit-restaurant/:id" element={<PostRestaurant />} />
        <Route path="/add-package" element={<PostPackage />} />
        <Route path="/edit-package/:id" element={<PostPackage />} />
        {/*list---------------------------*/}
        <Route path="/accommodation" element={<ListAccommodation />} />
        <Route path="/restaurant" element={<ListRestaurant />} />
        <Route path="/package" element={<ListTravelPackage />} />
      </Routes>
    </>
  );
};
export default App;
