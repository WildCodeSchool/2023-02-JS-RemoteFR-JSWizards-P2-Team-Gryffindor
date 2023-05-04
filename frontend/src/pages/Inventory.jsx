import { useEffect } from "react";
import PropTypes from "prop-types";
import ScrollBtn from "../components/ScrollBtn";
import CharSelection from "../components/Game/CharSelection";

export default function Inventory({ setAudioName }) {
  useEffect(() => {
    setAudioName("mainmusic");
  }, []);
  return (
    <>
      <CharSelection info="Card Inventory" />
      <ScrollBtn />
    </>
  );
}

Inventory.propTypes = {
  setAudioName: PropTypes.func.isRequired,
};
