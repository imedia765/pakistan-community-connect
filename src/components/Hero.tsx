import React from "react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="bg-[#1a1f2c] text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#4a9eed]">PWA</h1>
        <Button variant="default" className="bg-[#4a9eed] hover:bg-[#3a8edd]">
          Login
        </Button>
      </div>
    </div>
  );
};