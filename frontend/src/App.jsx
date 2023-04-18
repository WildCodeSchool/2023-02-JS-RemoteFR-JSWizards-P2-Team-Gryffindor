import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Pages
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Character from "./pages/Character";
import Inventory from "./pages/Inventory";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="play" element={<Play />} />
      <Route path="character" element={<Character />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="account" element={<Account />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
