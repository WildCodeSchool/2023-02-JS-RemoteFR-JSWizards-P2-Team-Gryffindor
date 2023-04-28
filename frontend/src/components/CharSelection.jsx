import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import CardLibrary from "./CardLibrary";

export default function CharSelection({ selectedHouse, info, description }) {
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
    <>
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-xl">{info}</h2>
        <div className="flex gap-4">
          <SearchBar handleSearch={handleSearch} />
        </div>
      </div>
      <p className="italic">{description}</p>
      <div>
        <CardLibrary
          setSelectedCharacterId={setSelectedCharacterId}
          cards={cards}
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
    </>
  );
}

CharSelection.propTypes = {
  selectedHouse: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  pickedUpCard: PropTypes.shape({
    name: PropTypes.string,
    house: PropTypes.string,
  }).isRequired,
  setPickedUpCard: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
