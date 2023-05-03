import PropTypes from "prop-types";
import Spells from "../db/spells.json";

export default function CharSpells({ house }) {
  const pickedHouse = Spells?.[house];
  return (
    pickedHouse && (
      <div className="flex flex-row gap-4 justify-center spells">
        <button type="button">{pickedHouse.spell1}</button>
        <button type="button">{pickedHouse.spell2}</button>
        <button type="button">{pickedHouse.spell3}</button>
      </div>
    )
  );
}

CharSpells.propTypes = {
  house: PropTypes.string.isRequired,
};
