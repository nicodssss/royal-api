import express from "express";
import { getTactics } from "../controllers/tacticsController.js";

const router = express.Router();

router.get("/tactics", getTactics);

export default router;
