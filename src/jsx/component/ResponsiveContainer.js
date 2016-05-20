import React, { Component } from 'react';

export class ResponsiveContainer extends Component {
	render() {
		return (
			<div className="responsive-container">
			   {this.props.children}
			</div>
		);
	}
}
