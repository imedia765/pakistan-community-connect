import React from "react";
import { Hero } from "../components/Hero";
import { CommitteeSection } from "../components/CommitteeSection";
import { NewsSection } from "../components/NewsSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <CommitteeSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;