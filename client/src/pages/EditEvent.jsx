import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    try {
      const res = await API.get("/events");
      const event = res.data.find((e) => e._id === id);

      if (event) {
        setTitle(event.title);
        setDescription(event.description);
        setDate(event.date);
        setVenue(event.venue);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateEvent = async () => {
    try {
      await API.put(`/events/${id}`, {
        title,
        description,
        date,
        venue,
      });

      alert("Event Updated Successfully");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">

          <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
            Edit Event
          </h2>

          <input
            type="text"
            placeholder="Title"
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
            className="w-full border p-3 rounded mb-6"
          />

          <button
            onClick={updateEvent}
            className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
          >
            Update Event
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default EditEvent;