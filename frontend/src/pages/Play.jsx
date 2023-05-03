import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FightStart from "../components/Game/FightStart";
import HousesCards from "../components/Game/HousesCards";
import CharSelection from "../components/Game/CharSelection";
import Versus from "../components/Game/Versus";

export default function Play({ setAudioName }) {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [step, setStep] = useState("houseSelection");
  const [pickedUpCard, setPickedUpCard] = useState({});
  const [next, setNext] = useState(true);

  useEffect(() => {
    if (step === "fightStart") {
      setTimeout(() => {
        setStep("versus");
      }, 5000);
    } else if (step !== "versus") {
      setAudioName("mainmusic");
    }
  }, [step]);

  function abandonned() {
    setStep("houseSelection");
  }

  function changeStep() {
    if (step === "houseSelection") {
      setStep("cardSelection");
    } else if (step === "cardSelection") {
      setStep("fightStart");
      setAudioName("fightmusic");
    } else if (step === "fightStart") {
      setStep("versus");
    }
  }

  return (
    <section className="flex flex-col items-center space-y-4 ">
      {
        /* eslint-disable */
        step === "cardSelection" ? (
          <CharSelection
            info="Choose your character"
            selectedHouse={selectedHouse}
            setPickedUpCard={setPickedUpCard}
            pickedUpCard={pickedUpCard}
            setNext={setNext}
          />
        ) : step === "fightStart" ? (
          <FightStart />
        ) : step === "versus" ? (
          <Versus />
        ) : (
          <HousesCards setSelectedHouse={setSelectedHouse} />
        )
        /* eslint-enable */
      }
      {(step === "cardSelection" ||
        step === "houseSelection" ||
        step === "versus") && (
        <div className="flex justify-between w-full">
          <div>
            {step !== "houseSelection" && (
              <button
                onClick={abandonned}
                className="mt-2 bg-dark py-2 px-4 rounded-3xl hover:bg-secondary hover:text-dark"
                type="button"
              >
                Abandon
              </button>
            )}
          </div>
          <div>
            {step === "houseSelection" ? (
              <button
                onClick={changeStep}
                type="button"
                className="mt-2 bg-dark py-2 px-4 rounded-3xl hover:bg-secondary hover:text-dark"
                disabled={!selectedHouse}
              >
                Continue
              </button>
            ) : (
              step !== "versus" && (
                <button
                  onClick={changeStep}
                  type="button"
                  className="mt-2 bg-dark py-2 px-4 rounded-3xl hover:bg-secondary hover:text-dark"
                  disabled={next}
                >
                  Continue
                </button>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
}
Play.propTypes = {
  setAudioName: PropTypes.func.isRequired,
};
