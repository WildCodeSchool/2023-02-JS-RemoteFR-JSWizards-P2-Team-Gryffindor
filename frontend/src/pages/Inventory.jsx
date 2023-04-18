import SearchBar from "../components/SearchBar";
import FilterBtn from "../components/FilterBtn";
import CardGryf from "../components/CardGryf";
import CardRav from "../components/CardRav";

export default function Inventory() {
  return (
    <section className="flex flex-col items-center space-y-8 ">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-xl">Card inventory</h2>
        <div className="flex gap-4">
          <SearchBar />
          <FilterBtn />
        </div>
      </div>
      <div>
        <CardGryf />
        <CardRav />
      </div>
    </section>
  );
}
