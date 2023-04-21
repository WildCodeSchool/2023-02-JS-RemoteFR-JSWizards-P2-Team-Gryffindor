import AccountBanner from "../components/AccountBanner";
import GameHistoryReact from "../components/GameHistoryReact";

export default function Account() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl">My account</h2>
      <div className="bg-dark rounded">
      <AccountBanner />
      <GameHistoryReact />
      </div>
    </section>
  );
}
