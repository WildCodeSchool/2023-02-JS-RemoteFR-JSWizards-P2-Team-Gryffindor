import { useState, useEffect } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2/dist/sweetalert2.all.min";
import Card from "../Card";
import CharSpells from "./Spells";

function Versus() {
  const [myCharacter, setMyCharacter] = useState(null);
  const [enemyCharacter, setEnemyCharacter] = useState(null);
  const houseTab = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  const MySwal = withReactContent(Swal);

  function randomHouse() {
    const randomIdx = Math.floor(Math.random() * 3);
    return houseTab[randomIdx];
  }
  const fetchData = async () => {
    // first step : fetch my character
    const myCharacterId = localStorage.getItem("selectedCharacterId");
    const myCharacterIdUrl = `https://hp-api.onrender.com/api/character/${myCharacterId}`;

    try {
      const response = await fetch(myCharacterIdUrl);
      const data = await response.json();
      setMyCharacter(data[0]);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
    // second step : fetch enemy character
    const enemyCharacterId = localStorage.getItem("randomCharacterId");
    const dataEnemy = `https://hp-api.onrender.com/api/character/${enemyCharacterId}`;

    try {
      const response = await fetch(dataEnemy);
      const data = await response.json();

      const enemyData = data[0];
      enemyData.house = enemyData.house ? enemyData.house : randomHouse();

      setEnemyCharacter(enemyData);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Stats
  const [myCharacterHP, setMyCharacterHP] = useState(200);
  const [myCharacterDP, setMyCharacterDP] = useState(
    Math.floor(Math.random() * 30) + 100
  );
  const [myCharacterAP, setMyCharacterAP] = useState(
    Math.floor(Math.random() * 30) + 100
  );
  const [enemyCharacterHP, setEnemyCharacterHP] = useState(200);
  const [enemyCharacterDP, setEnemyCharacterDP] = useState(
    Math.floor(Math.random() * 30) + 100
  );
  const [enemyCharacterAP, setEnemyCharacterAP] = useState(
    Math.floor(Math.random() * 30) + 100
  );

  const startDamage = (enemyId) => {
    const damage = Math.floor(Math.random() * 30) + 10; // dégâts aléatoires entre 10 et 30
    if (myCharacter && enemyCharacter && enemyCharacter.id === enemyId) {
      setEnemyCharacterHP(enemyCharacterHP - damage);
      if (enemyCharacterHP - damage <= 0) {
        setEnemyCharacterHP(0);
        MySwal.fire({
          title: <strong>YEAH!</strong>,
          html:
            `<i>You beat ${enemyCharacter.name}, you won the Triwizard Cup!</i>` +
            "<br/>" +
            "<br/>" +
            "<a href='/' style=color:D3A625>Back to Home</a>",
          iconHtml: '<img src="/image/cup.png" />',
          showConfirmButton: false,
        });
      }
    }
    if (enemyCharacter && myCharacter && myCharacter.id === enemyId) {
      setMyCharacterHP(myCharacterHP - damage);
      if (myCharacterHP - damage <= 0) {
        setMyCharacterHP(0);
        MySwal.fire({
          title: <strong>Oh no!</strong>,
          html:
            `<i>${enemyCharacter.name} beat you...</i>` +
            "<br/>" +
            "<br/>" +
            "<a href='/' style=color:D3A625>Back to Home</a>",
          iconHtml: '<img src="/image/scar.png" />',
          showConfirmButton: false,
        });
      }
    }
  };

  const myHandleAP = () => {
    const points = Math.floor(Math.random() * 30) + 10;
    setMyCharacterAP(myCharacterAP + points);
  };

  const myHandleDP = () => {
    const points = Math.floor(Math.random() * 30) + 10;
    setMyCharacterDP(myCharacterDP + points);
  };

  const myHandleHP = () => {
    const points = Math.floor(Math.random() * 30) + 10;
    setMyCharacterHP(myCharacterHP + points);
  };

  const enemyHandleAP = () => {
    const points = Math.floor(Math.random() * 30) + 10;
    setEnemyCharacterAP(enemyCharacterAP + points);
  };

  const enemyHandleDP = () => {
    const points = Math.floor(Math.random() * 30) + 10;
    setEnemyCharacterDP(enemyCharacterDP + points);
  };

  const enemyHandleHP = () => {
    const points = Math.floor(Math.random() * 30) + 10;
    setEnemyCharacterHP(enemyCharacterHP + points);
  };
  return (
    <div className="flex flex-col justify-around min-h-[calc(100vh-210px)] bg-[url('./image/wood.jpg')] bg-cover rounded-xl w-full">
      <div className="flex justify-around items-center">
        <div className="justify-center items-center space-y-24">
          <div className="flex justify-around gap-8">
            <div className="flex flex-col justify-center items-center gap-8 potions">
              <button type="button" onClick={myHandleAP}>
                AP Potion ⚔️
                {myCharacterAP}
              </button>
              <button type="button" onClick={myHandleDP}>
                DP Potion 🛡️
                {myCharacterDP}{" "}
              </button>
              <button type="button" onClick={myHandleHP}>
                HP Potion ❤️
                {myCharacterHP}
              </button>
            </div>
            {myCharacter && (
              <Card
                name={myCharacter.name}
                image={myCharacter.image}
                house={myCharacter.house}
                idwizard={myCharacter.id}
                HP={myCharacterHP}
                AP={myCharacterAP}
                DP={myCharacterDP}
              />
            )}
          </div>
          <CharSpells
            house={myCharacter?.house}
            startDamage={() => startDamage(enemyCharacter.id)}
          />
        </div>
        <div className="justify-center items-center space-y-24">
          <div className="flex justify-around gap-8">
            {enemyCharacter && (
              <Card
                name={enemyCharacter.name}
                image={enemyCharacter.image}
                house={enemyCharacter.house}
                idwizard={enemyCharacter.id}
                HP={enemyCharacterHP}
                AP={enemyCharacterAP}
                DP={enemyCharacterDP}
              />
            )}
            <div className="flex flex-col justify-center items-center gap-8 potions">
              <button type="button" onClick={enemyHandleAP}>
                AP Potion ⚔️
                {enemyCharacterAP}
              </button>
              <button type="button" onClick={enemyHandleDP}>
                DP Potion 🛡️
                {enemyCharacterDP}
              </button>
              <button type="button" onClick={enemyHandleHP}>
                HP Potion ❤️
                {enemyCharacterHP}
              </button>
            </div>
          </div>
          <CharSpells
            house={enemyCharacter?.house}
            startDamage={() => startDamage(myCharacter.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Versus;
