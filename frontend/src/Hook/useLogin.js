import { useEffect, useState } from "react";

export default function useLogin() {
  const [logged, setLogin] = useState(false);
  useEffect(() => {
    if (logged) {
      localStorage.setItem("loggedIn", true);
    }
  }, [logged]);
  return [logged, setLogin];
}
