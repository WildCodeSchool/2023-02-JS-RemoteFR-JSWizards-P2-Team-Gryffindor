/* eslint-disable import/no-unresolved */
import { useEffect } from "react";
import PropTypes from "prop-types";
import RegisterCard from "../components/RegisterCard";

export default function Register({ setAudioName }) {
  useEffect(() => {
    setAudioName("mainmusic");
  }, []);
  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-125px)]">
      <RegisterCard />
    </section>
  );
}

Register.propTypes = {
  setAudioName: PropTypes.func.isRequired,
};
