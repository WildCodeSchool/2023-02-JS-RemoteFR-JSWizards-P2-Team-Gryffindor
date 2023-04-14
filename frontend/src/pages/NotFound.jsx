import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <div>
        <h2 className="text-xl">Oops page not found!</h2>
        <p className=" mb-4">The page you are looking for is missing</p>
      </div>
      <Link
        to="/"
        className="text-primary py-2 px-5 bg-dark hover:bg-accent rounded-3xl"
      >
        Go back to Home
      </Link>
    </section>
  );
}
