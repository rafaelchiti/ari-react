import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ComponentAClass, ComponentAFunctional } from "./examples/ComponentA";
import { ComponentBClass, ComponentBFunctional } from "./examples/ComponentB";
import { Pane } from "evergreen-ui";

export default function () {
  return (
    <Router>
      <Pane padding="20px">
        <Pane height="100px" display="flex" flexWrap="wrap" alignItems="center">
          <MyLink to="/">Home</MyLink>
          <Pane border="default" background="yellowTint" margin="10px">
            <MyLink to="/component-a-class">Component A class</MyLink>
            <MyLink to="/component-a-functional">Component A functional</MyLink>
          </Pane>
          <Pane border="default" margin="10px" background="yellowTint">
            <MyLink to="/component-b-class">Component B class</MyLink>
            <MyLink to="/component-b-functional">Component B functional</MyLink>
          </Pane>
        </Pane>
        <Pane
          marginTop="10px"
          elevation={1}
          padding="10px"
          border="default"
          width="500px"
          minHeight="200px"
        >
          <Switch>
            {/* A */}
            <Route path="/component-a-class">
              <ComponentAClass />
            </Route>
            <Route path="/component-a-functional">
              <ComponentAFunctional />
            </Route>
            {/* B */}
            <Route path="/component-b-class">
              <ComponentBClass />
            </Route>
            <Route path="/component-b-functional">
              <ComponentBFunctional />
            </Route>
            <Route path="/">
              Haz click en algun ejemplo
              <span role="img" aria-label="up">
                ☝️
              </span>
            </Route>
          </Switch>
        </Pane>
      </Pane>
    </Router>
  );
}

const MyLink = (props) => {
  return (
    <Pane margin="4px" padding="4px" display="inline-block">
      <Link {...props} />
    </Pane>
  );
};
