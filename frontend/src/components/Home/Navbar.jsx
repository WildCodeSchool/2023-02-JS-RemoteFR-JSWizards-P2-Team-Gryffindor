import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useLogout } from "../../Hook";

export default function Navbar({ loggedIn }) {
  return (
    <nav className="sticky bg-dark flex flex-row justify-between items-center px-8 py-2.5">
      <div className="logo-wrapper">
        <NavLink to="/">
          <img
            className="max-w-md"
            src="./icon/logo.svg"
            alt="Logo"
            width="55"
            height="40"
          />
        </NavLink>
      </div>
      <div className="flex gap-[clamp(0.5rem,2vw,2rem)]">
        <ul className="hidden md:flex items-center gap-[clamp(0.5rem,2vw,2rem)] text-primary text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/play"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Play
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Account
            </NavLink>
          </li>
        </ul>
        {/* Mobile menu */}
        <button type="button" className="md:hidden">
          <img
            src="./icon/mobile-menu.svg"
            alt="mobile-menu"
            width="38"
            height="30"
          />
        </button>
        {loggedIn ? (
          <button type="button" name="Logout" onClick={useLogout}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              <img
                className="max-w-md"
                src="./icon/logout.svg"
                alt="connect"
                width="20"
                height="20"
              />
            </NavLink>
          </button>
        ) : (
          <button type="button" className="hidden md:block" name="Login">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              <img
                className="max-w-md"
                src="./icon/logged.svg"
                alt="connect"
                width="20"
                height="20"
              />
            </NavLink>
          </button>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
