import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ComponentAClass, ComponentAFunctional } from "./examples/ComponentA";
import { ComponentBClass, ComponentBFunctional } from "./examples/ComponentB";
import { ComponentCClass, ComponentCFunctional } from "./examples/ComponentC";
import { ComponentDClass, ComponentDFunctional } from "./examples/ComponentD";
import { ComponentEClass, ComponentEFunctional } from "./examples/ComponentE";

import Box from "./Box";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

export default function () {
  return (
    <ThemeProvider theme={{ theme }}>
      <Router>
        <Box padding="4">
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
          >
            <MyLink to="/">Home</MyLink>

            <MyLink to="/component-a-class">Component A class</MyLink>
            <MyLink to="/component-a-functional">Component A functional</MyLink>
            <MyLink to="/component-b-class">Component B class</MyLink>
            <MyLink to="/component-b-functional">Component B functional</MyLink>
            <MyLink to="/component-c-class">Component C class</MyLink>
            <MyLink to="/component-c-functional">Component C functional</MyLink>
            <MyLink to="/component-d-class">Component D class</MyLink>
            <MyLink to="/component-d-functional">Component D functional</MyLink>
            <MyLink to="/component-e-class">Component E class</MyLink>
            <MyLink to="/component-e-functional">Component E functional</MyLink>
          </Box>
          <Box
            marginTop="20px"
            padding="2"
            width="500px"
            minHeight="200px"
            border="1px solid"
            borderColor="primary"
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
              <Route path="/component-c-class">
                <ComponentCClass />
              </Route>
              <Route path="/component-c-functional">
                <ComponentCFunctional />
              </Route>
              <Route path="/component-d-class">
                <ComponentDClass />
              </Route>
              <Route path="/component-d-functional">
                <ComponentDFunctional />
              </Route>
              <Route path="/component-e-class">
                <ComponentEClass />
              </Route>
              <Route path="/component-e-functional">
                <ComponentEFunctional />
              </Route>
              <Route path="/">
                Haz click en algun ejemplo
                <span role="img" aria-label="up">
                  ☝️
                </span>
              </Route>
            </Switch>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

const MyLink = (props) => {
  return (
    <Box margin="1" padding="1">
      <Link {...props} />
    </Box>
  );
};
