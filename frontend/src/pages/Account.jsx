import Card from "../components/Card";
import AccountBanner from "../components/Account/AccountBanner";
import GameHistoryReact from "../components/Account/GameHistoryReact";

export default function Account() {
  let pickedUpCard = localStorage.getItem("pickedUpCard") || null;
  pickedUpCard = pickedUpCard ? JSON.parse(pickedUpCard) : null;
  return (
    <section className="space-y-4">
      <h2 className="text-xl">My account</h2>
      <div className="bg-dark rounded p-4 space-y-8 justify-center">
        <div className="flex justify-between">
          <h2 className="text-lg">Games played per house</h2>
          <h2 className="text-lg">Latest card played</h2>
        </div>
        <div className="flex justify-around items-center">
          <AccountBanner />
          <Card
            idwizard={pickedUpCard?.id}
            name={pickedUpCard?.name}
            image={pickedUpCard?.image}
            house={pickedUpCard?.house}
          />
        </div>
        <div>
          <GameHistoryReact />
        </div>
      </div>
    </section>
  );
}
