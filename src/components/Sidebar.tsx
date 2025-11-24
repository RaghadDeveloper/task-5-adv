import { navItems } from "../data/navItems";
import NavItem from "./NavItem";

const Sidebar = () => {
  const profileImg = localStorage.getItem("profile_image");
  const userName = localStorage.getItem("user_name");

  return (
    <aside className="d-flex flex-column justify-content-center align-items-center p-5">
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

      <h2 className="mb-5">{userName || "User Name"}</h2>

      <div className="w-100 d-flex flex-column gap-3 ">
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            path={item.to}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
