import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
            Student Registration
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
          />

          <button className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800">
            Register
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;