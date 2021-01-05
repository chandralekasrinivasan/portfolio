import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./index.css";


function App() {
  return (
    <Router>
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
              <Sidebar />
        </div>
          <div className="col-lg-9 app_main-content">
            <Navbar />
            <Route render ={({location}) => (
              <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames='fade'>
              <Switch location={location}>
              <Route exact path="/aboutme" component={AboutMe} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/projects" component={Projects} />
              <Route>
                <Redirect to="/aboutme"/>
              </Route>
              </Switch>
              </CSSTransition>
              </TransitionGroup>
            )} />
        </div>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;