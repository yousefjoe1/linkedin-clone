import React from "react";
import { Route, Switch } from "react-router-dom";
import Dachboard from "./Components/dach/Dachboard";
import Home from "./Components/Home/Home";
import Join from "./Components/Join/Join";
import Signin from "./Components/Signin/Signin";

const App = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/join" render={(props) => <Join {...props} />} />
        <Route path="/signin" render={(props) => <Signin {...props} />} />
        <Route path="/dachboard" render={() => <Dachboard />} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
