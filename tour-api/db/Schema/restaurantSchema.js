import { Schema, model } from "mongoose";

const restaurantSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["veg", "non veg"],
    required: true,
  },
  location: {
    type: String,
  },
  image: String,
  about: {
    type: String,
  },
});

const Restaurant = model("Restaurant", restaurantSchema);

export default Restaurant;
