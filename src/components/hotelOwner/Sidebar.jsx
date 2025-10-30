import React from "react";
import { assets } from "../../imp/images/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="w-20 md:w-64 bg-white border-r border-gray-200 h-full flex flex-col pt-6 shadow-sm">
      <h1 className="text-center text-lg font-semibold text-blue-600 hidden md:block mb-6">
        QuickStay
      </h1>

      {sidebarLinks.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          end
          className={({ isActive }) =>
            `flex items-center gap-3 py-3 px-4 md:px-6 text-sm font-medium rounded-r-full transition-colors duration-200 
            ${isActive
              ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
              : "text-gray-700 hover:bg-gray-100"}`
          }
        >
          <img src={item.icon} alt={item.name} className="w-5 h-5" />
          <span className="hidden md:inline">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
