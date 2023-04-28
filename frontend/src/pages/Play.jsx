import { useState } from "react";
import HousesCards from "../components/HousesCards";
import CharSelection from "../components/CharSelection";
import Versus from "../components/Versus";

export default function Play() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [step, setStep] = useState("houseSelection");
  const [pickedUpCard, setPickedUpCard] = useState({});

  function abandonned() {
    setStep("houseSelection");
  }

  function changeStep() {
    if (step === "houseSelection") {
      setStep("cardSelection");
    } else if (step === "cardSelection") {
      setStep("versus");
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
          />
        ) : step === "versus" ? (
          <Versus pickedUpCard={pickedUpCard} />
        ) : (
          <HousesCards setSelectedHouse={setSelectedHouse} />
        )
        /* eslint-enable */
      }
      {(step === "cardSelection" || step === "houseSelection") && (
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
            <button
              onClick={changeStep}
              type="button"
              className="mt-2 bg-dark p-2.5 rounded-3xl hover:bg-secondary hover:text-dark"
              disabled={!selectedHouse}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
