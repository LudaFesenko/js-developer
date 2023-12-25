import { NavLink } from "react-router-dom";

const normalLink = "list-item__link";
const activeLink = "list-item__link list-item__link--active";
const classNameFn = ({ isActive }) => (isActive ? activeLink : normalLink);

function NavlinkHeader({ to, text }) {
  return (
    <NavLink to={to} className={classNameFn}>
      {text}
    </NavLink>
  );
}

export default NavlinkHeader;
