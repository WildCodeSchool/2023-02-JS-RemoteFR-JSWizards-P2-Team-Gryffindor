import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="root-layout min-h-screen bg-darkmode text-primary">
      <header>
        <Navbar />
      </header>

      <main className="px-6 py-6 md:px-8 md:py-8">
        <Outlet />
      </main>
    </div>
  );
}
