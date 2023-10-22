import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className="overlay"></div>
      <div className="main--container">
        <h1 className="main--header">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="main--text">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans" className="main--button orange-btn">
          Find your van
        </Link>
      </div>
    </main>
  );
}
