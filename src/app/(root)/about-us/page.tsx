export const revalidate = 9999999;

export const generateMetadata = () => {
  return {
    title: "About Us - Galaxy Cinema",
    description: "Learn more about Galaxy Cinema and our mission.",
  };
};

export default function Page() {
  return (
    <section className="container_custom">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

      <div className="space-y-6">
        <p>
          Welcome to Galaxy Cinema, your destination for the ultimate movie
          experience in Vietnam. With state-of-the-art facilities and a wide
          variety of films, we are committed to bringing the best cinematic
          experience to our customers.
        </p>

        <h2 className="text-2xl font-semibold">1. Our Mission</h2>
        <p>
          At Galaxy Cinema, our mission is to provide exceptional entertainment
          to movie lovers. We strive to create a welcoming and comfortable
          environment where everyone can enjoy the magic of cinema.
        </p>

        <h2 className="text-2xl font-semibold">2. Our History</h2>
        <p>
          Since our founding, Galaxy Cinema has grown to become one of the
          leading cinema chains in Vietnam. We pride ourselves on offering the
          latest films, high-quality sound and visuals, and exceptional customer
          service.
        </p>

        <h2 className="text-2xl font-semibold">3. Our Locations</h2>
        <p>
          With cinemas located in major cities such as Ho Chi Minh City and
          Hanoi, we are dedicated to making the movie-going experience
          convenient and accessible for all. Explore our locations for the
          nearest Galaxy Cinema near you.
        </p>

        <h2 className="text-2xl font-semibold">4. Contact Us</h2>
        <p>
          Have questions or feedback? We’d love to hear from you! Reach out to
          us at support@galaxycinema.vn or visit our contact page for more
          details.
        </p>
      </div>
    </section>
  );
}
