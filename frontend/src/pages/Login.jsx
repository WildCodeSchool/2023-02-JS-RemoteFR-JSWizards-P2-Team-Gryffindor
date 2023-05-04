/* eslint-disable import/no-unresolved */
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLogin } from "../Hook";
import LoginCard from "../components/LoginCard";

export default function Login({ setAudioName }) {
  const [setLoggedIn] = useLogin();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    setAudioName("mainmusic");
  }, []);

  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-125px)]">
      <LoginCard onLogin={handleLogin} />
    </section>
  );
}

Login.propTypes = {
  setAudioName: PropTypes.string.isRequired,
};
