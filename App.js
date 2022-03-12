import './App.css';
import React,{useState} from "react";
import NavBar from './components/Navbar/NavBar';
import ExploreOverlay from './components/ExploreOverlay/ExploreOverlay';

function App() {
// change closeBtn to false once done with the developement
  const [closeBtn,setCloseBtn] = useState(true);
  const [exploreOption,setExploreOption] = useState(false);

  return (
    <div className="App">

      <NavBar closeBtn = {setCloseBtn}/>
      {closeBtn?<ExploreOverlay closeBtn = {setCloseBtn} setExploreOption = {setExploreOption} exploreOption = {exploreOption} />:null}
      
    </div>
  );
}

export default App;
