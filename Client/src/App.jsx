import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
