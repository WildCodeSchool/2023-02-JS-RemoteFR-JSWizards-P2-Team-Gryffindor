import PropTypes from "prop-types";

export default function HouseCards({ setSelectedHouse }) {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h2 className="text-xl w-full">Choose your house</h2>
      <p className="italic">
        Select the house you want to be in for your fight, your character will
        depend of the house you pick
      </p>
      <div className="space-y-4">
        <div className="flex gap-4 house-intro">
          <div className="house">
            <input
              type="radio"
              id="gryffindor"
              name="house"
              onChange={() => setSelectedHouse("Gryffindor")}
            />
            <label htmlFor="gryffindor">
              <img src="./public/image/Gryffindor.png" alt="Gryffindor" />
              <p className="character">
                Justice, brave, courageous, protector and daring.
              </p>
            </label>
          </div>
          <div className="house">
            <input
              type="radio"
              id="hufflepuff"
              name="house"
              onChange={() => setSelectedHouse("Hufflepuff")}
            />
            <label htmlFor="hufflepuff">
              <img src="./public/image/Hufflepuff.png" alt="Hufflepuff" />
              <p className="character">
                Humble, loyal and unassuming, fairness and impartiality.
              </p>
            </label>
          </div>
          <div className="house">
            <input
              type="radio"
              id="ravenclaw"
              name="house"
              onChange={() => setSelectedHouse("Ravenclaw")}
            />
            <label htmlFor="ravenclaw">
              <img src="./public/image/Ravenclaw.png" alt="Ravenclaw" />
              <p className="character">
                Analytical and logical, love of learning and intellectual
                curiosity.
              </p>
            </label>
          </div>
          <div className="house">
            <input
              type="radio"
              id="slytherin"
              name="house"
              onChange={() => setSelectedHouse("Slytherin")}
            />
            <label htmlFor="slytherin">
              <img src="./public/image/Slytherin.png" alt="Slytherin" />
              <p className="character">
                Strategic, calculating, strong sens of self-preservation.
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
HouseCards.propTypes = {
  setSelectedHouse: PropTypes.string.isRequired,
};
