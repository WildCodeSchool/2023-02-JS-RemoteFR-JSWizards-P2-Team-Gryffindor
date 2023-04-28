import PropTypes from "prop-types";
import Card from "./Card";

function CardLibrary({ cards, pickedUpCard, setPickedUpCard }) {
  return (
    <div className="gallery">
      {cards.map((card) => (
        <Card
          selected={card.name === pickedUpCard?.name}
          key={card.id}
          idwizard={card.id}
          name={card.name}
          image={card.image}
          house={card.house}
          setPickedUpCard={setPickedUpCard}
          pickedUpCard={pickedUpCard}
        />
      ))}
    </div>
  );
}

CardLibrary.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      house: PropTypes.string.isRequired,
    })
  ).isRequired,
  pickedUpCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
  }).isRequired,
  setPickedUpCard: PropTypes.func.isRequired,
};

export default CardLibrary;
