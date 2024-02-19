import { Schema, model } from "mongoose";

const accommodationSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["hotel", "other"], // Assuming you may have different types of accommodations
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
});

const Accommodation = model("Accommodation", accommodationSchema);

export default Accommodation;
