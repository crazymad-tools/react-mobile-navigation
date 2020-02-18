import React from "react";
import { useHistory } from "../history";
const leftIcon = require('../icons/left.svg') as string;

interface Props {
  title: string;
  back?: boolean;
  backCB?: Function;
  component?: any;
}

const MobileNavigationHeader: React.FC<Props> = props => {
  const { history } = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <div className="mobile-navigation-header">
      {props.back ? (
        <img src={leftIcon} width="20" height="20" onClick={goBack} />
      ) : (
        <span></span>
      )}
      <span className="mobile-navigation-title">{props.title}</span>
      {props.component ? props.component : <span></span>}
    </div>
  );
};

export default MobileNavigationHeader;
