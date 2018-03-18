import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

import '../App.css';
import '../styles/main.css';

var FA = require('react-fontawesome')

export default class GridImages extends Component {

	constructor(props) {
		super(props)

		this.state = {
			currentPage: 0,
		}
	}

	renderImage(element, i) {
		let { colStyle, colProps, pagesName, pagesLinks, onClick } = this.props
		// colStyle.position = 'relative'
		return (
			<Col key={'child_'+i} 
			style={Object.assign({}, colStyle, {position: 'relative'})}
			// onMouseEnter={() => this.onMouseEnter(i)} 
			// onMouseLeave={() => this.onMouseLeave(i)}
			{...colProps}>
				{/* <FontAwesome name='wpexplorer' size='3x' spin style={{color: '#000'}} /> */}
				{ element }
				<NavLink to={pagesLinks?pagesLinks[i]:''} style={styles.absolute} onClick={() => onClick(i)}
					className='gridImageCol'>
					<p >{ pagesName && pagesName[i] }</p>
					<FA name='wpexplorer' size='3x' // wpexplorer
					/>
				</NavLink>
			</Col>
		)
	}

	render() {
		const { gridStyle, rowStyle, children } = this.props
		return (
			<Grid style={gridStyle}>
				<Row style={rowStyle}>
					{ children.map(this.renderImage.bind(this)) }
				</Row>
			</Grid>
		)
	}
}

const styles = {
	absolute: {
		position: 'absolute',
		top: 0, bottom: 0, right: 0, left: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: "none",
	}
}

GridImages.propTypes = {
	colStyle: PropTypes.object,
	rowStyle: PropTypes.object,
	gridStyle: PropTypes.object,
	colProps: PropTypes.object,
	onClick: PropTypes.func,
}

GridImages.defaultProps = {
	colStyle: {},
	rowStyle: {},
	gridStyle: {},
	colProps: {},
	onClick: ()=>{},
}