import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="root-layout min-h-screen bg-darkmode text-primary">
      <header>
        <nav className="sticky bg-dark flex justify-between items-center px-8 py-2.5">
          <Navbar />
        </nav>
      </header>

      <main className="px-4 py-6 md:px-6">
        <Outlet />
      </main>
    </div>
  );
}
