import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about.png";

export default function About() {
  return (
    <section className="about">
      <img
        src={aboutImg}
        alt="man sitting on top of his van watching the stars"
        className="about--img"
      />
      <div className="about--container">
        <h1 className="about--header">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="about--p">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <br />
        <p className="about--p">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about--explore">
          <h1 className="about--explore-header">
            Your destination is waiting. Your van is ready.
          </h1>
          <Link to="/vans" className="about--explore-btn">
            Explore our vans
          </Link>
        </div>
      </div>
    </section>
  );
}
