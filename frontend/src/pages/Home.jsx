import { useEffect } from "react";
import PropTypes from "prop-types";
import Hero from "../components/Home/Hero";
import DisplayHouses from "../components/Home/DisplayHouses";

export default function Home({ setAudioName }) {
  useEffect(() => {
    setAudioName("mainmusic");
  }, []);
  return (
    <section className="flex flex-col items-center space-y-8">
      <Hero />
      <DisplayHouses />
      <div className="flex flex-col justify-center item-start w-full md:max-w-[1290px] space-y-8">
        <h2 className="text-xl font-serif">How to play the game</h2>
        <p>
          Hogwarts Magic Cards is a strategy turn by turn card game set in the
          world of Harry Potter. Select your House and Wizard to take part in an
          epic 1v1 battle.
        </p>
        <div className="space-y-2">
          <p>
            Step 1: Select the house you want to fight with, the character
            you'll be able to select after will depend of your house's choice.
          </p>
          <p>
            Step 2: Pick your favorite wizard between a selection of hundreds of
            characters, and be ready to fight!
          </p>
          <p>
            Step 3: You'll be granted 3 spells in total, one to attack, one to
            heal yourself and one spell to increase your defense points. You can
            use attacks at any time, as well as defense spell but this one can
            be used only once per fight. As for your health spell, you'll be
            able to regenerate a bit of health when your HP goes to 50 and
            bellow, it's also a one time use.
          </p>
          <p>
            Step 4: Use your spells against your opponent and try to defeat him.
            The first wizard to have his health points to zero will lose the
            fight.
          </p>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  setAudioName: PropTypes.func.isRequired,
};
