import express from "express";
import Admin from "../db/Schema/adminSchema.js";
import Accommodation from "../db/Schema/accommodationSchema.js";
import Restaurant from "../db/Schema/restaurantSchema.js";
import TravelPackage from "../db/Schema/travelpackageSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
// admin
router.post("/admin/register", async (req, res) => {
  const body = req.body;
  const hashedPassword = await bcrypt.hash(body.password, 2);
  const postAdmin = await Admin.create({
    ...body,
    password: hashedPassword,
  });
  res.status(200).json({ message: "creds added Successfully" });
});

router.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json("Admin not found");
    }
    const passMatch = await bcrypt.compare(password, admin.password);
    if (passMatch) {
      const token = jwt.sign(
        { adminId: admin._id, role: "Admin" },
        process.env.JWT_SECRET
      );
      return res.status(200).json({ token, adminId: admin._id, role: "Admin" });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

//Accommodation

router.get("/accommodation", async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.status(200).json(accommodations);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/accommodation", async (req, res) => {
  try {
    await Accommodation.create(req.body);
    res.status(201).json({ message: "Accommodation added successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.patch("/accommodation/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const data = await Accommodation.findByIdAndUpdate(id, body);

    res.json({ message: "Resource updated successfully" });
  } catch {
    res.status(500).json({ error: e.message });
  }
});

router.delete("/accommodation/:id", async (req, res) => {
  try {
    await Accommodation.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("accommodation");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/accommodation/:id", async (req, res) => {
  const id = req.params.id;
  const accommodations = await Accommodation.findById(id);
  res.json(accommodations);
});

//Restaurents

router.get("/restaurant", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/restaurant", async (req, res) => {
  try {
    await Restaurant.create(req.body);
    res.status(201).json({ message: "Restaurant added successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.patch("/restaurant/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const data = await Restaurant.findByIdAndUpdate(id, body);

    res.json({ message: "Resource updated successfully" });
  } catch {
    res.status(500).json({ error: e.message });
  }
});

router.delete("/restaurant/:id", async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("restaurant deleted");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/restaurant/:id", async (req, res) => {
  const id = req.params.id;
  const restaurants = await Restaurant.findById(id);
  res.json(restaurants);
});

//TravelPackage

router.get("/package", async (req, res) => {
  try {
    const packages = await TravelPackage.find();
    res.status(200).json(packages);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/package", async (req, res) => {
  try {
    await TravelPackage.create(req.body);
    res.status(201).json({ message: "TravelPackage added successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.patch("/package/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const data = await TravelPackage.findByIdAndUpdate(id, body);

    res.json({ message: "Resource updated successfully" });
  } catch {
    res.status(500).json({ error: e.message });
  }
});

router.delete("/package/:id", async (req, res) => {
  try {
    await TravelPackage.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("package");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/package/:id", async (req, res) => {
  const id = req.params.id;
  const packages = await TravelPackage.findById(id);
  res.json(packages);
});

export default router;
