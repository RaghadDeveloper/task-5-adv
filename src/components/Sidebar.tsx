import axios from "axios";
import { navItems } from "../data/navItems";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const profileImg = localStorage.getItem("profile_image");
  const userName = localStorage.getItem("name");

  const handleLogout = () => {
    axios.post("https://dashboard-i552.onrender.com/api/logout");

    localStorage.removeItem("token");
    localStorage.removeItem("profile_image");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <aside className="d-flex flex-column justify-content-center align-items-center p-5 h-100">
      <img
        src="/assets/images/FullLogo.png"
        alt="logo"
        className="bl-primary-light px-3 mb-5"
      />

      <img
        src={profileImg || "/assets/images/FullLogo.png"}
        alt=""
        className="profile-img rounded-circle my-4"
      />

      <h2 className="mb-5 text-center">{userName || "User Name"}</h2>

      <div className="w-100 d-flex flex-column gap-3">
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            path={item.to}
          />
        ))}
      </div>
      <NavItem
        icon="/assets/icons/signOut.svg"
        text="Logout"
        onClick={handleLogout}
      />
    </aside>
  );
};

export default Sidebar;
