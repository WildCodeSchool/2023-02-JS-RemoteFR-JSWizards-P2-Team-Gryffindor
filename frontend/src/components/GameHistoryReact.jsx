import GameHistoryMap from "./GameHistoryMap";
import FakeGameHistory from "./FakeGameHistory";

export default function GameHistoryReact() {
  return (
    <div className="relative overflow-x-auto space-y-4">
      <h2 className="text-xl">Game's history</h2>
      <table className="w-full text-sm text-left text-center">
        <thead className="text-xs uppercase border-y-2">
          <tr>
            <th className="px-6 py-3">Your House</th>
            <th className="px-6 py-3">You character</th>
            <th className="px-6 py-3">Enemy's House</th>
            <th className="px-6 py-3">Enemy's character</th>
            <th className="px-6 py-3">Result</th>
          </tr>
        </thead>
        <GameHistoryMap
          house="hufflepuff"
          character="jenny"
          ennemyCharacter="Draco"
          ennemyHouse="Slytherin"
          result="won"
        />
        <FakeGameHistory />
      </table>
    </div>
  );
}