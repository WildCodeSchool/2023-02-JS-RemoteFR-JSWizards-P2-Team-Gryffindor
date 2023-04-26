import Card from "@components/Card";
import { useEffect, useState } from "react";

function FightStart() {
  // setTimeout(() => {
  //   window.location.href = "./versus";
  // }, 5000);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchData = async () => {
    const localCharacter = localStorage.getItem("selectedCharacterId");
    const url = `https://hp-api.onrender.com/api/character/${localCharacter}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSelectedCharacter(data[0]);
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
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FightStart;
