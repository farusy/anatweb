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
		return (
			<div className='container'>
				{location.pathname !== '/home' && <Redirect to='/home' />}
				<div style={style.textImgWrap}>
					<p>
						הורות הוא תהליך דינמי. אחת התכונות הנדרשות היא הגמישות: הילדים משתנים כל הזמן, מערכת היחסים מושפעת מאותם שינויים ומשתנה אף היא, תנאי החיים מסביב למשפחה משתנים אף הם ושוב נדרשות התאמות חדשות. מערכת החינוך דורשת מהמשפחה להתאים את עצמה לדרישותיה ועוד.
						<br/>
						הורים מתבגרים- היא אותה תופעה חוזרת ונשנית של התגמשות פנימית אצל ההורים, בהתאם לשינויים שמתרחשים במשפחה. מול כל אתגר נדרשים ההורים לעשות הערכת מצב ולהחליט בהתאם לעולם הערכים שלהם מה תהיה התגובה –האם להגמיש את עצמם או אולי לעמוד דווקא על עקרונותיהם.
					</p>
					<img src={require('../images/mona-lisa.png')} />
				</div>
			</div>
		)
	}

}

const style = {
	textImgWrap: {
		display: 'flex',
		flexDirection: 'row-reverse',
	}
}