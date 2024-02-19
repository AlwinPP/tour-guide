import { Schema, model } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String,
     require: true,
      unique: true,
     },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

export default User;
