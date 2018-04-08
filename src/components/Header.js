import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import GridImages from './GridImages'

import '../App.css';
import '../styles/main.css';

var FA = require('react-fontawesome')

const imgBtn1 = require('../images/family.png')
const imgBtn2 = require('../images/happy.png')
const imgBtn3 = require('../images/regular.png')
const imgBtn4 = require('../images/size.png')

const pages = [
  {name: 'בית', link: 'home', img: imgBtn1},
  {name: 'אודות', link: 'about', img: imgBtn2},
  {name: 'הדרכות', link: 'courses', img: imgBtn3},
  {name: 'קבוצות', link: 'groups', img: imgBtn4}
]

export default class Header extends Component {

	constructor(props) {
		super(props)

		this.state = {
			currentPage: 0,
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
              <Link to='/home' style={{textDecoration: 'none'}}>
                <img src={require('../images/logo.png')} alt='Logo' />
              </Link>
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
                  <Link key={'head_btn_'+i} to={page.link} onClick={() => this.pageChange(i)} style={btnStyle}>
                    <h6 style={{
                    	color: currentPage === i? '#A35CA5':'#272727',
                    	textAlign: 'center'
                    }}>{page.name}</h6>
                    <img src={page.img} style={{width: '100px', height: '100px'}} alt='Button navigator' />
                    <div className='gridImageCol' style={{height: 100}} >
                    	<p>{ page.name }</p>
						<FA name='wpexplorer' size='2x' />
                    </div>
                  </Link>
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
			<div>
				{ this.renderHeader() }
			</div>
			)
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
      margin: 13,
      cursor: 'pointer',
      position: 'relative'
      //display: 'flex',
      //justifyContent: 'center'
    }
  }
}