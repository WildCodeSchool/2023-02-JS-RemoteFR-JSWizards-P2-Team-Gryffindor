import { useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../components/Card";
import AccountBanner from "../components/Account/AccountBanner";
import GameHistoryReact from "../components/Account/GameHistoryReact";

export default function Account({ setAudioName }) {
  useEffect(() => {
    setAudioName("mainmusic");
  }, []);

  let selectedCharacter = localStorage.getItem("selectedCharacter") || null;
  selectedCharacter = selectedCharacter ? JSON.parse(selectedCharacter) : null;
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-serif">My account</h2>
      <div className="bg-dark rounded p-4 space-y-8 justify-center">
        <div className="flex justify-around">
          <div className="space-y-8 text-center">
            <h2 className="text-lg">Games played per house</h2>
            <AccountBanner />
          </div>
          <div className="flex flex-col space-y-8 text-center items-center relative min-w-[186px]">
            <h2 className="text-lg">Latest card played</h2>
            <div className="absolute top-28">
              <Card
                idwizard={selectedCharacter?.id}
                name={selectedCharacter?.name}
                image={selectedCharacter?.image}
                house={selectedCharacter?.house}
              />
            </div>
          </div>
        </div>
        <div>
          <GameHistoryReact />
        </div>
      </div>
    </section>
  );
}

Account.propTypes = {
  setAudioName: PropTypes.func.isRequired,
};
