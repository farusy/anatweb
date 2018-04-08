import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import GridImages from './GridImages'

import '../App.css';
import '../styles/main.css';
import '../styles/masstyle.css'

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

export default class Footer extends Component {

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
      <footer className='footer'>
        <Grid>
          <Row style={topContainer}>
          </Row>
        </Grid>
        
      </footer>
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
      borderTop: '2px solid #5f5f5f',
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