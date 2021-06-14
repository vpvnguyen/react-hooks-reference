import { useState, useEffect } from "react";
import IdleTimer from "./IdleTimer";

export const useIdleCustom = () => {
  const [isTimeout, setIsTimeout] = useState(false);
  useEffect(() => {
    const timer = new IdleTimer({
      timeout: 5, // expire after 5 seconds
      onTimeout: () => {
        setIsTimeout(true);
      },
      onExpired: () => {
        // do something if expired on load
        setIsTimeout(true);
      },
    });

    return () => {
      timer.cleanUp();
    };
  }, []);

  return isTimeout;
};
