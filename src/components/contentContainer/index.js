import React from "react";
import { Route, Switch } from "react-router-dom";
// custom components
import Programm from "../../pages/programm";

const ContentContainer = () => {
  return (
    <Switch>
      <Route path="/" exact component={Programm} />
      <Route path="/iddaa" component={Programm} />
      <Route path="/outright" component={Programm} />
      <Route path="/live-program" component={Programm} />
      <Route path="/king-deals" component={Programm} />
      <Route path="/toto-game" component={Programm} />
      <Route path="/results" component={Programm} />
    </Switch>
  );
};

export default ContentContainer;
