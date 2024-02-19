// import express from "express";
// import Accommodation from "../db/Schema/accommodationSchema.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// //Accommodation signup----------------------------------------------------------------------------------------------------------------------------------
// router.post("/accommodation/sign-up", async (req, res) => {
//   try {
//     const body = req.body;

//     const accommodation = await Accommodation.findOne({
//       username: body.username,
//     });
//     if (accommodation) {
//       return res.status(409).json({ message: "Username already taken" });
//     }

//     if (body.password != body.confirmPassword) {
//       return res.status(403).json({ message: "Password dont match" });
//     }
//     const hashedPassword = await bcrypt.hash(body.password, 2);
//     body.password = hashedPassword;

//     const doc = await Accommodation.create(body);
//     res.status(201).json({ message: "Signed up successfully" });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// //Accommodation login--------------------------------------------------------------------------------------------------------------------------
// router.post("/accommodation/login", async (req, res) => {
//   try {
//     const body = req.body;
//     const accommodation = await Accommodation.findOne({
//       username: body.username,
//     });
//     if (!accommodation) {
//       return res
//         .status(401)
//         .json({ message: "Username or Password incorrect" });
//     }

//     const isMatching = await bcrypt.compare(
//       body.password,
//       accommodation.password
//     );
//     if (!isMatching) {
//       return res
//         .status(401)
//         .json({ message: "Username or Password incorrect" });
//     }

//     const token = jwt.sign(
//       { id: accommodation._id, role: "Accommodation" },
//       "weuqgeihrhkdfksbvakdvlakejeqoidoihmvbccqfbifboifabhvbakhdjvfkhsbbdsb",
//       { expiresIn: "7d" }
//     );
//     return res.status(200).json({
//       message: "Login Successfull",
//       token: token,
//       id: accommodation._id,
//     });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.get("/accommodation", async (req, res) => {
//   try {
//     const accommodations = await Accommodation.find();
//     res.status(200).json(accommodations);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.patch("/accommodation/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const body = req.body;

//     const data = await Accommodation.findByIdAndUpdate(id, body);

//     res.json({ message: "Resource updated successfully" });
//   } catch {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.delete("/accommodation/id", async (req, res) => {
//   try {
//     await Accommodation.findByIdAndDelete({ _id: req.params.id });
//     res.status(200).json("accommodation");
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// router.get("/accommodation/:id", async (req, res) => {
//   const id = req.params.id;
//   const accommodations = await Accommodation.findById(id);
//   res.json(accommodations);
// });

// export default router;
