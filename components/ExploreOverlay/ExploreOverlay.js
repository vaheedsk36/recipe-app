import React from "react";
import './ExploreOverlay.css';
import imgLogo from "../resources/logo.png";
import FindComponent from "./FindComponent";

const ExploreOverlay = (props)=>{
    console.log(props);

   
    
    return(
        <div className="overlay">
        <div className="overlay-close" onClick={()=>props.closeBtn(false)}>X</div>


        <div className="explore-overlay">
            <section className="header">
                <img src={imgLogo} alt="logo" />
                   <h1>Recipes Overlay</h1>    
            </section>
            <hr />

            <div className="overlay-container">
                
                <section className="overlay-navigator">
                   <div className="overlay-navigator-list">

                       <ul>
                           <li onClick={()=>props.setFindRecipeOption(true)}>Find a Recipe</li>
                           <li>Explore</li>
                           <li>Breakfast and Brunch Recipes</li>
                           <li>Lunch Recipes</li>
                           <li>Dinner Recipes</li>
                           <li>Snacks</li>
                           <li>Bread Recipes</li>
                           <li>Dessert Recipes</li>
                           <li>Drink Recipes</li>
                           <li>Main Dishes</li>
                           <li>Salad Recipes</li>
                           <li>Side Dish Recipes</li>
                           <li>Soup and Stews</li>
                       </ul>
                   </div>
                </section>

                <section className="overlay-recipes">
                    
                    <div className="displayData">
                    {props.findRecipeOption?<FindComponent/>:null}
                    
                    </div>
                </section>


            </div>

        </div>

        </div>
    )
}

 export default ExploreOverlay;