import React, { Component } from 'react';

import { Route, NavLink, Switch } from 'react-router-dom'

import './App.css';

import GridImages from './components/GridImages'

import { Grid, Row, Col } from 'react-bootstrap';

import HomePage from './containers/Home'
import AboutPage from './containers/About'
import CoursesPage from './containers/Courses'
import groupsPage from './containers/Groups'

const imgBtn1 = require('./images/family.png')
const imgBtn2 = require('./images/happy.png')
const imgBtn3 = require('./images/regular.png')
const imgBtn4 = require('./images/size.png')

const pages = [
  {name: 'בית', link: 'home'},
  {name: 'אודות', link: 'about'},
  {name: 'הדרכות', link: 'courses'},
  {name: 'קבוצות', link: 'groups'}
]

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0
    }

  }

  pageChange(index) {
    this.setState({currentPage: index});
  }

  renderHeader() {
    let { topContainer, btnWrap, container } = style.header;
    let { currentPage } = this.state
    return (
      <header>
        {/*<div style={container}> */}
        <Grid>
          <Row style={topContainer}>
            <Col md={4}>
              <NavLink to='/home' style={{textDecoration: 'none'}}>
                <img src={require('./images/logo.png')} alt='Logo' />
              </NavLink>
            </Col>
            <Col md={8}>
              <h1 style={{fontFamily: 'Amatic SC'}}>זה בידים שלך</h1>
            </Col>
          </Row>
          <Row style={container}>
            {
              pages.map((page, i) => {
                let btnStyle = Object.assign({}, btnWrap)
                return (
                  <div key={'head_btn_'+i} onClick={() => this.pageChange(i)} style={btnStyle}>
                    <NavLink style={{color: currentPage === i? '#A35CA5':'#272727'}} to={page.link}>{page.name}</NavLink>
                  </div>
                  )
              })
            }
          </Row>
        </Grid>
      </header>
      )
  }

  render() {
    //console.log( this )
    return (
      <div className="App">
        { this.renderHeader() }
        <GridImages 
        colProps={{md: 3}}
        rowStyle={{display: 'flex', flexDirection: 'row-reverse'}}
        pagesName={pages.map((page) => {return page.name;})}
        pagesLinks={pages.map((page) => {return page.link;})}
        onClick={(i) => this.pageChange(i)}
        >
          <img src={imgBtn1} style={{width: '100%', hight: '100%'}} alt='Button navigator' />
          <img src={imgBtn2} style={{width: '100%', hight: '100%'}} alt='Button navigator' />
          <img src={imgBtn3} style={{width: '100%', hight: '100%'}} alt='Button navigator' />
          <img src={imgBtn4} style={{width: '100%', hight: '100%'}} alt='Button navigator' />
        </GridImages>
        <hr />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/courses" component={CoursesPage}/>
          <Route path="/groups" component={groupsPage}/>
          <Route component={HomePage}/>
        </Switch>
        <hr />
      </div>
    );
  }
}

const style = {
  header: {
    topContainer: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      borderBottom: '2px solid #5f5f5f',
    },
    container: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      marginTop: 17,
      // padding: 30
    },
    btnWrap: {
      padding: 13,
      cursor: 'pointer'
    }
  }
}

export default App;
