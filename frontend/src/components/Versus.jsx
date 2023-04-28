import PropTypes from "prop-types";
import Card from "./Card";

export default function Versus({ pickedUpCard, setPickedUpCard }) {
  return (
    <Card
      idwizard={pickedUpCard.id}
      name={pickedUpCard.name}
      image={pickedUpCard.image}
      house={pickedUpCard.house}
      setPickedUpCard={setPickedUpCard}
    />
  );
}

Versus.propTypes = {
  pickedUpCard: PropTypes.shape({
    name: PropTypes.string,
    house: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  setPickedUpCard: PropTypes.string.isRequired,
};
