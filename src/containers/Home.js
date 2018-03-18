import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom'

import '../App.css';

export default class Home extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}

	constructor(props) {
	    super(props)

	    this.state = {
	      currentPage: 0
	    }

	}

	render() {
		let { location } = this.props
		console.log( location )
		return (
			<div>
				{location.pathname !== '/home' && <Redirect to='/home' />}
				<h1>בית</h1>
			</div>
		)
	}

}