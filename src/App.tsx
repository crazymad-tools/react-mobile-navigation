import React from "react";
import MobileNavigation, { RouteItem } from "./package/MobileNavigation";
import history from "./package/history";
import { Router, Route } from "react-router";

const routers = [
  {
    name: "概览",
    icon: "iconfont antd-icon-star-fill",
    path: "/overview"
  },
  {
    name: "报表",
    icon: "iconfont antd-icon-bulb-fill",
    path: "/detail"
  },
  {
    name: "分享",
    icon: "iconfont antd-icon-share",
    path: "/share"
  },
  {
    name: "二维码",
    icon: "iconfont antd-icon-qrcode",
    path: "/qrcode"
  }
];

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Router history={history}>
        <MobileNavigation routers={routers} history={history}>
          {routers.map((router: RouteItem, index: number) => (
            <Route
              key={index}
              component={function() {
                return <div>{router.name}</div>;
              }}
              path={router.path}
            />
          ))}
        </MobileNavigation>
      </Router>
    </div>
  );
}

export default App;
