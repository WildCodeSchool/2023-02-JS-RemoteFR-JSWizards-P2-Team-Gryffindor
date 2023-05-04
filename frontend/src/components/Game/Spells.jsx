import PropTypes from "prop-types";
import Spells from "../../db/spells.json";

export default function CharSpells({
  house,
  startDamage,
  getHP,
  hasUsedHP,
  characterHP,
}) {
  const pickedHouse = Spells?.[house];
  return (
    pickedHouse && (
      <div className="flex flex-row gap-4 justify-center spells">
        <button type="button" onClick={startDamage}>
          {pickedHouse.spell1}
        </button>
        <button
          type="button"
          onClick={
            !hasUsedHP && characterHP <= 35 && characterHP > 0 ? getHP : null
          }
        >
          {pickedHouse.spell2}
        </button>
        <button
          type="button"
          // onClick={startDamage}
        >
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
  characterHP: PropTypes.string.isRequired,
  hasUsedHP: PropTypes.string.isRequired,
  getHP: PropTypes.func.isRequired,
  startDamage: PropTypes.func.isRequired,
};
