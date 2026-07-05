import Event from "../models/Event.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

// Create Event
export const createEvent = async (req, res) => {
  try {
    const { title, description, date, venue } = req.body;

    let imageUrl = "";

    if (req.file) {
      imageUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "college-events" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    }

    const event = await Event.create({
      title,
      description,
      date,
      venue,
      image: imageUrl,
    });

    res.status(201).json({
      message: "Event Created Successfully",
      event,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Event
export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Event
export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);

    res.json({
      message: "Event Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};