import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Problem from "./components/Problem.jsx";
import Features from "./components/Features.jsx";
import Curriculum from "./components/Curriculum.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Flywheel from "./components/Flywheel.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
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
        {/* <Curriculum /> */}
        {/* <HowItWorks /> */}
        {/* <Flywheel /> */}
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

