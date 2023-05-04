import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function GameHistoryMap(props) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const newGames = [];

    const { house, character, ennemyCharacter, ennemyHouse, result } = props;
    newGames.push({
      house,
      character,
      ennemyHouse,
      ennemyCharacter,
      result,
    });

    setGames(newGames);
  }, []);
  return (
    <tbody>
      {games.map((game) => (
        <tr key={5}>
          <td className="px-6 py-4">{game.house}</td>
          <td className="px-6 py-4">{game.character}</td>
          <td className="px-6 py-4">{game.ennemyHouse}</td>
          <td className="px-6 py-4">{game.ennemyCharacter}</td>
          <td className="px-6 py-4"> {game.result}</td>
        </tr>
      ))}
    </tbody>
  );
}

GameHistoryMap.propTypes = {
  house: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  ennemyCharacter: PropTypes.string.isRequired,
  ennemyHouse: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
