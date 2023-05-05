import { useEffect, useState } from "react";
import Card from "../Card";

export default function FightStart() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [randomCharacter, setRandomCharacter] = useState(null);

  useEffect(() => {
    if (randomCharacter) {
      localStorage.setItem("randomCharacterId", randomCharacter.id);
      localStorage.setItem("randomCharacter", JSON.stringify(randomCharacter));
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
  localStorage.setItem("selectedCharacter", JSON.stringify(selectedCharacter));
  return (
    <div className="flex flex-col justify-around min-h-[calc(100vh-150px)] bg-[url('../assets/image/fight.png')] bg-cover bg-center rounded-xl w-full">
      <div className="flex justify-evenly">
        <div className="justify-center items-center space-y-8">
          <div className="flex justify-around gap-4 scale-125">
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
        <div className="justify-center items-center space-y-8 scale-125">
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
