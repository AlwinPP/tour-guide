// import express from "express";
// import TravelPackage from "../db/Schema/travelpackageSchema.js";
// import Booking from "../db/Schema/BookingSchema/tourPackageBookingSchema.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// //TravelPackage signup----------------------------------------------------------------------------------------------------------------------------------

// router.post("/package/sign-up", async (req, res) => {
//   try {
//     const body = req.body;

//     const travelPackage = await TravelPackage.findOne({
//       username: body.username,
//     });
//     if (travelPackage) {
//       return res.status(409).json({ message: "Username already taken" });
//     }

//     if (body.password != body.confirmPassword) {
//       return res.status(403).json({ message: "Password dont match" });
//     }
//     const hashedPassword = await bcrypt.hash(body.password, 2);
//     body.password = hashedPassword;

//     const doc = await TravelPackage.create(body);
//     res.status(201).json({ message: "Signed up successfully" });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// //TravelPackage login--------------------------------------------------------------------------------------------------------------------------

// router.post("/package/login", async (req, res) => {
//   try {
//     const body = req.body;
//     const travelPackage = await TravelPackage.findOne({
//       username: body.username,
//     });
//     if (!travelPackage) {
//       return res
//         .status(401)
//         .json({ message: "Username or Password incorrect" });
//     }

//     const isMatching = await bcrypt.compare(
//       body.password,
//       travelPackage.password
//     );
//     if (!isMatching) {
//       return res
//         .status(401)
//         .json({ message: "Username or Password incorrect" });
//     }

//     const token = jwt.sign(
//       { id: travelPackage._id, role: "AGENT" },
//       "weuqgeihrhkdfksbvakdvlakejeqoidoihmvbccqfbifboifabhvbakhdjvfkhsbbdsb",
//       { expiresIn: "7d" }
//     );
//     return res.status(200).json({
//       message: "Login Successfull",
//       token: token,
//       id: travelPackage._id,
//     });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.get("/package", async (req, res) => {
//   try {
//     const travelPackages = await TravelPackage.find();
//     res.status(200).json(travelPackages);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.patch("/package/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const body = req.body;

//     const data = await TravelPackage.findByIdAndUpdate(id, body);

//     res.json({ message: "Resource updated successfully" });
//   } catch {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.delete("/package/id", async (req, res) => {
//   try {
//     await TravelPackage.findByIdAndDelete({ _id: req.params.id });
//     res.status(200).json("travelPackage");
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.get("/travelPackage/:id", async (req, res) => {
//   const id = req.params.id;
//   const travelPackages = await TravelPackage.findById(id);
//   res.json(travelPackages);
// });

// router.get("/package/user/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const users = await Booking.find({ travelPackage: id }).populate("user");
//     return res.status(200).json(users);
//   } catch (e) {
//     return res.status(500).json({ message: e.message });
//   }
// });

// export default router;
