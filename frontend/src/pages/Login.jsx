/* eslint-disable import/no-unresolved */
import { useEffect } from "react";
import PropTypes from "prop-types";
import LoginCard from "../components/LoginCard";

export default function Login({ setAudioName }) {
  useEffect(() => {
    setAudioName("mainmusic");
  }, []);
  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-125px)]">
      <LoginCard />
    </section>
  );
}

Login.propTypes = {
  setAudioName: PropTypes.func.isRequired,
};
