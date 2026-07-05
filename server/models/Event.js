import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  venue: String,

  image: {
    type: String,
    default: "",
  },
});

export default mongoose.model("Event", eventSchema);