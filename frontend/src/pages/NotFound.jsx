import Lottie from "lottie-react";
import LottieAnim from "../assets/lotties/404-animation.json";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-125px)] flex flex-col justify-center items-center space-y-4 text-base text-center">
      <div>
        <Lottie
          loop
          autoplay
          animationData={LottieAnim}
          className="absolute md:bottom-5 md:left-2/4 w-[500px] hidden md:block"
        />
      </div>
    </section>
  );
}
