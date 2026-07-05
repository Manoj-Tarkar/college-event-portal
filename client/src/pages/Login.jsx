import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import API from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", {
        email,
        password,
      });

      alert("Login Successful!");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
  "user",
  JSON.stringify(res.data.user)
);

      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
            Student Login
          </h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
          >
            Login
          </button>

          <p className="text-center mt-4 text-gray-600">
            Don't have an account? Register
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;