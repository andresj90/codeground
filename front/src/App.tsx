import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./components/organisms/navbar/index";
import { Home } from "./components/pages/home/index";
import { About } from "./components/pages/about/index";
import { SideBar } from "./components/organisms/sidebar/index";
import './style.css'

export default function App() {
  return (
    <div className="app_main">
      <div className="app_header">
        <NavigationBar />
      </div>
      <div className="app_body">
        <div className="app_sidebar">
          <SideBar/>
        </div>  
        <div className="spa_container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="app_footer"></div>
    </div>
  );
}
