import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    try {
      const res = await API.get("/events");
      const selected = res.data.find((e) => e._id === id);
      setEvent(selected);
    } catch (err) {
      console.log(err);
    }
  };

  const registerEvent = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.post("/registrations", {
        userId: user.id,
        eventId: event._id,
      });

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  if (!event) {
    return <h2 className="text-center mt-20">Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden w-[700px]">

          {/* Event Image */}
          {event.image && (
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-80 object-cover"
            />
          )}

          <div className="p-8">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              {event.title}
            </h1>

            <p className="text-gray-700 mb-6">
              {event.description}
            </p>

            <p className="mb-3 text-lg">
              📅 <strong>Date:</strong> {event.date}
            </p>

            <p className="mb-6 text-lg">
              📍 <strong>Venue:</strong> {event.venue}
            </p>

            <button
              onClick={registerEvent}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Register Now
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default EventDetails;