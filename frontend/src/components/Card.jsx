import PropTypes from "prop-types";

function Card({ name, image, house }) {
  let backgroundSrc;
  let logoSrc;

  switch (house) {
    case "Gryffindor":
      backgroundSrc = "./public/image/CardGryf.png";
      logoSrc = "./public/icon/gryf-logo.svg";
      break;
    case "Hufflepuff":
      backgroundSrc = "./public/image/CardHuff.png";
      logoSrc = "./public/icon/huff-logo.svg";
      break;
    case "Ravenclaw":
      backgroundSrc = "./public/image/CardRav.png";
      logoSrc = "./public/icon/rav-logo.svg";
      break;
    case "Slytherin":
      backgroundSrc = "./public/image/CardSly.png";
      logoSrc = "./public/icon/sly-logo.svg";
      break;
    default:
      backgroundSrc = "./public/image/CardDefault.png";
      logoSrc = "./public/image/Hogwarts-icon.png";
      break;
  }

  return (
    <div className="relative rounded-xl">
      <img
        className="relative object-cover object-center w-[184px] h-[265px] rounded-xl shadow-sm"
        src={backgroundSrc}
        alt={`${house} Card background`}
      />
      <img
        className="absolute top-3 left-3 object-cover w-[160px] h-[210px] rounded-t-md"
        src={image}
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
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
};

export default Card;
