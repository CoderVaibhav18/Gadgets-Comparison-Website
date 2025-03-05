import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { userContextData } from "../context/userContext";

const Home = () => {
  const { user } = useContext(userContextData);
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
