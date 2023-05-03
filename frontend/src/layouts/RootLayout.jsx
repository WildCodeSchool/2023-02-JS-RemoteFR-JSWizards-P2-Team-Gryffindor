import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

export default function RootLayout() {
  return (
    <div className="root-layout min-h-screen bg-darkmode text-primary">
      <header>
        <Navbar />
      </header>

      <main className="px-6 py-6 md:px-8 md:py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
