import Card from "../components/Card";

function Versus() {
  return (
    <div className="h-[calc(100vh-125px)] bg-[url('./assets/wood.jpg')] flex flex-col justify-around rounded-2xl">
      <div className="flex justify-around items-center">
        <div className="justify-center items-center space-y-8">
          <div className="flex justify-around gap-4">
            <div className="flex flex-col justify-center items-center gap-8 potions">
              <button type="button">Potion 1</button>
              <button type="button">Potion 2</button>
              <button type="button">Potion 3</button>
            </div>
            <Card />
          </div>
          <div className="flex flex-row gap-4 spells">
            <button type="button">spells</button>
            <button type="button">spells</button>
            <button type="button">spells</button>
            <button type="button">spells</button>
          </div>
        </div>
        <div className="justify-center items-center space-y-8">
          <div className="flex justify-around gap-4">
            <Card />
            <div className="flex flex-col justify-center items-center gap-8 potions">
              <button type="button">Potion 1</button>
              <button type="button">Potion 2</button>
              <button type="button">Potion 3</button>
            </div>
          </div>
          <div className="flex flex-row gap-4 spells">
            <button type="button">spells</button>
            <button type="button">spells</button>
            <button type="button">spells</button>
            <button type="button">spells</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center abandon-btn">
        <button
          type="button"
          className="text-dark bg-secondary rounded-3xl px-4 py-2"
        >
          Abandon
        </button>
      </div>
    </div>
  );
}

export default Versus;
