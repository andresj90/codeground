import { FC } from "react";
import { NavBar, NavItems } from "./view";
import navbar from "./navbar.json";

const NavigationBar: FC = () => {
  const data: NavItems = navbar;
  console.log(data);
  return !data ? <h1>Error</h1> : <NavBar {...data} />;
};

export { NavigationBar };
