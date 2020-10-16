import React, {useState} from 'react';
import { Switch, Route } from "react-router-dom";
import HamburgerMenuIcon from './components/hamburgerMenuIcon';
import HamburgerMenu from "./components/hamburgerMenu";
import NavBar from './components/navBar';
import ProfileSection from './components/profileSecion';
import Page404 from './components/404page';
import HomePage from './components/homePage';
import AboutMe from './components/aboutMe';

function App() {
  const [open, setOpen] = useState(false);

  let style = {
    display: "none",
  }
  if(open){
    style.display = "block";
  }else{
    style.display = "none"
  }
  

  return (
    <div className="row">

      <NavBar/>

      <ProfileSection/>

      <div className="main col">

        <div style={style} className="hamburgerMenuWrapper">
          <HamburgerMenu setOpen={setOpen} />
        </div>

        <div className="hamburgerMenuIcon">
          <HamburgerMenuIcon
              isOpen={open}
              menuClicked={()=>setOpen(!open)}
              width={30}
              height={20}
              strokeWidth={1}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
            />
        </div>

        <Switch>
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/" exact component={HomePage}/>
          <Route path="*" component={Page404} />
        </Switch>

      </div>
    </div>
  );
}

export default App;
