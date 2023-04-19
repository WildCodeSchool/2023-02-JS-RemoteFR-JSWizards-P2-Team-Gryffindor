import PropTypes from "prop-types";
import CardGryf from "./CardGryf";

function CardLibrary({ cards }) {
  return (
    <div className="gallery">
      {cards.map((card) => (
        <CardGryf
          key={card.id}
          name={card.name}
          image={card.image}
          house={card.house}
        />
      ))}
      <p>test</p>
      <p>test2</p>
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
