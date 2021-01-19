import useAppContext from "@hooks/useAppContext";
import { useEffect } from "react";

export default function useRefreshScroll() {
  const {
    state: { theScroll },
  } = useAppContext();

  useEffect(() => {
    if (theScroll) {
      setTimeout(() => {
        theScroll.update();
      }, 500);
    }
  }, [theScroll]);
}
