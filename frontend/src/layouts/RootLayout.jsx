import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

export default function RootLayout() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    setLoggedIn(false);
  };

  return (
    <div className="root-layout min-h-screen bg-darkmode text-primary">
      <header>
        <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
      </header>

      <main className="px-6 py-6 md:px-8 md:py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
