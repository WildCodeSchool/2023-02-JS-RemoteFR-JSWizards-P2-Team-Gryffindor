/* eslint-disable import/no-unresolved */
import { Outlet } from "react-router-dom";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

export default function RootLayout() {
  return (
    <div className="root-layout min-h-screen bg-darkmode text-primary">
      <header>
        <nav className="sticky bg-dark flex justify-between items-center px-8 py-2.5">
          <Navbar />
        </nav>
      </header>

      <main className="px-6 py-6 md:px-8 md:py-8">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
