import React from "react";

export const Hero = () => {
  return (
    <div className="bg-primary text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Pakistan Welfare Association
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Welcome to our community platform. Stay updated with the latest news and information.
        </p>
        <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
          Member Login
        </button>
      </div>
    </div>
  );
};