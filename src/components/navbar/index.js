import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Redux Actions
import { changeTheme } from "../../redux/actions/changeThemeActions";
// Custom Components
import Navi from "../navi";
//Third Party Dependencies
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ refreshPage }) => {
  const theme = useSelector((state) => state.changeThemeReducer);
  const dispatch = useDispatch();

  const handleTheme = () => {
    if (theme === "light") {
      dispatch(changeTheme("dark"));
    } else {
      dispatch(changeTheme("light"));
    }
  };

  return (
    <nav>
      <div className="logo-container">
        <span
          className={`logo ${theme}-logo`}
          onClick={() => refreshPage("logo")}
        ></span>
      </div>
      <div className="navi-container">
        <Navi />
      </div>
      <div className={`search-container ${""}`}>
        <InputGroup>
          <FormControl
            placeholder="Lig, takım ara"
            autoComplete="off"
            aria-label="Ara"
            id="search-input"
            className="search-input"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">
              <FontAwesomeIcon icon={faTimes} />
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <div className="nav-right">
        <div>
          <BootstrapSwitchButton
            onlabel={<FontAwesomeIcon icon={faSun} />}
            offlabel={<FontAwesomeIcon icon={faMoon} />}
            onChange={handleTheme}
          />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
