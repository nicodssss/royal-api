import express from "express";
import { getTactics, createTactic,getPlayerData,getClanData } from "../controllers/tacticsController.js";

const router = express.Router();

router.get("/tactics", getTactics);
router.post("/tactics", createTactic);
router.get("/tactics/player/:tag", getPlayerData);
router.get("/tactics/clan/:tag", getClanData);

export default router;
