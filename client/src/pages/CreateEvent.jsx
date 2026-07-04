import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");

  const handleCreate = async () => {
    try {
      await API.post("/events", {
        title,
        description,
        date,
        venue,
      });

      alert("Event Created Successfully!");

      setTitle("");
      setDescription("");
      setDate("");
      setVenue("");
    } catch (err) {
      alert(err.response?.data?.message || "Error creating event");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Create Event
          </h2>

          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <button
            onClick={handleCreate}
            className="w-full bg-blue-700 text-white py-3 rounded"
          >
            Create Event
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateEvent;