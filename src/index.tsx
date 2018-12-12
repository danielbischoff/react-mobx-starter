import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { App } from "./App";
import { ApplicationStore } from "./stores";

const applicationStore = new ApplicationStore();

const renderApp = (root: Element, App: React.ComponentClass) => {
  ReactDOM.render(
    <Provider store={applicationStore}>
      <App />
    </Provider>,
    root
  );
};

const root = document.getElementById("root");
renderApp(root, App);

if (module.hot) {
  module.hot.accept("./App", function() {
    const NewApp = require("./App").App;
    renderApp(root, NewApp);
  });
}
