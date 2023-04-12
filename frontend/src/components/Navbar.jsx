export default function Navbar() {
  return (
    <>
      <div className="logo-wrapper">
        <img
          className="max-w-md"
          src="./public/icon/logo.svg"
          alt="Logo"
          width="55"
          height="40"
        />
      </div>
      <div className="flex gap-[clamp(0.5rem,2vw,2rem)]">
        <ul className="hidden md:flex items-center gap-[clamp(0.5rem,2vw,2rem)] text-primary text-base">
          <li>Home</li>
          <li>Play</li>
          <li>Inventory</li>
          <li>Account</li>
        </ul>
      </div>

      {/* Mobile menu */}
      <button type="button" className="md:hidden">
        <img
          src="./public/icon/mobile-menu.svg"
          alt="mobile-menu"
          width="38"
          height="30"
        />
      </button>

      <button type="button">
        <img
          className="max-w-md"
          src="./public/icon/logged.svg"
          alt="connect"
          width="20"
          height="20"
        />
      </button>
    </>
  );
}
