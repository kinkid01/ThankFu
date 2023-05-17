import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ThankFu`;
  }, [title]);

  return null;
};
