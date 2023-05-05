import { useEffect, useState } from "react";
import Card from "../Card";

export default function FightStart() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [randomCharacter, setRandomCharacter] = useState(null);

  const saveGameHistory = (tempSelectedCharacter, tempRandomCharacter) => {
    const tempGameHistory = localStorage.getItem("gameHistory");
    const gameHistory = tempGameHistory ? JSON.parse(tempGameHistory) : [];
    gameHistory.push({
      result: "Abandonned",
      selectedCharacter: tempSelectedCharacter,
      versusCharacter: tempRandomCharacter,
    });
    localStorage.setItem(
      "gameHistory",
      JSON.stringify(gameHistory.slice(0, 4))
    );
  };

  const fetchData = async () => {
    let tempSelectedCharacter;
    let tempRandomCharacter;
    const localCharacterId = localStorage.getItem("selectedCharacterId");
    const characterIdUrl = `https://hp-api.onrender.com/api/character/${localCharacterId}`;

    try {
      const response = await fetch(characterIdUrl);
      const data = await response.json();
      [tempSelectedCharacter] = data;
      setSelectedCharacter(tempSelectedCharacter);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }

    const charactersUrl = "https://hp-api.onrender.com/api/characters";

    try {
      const response = await fetch(charactersUrl);
      const data = await response.json();
      const randomNumber = Math.floor(Math.random() * data.length - 1);
      tempRandomCharacter = data[randomNumber];
      saveGameHistory(tempSelectedCharacter, tempRandomCharacter);
      setRandomCharacter(tempRandomCharacter);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-around min-h-[calc(100vh-150px)] bg-[url('./image/fight.png')] bg-cover bg-center rounded-xl w-full">
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
