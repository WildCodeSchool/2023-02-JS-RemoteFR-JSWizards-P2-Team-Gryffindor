import Card from "../components/Card";
import AccountBanner from "../components/AccountBanner";
import GameHistoryReact from "../components/GameHistoryReact";

export default function Account() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl">My account</h2>
      <div className="bg-dark rounded p-4 space-y-8 justify-center">
        <div className="flex justify-between">
          <h2 className="text-lg">Games played per house</h2>
          <h2 className="text-lg">Most played card</h2>
        </div>
        <div className="flex justify-around items-center">
          <AccountBanner />
          <Card />
        </div>
        <div>
          <GameHistoryReact />
        </div>
      </div>
    </section>
  );
}
