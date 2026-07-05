import Registration from "../models/Registration.js";

// Register for an Event
export const registerEvent = async (req, res) => {
  try {
     console.log(req.body);

    const { userId, eventId } = req.body;
     
    const exists = await Registration.findOne({
      user: userId,
      event: eventId,
    });

    if (exists) {
      return res.status(400).json({
        message: "Already Registered",
      });
    }

    const registration = await Registration.create({
      user: userId,
      event: eventId,
    });

    res.status(201).json({
      message: "Registration Successful",
      registration,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get My Registered Events
export const getMyRegistrations = async (req, res) => {
  try {
    const { userId } = req.params;

    const registrations = await Registration.find({
      user: userId,
    }).populate("event");

    res.status(200).json(registrations);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};