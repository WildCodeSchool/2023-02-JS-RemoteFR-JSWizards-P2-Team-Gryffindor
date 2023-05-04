import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function FilterBtn({ cards, setFilteredCards }) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedHouse, setCheckedHouse] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleHouseChange = (e) => {
    const house = e.target.value;
    if (checkedHouse.includes(house)) {
      setCheckedHouse(checkedHouse.filter((h) => h !== house));
    } else {
      setCheckedHouse([...checkedHouse, house]);
    }
  };

  useEffect(() => {
    if (cards) {
      const filtered = cards.filter((card) => {
        if (checkedHouse.length === 0) {
          return true;
        }
        return checkedHouse.includes(card.house);
      });
      setFilteredCards(filtered);
    }
  }, [checkedHouse, cards, setFilteredCards]);

  return (
    <div className="relative">
      <button
        type="button"
        className="text-gray-800 font-semibold py-1 rounded inline-flex items-center"
        onClick={handleToggle}
      >
        <img src="./icon/filter.svg" alt="filter button" />
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 z-10 w-48 py-2 bg-dark rounded-md shadow-lg`}
      >
        <li className="px-4 py-2 hover:bg-darkmode">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="Gryffindor"
              checked={checkedHouse.includes("Gryffindor")}
              onChange={handleHouseChange}
            />
            <span className="ml-2">Gryffindor</span>
          </label>
        </li>
        <li className="px-4 py-2 hover:bg-darkmode">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="Hufflepuff"
              checked={checkedHouse.includes("Hufflepuff")}
              onChange={handleHouseChange}
            />
            <span className="ml-2">Hufflepuff</span>
          </label>
        </li>
        <li className="px-4 py-2 hover:bg-darkmode">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="Ravenclaw"
              checked={checkedHouse.includes("Ravenclaw")}
              onChange={handleHouseChange}
            />
            <span className="ml-2">Ravenclaw</span>
          </label>
        </li>
        <li className="px-4 py-2 hover:bg-darkmode">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value="Slytherin"
              checked={checkedHouse.includes("Slytherin")}
              onChange={handleHouseChange}
            />
            <span className="ml-2">Slytherin</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

FilterBtn.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
};
