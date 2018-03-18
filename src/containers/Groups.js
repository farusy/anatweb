import React, { Component } from 'react';

import '../App.css';

export default class Groups extends Component {

	constructor(props) {
	    super(props)

	    this.state = {
	      currentPage: 0
	    }

	}

	render() {
		return (
			<div>
				<h1>קבוצות</h1>
			</div>
		)
	}

}