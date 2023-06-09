import PropTypes from "prop-types";
import Spells from "../../db/spells.json";

export default function CharSpells({
  house,
  startDamage,
  getHP,
  hasUsedHP,
  characterHP,
  hasUsedDP,
  addDP,
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
            !hasUsedHP && characterHP <= 50 && characterHP > 0 ? getHP : null
          }
        >
          {pickedHouse.spell2}
        </button>
        <button type="button" onClick={!hasUsedDP ? addDP : null}>
          {pickedHouse.spell3}
        </button>
      </div>
    )
  );
}

CharSpells.defaultProps = {
  house: "",
  characterHP: 0,
  hasUsedHP: false,
  getHP: () => {},
  hasUsedDP: false,
  addDP: () => {},
};

CharSpells.propTypes = {
  house: PropTypes.string,
  characterHP: PropTypes.number,
  hasUsedHP: PropTypes.bool,
  getHP: PropTypes.func,
  hasUsedDP: PropTypes.bool,
  addDP: PropTypes.func,
  startDamage: PropTypes.func.isRequired,
};
