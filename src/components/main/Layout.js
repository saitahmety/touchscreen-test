import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
// Custom Components
import NavBar from "../navbar";
import Betslip from "../betslip";
import ContentContainer from "../contentContainer";
import SelectSport from "../selectSports";

const Layout = () => {
  const theme = useSelector((state) => state.changeThemeReducer);

  useEffect(() => {
    // TODO - sadece enter için geçerli - prod ortamında tamamen kapatılacak.
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
    // Back button disabled
    window.location.hash = "no-back-button";
    window.location.hash = "Again-no-back-button";
    window.onhashchange = function () {
      window.location.hash = "no-back-button";
    };
    //restartScreen();
  }, []);


  const refreshPage = (type) => {
    if(type === "exit") window.alert("Exit Button Clicked");
    else if (type === "logo") window.alert("Logo Button Clicked");
    //window.location.reload();
  };
  return (
    <>
      <div id="layout" className={`${theme}-theme-layout layout`}>
        <div className="left-column">
          <NavBar refreshPage={refreshPage} />
          <div className="layout-middle">
            <Switch>
              <Route path="/" exact component={SelectSport} />
              <Route path="/iddaa" component={SelectSport} />
              <Route path="/live-program" component={SelectSport} />
              <Route path="/outright" component={SelectSport} />
              <Route path="/king-deals" component={SelectSport} />
              <Route path="/results" component={SelectSport} />
            </Switch>
            <ContentContainer />
          </div>
        </div>
        <Betslip refreshPage={refreshPage} />
      </div>
    </>
  );
};

export default Layout;
