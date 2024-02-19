import { Schema, model } from "mongoose";

const tourPackageBookingSchema = Schema({
  tourPackageId: {
    type: Schema.Types.ObjectId,
    ref: "TourPackage",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
 
  // Add more fields as needed (e.g., number of participants, special requests, etc.)
});

const TourPackageBooking = model(
  "TourPackageBooking",
  tourPackageBookingSchema
);

export default TourPackageBooking;
