import React, { Component, Fragment } from "react";
import Home from "./site/screens/home/";
import Header from "./site/components/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

export default App;
