import { NavLink } from "react-router-dom";
import type { NavItemProps } from "../interfaces";

const NavItem = ({ icon, text, path }: NavItemProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `d-flex justify-content-center align-items-center fs-4 gap-2 w-100 rounded fw-semibold p-2 text-dark text-decoration-none ${
          isActive ? "bg-color-primary" : ""
        }`
      }
    >
      <img src={icon} alt="icon" />
      {text}
    </NavLink>
  );
};

export default NavItem;
