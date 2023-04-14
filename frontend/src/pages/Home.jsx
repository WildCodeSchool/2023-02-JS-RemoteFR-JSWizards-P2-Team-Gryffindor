import Hero from "../components/Hero";
import DisplayHouses from "@components/DisplayHouses";

export default function Home() {
  return (
    <section>
      <h2 className="text-xl">Home</h2>
      <Hero />
      <DisplayHouses />
    </section>
  );
}
