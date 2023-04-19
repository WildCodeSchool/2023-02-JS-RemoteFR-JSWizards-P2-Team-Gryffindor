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

/*
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">test</td>
            </tr>
          </tbody>
        </table>
      </div>

      


/*<thead>
        <tr className='grid grid-rows-5 grid-cols-5 justify-center gap-x-4'>
          <th>Your house</th>
          <th>Your character</th>
          <th>Enemy's house</th>
          <th>Enemy's character</th>
          <th>Result</th>
        </tr>
      </thead> */
