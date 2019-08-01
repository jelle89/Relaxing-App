import React from "react";
import store from "./store";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import Stress from "./components/StressComponent";
import Relax from "./components/RelaxComponent";
import RelaxMessages from "./components/RelaxMessages"
import StressMessages from "./components/StressMessages"


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter store={store}>
    <div className="App">
      <Switch>
        <Route exact path="/" component={IntroScreen} />
        <Route path="/stress" component={Stress} />
        <Route path="/relax" exact component={Relax} />
        <Route path="/relaxmessages" component={RelaxMessages} />
        <Route path="/stressmessages" component={StressMessages} />
      </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
