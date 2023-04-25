import PropTypes from "prop-types";
import Card from "./Card";

function CardLibrary({ cards }) {
  return (
    <div className="gallery">
      {cards.map((card) => (
        <Card
          key={card.id}
          idwizard={card.id}
          name={card.name}
          image={card.image}
          house={card.house}
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
};

export default CardLibrary;
