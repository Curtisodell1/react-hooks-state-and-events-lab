import React, {useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [toggleDarkMode, setToggleDarkMode] = useState(false)
  function handleDarkMode(){
    setToggleDarkMode(!toggleDarkMode)
  }
  const appClass = toggleDarkMode ? "App dark" : "App light"
  const mode = toggleDarkMode ? "Light Mode" : "Dark Mode"  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
