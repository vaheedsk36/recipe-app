import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import ExploreOverlay from "./components/ExploreOverlay/ExploreOverlay";

function App() {
  // change closeBtn to false once done with the developement
  const [closeBtn, setCloseBtn] = useState(true);
  const [findRecipeOption, setFindRecipeOption] = useState(false);
  const [exploreOption, setExploreOption] = useState(false);
  const [breakfastOption, setBreakfastOption] = useState(false);
  const [lunchOption, setLunchOption] = useState(false);
  const [dinnerOption, setDinnerOption] = useState(false);
  const [snacksOption, setSnacksOption] = useState(false);
  const [breadRecipes, setBreadRecipes] = useState(false);
  const [dessertRecipes, setDessertRecipes] = useState(false);
  const [drinkRecipes, setDrinkRecipes] = useState(false);
  const [mainDishes, setMainDishes] = useState(false);
  const [saladRecipes, setSaladRecipes] = useState(false);
  const [sideDish, setSideDish] = useState(false);
  const [soupRecipes, setSoupRecipes] = useState(false);

  // try context api tody itself in this project

  // const overlayStates={
  //   exploreOption:exploreOption,
  //   setFindRecipeOption:setFindRecipeOption,


  // }

  return (
    <div className="App">
      <NavBar closeBtn={setCloseBtn} />
      {closeBtn ? (
        <ExploreOverlay
          closeBtn={setCloseBtn}
          setFindRecipeOption={setFindRecipeOption}
          findRecipeOption={findRecipeOption}
        />
      ) : null}
    </div>
  );
}

export default App;
