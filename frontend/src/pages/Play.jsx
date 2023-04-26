import HousesCards from "../components/HousesCards";

export default function Play() {
  return (
    <section className="flex flex-col items-center space-y-8 h-[calc(100vh-125px)]">
      <h2 className="text-xl">Choose your house</h2>
      <p className="italic">
        Select the house you want to be in for your fight, your character will
        depend of the house you pick
      </p>
      <HousesCards />
    </section>
  );
}
