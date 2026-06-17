import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Flywheel from "./components/Flywheel.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <main>
        <Problem />
        <Features />
        <HowItWorks />
        <Flywheel />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
