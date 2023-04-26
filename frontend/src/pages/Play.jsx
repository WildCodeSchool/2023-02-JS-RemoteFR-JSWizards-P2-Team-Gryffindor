import { useState } from "react";
import HousesCards from "../components/HousesCards";
import CharSelection from "../components/CharSelection";

export default function Play() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [step, setStep] = useState("stepHouse");
  function changeStep() {
    if (step === "stepHouse") {
      setStep("inventory");
    }
  }
  return (
    <section className="flex flex-col items-center space-y-8 h-[calc(100vh-125px)]">
      {step === "inventory" ? (
        <CharSelection
          info="Choose your character"
          description="Select the house you want to be in for your fight, your character will
          depend of the house you pick"
          selectedHouse={selectedHouse}
        />
      ) : (
        <HousesCards setSelectedHouse={setSelectedHouse} />
      )}
      {step === "inventory" ||
        (step === "stepHouse" && (
          <div className="flex justify-end w-full">
            <button
              onClick={changeStep}
              type="button"
              className="mt-2 bg-dark p-2.5 rounded-3xl hover:bg-secondary hover:text-dark cursor-pointer"
              disabled={!selectedHouse}
            >
              Continue
            </button>
          </div>
        ))}
    </section>
  );
}
