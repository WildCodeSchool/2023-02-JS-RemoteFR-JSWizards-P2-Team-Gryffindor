import PropTypes from "prop-types";
import Card from "./Card";

function CardLibrary({ cards, setSelectedCharacterId }) {
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
            idwizard={card.id}
            name={card.name}
            image={card.image}
            house={card.house}
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
  setSelectedCharacterId: PropTypes.string.isRequired,
};

export default CardLibrary;
