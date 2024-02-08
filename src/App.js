import { useEffect, useState } from "react";
import "./styles.css";
// import WorkSpace from "../.codesandbox/workspace.json";
// console.log(WorkSpace);

export default function App() {
  const [width, setWidth] = useState(0);
  const [screenType, setScreenType] = useState("");

  const updateScreenType = (width) => {
    if (1920 <= width) setScreenType("desktopHd");
    else if (1400 <= width && width <= 1919) setScreenType("desktop");
    else if (1024 <= width && width <= 1399) setScreenType("tablet");
    else if (320 <= width && width <= 1023) setScreenType("mobile");
  };

  useEffect(() => {
    const updateDimensions = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);
      updateScreenType(currentWidth);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  console.log(width);

  return (
    <div className={`App ${screenType}`}>
      <h1>Hello React</h1>
      <h2>Bu benim harika sitem!</h2>
      <p>Screen Width is: {width}px</p>
    </div>
  );
}
