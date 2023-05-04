import PropTypes from "prop-types";
import Spells from "../../db/spells.json";

export default function CharSpells({ house, startDamage }) {
  const pickedHouse = Spells?.[house];
  return (
    pickedHouse && (
      <div className="flex flex-row gap-4 justify-center spells">
        <button type="button" onClick={startDamage}>
          {pickedHouse.spell1}
        </button>
        <button type="button" onClick={startDamage}>
          {pickedHouse.spell2}
        </button>
        <button type="button" onClick={startDamage}>
          {pickedHouse.spell3}
        </button>
      </div>
    )
  );
}

CharSpells.defaultProps = {
  house: "",
};

CharSpells.propTypes = {
  house: PropTypes.string,
  startDamage: PropTypes.func.isRequired,
};
