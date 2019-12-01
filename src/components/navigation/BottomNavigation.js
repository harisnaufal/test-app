import React from "react";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  const [menus] = React.useState([
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Feed",
      route: "/"
    },
    {
      name: "Cart",
      route: "/"
    },
    {
      name: "Profile",
      route: "/profile"
    }
  ]);
  return (
    <div className="bottom-navigation">
      {menus.map((menu, index) => (
        <div className="bottom-navigation--menu" key={index}>
          <Link to={menu.route}>{menu.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
