import PropTypes from "prop-types";
import Card from "./Card";

function CardLibrary({
  cards,
  pickedUpCard,
  setPickedUpCard,
  setSelectedCharacterId,
}) {
  return (
    <div className="gallery">
      {cards.map((card) => (
        <div
          role="presentation"
          key={card.id}
          onClick={() => setSelectedCharacterId(card.id)}
          onKeyDown={() => setSelectedCharacterId(card.id)}
        >
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
        </div>
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
  setSelectedCharacterId: PropTypes.string.isRequired,
};

export default CardLibrary;
