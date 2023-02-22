import React from "react";
// Common
import Clock from "../common/clock";
// Third Party Dependencies
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Betslip = ({ refreshPage }) => {

  const goLandingPage = () => {
    refreshPage("exit");
  };

  return (
    <aside
      className={`betslip ${
        0 ? "system" : "combine"
      }`}
    >
      <div className="betslip__header-container">
        <div className="time-container">
          <Clock />
        </div>
        <div className="betslip__header">
          <span>Kuponum</span>
        </div>
        <span className="betslip__header-count">{"0"}</span>
        <Button className="landing-page-button" onClick={() => goLandingPage()}>
          <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
        </Button>
      </div>
    </aside>
  );
};

export default Betslip;
