import Hero from "../components/Hero";
import DisplayHouses from "../components/DisplayHouses";

export default function Home() {
  return (
    <section className="flex flex-col items-center space-y-8">
      <Hero />
      <DisplayHouses />
      <div className="flex flex-col justify-center item-start w-full md:max-w-[1290px]">
        <h2 className="text-xl">Rules of the game</h2>
        <p>test</p>
      </div>
    </section>
  );
}