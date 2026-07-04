import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          All Events
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white shadow-lg rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold">
                {event.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {event.description}
              </p>

              <p className="mt-3">
                📅 {event.date}
              </p>

              <p>
                📍 {event.venue}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Events;