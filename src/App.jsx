import React from "react";
import "./styles/App.css";
import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <CookieClicker />
      <CatFacts />
      <Users />
    </div>
  );
}

export default App;
