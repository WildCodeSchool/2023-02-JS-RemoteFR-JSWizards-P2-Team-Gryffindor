// import { NavLink } from "react-router-dom";

export default function RegisterCard() {
  return (
    <div className="text-dark bg-[#ececec]/30 backdrop-blur-sm rounded-3xl w-[300px] px-12 py-8">
      <div className="flex-col space-y-2">
        <h2 className="flex justify-center text-xl">Register</h2>

        <form className="space-y-2">
          <div>
            <label htmlFor="email" className="text-base text-dark">
              Email
            </label>
            <input
              type="email"
              placeholder="username@gmail.com"
              className="placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-secondary text-xs outline-none text-dark leading-5 py-1 px-3 transition-colors duration-300 ease-in-out"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-base text-dark">
              Password
            </label>
            <div className="flex items-center">
              <input
                type="Password"
                placeholder="Password"
                className="placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-secondary text-xs outline-none text-dark leading-5 py-1 pl-3 pr-9 duration-300 ease-in-out"
                id="password"
              />
              <img
                className="absolute right-16"
                src="./public/icon/pass-show.svg"
                alt="show password icon"
              />{" "}
            </div>
            <div className="flex items-center ">
              <input
                type="password"
                placeholder="Confirm password"
                className="placeholder:font-light w-full bg-white border rounded-md border-gray-300 focus:border-secondary text-xs outline-none text-dark leading-5 py-1 pl-3 pr-9 duration-300 ease-in-out"
              />
              <img
                className="absolute right-16"
                src="./public/assets/icon/pass-show.svg"
                alt="show password icon"
              />{" "}
            </div>
          </div>
          <button
            type="button"
            className="text-secondary py-2 px-5 w-full bg-primary hover:bg-secondary hover:text-primary rounded border border-gray-200 duration-300 ease-in-out"
          >
            Create account
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
          >
            <img src="./public/icon/google.svg" alt="Google login button" />
          </button>
        </div>
        <p className="flex justify-center text-xs">Already have an account?</p>
        {/* <NavLink to="/login"> */}
        <p className="flex justify-center text-xs font-semibold">Sign in!</p>
        {/* </NavLink> */}
      </div>
    </div>
  );
}
