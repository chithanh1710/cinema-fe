export const revalidate = 9999999;

export const generateMetadata = () => {
  return {
    title: "Operating Regulations - Galaxy Cinema",
    description: "Discover the operating regulations of Galaxy Cinema.",
  };
};

export default function Page() {
  return (
    <section className="container_custom">
      <h1 className="text-3xl font-bold text-center mb-8">
        Operating Regulations
      </h1>

      <div className="space-y-6">
        <p>
          Welcome to Galaxy Cinema`&apos;`s Operating Regulations. These
          regulations govern the use of our cinema services, including ticket
          purchasing, customer conduct, and general policies.
        </p>

        <h2 className="text-2xl font-semibold">
          1. Ticket Purchase and Refunds
        </h2>
        <p>
          All ticket purchases are final, and no refunds will be provided except
          in the event of technical issues or at the discretion of Galaxy
          Cinema. Please ensure the details of your booking are correct before
          completing your purchase.
        </p>

        <h2 className="text-2xl font-semibold">2. Entry to the Cinema</h2>
        <p>
          Please present your valid ticket (either physical or digital) upon
          entry. Galaxy Cinema reserves the right to deny entry to any customer
          without a valid ticket or in violation of our policies.
        </p>

        <h2 className="text-2xl font-semibold">3. Conduct in the Cinema</h2>
        <p>
          We strive to provide a comfortable experience for all guests.
          Disruptive behavior, including excessive noise, use of mobile phones
          during screenings, or harassment of other patrons or staff, will not
          be tolerated. Offenders may be asked to leave without a refund.
        </p>

        <h2 className="text-2xl font-semibold">4. Food and Drink Policy</h2>
        <p>
          Outside food and drinks are not permitted inside the cinema. However,
          Galaxy Cinema offers a variety of snacks and beverages available for
          purchase at our concession stand.
        </p>

        <h2 className="text-2xl font-semibold">5. Health and Safety</h2>
        <p>
          For the safety of all patrons, we adhere to strict health and safety
          regulations. Please follow all guidelines, including emergency exits
          and instructions from our staff. In case of an emergency, proceed
          calmly to the nearest exit.
        </p>

        <h2 className="text-2xl font-semibold">6. Age Restrictions</h2>
        <p>
          Certain films may have age restrictions based on local regulations.
          Please check the age rating of a film before purchasing tickets.
          Galaxy Cinema reserves the right to request identification for age
          verification.
        </p>

        <h2 className="text-2xl font-semibold">
          7. Changes to Operating Regulations
        </h2>
        <p>
          Galaxy Cinema may update these Operating Regulations from time to
          time. We will notify you of any changes by posting the updated
          regulations on this page.
        </p>

        <h2 className="text-2xl font-semibold">8. Contact Us</h2>
        <p>
          If you have any questions about our Operating Regulations, please
          contact us at support@galaxycinema.vn.
        </p>
      </div>
    </section>
  );
}
