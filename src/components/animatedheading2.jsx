import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Get in Touch 🤝", "Email me and 📧", "get your job done "];

const Animated2 = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </h1>
  );
};
export default Animated2;
