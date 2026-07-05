import express from "express";
import {
  registerEvent,
  getMyRegistrations,
} from "../controllers/registrationController.js";

const router = express.Router();

router.post("/", registerEvent);
router.get("/:userId", getMyRegistrations);

export default router;