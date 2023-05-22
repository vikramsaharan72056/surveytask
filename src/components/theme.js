import React, { useEffect, useState } from "react";
import App from "../App";

const Theme = () => {
  const [theme, setTheme] = useState({
    selectedOption: "default",
    themeName: "Default theme",
    themeType: "light",
    fromType: "standard",
    allQuestionsMandatory: false,
    enableSkip: true,
    optionType: "radio",
    font: "arial",
    color: "#000000",
  });

  useEffect(() => {
    fetch("https://surveyform-xpol.onrender.com/themes")
      .then((res) => res.json())
      .then((data) => {
        const selectedTheme = data[data.length - 1];
        setTheme(selectedTheme);
      })
      .catch((err) => {
        alert("unable to get theme");
      });
  }, []);
  return <App theme={theme} />;
};

export default Theme;
