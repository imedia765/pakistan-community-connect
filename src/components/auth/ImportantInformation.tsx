const ImportantInformation = () => {
  return (
    <div className="bg-dashboard-card rounded-lg shadow-lg p-8 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Pakistan Welfare Association</h2>
      <div className="text-sm text-dashboard-muted mb-4">
        Burton Upon Trent<br />
        V.4 December 2024
      </div>
      
      <div className="text-dashboard-text space-y-6">
        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">1. Members Eligibility</h3>
          <p>Only Muslims can be members of Pakistan Welfare Association (PWA).</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">2. Membership Fee</h3>
          <p>Any new members must pay a membership fee plus the collection amount for that calendar year. Currently the membership fee is £150 as of January 2024. This may change with inflation and is reviewed periodically to reflect the costs incurred.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">3. Dependents Registration</h3>
          <p>All members will be given a membership number and will need to register their dependents so that the PWA Committee can gain an accurate picture of the actual number of people covered. Dependents include stepchildren and adopted children.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">4. Health Declaration</h3>
          <p>New members must be in good health, with no known terminal illnesses. Any long-term illnesses must be disclosed to the Committee for consideration during the membership process.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">5. Confidentiality</h3>
          <p>All data is confidentially stored under GDPR rules and will not be shared except for necessary processes when death occurs or for use within PWA.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">6. Payment Terms</h3>
          <p>Payments will need to be made within 28 days from collection date. This will take place annually from 1st January and no later than 29th January. Any non-paying members will have a warning, and have seven days to make payment which is up until 5th February, in this seven day period they are not covered as members and nor are their dependents.</p>
          <p className="mt-2 text-dashboard-warning">Any further nonpayment will result in cancellation of membership, and will have to re-register as a member, and must pay a new membership fee of £150. All costs are reviewed periodically to reflect inflation, changes will be communicated to members via their Collector Members or directly through a communication mechanism.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">8. Registration Requirements</h3>
          <p>Every married man will need to ensure they are registered separately from their parents or guardian.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">Special Cases</h3>
          <p>Unmarried females are not obliged to become members as they will have their membership as part of their parents until they are married following which they will be covered under their husband's membership if he is a member.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">Assistance Offered</h3>
          <p>If a head member of family passes away, a £500 payment is offered to the widow, or orphans under the age of 18 only, in this circumstance if death occurs in Pakistan £1,000 is offered.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-dashboard-accent1 mb-2">Residency Requirements</h3>
          <p>Any member who must live out of East Staffordshire Borough Council (ESBC) for work will still receive full benefits of the association.</p>
        </section>

        <div className="mt-8 pt-4 border-t border-dashboard-cardBorder">
          <p className="text-dashboard-accent3 font-semibold italic">
            By becoming a member of the Pakistan Welfare Association, you agree to abide by these terms and conditions outlined above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantInformation;