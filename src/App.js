import * as React from "react";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import Home from "./Home";
import Maestro from "./Maestro";
import MusicPlayer from "./MusicPlayer";
import NavBar from "./NavBar";
import history from "./history";
import WhoWantsToBeAProgrammer from "./WhoWantsToBeAProgrammer";
import Yeelight from "./Yeelight";
import FacebookDesktopApp from "./FacebookDesktopApp";
import Links from "./Links";
import AboutMe from "./AboutMe";
import MessagingSystem from "./MessagingAPI";
import ScalableServing from "./ScalableServing";
import GenderClassification from "./GenderClassification";
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <NavBar />
        <div className="contetnt">
          <Switch>
            <Route exact path="/about_me">
              <AboutMe />
            </Route>
            <Route exact path="/messaging_system">
              <MessagingSystem />
            </Route>
            <Route exact path="/scaleable_serving">
              <ScalableServing />
            </Route>
            <Route exact path="/gender_classification">
              <GenderClassification/>
            </Route>
            <Route exact path="/linkedin_bot">

            </Route>
            <Route exact path="/facebook">
              <FacebookDesktopApp />
            </Route>
            <Route exact path="/yeelight">
              <Yeelight />
            </Route>
            <Route exact path="/who_wants_to_be_a_programmer">
              <WhoWantsToBeAProgrammer />
            </Route>
            <Route exact path="/music_player">
              <MusicPlayer />
            </Route>
            <Route exact path="/maestro">
              <Maestro />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <div className="links">
          <Links />
        </div>
      </div>
    </Router>
  );
}

export default App;
