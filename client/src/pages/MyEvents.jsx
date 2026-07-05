import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";

function MyEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadMyEvents();
  }, []);

  const loadMyEvents = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.get(`/registrations/${user.id}`);

      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          My Registered Events
        </h1>

        {events.length === 0 ? (
          <h2 className="text-center text-gray-500">
            No Events Registered Yet
          </h2>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-lg rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold">
                  {item.event.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  {item.event.description}
                </p>

                <p className="mt-3">
                  📅 {item.event.date}
                </p>

                <p>
                  📍 {item.event.venue}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default MyEvents;