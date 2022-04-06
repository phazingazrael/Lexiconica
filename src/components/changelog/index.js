import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import termsFrPath from "../changelog.md";

class ChangeLog extends Component {
  constructor(props) {
    super(props);

    this.state = { changeLog: null };
  }

  componentWillMount() {
    fetch(termsFrPath)
      .then(response => response.text())
      .then(text => {
        this.setState({ changeLog: text });
      });
  }

  render() {
    return (
      <div className="ChangeLog">
        <ReactMarkdown source={this.state.changeLog} />
      </div>
    );
  }
}

export default ChangeLog;
