import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';

import '../App.css';
import '../styles/main.css';

var FontAwesome = require('react-fontawesome');

export default class GridImages extends Component {

	constructor(props) {
		super(props)

		this.state = {
			currentPage: 0,
		}
	}
	onMouseEnter(i) {

	}
	onMouseLeave(i) {

	}

	renderImage(element, i) {
		let { colStyle, colProps } = this.props
		colStyle.position = 'relative'
		return (
			<Col key={'child_'+i} 
			style={colStyle}
			// onMouseEnter={() => this.onMouseEnter(i)} 
			// onMouseLeave={() => this.onMouseLeave(i)}
			{...colProps}>
				<FontAwesome name='wpexplorer' size='3x' spin style={{color: '#000'}} />
				{ element }
				<div style={styles.absolute}
					className='gridImageCol'>
					<FontAwesome name='wpexplorer' size='3x' spin style={{color: '#fff'}} />
				</div>
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
		justifyContent: 'center',
		alignItems: 'center'
	}
}

GridImages.propTypes = {
	colStyle: PropTypes.object,
	rowStyle: PropTypes.object,
	gridStyle: PropTypes.object,
	colProps: PropTypes.object,
}

GridImages.defaultProps = {
	colStyle: {},
	rowStyle: {},
	gridStyle: {},
	colProps: {},
}