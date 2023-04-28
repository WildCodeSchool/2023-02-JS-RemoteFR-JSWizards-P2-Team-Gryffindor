import { useEffect, useState } from "react";
import Card from "../components/Card";

function FightStart() {
  setTimeout(() => {
    window.location.href = "./versus";
  }, 5000);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [randomCharacter, setRandomCharacter] = useState(null);

  useEffect(() => {
    if (randomCharacter) {
      localStorage.setItem("randomCharacterId", randomCharacter.id);
    }
  }, [randomCharacter]);

  const fetchData = async () => {
    const localCharacterId = localStorage.getItem("selectedCharacterId");
    const characterIdUrl = `https://hp-api.onrender.com/api/character/${localCharacterId}`;

    try {
      const response = await fetch(characterIdUrl);
      const data = await response.json();
      setSelectedCharacter(data[0]);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }

    const charactersUrl = "https://hp-api.onrender.com/api/characters";

    try {
      const response = await fetch(charactersUrl);
      const data = await response.json();
      const randomNumber = Math.floor(Math.random() * data.length - 1);
      setRandomCharacter(data[randomNumber]);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-[calc(100vh-125px)] bg-[url('./assets/fight.png')] bg-cover bg-no-repeat flex flex-col justify-around rounded-2xl">
      <div className="flex justify-evenly">
        <div className="justify-center items-center space-y-8">
          <div className="flex justify-around gap-4">
            {selectedCharacter && (
              <Card
                name={selectedCharacter.name}
                image={selectedCharacter.image}
                house={selectedCharacter.house}
                idwizard={selectedCharacter.id}
              />
            )}
          </div>
        </div>
        <div className="justify-center items-center space-y-8">
          <div className="flex justify-around gap-4">
            {randomCharacter && (
              <Card
                name={randomCharacter.name}
                image={randomCharacter.image}
                house={randomCharacter.house}
                idwizard={randomCharacter.id}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FightStart;
