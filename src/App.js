import { React, Component } from "react";
import "./App.css";
import { isMobile } from "react-device-detect";
import Desktop from "./views/layout/Desktop/index";
import Mobile from "./views/layout/Mobile/index";

let store = require("store");
let sysInf = store.get("sys");
let srd = store.get("srd");
let campaign = store.get("campaign");
class App extends Component {

  
  renderContent = () => {
    if (isMobile) {
      console.log("rendering mobile");
      return <Mobile srd={srd} sysInf={sysInf} campaign={campaign} />;
    }
    console.log("rendering desktop");
    return <Desktop srd={srd} sysInf={sysInf} campaign={campaign} />;
  };

  componentDidMount() {
    //this.setState({isLoading: false})
  }

  render() {
    return this.renderContent();
  }
}

export default App;
