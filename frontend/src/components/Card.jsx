import PropTypes from "prop-types";
import defaultImage from "../../public/assets/image/placeholder.jpg";
import missingImg from "../db/imgData.json";

function Card({
  name,
  image,
  house,
  idwizard,
  setPickedUpCard,
  selected,
  setNext,
  isMyTurn,
}) {
  let backgroundSrc;
  let logoSrc;
  const missingImage = missingImg.filter((img) => img.id === idwizard);
  const defaultImg =
    missingImage[0] !== undefined ? missingImage[0].image : defaultImage;
  switch (house) {
    case "Gryffindor":
      backgroundSrc = "../assets/image/CardGryf.png";
      logoSrc = "../assets/icon/gryf-logo.svg";
      break;
    case "Hufflepuff":
      backgroundSrc = "../assets/image/CardHuff.png";
      logoSrc = "../assets/icon/huff-logo.svg";
      break;
    case "Ravenclaw":
      backgroundSrc = "../assets/image/CardRav.png";
      logoSrc = "../assets/icon/rav-logo.svg";
      break;
    case "Slytherin":
      backgroundSrc = "../assets/image/CardSly.png";
      logoSrc = "../assets/icon/sly-logo.svg";
      break;
    default:
      backgroundSrc = "../assets/image/CardDefault.png";
      logoSrc = "../assets/image/Hogwarts-icon.png";
      break;
  }
  function handleClick() {
    const cardInfo = { name, house, image, idwizard };
    localStorage.setItem("pickedUpCard", JSON.stringify(cardInfo));
    setPickedUpCard(cardInfo);
    setNext(false);
  }
  return (
    <div
      role="button"
      tabIndex={0}
      className={`relative rounded-xl card ${isMyTurn ? "my-turn" : ""}`}
      onClick={handleClick}
      onKeyDown={handleClick}
      style={{
        filter: selected && "drop-shadow(0 2px 8px rgb(255, 244, 226, 0.75))",
        transform: selected && "scale(1.05)",
      }}
    >
      <img
        className="relative object-cover object-center w-[184px] h-[265px] rounded-xl shadow-sm"
        src={backgroundSrc}
        alt={`${house} Card background`}
      />
      <img
        className="absolute top-3 left-3 object-cover w-[160px] h-[210px] rounded-t-md"
        src={image || defaultImg}
        alt={name}
      />
      <img
        className="absolute bottom-2 right-1 w-10 h-10"
        src={logoSrc}
        alt={`${house} logo`}
      />
      <p className="absolute bottom-3 left-3">{name}</p>
    </div>
  );
}

Card.defaultProps = {
  idwizard: "",
  selected: false,
  setNext: () => {},
  setPickedUpCard: () => {},
  isMyTurn: false,
};

Card.propTypes = {
  idwizard: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  setNext: PropTypes.func,
  setPickedUpCard: PropTypes.func,
  isMyTurn: PropTypes.bool,
};

export default Card;
