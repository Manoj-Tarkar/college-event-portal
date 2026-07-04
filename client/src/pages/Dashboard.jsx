import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEvent = async (id) => {
  try {
    await API.delete(`/events/${id}`);

    alert("Event Deleted");

    loadEvents();
  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
      <Navbar />

      <div className="p-10 min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Admin Dashboard
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold">
            Total Events : {events.length}
          </h2>
        </div>

        <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-blue-700 text-white">
  <tr>
    <th className="p-4">Title</th>
    <th>Date</th>
    <th>Venue</th>
    <th>Action</th>
  </tr>
</thead>
           
           


          <tbody>
            {events.map((event) => (
              <tr key={event._id} className="border-b">
  <td className="p-4">{event.title}</td>
  <td>{event.date}</td>
  <td>{event.venue}</td>

  <td>
    <button
      onClick={() => deleteEvent(event._id)}
      className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700"
    >
      Delete
    </button>
  </td>
</tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;