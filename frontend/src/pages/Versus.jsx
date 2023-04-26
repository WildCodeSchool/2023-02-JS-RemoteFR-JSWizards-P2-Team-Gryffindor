import { useState, useEffect } from "react";
import Card from "../components/Card";

function Versus() {
  const [myCharacter, setMyCharacter] = useState(null);
  const [enemyCharacter, setEnemyCharacter] = useState(null);

  const fetchData = async () => {
    // first step : fetch my character
    const myCharacterId = localStorage.getItem("selectedCharacterId");
    const myCharacterIdUrl = `https://hp-api.onrender.com/api/character/${myCharacterId}`;

    try {
      const response = await fetch(myCharacterIdUrl);
      const data = await response.json();
      setMyCharacter(data[0]);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
    // second step : fetch enemy character
    const dataEnemy = "https://hp-api.onrender.com/api/characters";

    try {
      const response = await fetch(dataEnemy);
      const data = await response.json();
      const randomNumber = Math.floor(Math.random() * data.length - 1);
      setEnemyCharacter(data[randomNumber]);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-[calc(100vh-125px)] bg-[url('./assets/wood.jpg')] flex flex-col justify-around rounded-2xl">
      <div className="flex justify-around items-center">
        <div className="justify-center items-center space-y-8">
          <div className="flex justify-around gap-4">
            <div className="flex flex-col justify-center items-center gap-8 potions">
              <button type="button">Potion 1</button>
              <button type="button">Potion 2</button>
              <button type="button">Potion 3</button>
            </div>
            {myCharacter && (
              <Card
                name={myCharacter.name}
                image={myCharacter.image}
                house={myCharacter.house}
                idwizard={myCharacter.id}
              />
            )}
          </div>
          <div className="flex flex-row gap-4 spells">
            <button type="button">spells</button>
            <button type="button">spells</button>
            <button type="button">spells</button>
            <button type="button">spells</button>
          </div>
        </div>
        <div className="justify-center items-center space-y-8">
          <div className="flex justify-around gap-4">
            {enemyCharacter && (
              <Card
                name={enemyCharacter.name}
                image={enemyCharacter.image}
                house={enemyCharacter.house}
                idwizard={enemyCharacter.id}
              />
            )}
            <div className="flex flex-col justify-center items-center gap-8 potions">
              <button type="button">Potion 1</button>
              <button type="button">Potion 2</button>
              <button type="button">Potion 3</button>
            </div>
          </div>
          <div className="flex flex-row gap-4 spells">
            <button type="button">spells</button>
            <button type="button">spells</button>
            <button type="button">spells</button>
            <button type="button">spells</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center abandon-btn">
        <button
          type="button"
          className="text-dark bg-secondary rounded-3xl px-4 py-2"
        >
          Abandon
        </button>
      </div>
    </div>
  );
}

export default Versus;
