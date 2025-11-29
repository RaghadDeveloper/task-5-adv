import { NavLink } from "react-router-dom";
import type { NavItemProps } from "../interfaces";

const NavItem = ({ icon, text, path, onClick }: NavItemProps) => {
  const style =
    "d-flex justify-content-center align-items-center fs-4 gap-4 w-100 rounded fw-semibold p-2 text-dark";

  if (!path) {
    return (
      <div className={`${style} cursor-pointer mt-auto`} onClick={onClick}>
        {text}
        <img src={icon} alt="icon" />
      </div>
    );
  }

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${style} text-decoration-none ${isActive ? "bg-color-primary" : ""}`
      }
    >
      <img src={icon} alt="icon" />
      {text}
    </NavLink>
  );
};

export default NavItem;
