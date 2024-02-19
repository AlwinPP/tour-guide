import { Schema, model } from "mongoose";

const travelPackageSchema = Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
  },
  duration: {
    type: String,
    required: true,
  },
  image: String,
  price: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
});

const TravelPackage = model("TravelPackage", travelPackageSchema);

export default TravelPackage;
