import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/travel")
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((e) => {
    console.log(e.message);
  });

export default mongoose;
