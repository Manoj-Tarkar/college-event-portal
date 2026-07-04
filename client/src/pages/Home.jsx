import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

function Home() {
  return (
    <div>
      <Navbar />

      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-5xl font-bold text-blue-700">
          Discover College Events
        </h2>

        <p className="mt-5 text-gray-600 text-lg">
          Join hackathons, workshops, seminars and cultural fests.
        </p>

        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-8 hover:bg-blue-800">
          Explore Events
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 p-10">
        <EventCard
          title="Hackathon 2026"
          desc="National Level Coding Competition"
        />

        <EventCard
          title="AI Workshop"
          desc="Learn AI with Industry Mentors"
        />

        <EventCard
          title="Cultural Fest"
          desc="Dance, Music and Fun Events"
        />
      </section>

      <Footer />
    </div>
  );
}

export default Home;