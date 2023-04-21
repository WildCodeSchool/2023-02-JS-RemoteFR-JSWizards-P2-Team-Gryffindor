import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBtn from "../components/FilterBtn";
import CardLibrary from "../components/CardLibrary";

export default function Inventory() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters"
      );
      const data = await response.json();
      setCards(data);
      setAllCards(data);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    const filterCards = allCards.filter((card) => {
      const lowerCaseName = card.name.toLowerCase();
      const lowerCaseHouse = card.house ? card.house.toLowerCase() : "";
      const lowerCaseAncestry = card.ancestry
        ? card.ancestry.toLowerCase()
        : "";
      return (
        lowerCaseName.includes(search) ||
        lowerCaseHouse.includes(search) ||
        lowerCaseAncestry.includes(search)
      );
    });
    setCards(filterCards);
  };

  return (
    <section className="flex flex-col items-center space-y-8 ">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-xl">Card inventory</h2>
        <div className="flex gap-4">
          <SearchBar handleSearch={handleSearch} />
          <FilterBtn />
        </div>
      </div>
      <div>
        <CardLibrary cards={cards} />
      </div>
    </section>
  );
}
