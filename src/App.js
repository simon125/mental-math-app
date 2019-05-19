import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
import {
  Navigation,
  Home,
  LearnPlace,
  LoginForm,
  SigninForm,
  UserProfile,
  About,
  Footer
} from "./components";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <section className="components-box">
          <Route
            component={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/gym" component={LearnPlace} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/signin" component={SigninForm} />
                    <Route path="/profile" component={UserProfile} />
                    <Route path="/about" component={About} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
