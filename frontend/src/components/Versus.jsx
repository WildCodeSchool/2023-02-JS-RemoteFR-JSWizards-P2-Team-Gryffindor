import { useState, useEffect } from "react";
import Card from "./Card";

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
    const enemyCharacterId = localStorage.getItem("randomCharacterId");
    const dataEnemy = `https://hp-api.onrender.com/api/character/${enemyCharacterId}`;

    try {
      const response = await fetch(dataEnemy);
      const data = await response.json();
      setEnemyCharacter(data[0]);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-[calc(100vh-125px)] bg-[url('./assets/wood.jpg')] flex flex-col justify-around rounded-2xl w-full">
      <div className="flex justify-around items-center">
        <div className="justify-center items-center space-y-24">
          <div className="flex justify-around gap-4">
            <div className="flex flex-col justify-center items-center gap-8 potions">
              <button type="button">AP Potion ⚔️</button>
              <button type="button">DP Potion 🛡️</button>
              <button type="button">HP Potion ❤️</button>
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
        <div className="justify-center items-center space-y-24">
          <div className="flex justify-around gap-4 ">
            {enemyCharacter && (
              <Card
                name={enemyCharacter.name}
                image={enemyCharacter.image}
                house={enemyCharacter.house}
                idwizard={enemyCharacter.id}
              />
            )}
            <div className="flex flex-col justify-center items-center gap-8 potions">
              <button type="button">AP Potion ⚔️</button>
              <button type="button">DP Potion 🛡️</button>
              <button type="button">HP Potion ❤️</button>
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
    </div>
  );
}

export default Versus;
