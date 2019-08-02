import { useEffect } from "react";

const UseTimeout = (action, time = 1000) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("#### TIMEOUT");
      action();
    }, time);
    return () => clearTimeout(timer);
  }, []);
}

export default UseTimeout;
