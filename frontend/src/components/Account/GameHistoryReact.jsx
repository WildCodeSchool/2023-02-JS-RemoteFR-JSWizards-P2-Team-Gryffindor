import GameHistoryMap from "./GameHistoryMap";
import FakeGameHistory from "./FakeGameHistory";

export default function GameHistoryReact() {
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
        <GameHistoryMap
          house="Gryffindor"
          character="Ginny Weasley"
          ennemyCharacter="Draco Malfoy"
          ennemyHouse="Slytherin"
          result="Won"
        />
        <FakeGameHistory />
      </table>
    </div>
  );
}
