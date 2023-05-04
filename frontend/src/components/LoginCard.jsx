import { NavLink } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import dataUsers from "../db/data_users.json";

import "react-toastify/dist/ReactToastify.css";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const passwordType = passwordVisible ? "text" : "password";

  const wrong = () => {
    toast.error("Wrong email or password !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = dataUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      window.location.replace("/");
    } else {
      wrong();
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        window.location.replace("/");
        console.info(data);
      } catch (err) {
        wrong();
        console.error(err);
      }
    },
  });

  return (
    <div className="text-dark bg-[#ececec]/30 rounded-3xl w-[300px] px-12 py-8">
      <div className="flex-col space-y-2" onSubmit={handleSubmit}>
        <h2 className="flex justify-center text-xl">Login</h2>

        <form className="space-y-2">
          <div>
            <label htmlFor="email" className="text-base text-dark">
              Email
            </label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-secondary text-xs outline-none text-dark leading-5 py-1 px-3 transition-colors duration-300 ease-in-out"
              id="email-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern=".{5,25}"
              required
              title="5 to 25 characters"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-base text-dark">
              Password
            </label>
            <div className="flex items-center relative">
              <input
                type={passwordType}
                placeholder="Password"
                className="relative placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-secondary text-xs outline-none text-dark leading-5 py-1 pl-3 pr-8 duration-300 ease-in-out"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern=".{4,12}"
                required
                title="4 to 12 characters"
              />
              {/* eslint-disable */}
              <span className="flex absolute right-3">
                <img
                  src={
                    passwordVisible
                      ? "./icon/pass-hide.svg"
                      : "./icon/pass-show.svg"
                  }
                  alt="show password icon"
                  onClick={handlePasswordVisibility}
                />
              </span>
              {/* eslint-enable */}
            </div>
            <label htmlFor="Passchange" className="text-xs">
              <a href="/ChangePassword">Forgot password?</a>
            </label>
          </div>
          <button
            type="submit"
            className="text-secondary py-2 px-5 w-full bg-primary hover:bg-secondary hover:text-dark rounded border border-gray-200 duration-300 ease-in-out"
          >
            Sign in
          </button>
        </form>

        <p className="relative flex justify-center text-xs">
          <span className="line-login-before" />
          Or continue with
          <span className="line-login-after" />
        </p>

        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center justify-center rounded-3xl px-5 py-2.5 w-20 bg-white ring-1 ring-transparent hover:ring-secondary duration-300 ease-in-out"
            onClick={login}
          >
            <img src="./icon/google.svg" alt="Google login button" />
          </button>
        </div>
        <p className="flex justify-center text-xs">
          Don't have an account yet?
        </p>
        <NavLink to="/register">
          <p className="flex justify-center text-xs font-semibold">
            Register here!
          </p>
        </NavLink>
      </div>
      <ToastContainer />
    </div>
  );
}
