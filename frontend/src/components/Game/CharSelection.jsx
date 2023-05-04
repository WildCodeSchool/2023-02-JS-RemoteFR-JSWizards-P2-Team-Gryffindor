import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar";
import FilterBtn from "../FilterBtn";
import CardLibrary from "../CardLibrary";

export default function CharSelection({
  selectedHouse,
  info,
  pickedUpCard,
  setPickedUpCard,
  description,
  setNext,
}) {
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
    <>
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-xl font-serif">{info}</h2>
        <div className="flex gap-6 items-center">
          <SearchBar handleSearch={handleSearch} />
          {!selectedHouse && (
            <FilterBtn setFilteredCards={setFilteredCards} cards={cards} />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8">
        <p className="italic">{description}</p>
        <div>
          <CardLibrary
            setPickedUpCard={setPickedUpCard}
            pickedUpCard={pickedUpCard}
            setSelectedCharacterId={setSelectedCharacterId}
            cards={filteredCards.length > 0 ? filteredCards : cards}
            setNext={setNext}
          />
        </div>
      </div>
    </>
  );
}

CharSelection.defaultProps = {
  selectedHouse: "",
  description: "",
  setNext: () => {},
  pickedUpCard: { name: "", house: "" },
  setPickedUpCard: () => {},
};

CharSelection.propTypes = {
  selectedHouse: PropTypes.string,
  info: PropTypes.string.isRequired,
  pickedUpCard: PropTypes.shape({
    name: PropTypes.string,
    house: PropTypes.string,
  }),
  setPickedUpCard: PropTypes.func,
  description: PropTypes.string,
  setNext: PropTypes.func,
};
