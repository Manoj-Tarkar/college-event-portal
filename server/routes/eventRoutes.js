import express from "express";
import upload from "../middleware/upload.js";
import {
  createEvent,
  getEvents,
  deleteEvent,
  updateEvent,
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/", upload.single("image"), createEvent);
router.get("/", getEvents);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;