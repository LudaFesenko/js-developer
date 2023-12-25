import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import "./styled.css";
import NavlinkHeader from "./NavlinkHeader";
import BtnDarkMode from "../btnDarMode/BtnDarkMode";
import me from "../../img/icons/me.svg";
function Navigation() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <div className="logo-me">
              <img src={me} alt="" width={"30px"} />
              <strong>JsDeveloper</strong>
            </div>
          </NavLink>
          <BtnDarkMode />

          <ul className="nav-list">
            <li className="list-item">
              <NavlinkHeader to="/" text={<AiOutlineHome size={"1.5em"} />} />
            </li>

            <li className="list-item">
              <NavlinkHeader to="/projects" text="Projects" />
            </li>

            <li className="list-item">
              <NavlinkHeader to="/contacts" text="Contacts" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
