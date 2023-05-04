import { useState, useEffect } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2/dist/sweetalert2.all.min";
import Card from "../Card";
import CharSpells from "./Spells";

function Versus() {
  const [myCharacter, setMyCharacter] = useState(null);
  const [enemyCharacter, setEnemyCharacter] = useState(null);

  const MySwal = withReactContent(Swal);

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
  const [hasUsedHP, setHasUsedHP] = useState(false);
  const [myCharacterHasUsedHP, setMyCharacterHasUsedHP] = useState(false);
  const [myCharacterDP, setMyCharacterDP] = useState(
    Math.floor(Math.random() * 30) + 100
  );
  const [hasUsedDP, setHasUsedDP] = useState(false);
  const [myCharacterHasUsedDP, setMyCharacterHasUsedDP] = useState(false);

  const [myCharacterAP, setMyCharacterAP] = useState(
    Math.floor(Math.random() * 30) + 100
  );
  const [enemyCharacterHP, setEnemyCharacterHP] = useState(200);
  const [enemyHasUsedHP, setEnemyHasUsedHP] = useState(false);
  const [enemyCharacterDP, setEnemyCharacterDP] = useState(
    Math.floor(Math.random() * 30) + 100
  );
  const [enemyHasUsedDP, setEnemyHasUsedDP] = useState(false);

  const [enemyCharacterAP, setEnemyCharacterAP] = useState(
    Math.floor(Math.random() * 30) + 100
  );

  const startDamage = (enemyId) => {
    const damage = Math.floor(Math.random() * 30) + 10; // dégâts aléatoires entre 10 et 30
    if (myCharacter && enemyCharacter && enemyCharacter.id === enemyId) {
      setEnemyCharacterHP(
        enemyCharacterHP - (damage + Math.round(myCharacterAP * 0.05))
      );
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
      setMyCharacterHP(
        myCharacterHP - (damage + Math.round(enemyCharacterAP * 0.05))
      );
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

  // FONCTION GETHP

  const getHP = (enemyId) => {
    const healthPoints = Math.floor(Math.random() * 30) + 10; // HP aléatoires entre 10 et 30
    if (enemyCharacter && myCharacter && myCharacter.id === enemyId) {
      setMyCharacterHP(myCharacterHP + healthPoints);
      setMyCharacterHasUsedHP(!hasUsedHP);
      setHasUsedHP(!hasUsedHP);
      setMyCharacterAP(myCharacterAP);
      setMyCharacterDP(myCharacterDP);
    }
    if (myCharacter && enemyCharacter && enemyCharacter.id === enemyId) {
      setEnemyCharacterHP(enemyCharacterHP + healthPoints);
      setEnemyHasUsedHP(!hasUsedHP);
      setHasUsedHP(!hasUsedHP);
      setEnemyCharacterAP(enemyCharacterAP);
      setEnemyCharacterDP(enemyCharacterDP);
    }
  };

  // FONCTION ADD DEFENCE POINTS

  const addDP = (enemyId) => {
    if (enemyCharacter && myCharacter && myCharacter.id === enemyId) {
      const myDefencePoints = Math.round(myCharacterDP * 1.5);
      setMyCharacterDP(myCharacterDP + myDefencePoints);
      setMyCharacterHasUsedDP(!myCharacterHasUsedDP);
      setHasUsedDP(!hasUsedDP);
      setMyCharacterAP(myCharacterAP);
      // setMyCharacterDP(myCharacterDP);
    }
    if (myCharacter && enemyCharacter && enemyCharacter.id === enemyId) {
      const enemyDefencePoints = Math.round(enemyCharacterDP * 1.5);
      setEnemyCharacterDP(enemyCharacterDP + enemyDefencePoints);
      setEnemyHasUsedDP(!enemyHasUsedDP);
      setHasUsedDP(!hasUsedDP);
      setEnemyCharacterAP(enemyCharacterAP);
      // setEnemyCharacterDP(enemyCharacterDP);
    }
  };

  // FONCTION ADD DP

  // const myHandleHP = () => {
  //   const points = Math.floor(Math.random() * 30) + 10;
  //   setMyCharacterHP(myCharacterHP + points);
  //   setHasUsedHP(true);
  //   setMyCharacterAP(myCharacterAP);
  //   setMyCharacterDP(myCharacterDP);
  // };

  // const enemyHandleHP = () => {
  //   const points = Math.floor(Math.random() * 30) + 10;
  //   setEnemyCharacterHP(enemyCharacterHP + points);
  //   setEnemyHasUsedHP(true);
  //   setEnemyCharacterAP(enemyCharacterAP);
  //   setEnemyCharacterDP(enemyCharacterDP);
  // };

  return (
    <div className="flex flex-col justify-around min-h-[calc(100vh-200px)] bg-[url('./image/wood.jpg')] bg-cover rounded-xl w-full">
      <div className="flex justify-around items-center">
        <div className="justify-center items-center space-y-24">
          <div className="flex justify-around gap-8">
            <div className="flex flex-col justify-center items-center gap-8 potions">
              <button type="button">
                AP ⚔️
                {myCharacterAP}
              </button>
              <button type="button">
                DP 🛡️
                {myCharacterDP}{" "}
              </button>

              <button type="button">
                HP ❤️
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
            getHP={() => getHP(myCharacter.id)}
            hasUsedHP={myCharacterHasUsedHP}
            characterHP={myCharacterHP}
            addDP={() => addDP(myCharacter.id)}
            hasUsedDP={myCharacterHasUsedDP}
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
              <button type="button">
                AP ⚔️
                {enemyCharacterAP}
              </button>
              <button type="button">
                DP 🛡️
                {enemyCharacterDP}
              </button>
              <button
                type="button"
                // onClick={
                //   !enemyHasUsedHP && enemyCharacterHP <= 30
                //     ? getHP
                //     : null
                // }
              >
                HP ❤️
                {enemyCharacterHP}
              </button>
            </div>
          </div>
          <CharSpells
            house={enemyCharacter?.house}
            startDamage={() => startDamage(myCharacter.id)}
            getHP={() => getHP(enemyCharacter.id)}
            hasUsedHP={enemyHasUsedHP}
            characterHP={enemyCharacterHP}
            addDP={() => addDP(enemyCharacter.id)}
            hasUsedDP={enemyHasUsedDP}
          />
        </div>
      </div>
    </div>
  );
}

export default Versus;
