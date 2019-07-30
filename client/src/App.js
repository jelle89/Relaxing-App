import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import Stress from "./components/StressComponent";
import Relax from "./components/RelaxComponent";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={IntroScreen} />
        <Route path="/stress" component={Stress} />
        <Route path="/relax" exact component={Relax} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
