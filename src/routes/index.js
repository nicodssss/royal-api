import express from "express";
import { getTactics, createTactic,getPlayerData } from "../controllers/tacticsController.js";

const router = express.Router();

router.get("/tactics", getTactics);
router.post("/tactics", createTactic);
router.get("/tactics/player/:tag", getPlayerData);

export default router;
