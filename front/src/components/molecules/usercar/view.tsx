import { FC } from "react";
import "./styles.css";

export type NavProps = {
  title: string;
  link?: string;
  role: string;
  icon?: string;
};

export type NavItems = {
  links: ReadonlyArray<NavProps>;
  navbrand: NavProps;
};

const UserCard: FC<{}> = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <img
          src="https://i.imgur.com/fR2RIvG.jpg"
          alt=""
          className="profile-img"
        />
        <div className="content">
          <div className="sub-content">
            <h1>Roger Federer</h1>
            <span>@rogerfederer</span>
            <p>Professional tennis player</p>
            <span className="location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>Switzerland
            </span>
            <a href="http://www.rogerfederer.com/">rogerfederer.com</a>
          </div>
          <div className="data">
            <div className="inner-data">
              <span>
                <i className="fa fa-users" aria-hidden="true"></i>
              </span>
              <p>11M</p>
            </div>
            <div className="inner-data">
              <span>
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </span>
              <p>1,470</p>
            </div>
            <div className="inner-data">
              <span>
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </span>
              <p>80</p>
            </div>
          </div>
          <div className="btn">follow me</div>
        </div>
      </div>
    </div>
  );
};

export { UserCard };
