import React, { useState, useEffect } from "react";

export default function FakeGameHistory() {
  const fakeArrayHouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  const fakeArrayAi = [
    "Minerva McGonagall",
    "Cedric Diggory",
    "Luna Lovegood",
    "Horace Slughorn",
  ];
  const fakeResult = ["Won", "Lost", "Abandonned"];
  const [games, setGames] = useState([]);
  useEffect(() => {
    const newGames = [];

    for (let i = 0; i < 4; i += 1) {
      const random1 = Math.floor(Math.random() * fakeArrayHouse.length);
      const random2 = Math.floor(Math.random() * fakeArrayHouse.length);
      const house = fakeArrayHouse[random1];
      const character = fakeArrayAi[random1];
      const ennemyHouse = fakeArrayHouse[random2];
      const ennemyCharacter = fakeArrayAi[random2];
      const result = fakeResult[Math.floor(Math.random() * fakeResult.length)];

      newGames.push({
        idx: i + 1,
        houseChosen: house,
        characterChosen: character,
        ennemyHouseChosen: ennemyHouse,
        ennemyCharacterChosen: ennemyCharacter,
        result,
      });
      setGames(newGames);
    }
  }, []);
  return (
    <tbody>
      {games.map((game) => (
        <tr key={game.idx}>
          <td className="px-6 py-4">{game.houseChosen}</td>
          <td className="px-6 py-4">{game.characterChosen}</td>
          <td className="px-6 py-4">{game.ennemyHouseChosen}</td>
          <td className="px-6 py-4">{game.ennemyCharacterChosen}</td>
          <td className="px-6 py-4"> {game.result}</td>
        </tr>
      ))}
    </tbody>
  );
}
