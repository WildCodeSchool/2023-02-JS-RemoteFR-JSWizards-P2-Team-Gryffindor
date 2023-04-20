import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBtn from "../components/FilterBtn";
import CardLibrary from "../components/CardLibrary";

export default function Inventory() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      );
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
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
