import useMediaQuery from "./useMediaQuery";
import { small, medium, large } from "../MediaQuery";
import { useEffect, useState } from "react";
const useImage = (smImg, medImg, lgImg) => {
  const width = useMediaQuery();
  const [image, setImage] = useState("");
  useEffect(() => {
    setImage(() => {
      if (width <= small) {
        return smImg;
      } else if (width <= medium) {
        return medImg;
      } else {
        return lgImg;
      }
    });
  }, [width]);

  return image;
};
export default useImage;
