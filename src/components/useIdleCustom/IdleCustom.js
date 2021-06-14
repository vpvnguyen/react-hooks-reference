import { useIdleCustom } from "./useIdleCustom";

export const IdleCustom = () => {
  const isTimeout = useIdleCustom();
  return <div>{isTimeout ? "Timeout" : "Active"}</div>;
};
