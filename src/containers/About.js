import React, { Component } from 'react';

import '../App.css';

import LuckyWheel from '../components/LuckyWheel'

export default class About extends Component {

	constructor(props) {
	    super(props)

	    this.state = {
	      currentPage: 0
	    }

	}

	render() {
		return (
			<div>
				<h1>אודות</h1>
				<LuckyWheel />
			</div>
		)
	}

}