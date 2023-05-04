import { Link } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import LottieAnim from "../assets/lotties/404-animation.json";

export default function NotFound({ setAudioName }) {
  useEffect(() => {
    setAudioName("mainmusic");
  }, []);
  return (
    <section className="min-h-[calc(100vh-125px)] flex flex-col justify-center items-center space-y-4 text-base text-center">
      <div>
        <Lottie
          loop
          autoplay
          animationData={LottieAnim}
          className="absolute bottom-14 left-2/4 w-[500px] hidden md:block"
        />
      </div>
      <div className="relative flex items-center justify-center gap-4 w-full top-2/4">
        <p className="text-[100px] md:text-[200px]">404</p>
      </div>
      <div>
        <h2 className="text-xl text-center mb-4">Oops page not found!</h2>
        <p className=" mb-4">The page you are looking for is missing</p>
      </div>
      <Link to="/">
        <button
          type="button"
          className="relative py-2 px-5 bg-dark rounded-3xl hover:text-dark hover:bg-secondary"
        >
          Go back to Home
        </button>
      </Link>
    </section>
  );
}

NotFound.defaultProps = {
  setAudioName: () => {},
};

NotFound.propTypes = {
  setAudioName: PropTypes.func,
};
