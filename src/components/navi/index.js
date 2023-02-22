import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// Third party Dependencies
import {
  faBars,
  faCrown,
  faStopwatch,
  faStream,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navi = () => {
  const theme = useSelector((state) => state.changeThemeReducer);

  return (
    <ul className="navi">
      <li>
        <NavLink
          exact
          activeClassName="active"
          to={{
            pathname: "/",
            state: {
              from: "/",
            },
          }}
        >
          <span>
            <FontAwesomeIcon icon={faBars} />
            &nbsp;
          </span>
          <span>{"Bülten"}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: "/iddaa",
            state: {
              from: "/iddaa",
            },
          }}
        >
          <span>
            <FontAwesomeIcon icon={faStopwatch} />
            &nbsp;
          </span>
          <span>{"Canlı"}</span>
          {0 ? <span className="live-count">{""}</span> : ""}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: "/live-program",
            state: {
              from: "/ive-program",
            },
          }}
        >
          <span>
            <FontAwesomeIcon icon={faStream} />
            &nbsp;
          </span>
          <span>{"Canlı Bülten"}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: "/outright",
            state: {
              from: "outright",
            },
          }}
        >
          <span>
            <FontAwesomeIcon icon={faTrophy} />
            &nbsp;
          </span>
          <span>{"Uzun Vadeli"}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: "/king-deals",
            state: {
              from: "king-deals",
            },
          }}
        >
          <span>
            <FontAwesomeIcon icon={faCrown} />
            &nbsp;
          </span>
          <span>{"Kral Fırsatlar"}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: "/results",
            state: {
              from: "results",
            },
          }}
        >
          <span>
            <span className={`result-icon-${theme}`}></span>
          </span>
          <span>{"Sonuçlar"}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: "/toto-game",
            state: {
              from: "toto-game",
            },
          }}
        >
          <span>
            <span className={`sportoto-icon-${theme}`}></span>
          </span>
          <span>{"Spor Toto"}</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navi;
