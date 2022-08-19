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
  state = {
    data: null,
  };

  renderContent = () => {
    if (isMobile) {
      return <Mobile srd={srd} sysInf={sysInf} campaign={campaign} />;
    }
    return <Desktop srd={srd} sysInf={sysInf} campaign={campaign} />;
  };

  componentDidMount() {
   /*  this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err)); */
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    /* const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body; */
  };

  render() {
    return this.renderContent();
  }
}

export default App;
