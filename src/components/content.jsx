import React, { Component } from "react";
import Employees from "./employees";
class Content extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <div>
          <Employees />
        </div>
      </main>
    );
  }
}

export default Content;
