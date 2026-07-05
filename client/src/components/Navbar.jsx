import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">College Event Portal</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>

        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {token && (
          <>
            <Link to="/create-event">Create Event</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/my-events">My Events</Link>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;