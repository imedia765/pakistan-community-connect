import React from "react";

export const NewsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          What we've been doing
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Recent Updates</h3>
              <p className="text-gray-700 mb-4">
                Brother Sajid has resigned and a new Committee was formally created. We would like to thank brother Sajid for his previous efforts, and he will continue helping the Committee where possible in an informal capacity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Important Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>All members have been given membership numbers</li>
                <li>Please login individually and fill in required data</li>
                <li>We expect timely payments that are up to date</li>
                <li>If payments are not up to date then you will not be covered</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};