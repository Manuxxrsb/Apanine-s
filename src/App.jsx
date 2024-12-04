import React from "react";
import Cabeza from "./components/Header";
import Pie from "./components/Footer";
import FeatureCards from "./components/FeatureCards";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";
import DonationSection from "./components/DonationSection";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsSection from "./components/NewsSection";
import CommunitySection from "./components/CommunitySection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Cabeza />
        <main>
          <Hero />
          <FeatureCards />
          <WhySection />
          <DonationSection />
          <TestimonialsSection />
          <NewsSection />

          <CommunitySection />
        </main>
        <Pie />
      </div>
    </>
  );
}

export default App;
