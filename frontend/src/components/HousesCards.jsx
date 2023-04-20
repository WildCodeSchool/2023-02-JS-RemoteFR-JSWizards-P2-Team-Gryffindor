import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HouseCards() {
  const [selectedHouse, setSelectedHouse] = useState(
    localStorage.getItem("selectedHouse") || null
  );

  useEffect(() => {
    localStorage.setItem("selectedHouse", selectedHouse);
  }, [selectedHouse]);

  return (
    <div>
      <div className="flex gap-4 house-intro">
        <div className="house">
          {" "}
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
          {" "}
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
          {" "}
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
              curiosity.{" "}
            </p>
          </label>
        </div>
        <div className="house">
          {" "}
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
      {selectedHouse && (
        <Link to="/inventory">
          <button
            type="button"
            className="mt-2 bg-dark p-2.5 rounded-3xl"
            disabled={!selectedHouse}
          >
            Continue
          </button>
        </Link>
      )}
    </div>
  );
}
