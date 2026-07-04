import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">College Event Portal</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
       <button
    onClick={() => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }}
    className="bg-red-500 px-4 py-2 rounded"
  >
    Logout
  </button>

      </div>
    </nav>
  );
}

export default Navbar;