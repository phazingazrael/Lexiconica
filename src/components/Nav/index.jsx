import React from "react";
import "./index.css";

import { isMobile } from "react-device-detect";

import DeskNav from "./desktop";
import MobileNav from "./mobile";

function Nav(props) {
  console.log(props.sysInf);
  let SysInf = props.sysInf;
  let srd = props.srd;
  let campaign = props.campaign;
  console.log("this is the nav index");
  console.log(SysInf);
  console.log(srd);
  console.log(campaign);

  let renderContent = () => {
    if (isMobile) {
      return <MobileNav sysInf={SysInf} srd={srd} campaign={campaign} />;
    }
    return <DeskNav sysInf={SysInf} srd={srd} campaign={campaign} />;
  };

  return renderContent();
}

export default Nav;
