export default function GameHistoryReact() {
  let gameHistory = localStorage.getItem("gameHistory");
  gameHistory = gameHistory ? JSON.parse(gameHistory) : [];
  return (
    <div className="relative overflow-x-auto space-y-4">
      <h2 className="text-lg">Game's history</h2>
      <table className="w-full text-sm text-center">
        <thead className="text-xs uppercase border-y-2">
          <tr>
            <th className="px-6 py-3">Your House</th>
            <th className="px-6 py-3">Your character</th>
            <th className="px-6 py-3">Enemy's House</th>
            <th className="px-6 py-3">Enemy's character</th>
            <th className="px-6 py-3">Result</th>
          </tr>
        </thead>
        {gameHistory.map((game) => {
          return (
            <tr key={5}>
              <td className="px-6 py-4">{game.selectedCharacter.house}</td>
              <td className="px-6 py-4">{game.selectedCharacter.name}</td>
              <td className="px-6 py-4">
                {game.versusCharacter.house || "N/A"}
              </td>
              <td className="px-6 py-4">{game.versusCharacter.name}</td>
              <td className="px-6 py-4"> {game.result}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
