import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const pages = ['בית', 'אודות', 'הדרכות', 'קבוצות']

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0
    }

  }

  renderHeader() {
    let { container, btnWrap } = style.header;
    let { currentPage } = this.state
    return (
      <header className="App-header">
        <div style={container}>
          <img src={require('./images/logo.png')} style={{transform:[{translateX: -30}]}}/>
          <h1 >זה בידים שלך</h1>
        </div>
        <div style={container}>
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
        </div>
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
    container: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center'
    },
    btnWrap: {
      padding: 5,
    }
  }
}

export default App;
