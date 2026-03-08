import "../styles/Slide.scss"

const Slide = () => {
  // Previous hero UI (kept for reference)
  // return (
  //   <div className="slide">
  //     <h1>
  //       Welcome Home! Anywhere you roam <br /> Stay in the moment. Make your
  //       memories
  //     </h1>
  //   </div>
  // );

  return (
    <section className="slide">
      <div className="slide_overlay" />
      <div className="slide_content">
        <p className="slide_kicker">Find your next stay</p>
        <h1 className="slide_title">
          Welcome home, wherever you travel.
        </h1>
        <p className="slide_subtitle">
          Discover handpicked homes, unique stays, and cozy rentals tailored to every kind of trip.
        </p>
        <div className="slide_highlights">
          <span>✔ Flexible stays</span>
          <span>✔ Trusted hosts</span>
          <span>✔ Instant booking</span>
        </div>
      </div>
    </section>
  );
};

export default Slide;
