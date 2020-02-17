import React from "react";

interface Props {
  title: string;
  back?: boolean;
    backCB?: Function;
  component?: any;
}

const MobileNavigationHeader: React.FC<Props> = props => {
  function goBack () {
  }

  return (
    <div className="mobile-navigation-header">
      {props.back ? (
        <span className="header-back-btn iconfont antd-icon-left" onClick={goBack} />
      ) : (
        <span></span>
      )}
      <span className="mobile-navigation-title">{props.title}</span>
      {props.component ? props.component : <span></span>}
    </div>
  );
};

export default MobileNavigationHeader;
