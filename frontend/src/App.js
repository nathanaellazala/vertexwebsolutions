import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ServicesOverview from "./components/ServicesOverview";
import PackageDeal from "./components/PackageDeal";
import AIReceptionistDeepDive from "./components/AIReceptionistDeepDive";
import WebsiteDeepDive from "./components/WebsiteDeepDive";
import SocialMediaDeepDive from "./components/SocialMediaDeepDive";
import IndustriesGrid from "./components/IndustriesGrid";
import WhyVertex from "./components/WhyVertex";
import Testimonials from "./components/Testimonials";
import InteractiveDemo from "./components/InteractiveDemo";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

const Landing = () => {
  return (
    <div className="relative" data-testid="landing-page">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesOverview />
        <PackageDeal />
        <AIReceptionistDeepDive />
        <WebsiteDeepDive />
        <SocialMediaDeepDive />
        <IndustriesGrid />
        <WhyVertex />
        <Testimonials />
        <InteractiveDemo />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
