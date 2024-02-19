import express from "express";
import adminRoutes from "./admin-routes.js";
import imageRoutes from "./image-routes.js";

import userRoutes from "./user-routes.js";

const router = express.Router();
router.use(adminRoutes);
router.use(imageRoutes);

router.use(userRoutes);

export default router;
