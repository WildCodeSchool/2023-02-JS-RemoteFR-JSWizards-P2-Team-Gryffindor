import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import FilterBtn from "./FilterBtn";
import CardLibrary from "./CardLibrary";

export default function CharSelection({ selectedHouse, info }) {
  const [filteredCards, setFilteredCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  useEffect(() => {
    localStorage.setItem("selectedCharacterId", selectedCharacterId);
  }, [selectedCharacterId]);

  const fetchData = async () => {
    let url = "https://hp-api.onrender.com/api/characters";
    if (selectedHouse) {
      url = `https://hp-api.onrender.com/api/characters/house/${selectedHouse}`;
    }
    try {
      const response = await fetch(url);
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
        <h2 className="text-xl">{info}</h2>
        <div className="flex gap-4">
          <SearchBar handleSearch={handleSearch} />
          <FilterBtn setFilteredCards={setFilteredCards} cards={cards} />
        </div>
      </div>
      <div>
        <CardLibrary
          setSelectedCharacterId={setSelectedCharacterId}
          cards={filteredCards.length > 0 ? filteredCards : cards}
        />
      </div>
      <div className="flex justify-end">
        <Link to="/fightstart">
          <button
            type="button"
            className="mt-2 bg-dark p-2.5 rounded-3xl hover:bg-secondary hover:text-dark"
            disabled={!selectedHouse}
          >
            Continue
          </button>
        </Link>
      </div>
    </section>
  );
}

CharSelection.propTypes = {
  selectedHouse: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
