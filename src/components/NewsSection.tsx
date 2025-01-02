import React from "react";

export const NewsSection = () => {
  return (
    <div className="bg-[#1a1f2c] text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-[#4a9eed] text-center mb-8">
          Pakistan Welfare Association Updates
        </h2>
        
        <div className="space-y-8">
          <section className="bg-[#1e2430] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#4a9eed] mb-4">What we've been doing</h3>
            <p className="text-gray-300 mb-4">
              Brother Sajid has resigned and a new Committee was formally created. We would like to thank brother Sajid for his previous efforts, and he will continue helping the Committee where possible in an informal capacity.
            </p>
            <p className="text-gray-300 mb-4">
              New Committee, terms and conditions, and registration, formalise roles for Collectors Responsibilities
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">New Committee as of December 2023</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Chairperson: Anjum Riaz & Habib Mushtaq</li>
                <li>Secretary: Tariq Majid</li>
                <li>Treasurer: Faizan Qadiri</li>
              </ul>
            </div>
            <p className="text-gray-300 mt-4">Terms have been updated.</p>
            <p className="text-gray-300 mt-4">Website has been created and coded by Zaheer Asghar</p>
          </section>

          <section className="bg-[#1e2430] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#4a9eed] mb-4">What we expect</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>All members have been given membership numbers. Please contact your collector to find this out.</li>
              <li>Please login individually and fill in required data.</li>
              <li>We expect timely payments that are up to date.</li>
              <li>Collectors who are timely and up to date, thank you, and please continue with your efforts.</li>
              <li>Those not up to date, please find out your membership number from your collector, then please login online and make payment as soon as possible.</li>
              <li>If payments are not up to date then you will not be covered.</li>
            </ul>
          </section>

          <section className="bg-[#1e2430] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#4a9eed] mb-4">Important Information</h3>
            <div className="text-gray-300 space-y-4">
              <p>Trialled so far online payment using Stripe - not enough uptake, sidelined for possible future use.</p>
              <p>Check with your collector if payments up to date, if not up to date YOU ARE NOT COVERED! The responsibility to pay is on the member, not the Collector.</p>
              <p>Unfortunately we are not taking on new members. So if Collectors are in arrears, they will be given deadlines to clear arrears. After this deadline you will no longer be considered to be a member of Pakistan Welfare Committee, and currently we are not taking any more members on so you will be advised to join another Committee if they are willing to take new members.</p>
              <p>Only members who become of age will be added as new members.</p>
              <p>We humbly request everyone keeps their payments up to date, the best method is to pay directly here.</p>
              <p>If there are members in the community that feel they can assist in a voluntary capacity to improve aspects of the processes involved, please get in touch with the Committee.</p>
            </div>
          </section>

          <section className="bg-[#1e2430] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#4a9eed] mb-4">Medical Examiner Process</h3>
            <div className="text-gray-300 space-y-4">
              <p>To understand our comprehensive Medical Examiner Death Certification process, please review our detailed Medical Examiner Flow Chart.</p>
              <p>This flow chart provides a step-by-step guide to the death certification process, ensuring transparency and clarity for all members.</p>
              <button className="text-[#4a9eed] hover:underline">View Flow Chart</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};