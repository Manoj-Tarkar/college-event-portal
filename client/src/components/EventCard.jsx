function EventCard({ title, desc }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="text-gray-600 mt-3">{desc}</p>

      <button className="bg-blue-700 text-white px-4 py-2 rounded mt-5 hover:bg-blue-800">
        Register
      </button>
    </div>
  );
}

export default EventCard;