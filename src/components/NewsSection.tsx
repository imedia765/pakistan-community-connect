import React from "react";
import { Button } from "./ui/button";

export const NewsSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a1f2c] to-[#151821] text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#4a9eed] to-[#63b3ff] text-transparent bg-clip-text text-center mb-12">
          Pakistan Welfare Association Updates
        </h2>
        
        <div className="space-y-8">
          <section className="bg-gradient-to-br from-[#1e2430] to-[#252b3b] p-8 rounded-xl shadow-lg border border-[#2a3040]">
            <h3 className="text-2xl font-semibold text-[#4a9eed] mb-6">What we've been doing</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Brother Sajid has resigned and a new Committee was formally created. We would like to thank brother Sajid for his previous efforts, and he will continue helping the Committee where possible in an informal capacity.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-4 text-[#4a9eed]">New Committee as of December 2023</h4>
              <ul className="list-none space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-[#4a9eed]">•</span>
                  <span>Chairperson: Anjum Riaz & Habib Mushtaq</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#4a9eed]">•</span>
                  <span>Secretary: Tariq Majid</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#4a9eed]">•</span>
                  <span>Treasurer: Faizan Qadiri</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1e2430] to-[#252b3b] p-8 rounded-xl shadow-lg border border-[#2a3040]">
            <h3 className="text-2xl font-semibold text-[#4a9eed] mb-6">What we expect</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-[#4a9eed] mt-1">•</span>
                <span>All members have been given membership numbers. Please contact your collector to find this out.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#4a9eed] mt-1">•</span>
                <span>Please login individually and fill in required data.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#4a9eed] mt-1">•</span>
                <span>We expect timely payments that are up to date.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#4a9eed] mt-1">•</span>
                <span>If payments are not up to date then you will not be covered.</span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#1e2430] to-[#252b3b] p-8 rounded-xl shadow-lg border border-[#2a3040]">
            <h3 className="text-2xl font-semibold text-[#4a9eed] mb-6">Medical Examiner Process</h3>
            <div className="text-gray-300 space-y-4">
              <p>To understand our comprehensive Medical Examiner Death Certification process, please review our detailed Medical Examiner Flow Chart.</p>
              <p>This flow chart provides a step-by-step guide to the death certification process, ensuring transparency and clarity for all members.</p>
              <Button variant="default" className="bg-gradient-to-r from-[#4a9eed] to-[#3a8edd] hover:from-[#3a8edd] hover:to-[#2a7ecd] mt-4">
                View Flow Chart
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};