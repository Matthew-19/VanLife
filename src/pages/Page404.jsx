import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <section className="page404">
      <div className="page404--container">
        <h1>Sorry the page you were looking for was not found</h1>
        <Link to="/VanLife/">
          <button className="return-home-btn">Return to Home</button>
        </Link>
      </div>
    </section>
  );
}
