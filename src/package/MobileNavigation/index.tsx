import React, { useState, useEffect } from "react";
// import { Route } from 'react-router';
import "./index.scss";

export interface RouteItem {
  name: string;
  icon: string;
  path: string;
}

interface Props {
  history: any;
  routers: RouteItem[];
  default?: number;
  current?: number;
  onChange?: Function;
  activeStyle?: any;
}

const MobileNavigation: React.FC<Props> = props => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {}, []);

  useEffect(() => {
    setCurrent(current);
  }, [props.current]);

  function switchNav(index: number) {
    setCurrent(index);
    props.history.push(props.routers[index].path);
  }

  return (
    <div className="mobile-navigation-container">
      <div className="mobile-navigation-content">{props.children}</div>
      <ul className="mobile-navigation-switch-bar">
        {props.routers.map((route: RouteItem, index: number) => (
          <li
            className="mobile-navigation-switch-item"
            key={index}
            onClick={switchNav.bind(null, index)}>
            <span
              style={index === current ? props.activeStyle : {}}
              className={route.icon}
            />
            <span style={index === current ? props.activeStyle : {}}>
              {route.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

MobileNavigation.defaultProps = {
  default: 0,
  current: 0,
  activeStyle: {
    color: "#1890ff"
  }
};

export default MobileNavigation;
