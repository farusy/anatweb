import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/main.css';
import '../styles/LuckyWheel.css'
var FA = require('react-fontawesome');

const IconsNames = [
	"bell-o",
	"comment-o",
	"smile-o",
	"heart-o",
	"star-o",
	"lightbulb-o",
	]

export default class LuckyWheel extends Component {

	constructor(props) {
	    super(props)
	    this.onClick = this.onClick.bind(this);
	    this.secRefs = IconsNames.slice(0)

	    this.state = {
	      degree: 1800,
	      clicks: 0,
	      totalDegree: null,
	      centerSpin: false,
	    }

	}
	
	/*WHEEL SPIN FUNCTION*/
	onClick() {
		let { degree, clicks} = this.state;
		//add 1 every click
		clicks ++;
		
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		let newDegree = degree*clicks;
		let extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		let totalDegree = newDegree+extraDegree;
		
		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
		let self = this
		this.secRefs.map(function(t, i){
			//console.log("my ref : ", t );
			//return ;
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				//var aoY = t.offset().top;
				
				var aoY = t.getBoundingClientRect().top
				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
				if(aoY < 202.88) {
					self.setState({centerSpin: true})
					setTimeout(function () { 
							self.setState({centerSpin: false})
						}, 100);
				}
			}, 10);
			
			// $('#inner-wheel').css({
			// 	'transform' : 'rotate(' + totalDegree + 'deg)'			
			// });
			self.setState({ totalDegree, clicks })
		 
			//noY = t.offset().top;
			noY = t.getBoundingClientRect().top
			
		});
	}


	render() {
		let { totalDegree } = this.state;
		
		return (
			<div id="wrapper">
            
        <div id="wheel">
            <div id="inner-wheel" style={{
            	transform: 'rotate( '+totalDegree +'deg)'
            }}>
            	{
            		IconsNames.map((name, i) => {
            			return (
            				<div key={'op_'+i} className="sec" ref={(ref)=>{this.secRefs[i] = ref}}><FA name={name} /></div>
            				)
            		})
            	}
                {/*
	                <div className="sec"><FA name="bell-o" /></div>
	                <div className="sec"><FA name="comment-o" /></div>
	                <div className="sec"><FA name="smile-o" /></div>
	                <div className="sec"><FA name="heart-o" /></div>
	                <div className="sec"><FA name="star-o" /></div>
	                <div className="sec"><FA name="lightbulb-o" /></div>
            	*/}
            </div>       
           
            <div id="spin" className={this.state.centerSpin?'spin':null} onClick={this.onClick.bind(this)}>
                <div id="inner-spin"></div>
            </div>
            
            <div id="shine"></div>
        </div>
        
        
        <div id="txt"></div>
  </div>
			)
	}
}