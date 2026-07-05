import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
 const navigate = useNavigate();
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
      alert("Event Deleted Successfully");
      loadEvents();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Admin Dashboard
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg w-full mb-8"
        />

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-gray-500">Total Events</p>
            <h2 className="text-4xl font-bold text-blue-700">
              {events.length}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-gray-500">Upcoming Events</p>
            <h2 className="text-4xl font-bold text-green-600">
              {events.length}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-gray-500">Registered Users</p>
            <h2 className="text-4xl font-bold text-purple-600">
              1
            </h2>
          </div>

        </div>

        {/* Events Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-700 text-white">

              <tr>
                <th className="p-4">Title</th>
                <th>Date</th>
                <th>Venue</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {filteredEvents.map((event) => (

                <tr
                  key={event._id}
                  className="border-b hover:bg-gray-100"
                >

                  <td className="p-4 font-semibold">
                    {event.title}
                  </td>

                  <td>{event.date}</td>

                  <td>{event.venue}</td>

                  <td className="space-x-2">

                    <button
  onClick={() => navigate(`/edit-event/${event._id}`)}
  className="bg-yellow-500 text-white px-3 py-2 rounded mr-2"
>
  Edit
</button>
                      
                    <button
                      onClick={() => deleteEvent(event._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;