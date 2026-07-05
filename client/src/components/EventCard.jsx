import { Link } from "react-router-dom";

function EventCard({ title, desc }) {
  return (
    <div className="shadow-lg rounded-xl p-6 bg-white">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-gray-600">{desc}</p>

      <Link
        to="/events"
        className="inline-block mt-5 bg-blue-700 text-white px-4 py-2 rounded"
      >
        View Events
      </Link>
    </div>
  );
}

export default EventCard;