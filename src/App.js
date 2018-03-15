import React, { Component } from 'react';

import './App.css';

import GridImages from './components/GridImages'

import { Grid, Row, Col } from 'react-bootstrap';

const pages = ['בית', 'אודות', 'הדרכות', 'קבוצות']

const imgBtn1 = require('./images/family.png')
const imgBtn2 = require('./images/happy.png')
const imgBtn3 = require('./images/regular.png')
const imgBtn4 = require('./images/size.png')

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0
    }

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
              <img src={require('./images/logo.png')} alt='Logo' />
            </Col>
            <Col md={8}>
              <h1 style={{fontFamily: 'Amatic SC'}}>זה בידים שלך</h1>
            </Col>
          </Row>
          <Row style={container}>
            {
              pages.map((page, i) => {
                let btnStyle = Object.assign({}, btnWrap, {color: currentPage === i? '#A35CA5':'#272727'})
                return (
                  <div key={'head_btn_'+i} onClick={() => this.setState({currentPage: i})} style={btnStyle}>
                    <p>{page}</p>
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
    return (
      <div className="App">
        { this.renderHeader() }
        <GridImages 
        colProps={{md: 3}}
        >
          <img src={imgBtn1} style={{width: '100%', hight: '100%'}} alt='Button navigator' />
          <img src={imgBtn2} style={{width: '100%', hight: '100%'}} alt='Button navigator' />
          <img src={imgBtn3} style={{width: '100%', hight: '100%'}} alt='Button navigator' />
          <img src={imgBtn4} style={{width: '100%', hight: '100%'}} alt='Button navigator' />
        </GridImages>
        <hr />
        <p className="App-intro">
          lalalalala lala la la
        </p>
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
