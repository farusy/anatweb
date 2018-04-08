import React, { Component } from 'react';

import { Route, NavLink, Switch } from 'react-router-dom'

import './App.css';
import './styles/masstyle.css'

import GridImages from './components/GridImages'
import Header from './components/Header'
import Footer from './components/Footer'

import { Grid, Row, Col } from 'react-bootstrap';

import HomePage from './containers/Home'
import AboutPage from './containers/About'
import CoursesPage from './containers/Courses'
import groupsPage from './containers/Groups'

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/courses" component={CoursesPage}/>
          <Route path="/groups" component={groupsPage}/>
          <Route component={HomePage}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
