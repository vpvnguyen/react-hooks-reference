import React from "react";
import createActivityDetector from "activity-detector";

const useIdle = (options) => {
  const [isIdle, setIsIdle] = React.useState(false);

  React.useEffect(() => {
    const activityDetector = createActivityDetector(options);
    activityDetector.on("idle", () => {
      setIsIdle(true);
      console.log("Idle Time: " + Date.now());
    });
    activityDetector.on("active", () => {
      setIsIdle(false);
      console.log("Active Time: " + Date.now());
    });
    return () => activityDetector.stop();
  }, []);

  return isIdle;
};

export const ActivityDetector = () => {
  const isIdle = useIdle({ timeToIdle: 1000 });
  return (
    <div>
      <div>{isIdle ? "Idle" : "Active"}</div>
    </div>
  );
};
