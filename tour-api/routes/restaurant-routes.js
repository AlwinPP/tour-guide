// import express from "express";
// import Restaurant from "../db/Schema/restaurantSchema.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// //Restaurant signup----------------------------------------------------------------------------------------------------------------------------------
// router.post("/restaurant/sign-up", async (req, res) => {
//   try {
//     const body = req.body;

//     const restaurant = await Restaurant.findOne({ username: body.username });
//     if (restaurant) {
//       return res.status(409).json({ message: "Username already taken" });
//     }

//     if (body.password != body.confirmPassword) {
//       return res.status(403).json({ message: "Password dont match" });
//     }
//     const hashedPassword = await bcrypt.hash(body.password, 2);
//     body.password = hashedPassword;

//     const doc = await Restaurant.create(body);
//     res.status(201).json({ message: "Signed up successfully" });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// //Restaurant login--------------------------------------------------------------------------------------------------------------------------
// router.post("/restaurant/login", async (req, res) => {
//   try {
//     const body = req.body;
//     const restaurant = await Restaurant.findOne({ username: body.username });
//     if (!restaurant) {
//       return res
//         .status(401)
//         .json({ message: "Username or Password incorrect" });
//     }

//     const isMatching = await bcrypt.compare(body.password, restaurant.password);
//     if (!isMatching) {
//       return res
//         .status(401)
//         .json({ message: "Username or Password incorrect" });
//     }

//     const token = jwt.sign(
//       { id: restaurant._id, role: "Restaurant" },
//       "weuqgeihrhkdfksbvakdvlakejeqoidoihmvbccqfbifboifabhvbakhdjvfkhsbbdsb",
//       { expiresIn: "7d" }
//     );
//     return res
//       .status(200)
//       .json({ message: "Login Successfull", token: token, id: restaurant._id });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });
// router.get("/restaurant", async (req, res) => {
//   try {
//     const restaurants = await Restaurant.find();
//     res.status(200).json(restaurants);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.patch("/restaurant/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const body = req.body;

//     const data = await Restaurant.findByIdAndUpdate(id, body);

//     res.json({ message: "Resource updated successfully" });
//   } catch {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.delete("/restaurant/id", async (req, res) => {
//   try {
//     await Restaurant.findByIdAndDelete({ _id: req.params.id });
//     res.status(200).json("restaurant");
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.get("/restaurant/:id", async (req, res) => {
//   const id = req.params.id;
//   const restaurants = await Restaurant.findById(id);
//   res.json(restaurants);
// });

// export default router;
