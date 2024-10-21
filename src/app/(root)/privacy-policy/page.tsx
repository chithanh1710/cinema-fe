export const revalidate = 9999999;

export const generateMetadata = () => {
  return {
    title: "Privacy Policy - Galaxy Cinema",
    description:
      "Read our privacy policy to understand how we protect your information.",
  };
};

export default function Page() {
  return (
    <section className="container_custom">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

      <div className="space-y-6">
        <p>
          Welcome to Galaxy Cinema`&apos;`s Privacy Policy. Your privacy is
          important to us. This privacy policy document outlines the types of
          personal information that is received and collected by Galaxy Cinema
          and how it is used.
        </p>

        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p>
          We collect personal information that you provide to us, such as your
          name, email address, phone number, and other contact details when you
          register or book tickets through our website. Additionally, we may
          collect information about your device, browser, and IP address for
          security and analytic purposes.
        </p>

        <h2 className="text-2xl font-semibold">
          2. How We Use Your Information
        </h2>
        <p>
          The information we collect is used to provide and improve our
          services. This includes processing your bookings, sending you email
          updates, responding to your inquiries, and personalizing your
          experience with Galaxy Cinema. We may also use this data for marketing
          and promotional activities with your consent.
        </p>

        <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
        <p>
          We do not share your personal information with third parties except as
          necessary to provide our services (such as payment processors) or as
          required by law.
        </p>

        <h2 className="text-2xl font-semibold">4. Security</h2>
        <p>
          We take appropriate measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction. However,
          please note that no method of transmission over the internet is 100%
          secure.
        </p>

        <h2 className="text-2xl font-semibold">5. Cookies</h2>
        <p>
          Our website uses cookies to enhance your experience, analyze site
          usage, and improve our services. You can choose to disable cookies
          through your browser settings, but some features of the site may not
          function properly.
        </p>

        <h2 className="text-2xl font-semibold">
          6. Changes to This Privacy Policy
        </h2>
        <p>
          Galaxy Cinema may update this Privacy Policy from time to time. We
          will notify you of any changes by posting the new Privacy Policy on
          this page.
        </p>

        <h2 className="text-2xl font-semibold">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at support@galaxycinema.vn.
        </p>
      </div>
    </section>
  );
}
