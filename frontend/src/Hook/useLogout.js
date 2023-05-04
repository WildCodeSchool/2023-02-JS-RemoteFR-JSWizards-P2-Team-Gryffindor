import { useEffect } from "react";

export default function useLogout(onLogout) {
  useEffect(() => {
    localStorage.removeItem("loggedin");
    // mettre à jour le state du login
    if (onLogout) {
      onLogout();
    }
  }, []);
}
