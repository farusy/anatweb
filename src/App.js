import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid, Row, Col } from 'react-bootstrap';

const pages = ['בית', 'אודות', 'הדרכות', 'קבוצות']

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
              <img src={require('./images/logo.png')} />
            </Col>
            <Col md={8}>
              <h1 style={{fontFamily: 'Amatic SC'}}>זה בידים שלך</h1>
            </Col>
          </Row>
          <Row style={container}>
            {
              pages.map((page, i) => {
                let btnStyle = Object.assign({}, btnWrap, {color: currentPage == i? '#A35CA5':'#272727'})
                return (
                  <div onClick={() => this.setState({currentPage: i})} style={btnStyle}>
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
        <p className="App-intro">
          I got started already.. 
        </p>
        <p> Now for navigation</p>
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
