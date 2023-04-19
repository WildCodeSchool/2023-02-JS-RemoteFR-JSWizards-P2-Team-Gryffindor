import HousesCards from "../components/HousesCards";

export default function Play() {
  return (
    <section className="flex flex-col items-center space-y-8 ">
      <h2 className="text-xl">Chose your house</h2>
      <HousesCards />
    </section>
  );
}
