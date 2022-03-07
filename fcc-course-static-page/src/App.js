import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [ isDarkMode, setIsDarkMode ] = React.useState(true);

  return (
    <div className="container">
      <Navbar darkMode={isDarkMode} />
      <Main darkMode={isDarkMode} />
    </div>
  );
}
