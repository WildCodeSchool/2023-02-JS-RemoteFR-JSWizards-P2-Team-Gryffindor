import { useState, useEffect } from "react";
import FightStart from "../components/Game/FightStart";
import HousesCards from "../components/Game/HousesCards";
import CharSelection from "../components/Game/CharSelection";
import Versus from "../components/Game/Versus";

export default function Play() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [step, setStep] = useState("houseSelection");
  const [pickedUpCard, setPickedUpCard] = useState({});
  const [next, setNext] = useState(true);

  useEffect(() => {
    if (step === "FightStart") {
      setTimeout(() => {
        setStep("Versus");
      }, 1000);
    }
  }, [step]);

  function abandonned() {
    setStep("houseSelection");
  }

  function changeStep() {
    if (step === "houseSelection") {
      setStep("cardSelection");
    } else if (step === "cardSelection") {
      setStep("FightStart");
    } else if (step === "FightStart") {
      setStep("Versus");
    }
  }

  return (
    <section className="flex flex-col items-center space-y-8 ">
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
        ) : step === "FightStart" ? (
          <FightStart />
        ) : step === "Versus" ? (
          <Versus />
        ) : (
          <HousesCards setSelectedHouse={setSelectedHouse} />
        )
        /* eslint-enable */
      }
      {(step === "cardSelection" ||
        step === "houseSelection" ||
        step === "Versus") && (
        <div className="flex justify-between w-full">
          <div>
            {step !== "houseSelection" && (
              <button
                onClick={abandonned}
                className="mt-2 bg-dark p-2.5 rounded-3xl hover:bg-secondary hover:text-dark"
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
                className="mt-2 bg-dark p-2.5 rounded-3xl hover:bg-secondary hover:text-dark"
                disabled={!selectedHouse}
              >
                Continue
              </button>
            ) : (
              step !== "Versus" && (
                <button
                  onClick={changeStep}
                  type="button"
                  className="mt-2 bg-dark p-2.5 rounded-3xl hover:bg-secondary hover:text-dark"
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
