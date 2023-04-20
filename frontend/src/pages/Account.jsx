import AccountBanner from "../components/AccountBanner";
import GameHistoryReact from "../components/GameHistoryReact";

export default function Account() {
  return (
    <section>
      <h2 className="text-xl">Account</h2>
      <AccountBanner />
      <GameHistoryReact />
    </section>
  );
}
