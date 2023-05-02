import PropTypes from "prop-types";
import defaultImage from "../../public/image/placeholder.jpg";
import missingImg from "../db/imgData.json";

function Card({
  name,
  image,
  house,
  idwizard,
  setPickedUpCard,
  selected,
  setNext,
}) {
  let backgroundSrc;
  let logoSrc;
  const missingImage = missingImg.filter((img) => img.id === idwizard);
  const defaultImg =
    missingImage[0] !== undefined ? missingImage[0].image : defaultImage;
  switch (house) {
    case "Gryffindor":
      backgroundSrc = "./image/CardGryf.png";
      logoSrc = "./icon/gryf-logo.svg";
      break;
    case "Hufflepuff":
      backgroundSrc = "./image/CardHuff.png";
      logoSrc = "./icon/huff-logo.svg";
      break;
    case "Ravenclaw":
      backgroundSrc = "./image/CardRav.png";
      logoSrc = "./icon/rav-logo.svg";
      break;
    case "Slytherin":
      backgroundSrc = "./image/CardSly.png";
      logoSrc = "./icon/sly-logo.svg";
      break;
    default:
      backgroundSrc = "./image/CardDefault.png";
      logoSrc = "./image/Hogwarts-icon.png";
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
      className="relative rounded-xl"
      onClick={handleClick}
      onKeyDown={handleClick}
      style={{ border: selected && "solid 3px black" }}
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

Card.propTypes = {
  idwizard: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setNext: PropTypes.bool.isRequired,
  setPickedUpCard: PropTypes.func.isRequired,
};

export default Card;
