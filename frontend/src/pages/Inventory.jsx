import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBtn from "../components/FilterBtn";
import CardLibrary from "../components/CardLibrary";

export default function Inventory() {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    return fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCards(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <CardLibrary cards={cards} />
      </div>
    </section>
  );
}
